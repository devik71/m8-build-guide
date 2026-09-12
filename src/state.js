import {fxDefault} from './vendors.js';
export const STORAGE_KEY='m8-build-v1';
const numberMap=(x,max)=>Object.fromEntries(Object.entries(x && typeof x==='object'?x:{}).filter(([k,n])=>k.length<100 && Number.isFinite(n) && n>=0 && n<=max));
export function cleanState(value) {
 const v=value && typeof value==='object' ? value : {};
 const boolMap=x=>Object.fromEntries(Object.entries(x && typeof x==='object'?x:{}).filter(([k,v])=>k.length<100 && typeof v==='boolean'));
 const stringMap=x=>Object.fromEntries(Object.entries(x && typeof x==='object'?x:{}).filter(([k,v])=>k.length<100 && typeof v==='string').map(([k,v])=>[k,v.slice(0,12000)]));
 const prices=numberMap(v.prices,10000000);
 const quotes=numberMap(v.quotes,10000000);
 const fx=Number.isFinite(v.fx) && v.fx>0 && v.fx<=1000 ? v.fx : fxDefault;
 return {checks:boolMap(v.checks),owned:boolMap(v.owned),notes:stringMap(v.notes),prices,quotes,picks:stringMap(v.picks),fx,quoteDate:typeof v.quoteDate==='string'?v.quoteDate.slice(0,10):new Date().toISOString().slice(0,10)};
}
export function loadState(storage) {try{return cleanState(JSON.parse(storage.getItem(STORAGE_KEY)||'{}'));}catch{return cleanState({});}}
export function progress(stages,checks) {const ids=stages.flatMap(s=>s.checks.map((_,i)=>`${s.id}-${i}`)); return {done:ids.filter(id=>checks[id]).length,total:ids.length};}
export function budget(items,prices,owned) {return items.reduce((a,item)=>{const price=prices[item.id]; if(price===undefined){a.unknown++;return a;}a.total+=price*item.qty;if(!owned[item.id])a.remaining+=price*item.qty;return a;},{total:0,remaining:0,unknown:0});}
export function download(name,text,type='text/plain;charset=utf-8') {const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}

// --- БД цін: перерахунок, порівняння каналів і зв’язок із BOM ---
export const quoteKey=(bomId,vendorId)=>`${bomId}@${vendorId}`;
export const toUAH=(amount,unit,fx)=>amount===null||amount===undefined?null:unit==='UAH'?amount:amount*fx;
// Рядок порівняння для однієї пропозиції. own — підтверджена користувачем ціна в UAH, вона перекриває діапазон.
export function offerRow(offer,vendors,quotes,fx) {
 const vendor=vendors.find(v=>v.id===offer.vendor);
 const key=quoteKey(offer.bom,offer.vendor),own=quotes[key];
 const low=toUAH(offer.low,offer.unit,fx),high=toUAH(offer.high,offer.unit,fx);
 const mid=low===null||high===null?null:(low+high)/2;
 const confirmed=own!==undefined;
 return {...offer,vendor,channel:vendor?.channel,key,own,rawLow:offer.low,rawHigh:offer.high,low,high,mid,confirmed,value:confirmed?own:mid};
}
// Порядок рядків = порядок у БД: він стабільний, поки користувач вписує свої ціни. Найдешевше шукає channelBest.
export function priceRows(bomId,offers,vendors,quotes,fx) {return offers.filter(o=>o.bom===bomId).map(o=>offerRow(o,vendors,quotes,fx));}
export function channelBest(rows,channel) {return rows.filter(r=>r.channel===channel && r.value!==null && r.value!==undefined).sort((a,b)=>a.value-b.value)[0]||null;}
// Таблиця порівняння по всьому BOM: для кожної позиції — найкраща пропозиція в кожному каналі.
export function priceTable(items,offers,vendors,quotes,fx) {
 return items.map(item=>{
  const rows=priceRows(item.id,offers,vendors,quotes,fx);
  const ua=channelBest(rows,'ua'),cn=channelBest(rows,'cn'),global=channelBest(rows,'global');
  const best=[ua,cn,global].filter(Boolean).sort((a,b)=>a.value-b.value)[0]||null;
  const delta=ua&&cn&&ua.value>0?(cn.value-ua.value)/ua.value:null;
  return {item,rows,ua,cn,global,best,delta};
 });
}
// Сума комплекту по каналу з урахуванням кількості. skip — позиції, які вже є.
export function channelTotals(table,channel,owned={}) {
 return table.reduce((a,row)=>{
  if(owned[row.item.id])return a;
  const pick=channel==='best'?row.best:row[channel];
  if(!pick){a.missing++;return a;}
  a.sum+=pick.value*row.item.qty;a.items++;
  return a;
 },{sum:0,items:0,missing:0});
}
