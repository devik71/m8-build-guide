export const STORAGE_KEY='m8-build-v1';
export function cleanState(value) {
 const v=value && typeof value==='object' ? value : {};
 const boolMap=x=>Object.fromEntries(Object.entries(x && typeof x==='object'?x:{}).filter(([k,v])=>k.length<100 && typeof v==='boolean'));
 const stringMap=x=>Object.fromEntries(Object.entries(x && typeof x==='object'?x:{}).filter(([k,v])=>k.length<100 && typeof v==='string').map(([k,v])=>[k,v.slice(0,12000)]));
 const prices=Object.fromEntries(Object.entries(v.prices||{}).filter(([k,n])=>k.length<100 && Number.isFinite(n) && n>=0 && n<=10000000));
 return {checks:boolMap(v.checks),owned:boolMap(v.owned),notes:stringMap(v.notes),prices,quoteDate:typeof v.quoteDate==='string'?v.quoteDate.slice(0,10):new Date().toISOString().slice(0,10)};
}
export function loadState(storage) {try{return cleanState(JSON.parse(storage.getItem(STORAGE_KEY)||'{}'));}catch{return cleanState({});}}
export function progress(stages,checks) {const ids=stages.flatMap(s=>s.checks.map((_,i)=>`${s.id}-${i}`)); return {done:ids.filter(id=>checks[id]).length,total:ids.length};}
export function budget(items,prices,owned) {return items.reduce((a,item)=>{const price=prices[item.id]; if(price===undefined){a.unknown++;return a;}a.total+=price*item.qty;if(!owned[item.id])a.remaining+=price*item.qty;return a;},{total:0,remaining:0,unknown:0});}
export function download(name,text,type='text/plain;charset=utf-8') {const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
