import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanState,loadState,progress,budget,toUAH,priceRows,priceTable,channelBest,channelTotals} from '../src/state.js';
import {stages,bom} from '../src/data.js';
import {vendors,offers,channels,searchUrl,fxDefault} from '../src/vendors.js';
test('corrupt/blocked storage starts clean',()=>{assert.deepEqual(loadState({getItem:()=>'{broken'}).checks,{});assert.deepEqual(loadState({getItem:()=>{throw Error();}}).checks,{});});
test('imports do not accept fake checks or negative prices',()=>{const s=cleanState({checks:{real:true,bogus:'true'},prices:{negative:-2,unknown:null,zero:0,valid:10},notes:{a:'a'.repeat(15000),b:13}});assert.deepEqual(s.checks,{real:true});assert.deepEqual(s.prices,{zero:0,valid:10});assert.equal(s.notes.a.length,12000);assert.equal(s.notes.b,undefined);});
test('budget counts quantities and treats missing differently from free',()=>{assert.deepEqual(budget([{id:'switch',qty:8},{id:'free',qty:1},{id:'unknown',qty:1}],{switch:30,free:0},{switch:true}),{total:240,remaining:0,unknown:1});});
test('progress ignores unknown ids',()=>{assert.deepEqual(progress([{id:'a',checks:['one','two']}],{'a-0':true,'fake':true}),{done:1,total:2});});
test('content has unique stable ids and no zero board in active BOM',()=>{assert.equal(new Set(stages.map(x=>x.id)).size,stages.length);assert.equal(new Set(bom.map(x=>x.id)).size,bom.length);assert.equal(bom.some(x=>/Zero/.test(x.name)),false);assert.equal(stages.length,9);assert.ok(stages.every(s=>s.steps.length>=4&&s.checks.length>=3));});
test('import sanitises quotes, picks and exchange rate',()=>{const s=cleanState({quotes:{'teensy@ali':900,'bad@vendor':-5,'nan@vendor':'700'},picks:{teensy:'ali',broken:9},fx:0});assert.deepEqual(s.quotes,{'teensy@ali':900});assert.deepEqual(s.picks,{teensy:'ali'});assert.equal(s.fx,fxDefault);assert.equal(cleanState({fx:41.5}).fx,41.5);});
test('currency conversion keeps UAH and converts USD by the given rate',()=>{assert.equal(toUAH(10,'UAH',44),10);assert.equal(toUAH(10,'USD',44),440);assert.equal(toUAH(null,'USD',44),null);});
test('confirmed quote overrides the orientation range and wins the channel',()=>{
 const vs=[{id:'ua1',channel:'ua'},{id:'ua2',channel:'ua'},{id:'cn1',channel:'cn'}];
 const os=[{bom:'x',vendor:'ua1',low:100,high:300,unit:'UAH'},{bom:'x',vendor:'ua2',low:150,high:170,unit:'UAH'},{bom:'x',vendor:'cn1',low:1,high:3,unit:'USD'}];
 const plain=priceRows('x',os,vs,{},50);
 assert.equal(channelBest(plain,'ua').vendor.id,'ua2');// 160 < 200
 assert.equal(channelBest(plain,'cn').value,100);// (1+3)/2 * 50
 const quoted=priceRows('x',os,vs,{'x@ua1':90},50);
 assert.equal(channelBest(quoted,'ua').vendor.id,'ua1');
 assert.equal(channelBest(quoted,'ua').confirmed,true);
 assert.equal(channelBest(quoted,'ua').rawLow,100);// вихідна валюта не губиться
});
test('channel totals multiply by quantity, skip owned parts and count gaps',()=>{
 const vs=[{id:'ua1',channel:'ua'},{id:'cn1',channel:'cn'}];
 const items=[{id:'a',qty:8},{id:'b',qty:1},{id:'c',qty:2}];
 const os=[{bom:'a',vendor:'ua1',low:10,high:10,unit:'UAH'},{bom:'a',vendor:'cn1',low:1,high:1,unit:'USD'},{bom:'b',vendor:'ua1',low:500,high:500,unit:'UAH'}];
 const table=priceTable(items,os,vs,{},4);
 assert.equal(channelTotals(table,'ua').sum,580);
 assert.deepEqual(channelTotals(table,'cn'),{sum:32,items:1,missing:2});
 assert.equal(channelTotals(table,'best').sum,532);// 8×4 з Ali + 500 з UA
 assert.equal(channelTotals(table,'ua',{b:true}).sum,80);
 assert.equal(table[2].best,null);
});
test('price database stays linked to the BOM and keeps both channels per part',()=>{
 const ids=new Set(bom.map(b=>b.id)),vendorIds=new Set(vendors.map(v=>v.id)),channelIds=new Set(channels.map(c=>c.id));
 assert.ok(offers.every(o=>ids.has(o.bom)),'кожна пропозиція прив’язана до позиції BOM');
 assert.ok(offers.every(o=>vendorIds.has(o.vendor)),'кожна пропозиція має відомого вендора');
 assert.ok(vendors.every(v=>channelIds.has(v.channel)),'кожен вендор належить каналу');
 assert.ok(offers.every(o=>o.low>0&&o.high>=o.low&&['UAH','USD'].includes(o.unit)),'діапазони додатні та впорядковані');
 assert.equal(new Set(offers.map(o=>o.bom+'@'+o.vendor)).size,offers.length);
 for(const b of bom){const rows=priceRows(b.id,offers,vendors,{},fxDefault);
  assert.ok(rows.some(r=>r.channel==='ua'),b.id+': потрібна пропозиція з України');
  assert.ok(rows.some(r=>r.channel==='cn'),b.id+': потрібна пропозиція з AliExpress');}
});
test('vendor search links are absolute and carry the query',()=>{
 assert.ok(searchUrl(vendors.find(v=>v.id==='ali'),'Teensy 4.1').includes('Teensy%204.1'));
 assert.ok(searchUrl(vendors.find(v=>v.id==='imrad'),'Raspberry Pi').includes('imrad.com.ua'));
 assert.ok(vendors.every(v=>/^https:\/\//.test(searchUrl(v,'test'))));
});
