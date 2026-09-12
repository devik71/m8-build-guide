import fs from 'node:fs';
import {bom,stages,sources,sourceLink} from '../src/data.js';
fs.mkdirSync('docs',{recursive:true});
const safe=s=>String(s).replaceAll('|','/');
fs.writeFileSync('docs/bom.md','# Робочий BOM\n\nЗгенеровано із src/data.js. Ціни відсутні до перевірки пропозицій продавців; валюта власного бюджету в UI — UAH. Доставка окремо. start = перший запуск; mvp = додаток для портативного MVP; battery = розширення. Точні невідомі SKU не видаються за підтверджені.\n\n| Деталь | К-сть | Виробник / part | Етап | Інтерфейс / напруга | Габарити | Статус | Джерело |\n|---|---:|---|---|---|---|---|---|\n'+bom.map(b=>`| ${safe(b.name)} | ${b.qty} | ${safe(b.maker+' / '+b.part)} | ${b.group} | ${safe(b.spec)} | ${safe(b.size)} | ${b.status} | [джерело](${b.url}) |`).join('\n')+'\n\n'+bom.map(b=>'## '+b.name+'\n\n'+b.note+'\n').join('\n'));
fs.writeFileSync('docs/setup.md','# Покрокове складання\n\nЗгенеровано із src/data.js. Апаратна процедура не пройдена нами. Відкриті рішення й перевірки позначені в кожному етапі.\n\n'+stages.map((s,i)=>`## ${i+1}. ${s.title}\n\n${s.summary}\n\n${s.steps.map(([t,p],j)=>`${j+1}. **${t}.** ${p}`).join('\n\n')}\n\n${s.code?'```sh\n'+s.code+'\n```\n\n':''}**Зверни увагу:** ${s.caution}\n\n${s.checks.map(c=>'- [ ] '+c).join('\n')}\n\nРезультат / наступна дія: ${s.result}\n\n[Першоджерело](${sourceLink(s.source,s.source==='docs'?'docs/M8HeadlessSetup.md':'README.md')})\n`).join('\n'));
fs.mkdirSync('public/docs',{recursive:true});for(const file of fs.readdirSync('docs'))if(file.endsWith('.md'))fs.copyFileSync('docs/'+file,'public/docs/'+file);
fs.writeFileSync('public/docs/sources.json',JSON.stringify({reviewed:'2026-09-13',sources},null,2));
console.log('BOM, setup and public documentation updated.');
