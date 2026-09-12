// БД цін на комплектуючі: вендори, канали постачання та орієнтовні діапазони.
// Діапазони low–high — ОРІЄНТИР ринку, зібраний на дату pricedAt, а не пропозиція продавця.
// Підтверджену ціну вписуєш сам у розділі «Ціни»; вона лягає в state.quotes і має пріоритет над діапазоном.
export const pricedAt='2026-09-13';
export const fxDefault=44; // UAH за 1 USD. Припущення для перерахунку; онови під свій курс у UI.

export const channels=[
 {id:'ua',name:'Україна',short:'UA',note:'Гарантія, повернення за законом, доставка 1–3 дні. Дорожче, але без мита й очікування.'},
 {id:'cn',name:'AliExpress',short:'ALI',note:'Дешевше на десятки відсотків, але 2–6 тижнів очікування, ризик клонів і власний контроль якості.'},
 {id:'global',name:'Виробник / дистриб’ютор',short:'OEM',note:'Оригінал напряму. Ціна прозора, але доставка в Україну та мито часто з’їдають різницю.'},
];

export const vendors=[
 {id:'ali',name:'AliExpress',channel:'cn',site:'aliexpress.com',url:'https://www.aliexpress.com/',currency:'USD',search:'https://www.aliexpress.com/wholesale?SearchText={q}',
  lead:'14–45 днів',ship:'Часто «безкоштовно» — вартість уже закладена в ціну лоту',duty:'Перевір чинний безмитний поріг на посилку перед замовленням',
  strong:'Дисплеї, Choc-перемикачі, ковпачки, USB-аудіо, макроплати, модулі живлення',
  risk:'Клони Teensy, підроблені microSD, завищена ємність акумуляторів. Дивись відгуки з фото, відкривай спір до закриття захисту покупця.'},
 {id:'rozetka',name:'Rozetka',channel:'ua',site:'rozetka.com.ua',url:'https://rozetka.com.ua/',currency:'UAH',search:'https://rozetka.com.ua/ua/search/?text={q}',
  lead:'1–3 дні',ship:'Нова пошта / кур’єр, часто безкоштовно від суми',duty:'Немає',
  strong:'microSD, кабелі, кардридери, блоки живлення, акумулятори',
  risk:'Маркетплейс: продавці різні. Перевіряй, хто фактичний відправник і чи є гарантійний талон.'},
 {id:'prom',name:'Prom.ua',channel:'ua',site:'prom.ua',url:'https://prom.ua/',currency:'UAH',search:'https://prom.ua/ua/search?search_term={q}',
  lead:'1–5 днів',ship:'Нова пошта, часто накладений платіж',duty:'Немає',
  strong:'Дрібні модулі, перемикачі, кріплення, дисплеї',
  risk:'Багато позицій — той самий товар з AliExpress із націнкою в кілька разів. Порівнюй із колонкою ALI перед покупкою.'},
 {id:'olx',name:'OLX',channel:'ua',site:'olx.ua',url:'https://www.olx.ua/',currency:'UAH',search:'https://www.olx.ua/uk/list/q-{q}/',slug:true,
  lead:'1–5 днів · залежить від продавця',ship:'Нова пошта, передоплата або накладений платіж',duty:'Немає',
  strong:'Вживані Raspberry Pi, дисплеї, макроплати, блоки живлення — там, де вторинний ринок живий',
  risk:'Оголошення, а не магазин: ціни в БД немає, гарантії немає, повернення немає. Плати через захищену угоду й перевіряй пристрій до оплати. Карти пам’яті, ковпачки та акумулятори звідси не беремо: зношений флеш і елементи без історії не варті економії.'},
 {id:'imrad',name:'Imrad',channel:'ua',site:'imrad.com.ua',url:'https://imrad.com.ua/',currency:'UAH',search:null,
  lead:'1–4 дні',ship:'Самовивіз Київ / Нова пошта',duty:'Немає',
  strong:'Raspberry Pi, оригінальні блоки живлення, компоненти з документацією',
  risk:'Асортимент орієнтований на юросіб; наявність конкретного SKU перевіряй до оплати.'},
 {id:'rcs',name:'RCS Components',channel:'ua',site:'rcscomponents.kiev.ua',url:'https://rcscomponents.kiev.ua/',currency:'UAH',search:null,
  lead:'1–5 днів',ship:'Нова пошта',duty:'Немає',
  strong:'Raspberry Pi та аксесуари, пасивні компоненти, роз’єми',
  risk:'Ціна в картці може бути без ПДВ — звіряй підсумок у кошику.'},
 {id:'kosmodrom',name:'Космодром',channel:'ua',site:'kosmodrom.ua',url:'https://kosmodrom.ua/',currency:'UAH',search:null,
  lead:'1–4 дні',ship:'Нова пошта / самовивіз',duty:'Немає',
  strong:'Радіодеталі, роз’єми, монтажні матеріали, інструмент',
  risk:'Готові DIY-модулі вибірково; специфічні дисплеї шукай в іншому місці.'},
 {id:'electronoff',name:'Electronoff',channel:'ua',site:'electronoff.ua',url:'https://electronoff.ua/',currency:'UAH',search:null,
  lead:'1–4 дні',ship:'Нова пошта / самовивіз Київ',duty:'Немає',
  strong:'Arduino-екосистема, дисплеї, модулі, макетні матеріали',
  risk:'Здебільшого ті самі китайські модулі — виграш у швидкості й поверненні, не в ціні.'},
 {id:'voron',name:'Voron',channel:'ua',site:'voron.ua',url:'https://voron.ua/',currency:'UAH',search:null,
  lead:'1–4 дні',ship:'Нова пошта',duty:'Немає',
  strong:'Компоненти, інструмент, витратні матеріали для пайки',
  risk:'Перевіряй фактичну наявність: частина позицій під замовлення.'},
 {id:'plexiwire',name:'Plexiwire',channel:'ua',site:'plexiwire.com.ua',url:'https://plexiwire.com.ua/',currency:'UAH',search:null,
  lead:'1–3 дні',ship:'Нова пошта',duty:'Немає',
  strong:'PETG/PLA українського виробництва для друку корпуса',
  risk:'Колір і партія впливають на усадку — для точного корпуса друкуй з однієї котушки.'},
 {id:'pjrc',name:'PJRC (виробник)',channel:'global',site:'pjrc.com',url:'https://www.pjrc.com/store/teensy41.html',currency:'USD',search:null,
  lead:'7–21 день',ship:'Доставка зі США оплачується окремо',duty:'Мито + ПДВ понад безмитний поріг',
  strong:'Оригінальний Teensy 4.1 і фірмові кабелі',
  risk:'Доставка та мито можуть суттєво додати до цінника — рахуй підсумкову вартість, а не ціну на сайті.'},
 {id:'mouser',name:'Mouser',channel:'global',site:'mouser.com',url:'https://www.mouser.com/',currency:'USD',search:null,
  lead:'5–14 днів',ship:'Кур’єрська доставка, поріг безкоштовної високий',duty:'Мито + ПДВ понад безмитний поріг',
  strong:'Оригінальні компоненти з підтвердженим походженням',
  risk:'Вигідно лише одним великим замовленням на кілька позицій одразу.'},
];

export const vendorById=id=>vendors.find(v=>v.id===id);
export const channelById=id=>channels.find(c=>c.id===id);
// slug — магазини, де запит іде частиною шляху, а не параметром (OLX).
export const searchUrl=(vendor,query)=>vendor.search
 ? vendor.search.replaceAll('{q}',encodeURIComponent(vendor.slug?query.replaceAll(' ','-'):query))
 : `https://duckduckgo.com/?q=${encodeURIComponent(query+' site:'+vendor.site)}`;

// bom — id позиції з src/data.js. low/high — ціна за ОДИНИЦЮ у валюті unit.
// status:'орієнтир' = діапазон ринку без звірки з продавцем. warn — ризик, який не покривається ціною.
// low:null = джерело лише для пошуку (OLX): ціну дає конкретне оголошення, тож у порівнянні каналів воно не бере участі.
export const offers=[
 {bom:'teensy',vendor:'pjrc',q:'Teensy 4.1',low:35,high:42,unit:'USD',status:'орієнтир',note:'Першоджерело ціни. Доставку й мито в Україну рахуй окремо.'},
 {bom:'teensy',vendor:'mouser',q:'Teensy 4.1 PJRC',low:38,high:50,unit:'USD',status:'орієнтир',note:'Оригінал із підтвердженим походженням.'},
 {bom:'teensy',vendor:'imrad',q:'Teensy 4.1',low:1900,high:3400,unit:'UAH',status:'орієнтир',note:'Перевір, що це саме 4.1, а не 4.0.'},
 {bom:'teensy',vendor:'rozetka',q:'Teensy 4.1',low:1800,high:3200,unit:'UAH',status:'орієнтир',note:'Маркетплейс: уточни продавця і гарантію.'},
 {bom:'teensy',vendor:'prom',q:'Teensy 4.1',low:1700,high:3200,unit:'UAH',status:'орієнтир',note:'Частина лотів — перепродаж клонів з Ali.'},
 {bom:'teensy',vendor:'ali',q:'Teensy 4.1 development board',low:18,high:32,unit:'USD',status:'орієнтир',warn:'Клони Teensy 4.1 поширені й можуть не прийняти офіційний HEX. Економія тут ризикує всім проєктом.',note:'Єдина позиція, де рекомендація — не економити.'},

 {bom:'sd-m8',vendor:'rozetka',q:'SanDisk Ultra microSDHC 32GB',low:200,high:420,unit:'UAH',status:'орієнтир',note:'Бери в магазині з гарантією — карта тримає твої пісні.'},
 {bom:'sd-m8',vendor:'prom',q:'SanDisk Ultra microSDHC 32GB',low:180,high:380,unit:'UAH',status:'орієнтир',note:'Звіряй серійний номер на упаковці.'},
 {bom:'sd-m8',vendor:'ali',q:'SanDisk Ultra microSD 32GB',low:3,high:9,unit:'USD',status:'орієнтир',warn:'Підроблені карти із завищеною ємністю — типова проблема. Після покупки прожени H2testw або f3.',note:'Різниця в кілька разів тут не випадкова.'},

 {bom:'usb',vendor:'rozetka',q:'кабель USB-A micro-USB data 1м',low:90,high:260,unit:'UAH',status:'орієнтир',note:'У картці має бути «синхронізація», не тільки «заряджання».'},
 {bom:'usb',vendor:'prom',q:'кабель USB micro-B з передачею даних',low:90,high:250,unit:'UAH',status:'орієнтир',note:'Найдешевші лоти часто charge-only.'},
 {bom:'usb',vendor:'ali',q:'USB A to micro B data cable',low:1,high:4,unit:'USD',status:'орієнтир',note:'Бери два — один із них цілком може виявитись charge-only.'},
 {bom:'usb',vendor:'pjrc',q:'USB micro B cable',low:5,high:9,unit:'USD',status:'орієнтир',note:'Фірмовий кабель, перевірений під Teensy.'},

 {bom:'reader',vendor:'rozetka',q:'кардридер microSD USB',low:120,high:350,unit:'UAH',status:'орієнтир',note:'Якщо слот уже є в ноутбуку — не купуй.'},
 {bom:'reader',vendor:'prom',q:'card reader microSD USB',low:130,high:350,unit:'UAH',status:'орієнтир',note:'Простого USB 2.0 достатньо для підготовки карт.'},
 {bom:'reader',vendor:'ali',q:'USB 3.0 microSD card reader',low:1,high:6,unit:'USD',status:'орієнтир',note:'Найбезпечніша позиція для замовлення з Ali.'},

 {bom:'pi4',vendor:'imrad',q:'Raspberry Pi 4 Model B 2GB',low:2600,high:4200,unit:'UAH',status:'орієнтир',note:'Офіційний канал постачання в Україні.'},
 {bom:'pi4',vendor:'rcs',q:'Raspberry Pi 4 Model B 2GB',low:2600,high:4400,unit:'UAH',status:'орієнтир',note:'Звіряй, чи ціна вказана з ПДВ.'},
 {bom:'pi4',vendor:'rozetka',q:'Raspberry Pi 4 Model B 2GB',low:2800,high:4800,unit:'UAH',status:'орієнтир',note:'Часто продають у комплекті з кейсом і БЖ — порівнюй комплект, а не плату.'},
 {bom:'pi4',vendor:'prom',q:'Raspberry Pi 4 Model B',low:2500,high:4500,unit:'UAH',status:'орієнтир',note:'Уточнюй саме обсяг RAM: 2 / 4 / 8 ГБ.'},
 {bom:'pi4',vendor:'ali',q:'Raspberry Pi 4 Model B 2GB',low:55,high:95,unit:'USD',status:'орієнтир',warn:'Сірий імпорт: трапляються б/в плати та «аналоги» на іншому SoC.',note:'Економія рідко покриває ризик для базової плати.'},

 {bom:'sd-pi',vendor:'rozetka',q:'microSD 32GB A1 class 10',low:200,high:450,unit:'UAH',status:'орієнтир',note:'Для ОС бери A1/A2 — випадковий доступ важливіший за лінійну швидкість.'},
 {bom:'sd-pi',vendor:'prom',q:'microSD 32GB A1',low:180,high:400,unit:'UAH',status:'орієнтир',note:'Окрема карта від тієї, що стоїть у Teensy.'},
 {bom:'sd-pi',vendor:'ali',q:'microSD 32GB A1 class 10',low:3,high:9,unit:'USD',status:'орієнтир',warn:'Той самий ризик підробок, що і з картою для M8.',note:'Карта ОС зношується першою — тут економія найдорожча.'},

 {bom:'display',vendor:'ali',q:'3.5 inch HDMI LCD display module',low:15,high:38,unit:'USD',status:'орієнтир',note:'Основний ринок таких модулів. Перевір, що це HDMI, а не SPI — SPI для m8c не підходить.'},
 {bom:'display',vendor:'electronoff',q:'дисплей 3.5 HDMI Raspberry Pi',low:1100,high:2400,unit:'UAH',status:'орієнтир',note:'Швидка доставка й можливість повернути, якщо не збіжиться виріз.'},
 {bom:'display',vendor:'prom',q:'HDMI дисплей 3.5 дюйма Raspberry Pi',low:900,high:2400,unit:'UAH',status:'орієнтир',note:'Перепродаж Ali з націнкою; часто без креслення розмірів.'},
 {bom:'display',vendor:'voron',q:'HDMI LCD module 3.5',low:1000,high:2300,unit:'UAH',status:'орієнтир',note:'Наявність під питанням — уточнюй перед замовленням.'},

 {bom:'hdmi',vendor:'rozetka',q:'кабель micro-HDMI HDMI 0.5м',low:150,high:420,unit:'UAH',status:'орієнтир',note:'Саме micro-HDMI. Mini-HDMI у Pi 4 не входить.'},
 {bom:'hdmi',vendor:'prom',q:'micro HDMI to HDMI кабель короткий',low:120,high:350,unit:'UAH',status:'орієнтир',note:'Для корпуса шукай кутовий штекер.'},
 {bom:'hdmi',vendor:'ali',q:'micro HDMI to HDMI short cable 20cm',low:2,high:7,unit:'USD',status:'орієнтир',note:'Тут вибір коротких і кутових варіантів найширший.'},

 {bom:'audio',vendor:'ali',q:'USB sound card 3.5mm headphone adapter',low:3,high:14,unit:'USD',status:'орієнтир',note:'HS-100B та аналоги. Бери два різні — перевіриш, який не шумить.'},
 {bom:'audio',vendor:'rozetka',q:'USB звукова карта 3.5 мм',low:300,high:800,unit:'UAH',status:'орієнтир',note:'Можна повернути, якщо шумить на батарейному живленні.'},
 {bom:'audio',vendor:'prom',q:'USB аудіо адаптер 3.5 jack',low:250,high:750,unit:'UAH',status:'орієнтир',note:'Чип в описі часто не відповідає реальному.'},

 {bom:'keys',vendor:'ali',q:'Kailh Choc low profile switch PG1350',low:0.5,high:1.4,unit:'USD',status:'орієнтир',note:'Ціна за один перемикач. Лоти від 10 шт — бери з запасом на брак.'},
 {bom:'keys',vendor:'prom',q:'Kailh Choc перемикач низькопрофільний',low:45,high:110,unit:'UAH',status:'орієнтир',note:'Ціна за один перемикач; вибір варіантів вужчий.'},
 {bom:'keys',vendor:'electronoff',q:'тактова кнопка низькопрофільна',low:25,high:90,unit:'UAH',status:'орієнтир',note:'Choc може не бути — переглянь альтернативні тактові кнопки під свій футпринт.'},

 {bom:'caps',vendor:'ali',q:'Kailh Choc keycaps low profile blank',low:0.3,high:1.2,unit:'USD',status:'орієнтир',note:'Ціна за один ковпачок. MX-ковпачки на Choc не стають.'},
 {bom:'caps',vendor:'prom',q:'ковпачки Choc низькопрофільні',low:30,high:90,unit:'UAH',status:'орієнтир',note:'Ціна за один ковпачок; звіряй крок між центрами.'},

 {bom:'input',vendor:'ali',q:'programmable macro keypad USB 9 keys',low:6,high:22,unit:'USD',status:'орієнтир',note:'Обов’язково перевір rollover: M8 потребує одночасних натискань.'},
 {bom:'input',vendor:'electronoff',q:'макроклавіатура USB програмована',low:600,high:1600,unit:'UAH',status:'орієнтир',note:'Альтернатива — плата на RP2040 і власна прошивка.'},
 {bom:'input',vendor:'prom',q:'USB макроклавіатура програмована',low:500,high:1500,unit:'UAH',status:'орієнтир',note:'Rollover в описі майже ніколи не вказують — питай продавця.'},

 {bom:'supply',vendor:'imrad',q:'Raspberry Pi USB-C power supply 5.1V 3A',low:500,high:1100,unit:'UAH',status:'орієнтир',note:'Офіційний БЖ — найменше проблем із просадками напруги.'},
 {bom:'supply',vendor:'rozetka',q:'блок живлення USB-C 5V 3A',low:350,high:900,unit:'UAH',status:'орієнтир',note:'Потрібні саме 5,1 В / 3 А, а не «швидка зарядка» на 9 В.'},
 {bom:'supply',vendor:'prom',q:'блок живлення 5V 3A USB-C',low:300,high:850,unit:'UAH',status:'орієнтир',note:'Дешеві БЖ часто не тримають заявлений струм.'},
 {bom:'supply',vendor:'ali',q:'5V 3A USB-C power adapter EU plug',low:6,high:16,unit:'USD',status:'орієнтир',warn:'Найгірша категорія для економії: слабка ізоляція мережевої частини — це ризик для тебе, не для плати.',note:'Якщо берешся — лише сертифікований бренд.'},

 {bom:'hardware',vendor:'plexiwire',q:'PETG 1.75 1кг',low:600,high:950,unit:'UAH',status:'орієнтир',note:'Ціна за котушку 1 кг. На корпус іде значно менше — решта лишиться на ітерації.'},
 {bom:'hardware',vendor:'kosmodrom',q:'стійки латунні M3 набір гвинти',low:150,high:500,unit:'UAH',status:'орієнтир',note:'Набір М2,5/М3 зі стійками закриває монтаж Pi і плат.'},
 {bom:'hardware',vendor:'prom',q:'набір гвинтів стійок M3 M2.5',low:120,high:450,unit:'UAH',status:'орієнтир',note:'Бери набором — поштучно виходить дорожче.'},
 {bom:'hardware',vendor:'ali',q:'M2.5 M3 standoff screw kit',low:4,high:14,unit:'USD',status:'орієнтир',note:'Набори на сотні елементів — одна з найвигідніших позицій на Ali.'},

 {bom:'battery',vendor:'rozetka',q:'акумулятор Li-ion 18650 з платою захисту',low:350,high:1100,unit:'UAH',status:'орієнтир',note:'Купуй тільки із захистом (PCB/BMS) і там, де є повернення.'},
 {bom:'battery',vendor:'prom',q:'Li-Po акумулятор 1S з платою захисту',low:300,high:950,unit:'UAH',status:'орієнтир',note:'Ємність підбирай після реального виміру Вт·год.'},
 {bom:'battery',vendor:'ali',q:'protected 18650 Li-ion battery',low:5,high:22,unit:'USD',status:'орієнтир',warn:'Заявлена ємність часто завищена в рази; трапляються елементи без захисту під виглядом захищених.',note:'Позиція, де підробка небезпечна фізично, а не лише фінансово.'},

 {bom:'powerpath',vendor:'ali',q:'UPS power module 5V boost charging power path',low:8,high:28,unit:'USD',status:'орієнтир',note:'UPSPACK V3 та аналоги. TP4056 окремо цю задачу не закриває.'},
 {bom:'powerpath',vendor:'prom',q:'модуль UPS 5V безперебійного живлення Raspberry',low:550,high:1600,unit:'UAH',status:'орієнтир',note:'Перевіряй заявлений безперервний струм із запасом, а не піковий.'},
 {bom:'powerpath',vendor:'electronoff',q:'модуль живлення UPS 5V Raspberry Pi',low:600,high:1700,unit:'UAH',status:'орієнтир',note:'Швидка заміна, якщо модуль не витягне навантаження.'},

 // OLX додано лише як джерело пошуку: ціну підставляє конкретне оголошення.
 {bom:'teensy',vendor:'olx',q:'Teensy 4.1',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Трапляється рідко. Вимагай фото самої плати й перевір, що це оригінал PJRC, а не клон під виглядом б/в.'},
 {bom:'usb',vendor:'olx',q:'кабель micro USB',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Сенс має лише в наборі з іншою покупкою.'},
 {bom:'reader',vendor:'olx',q:'кардридер microSD',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Дрібниця, яку часто віддають разом із ноутбуком чи фотоапаратом.'},
 {bom:'pi4',vendor:'olx',q:'Raspberry Pi 4',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Найжвавіший вторинний ринок з усього списку. Перевіряй плату під навантаженням до оплати.'},
 {bom:'display',vendor:'olx',q:'HDMI дисплей 3.5',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Часто продають разом із набором для Pi. Питай точні габарити й тип роз’єму.'},
 {bom:'hdmi',vendor:'olx',q:'кабель micro HDMI',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Дивись на довжину й напрямок штекера на фото.'},
 {bom:'audio',vendor:'olx',q:'USB звукова карта',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Перевір на місці, чи не шумить у навушниках.'},
 {bom:'keys',vendor:'olx',q:'перемикачі Kailh Choc',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Клавіатурники розпродають залишки після збірок — там і пробні комплекти.'},
 {bom:'input',vendor:'olx',q:'макроклавіатура',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Питай, чи перепрошивається і скільки клавіш тримає одночасно.'},
 {bom:'supply',vendor:'olx',q:'блок живлення 5V 3A',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Тільки оригінальний брендовий БЖ і тільки з перевіркою — вживана мережева частина це ризик.'},
 {bom:'hardware',vendor:'olx',q:'PETG філамент',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Котушки після проєктів віддають дешево; перевір, що пластик сухий і не крихкий.'},
 {bom:'powerpath',vendor:'olx',q:'модуль UPS 5V',low:null,high:null,unit:'UAH',status:'лише пошук',note:'Питай реальний струм під навантаженням, а не цифру з опису.'},
];
