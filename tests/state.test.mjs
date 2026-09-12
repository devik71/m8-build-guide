import test from 'node:test';
import assert from 'node:assert/strict';
import {cleanState,loadState,progress,budget} from '../src/state.js';
import {stages,bom} from '../src/data.js';
test('corrupt/blocked storage starts clean',()=>{assert.deepEqual(loadState({getItem:()=>'{broken'}).checks,{});assert.deepEqual(loadState({getItem:()=>{throw Error();}}).checks,{});});
test('imports do not accept fake checks or negative prices',()=>{const s=cleanState({checks:{real:true,bogus:'true'},prices:{negative:-2,unknown:null,zero:0,valid:10},notes:{a:'a'.repeat(15000),b:13}});assert.deepEqual(s.checks,{real:true});assert.deepEqual(s.prices,{zero:0,valid:10});assert.equal(s.notes.a.length,12000);assert.equal(s.notes.b,undefined);});
test('budget counts quantities and treats missing differently from free',()=>{assert.deepEqual(budget([{id:'switch',qty:8},{id:'free',qty:1},{id:'unknown',qty:1}],{switch:30,free:0},{switch:true}),{total:240,remaining:0,unknown:1});});
test('progress ignores unknown ids',()=>{assert.deepEqual(progress([{id:'a',checks:['one','two']}],{'a-0':true,'fake':true}),{done:1,total:2});});
test('content has unique stable ids and no zero board in active BOM',()=>{assert.equal(new Set(stages.map(x=>x.id)).size,stages.length);assert.equal(new Set(bom.map(x=>x.id)).size,bom.length);assert.equal(bom.some(x=>/Zero/.test(x.name)),false);assert.equal(stages.length,9);assert.ok(stages.every(s=>s.steps.length>=4&&s.checks.length>=3));});
