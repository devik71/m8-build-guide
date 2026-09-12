import fs from 'node:fs';
import {bom,stages,sources,sourceLink} from '../src/data.js';
import {vendors,offers,channels,channelById,searchUrl,pricedAt,fxDefault} from '../src/vendors.js';
import {priceTable,channelTotals} from '../src/state.js';
fs.mkdirSync('docs',{recursive:true});
const safe=s=>String(s).replaceAll('|','/');
fs.writeFileSync('docs/bom.md','# Робочий BOM\n\nЗгенеровано із src/data.js. Ціни відсутні до перевірки пропозицій продавців; валюта власного бюджету в UI — UAH. Доставка окремо. Орієнтири ринку та порівняння UA / AliExpress — у [БД цін](prices.md). start = перший запуск; mvp = додаток для портативного MVP; battery = розширення. Точні невідомі SKU не видаються за підтверджені.\n\n| Деталь | К-сть | Виробник / part | Етап | Інтерфейс / напруга | Габарити | Статус | Джерело |\n|---|---:|---|---|---|---|---|---|\n'+bom.map(b=>`| ${safe(b.name)} | ${b.qty} | ${safe(b.maker+' / '+b.part)} | ${b.group} | ${safe(b.spec)} | ${safe(b.size)} | ${b.status} | [джерело](${b.url}) |`).join('\n')+'\n\n'+bom.map(b=>'## '+b.name+'\n\n'+b.note+'\n').join('\n'));
fs.writeFileSync('docs/setup.md','# Покрокове складання\n\nЗгенеровано із src/data.js. Апаратна процедура не пройдена нами. Відкриті рішення й перевірки позначені в кожному етапі.\n\n'+stages.map((s,i)=>`## ${i+1}. ${s.title}\n\n${s.summary}\n\n${s.steps.map(([t,p],j)=>`${j+1}. **${t}.** ${p}`).join('\n\n')}\n\n${s.code?'```sh\n'+s.code+'\n```\n\n':''}**Зверни увагу:** ${s.caution}\n\n${s.checks.map(c=>'- [ ] '+c).join('\n')}\n\nРезультат / наступна дія: ${s.result}\n\n[Першоджерело](${sourceLink(s.source,s.source==='docs'?'docs/M8HeadlessSetup.md':'README.md')})\n`).join('\n'));

// БД цін: порівняння каналів постачання. Діапазони — орієнтир ринку, не котирування продавця.
const table=priceTable(bom,offers,vendors,{},fxDefault);
const uah=n=>n===null||n===undefined?'—':Math.round(n).toLocaleString('uk-UA');
const best=r=>r?`${uah(r.low)}–${uah(r.high)} ₴ · ${safe(r.vendor.name)}`:'—';
const totals=[['Усе в Україні','ua'],['Усе з AliExpress','cn'],['Найдешевший мікс','best']].map(([label,id])=>{const t=channelTotals(table,id);return `| ${label} | ${uah(t.sum)} ₴ | ${t.items} | ${t.missing} |`;}).join('\n');
fs.writeFileSync('docs/prices.md','# БД цін: Україна ↔ AliExpress\n\n'
 +`Згенеровано із src/vendors.js і прив’язано до [BOM](bom.md) за id позиції. Діапазони — **орієнтир ринку станом на ${pricedAt}**, а не пропозиції продавців і не котирування: вони показують порядок цін і різницю між каналами. Перерахунок за курсом ${fxDefault} ₴/$ (у вебпосібнику курс редагується). Мито, доставка й комісія платіжної системи не входять у діапазони. Свої підтверджені ціни вводиш у розділі «Ціни та вендори» — вони перекривають орієнтир.\n\n`
 +'## Канали постачання\n\n'+channels.map(c=>`- **${c.name} (${c.short}).** ${c.note}`).join('\n')
 +'\n\n## Підсумок комплекту\n\n| Сценарій | Сума за орієнтиром | Позицій у сумі | Без пропозиції |\n|---|---:|---:|---:|\n'+totals
 +'\n\n## Порівняння по позиціях\n\n| Деталь | К-сть | UA · найкраще | ALI · найкраще | OEM | Δ ALI до UA |\n|---|---:|---|---|---|---:|\n'
 +table.map(r=>`| ${safe(r.item.name)} | ${r.item.qty} | ${best(r.ua)} | ${best(r.cn)} | ${best(r.global)} | ${r.delta===null?'—':(r.delta<0?'−':'+')+Math.abs(Math.round(r.delta*100))+' %'} |`).join('\n')
 +'\n\n## Пропозиції по вендорах\n\n'
 +table.map(r=>`### ${r.item.name}\n\n| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |\n|---|---|---:|---|---|\n`
   +r.rows.map(o=>`| ${safe(o.vendor.name)} | ${channelById(o.channel).short} | ${uah(o.low)}–${uah(o.high)} | ${o.rawLow}–${o.rawHigh} ${o.unit} | [запит](${searchUrl(o.vendor,o.q)}) |`).join('\n')
   +'\n\n'+r.rows.map(o=>`- **${o.vendor.name}.** ${o.note}${o.warn?` ⚠️ ${o.warn}`:''}`).join('\n')+'\n').join('\n')
 +'\n## Вендори\n\n| Вендор | Канал | Термін | Доставка | Мито | Сильні позиції |\n|---|---|---|---|---|---|\n'
 +vendors.map(v=>`| [${safe(v.name)}](${v.url}) | ${channelById(v.channel).short} | ${safe(v.lead)} | ${safe(v.ship)} | ${safe(v.duty)} | ${safe(v.strong)} |`).join('\n')
 +'\n\n'+vendors.map(v=>`- **${v.name} — на що дивитись.** ${v.risk}`).join('\n')+'\n');

fs.mkdirSync('public/docs',{recursive:true});for(const file of fs.readdirSync('docs'))if(file.endsWith('.md'))fs.copyFileSync('docs/'+file,'public/docs/'+file);
fs.writeFileSync('public/docs/sources.json',JSON.stringify({reviewed:'2026-09-13',sources},null,2));
fs.writeFileSync('public/docs/prices.json',JSON.stringify({pricedAt,fxDefault,note:'Орієнтир ринку, не котирування продавця.',channels,vendors,offers},null,2));
console.log('BOM, setup, price database and public documentation updated.');
