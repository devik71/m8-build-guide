# БД цін: Україна ↔ AliExpress

Згенеровано із src/vendors.js і прив’язано до [BOM](bom.md) за id позиції. Діапазони — **орієнтир ринку станом на 2026-09-13**, а не пропозиції продавців і не котирування: вони показують порядок цін і різницю між каналами. Перерахунок за курсом 44 ₴/$ (у вебпосібнику курс редагується). Мито, доставка й комісія платіжної системи не входять у діапазони. OLX доданий лише як джерело пошуку: у вторинного ринку ціни немає доти, доки ти не відкрив конкретне оголошення, тож ці рядки не беруть участі в порівнянні каналів. Свої підтверджені ціни вводиш у розділі «Ціни та вендори» — вони перекривають орієнтир.

## Канали постачання

- **Україна (UA).** Гарантія, повернення за законом, доставка 1–3 дні. Дорожче, але без мита й очікування.
- **AliExpress (ALI).** Дешевше на десятки відсотків, але 2–6 тижнів очікування, ризик клонів і власний контроль якості.
- **Виробник / дистриб’ютор (OEM).** Оригінал напряму. Ціна прозора, але доставка в Україну та мито часто з’їдають різницю.

## Підсумок комплекту

| Сценарій | Сума за орієнтиром | Позицій у сумі | Без пропозиції |
|---|---:|---:|---:|
| Усе в Україні | 13 710 ₴ | 16 | 0 |
| Усе з AliExpress | 10 410 ₴ | 16 | 0 |
| Найдешевший мікс | 10 299 ₴ | 16 | 0 |

## Порівняння по позиціях

| Деталь | К-сть | UA · найкраще | ALI · найкраще | OEM | Δ ALI до UA |
|---|---:|---|---|---|---:|
| Teensy 4.1 | 1 | 1 700–3 200 ₴ · Prom.ua | 792–1 408 ₴ · AliExpress | 1 540–1 848 ₴ · PJRC (виробник) | −55 % |
| microSD для M8 | 1 | 180–380 ₴ · Prom.ua | 132–396 ₴ · AliExpress | — | −6 % |
| USB-A → micro-B | 1 | 90–250 ₴ · Prom.ua | 44–176 ₴ · AliExpress | 220–396 ₴ · PJRC (виробник) | −35 % |
| Кардридер microSD | 1 | 120–350 ₴ · Rozetka | 44–264 ₴ · AliExpress | — | −34 % |
| Raspberry Pi 4 Model B | 1 | 2 600–4 200 ₴ · Imrad | 2 420–4 180 ₴ · AliExpress | — | −3 % |
| microSD для Linux | 1 | 180–400 ₴ · Prom.ua | 132–396 ₴ · AliExpress | — | −9 % |
| Компактний HDMI-дисплей | 1 | 900–2 400 ₴ · Prom.ua | 660–1 672 ₴ · AliExpress | — | −29 % |
| micro-HDMI → HDMI | 1 | 120–350 ₴ · Prom.ua | 88–308 ₴ · AliExpress | — | −16 % |
| USB-аудіо з виходом 3,5 мм | 1 | 250–750 ₴ · Prom.ua | 132–616 ₴ · AliExpress | — | −25 % |
| Низькопрофільні перемикачі | 8 | 25–90 ₴ · Electronoff | 22–62 ₴ · AliExpress | — | −27 % |
| Ковпачки для Choc | 8 | 30–90 ₴ · Prom.ua | 13–53 ₴ · AliExpress | — | −45 % |
| USB HID-контролер кнопок | 1 | 500–1 500 ₴ · Prom.ua | 264–968 ₴ · AliExpress | — | −38 % |
| Живлення Pi 4 | 1 | 300–850 ₴ · Prom.ua | 264–704 ₴ · AliExpress | — | −16 % |
| Монтаж і корпус | 1 | 120–450 ₴ · Prom.ua | 176–616 ₴ · AliExpress | — | +39 % |
| Захищений акумулятор | 1 | 300–950 ₴ · Prom.ua | 220–968 ₴ · AliExpress | — | −5 % |
| Заряджання + power-path + 5 В | 1 | 550–1 600 ₴ · Prom.ua | 352–1 232 ₴ · AliExpress | — | −26 % |

## Пропозиції по вендорах

### Teensy 4.1

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| PJRC (виробник) | OEM | 1 540–1 848 | 35–42 USD | [запит](https://duckduckgo.com/?q=Teensy%204.1%20site%3Apjrc.com) |
| Mouser | OEM | 1 672–2 200 | 38–50 USD | [запит](https://duckduckgo.com/?q=Teensy%204.1%20PJRC%20site%3Amouser.com) |
| Imrad | UA | 1 900–3 400 | 1900–3400 UAH | [запит](https://duckduckgo.com/?q=Teensy%204.1%20site%3Aimrad.com.ua) |
| Rozetka | UA | 1 800–3 200 | 1800–3200 UAH | [запит](https://rozetka.com.ua/ua/search/?text=Teensy%204.1) |
| Prom.ua | UA | 1 700–3 200 | 1700–3200 UAH | [запит](https://prom.ua/ua/search?search_term=Teensy%204.1) |
| AliExpress | ALI | 792–1 408 | 18–32 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=Teensy%204.1%20development%20board) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-Teensy-4.1/) |

- **PJRC (виробник).** Першоджерело ціни. Доставку й мито в Україну рахуй окремо.
- **Mouser.** Оригінал із підтвердженим походженням.
- **Imrad.** Перевір, що це саме 4.1, а не 4.0.
- **Rozetka.** Маркетплейс: уточни продавця і гарантію.
- **Prom.ua.** Частина лотів — перепродаж клонів з Ali.
- **AliExpress.** Єдина позиція, де рекомендація — не економити. ⚠️ Клони Teensy 4.1 поширені й можуть не прийняти офіційний HEX. Економія тут ризикує всім проєктом.
- **OLX.** Трапляється рідко. Вимагай фото самої плати й перевір, що це оригінал PJRC, а не клон під виглядом б/в.

### microSD для M8

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Rozetka | UA | 200–420 | 200–420 UAH | [запит](https://rozetka.com.ua/ua/search/?text=SanDisk%20Ultra%20microSDHC%2032GB) |
| Prom.ua | UA | 180–380 | 180–380 UAH | [запит](https://prom.ua/ua/search?search_term=SanDisk%20Ultra%20microSDHC%2032GB) |
| AliExpress | ALI | 132–396 | 3–9 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=SanDisk%20Ultra%20microSD%2032GB) |

- **Rozetka.** Бери в магазині з гарантією — карта тримає твої пісні.
- **Prom.ua.** Звіряй серійний номер на упаковці.
- **AliExpress.** Різниця в кілька разів тут не випадкова. ⚠️ Підроблені карти із завищеною ємністю — типова проблема. Після покупки прожени H2testw або f3.

### USB-A → micro-B

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Rozetka | UA | 90–260 | 90–260 UAH | [запит](https://rozetka.com.ua/ua/search/?text=%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%20USB-A%20micro-USB%20data%201%D0%BC) |
| Prom.ua | UA | 90–250 | 90–250 UAH | [запит](https://prom.ua/ua/search?search_term=%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%20USB%20micro-B%20%D0%B7%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B5%D1%8E%20%D0%B4%D0%B0%D0%BD%D0%B8%D1%85) |
| AliExpress | ALI | 44–176 | 1–4 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=USB%20A%20to%20micro%20B%20data%20cable) |
| PJRC (виробник) | OEM | 220–396 | 5–9 USD | [запит](https://duckduckgo.com/?q=USB%20micro%20B%20cable%20site%3Apjrc.com) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C-micro-USB/) |

- **Rozetka.** У картці має бути «синхронізація», не тільки «заряджання».
- **Prom.ua.** Найдешевші лоти часто charge-only.
- **AliExpress.** Бери два — один із них цілком може виявитись charge-only.
- **PJRC (виробник).** Фірмовий кабель, перевірений під Teensy.
- **OLX.** Сенс має лише в наборі з іншою покупкою.

### Кардридер microSD

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Rozetka | UA | 120–350 | 120–350 UAH | [запит](https://rozetka.com.ua/ua/search/?text=%D0%BA%D0%B0%D1%80%D0%B4%D1%80%D0%B8%D0%B4%D0%B5%D1%80%20microSD%20USB) |
| Prom.ua | UA | 130–350 | 130–350 UAH | [запит](https://prom.ua/ua/search?search_term=card%20reader%20microSD%20USB) |
| AliExpress | ALI | 44–264 | 1–6 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=USB%203.0%20microSD%20card%20reader) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%BA%D0%B0%D1%80%D0%B4%D1%80%D0%B8%D0%B4%D0%B5%D1%80-microSD/) |

- **Rozetka.** Якщо слот уже є в ноутбуку — не купуй.
- **Prom.ua.** Простого USB 2.0 достатньо для підготовки карт.
- **AliExpress.** Найбезпечніша позиція для замовлення з Ali.
- **OLX.** Дрібниця, яку часто віддають разом із ноутбуком чи фотоапаратом.

### Raspberry Pi 4 Model B

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Imrad | UA | 2 600–4 200 | 2600–4200 UAH | [запит](https://duckduckgo.com/?q=Raspberry%20Pi%204%20Model%20B%202GB%20site%3Aimrad.com.ua) |
| RCS Components | UA | 2 600–4 400 | 2600–4400 UAH | [запит](https://duckduckgo.com/?q=Raspberry%20Pi%204%20Model%20B%202GB%20site%3Arcscomponents.kiev.ua) |
| Rozetka | UA | 2 800–4 800 | 2800–4800 UAH | [запит](https://rozetka.com.ua/ua/search/?text=Raspberry%20Pi%204%20Model%20B%202GB) |
| Prom.ua | UA | 2 500–4 500 | 2500–4500 UAH | [запит](https://prom.ua/ua/search?search_term=Raspberry%20Pi%204%20Model%20B) |
| AliExpress | ALI | 2 420–4 180 | 55–95 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=Raspberry%20Pi%204%20Model%20B%202GB) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-Raspberry-Pi-4/) |

- **Imrad.** Офіційний канал постачання в Україні.
- **RCS Components.** Звіряй, чи ціна вказана з ПДВ.
- **Rozetka.** Часто продають у комплекті з кейсом і БЖ — порівнюй комплект, а не плату.
- **Prom.ua.** Уточнюй саме обсяг RAM: 2 / 4 / 8 ГБ.
- **AliExpress.** Економія рідко покриває ризик для базової плати. ⚠️ Сірий імпорт: трапляються б/в плати та «аналоги» на іншому SoC.
- **OLX.** Найжвавіший вторинний ринок з усього списку. Перевіряй плату під навантаженням до оплати.

### microSD для Linux

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Rozetka | UA | 200–450 | 200–450 UAH | [запит](https://rozetka.com.ua/ua/search/?text=microSD%2032GB%20A1%20class%2010) |
| Prom.ua | UA | 180–400 | 180–400 UAH | [запит](https://prom.ua/ua/search?search_term=microSD%2032GB%20A1) |
| AliExpress | ALI | 132–396 | 3–9 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=microSD%2032GB%20A1%20class%2010) |

- **Rozetka.** Для ОС бери A1/A2 — випадковий доступ важливіший за лінійну швидкість.
- **Prom.ua.** Окрема карта від тієї, що стоїть у Teensy.
- **AliExpress.** Карта ОС зношується першою — тут економія найдорожча. ⚠️ Той самий ризик підробок, що і з картою для M8.

### Компактний HDMI-дисплей

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| AliExpress | ALI | 660–1 672 | 15–38 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=3.5%20inch%20HDMI%20LCD%20display%20module) |
| Electronoff | UA | 1 100–2 400 | 1100–2400 UAH | [запит](https://duckduckgo.com/?q=%D0%B4%D0%B8%D1%81%D0%BF%D0%BB%D0%B5%D0%B9%203.5%20HDMI%20Raspberry%20Pi%20site%3Aelectronoff.ua) |
| Prom.ua | UA | 900–2 400 | 900–2400 UAH | [запит](https://prom.ua/ua/search?search_term=HDMI%20%D0%B4%D0%B8%D1%81%D0%BF%D0%BB%D0%B5%D0%B9%203.5%20%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0%20Raspberry%20Pi) |
| Voron | UA | 1 000–2 300 | 1000–2300 UAH | [запит](https://duckduckgo.com/?q=HDMI%20LCD%20module%203.5%20site%3Avoron.ua) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-HDMI-%D0%B4%D0%B8%D1%81%D0%BF%D0%BB%D0%B5%D0%B9-3.5/) |

- **AliExpress.** Основний ринок таких модулів. Перевір, що це HDMI, а не SPI — SPI для m8c не підходить.
- **Electronoff.** Швидка доставка й можливість повернути, якщо не збіжиться виріз.
- **Prom.ua.** Перепродаж Ali з націнкою; часто без креслення розмірів.
- **Voron.** Наявність під питанням — уточнюй перед замовленням.
- **OLX.** Часто продають разом із набором для Pi. Питай точні габарити й тип роз’єму.

### micro-HDMI → HDMI

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Rozetka | UA | 150–420 | 150–420 UAH | [запит](https://rozetka.com.ua/ua/search/?text=%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%20micro-HDMI%20HDMI%200.5%D0%BC) |
| Prom.ua | UA | 120–350 | 120–350 UAH | [запит](https://prom.ua/ua/search?search_term=micro%20HDMI%20to%20HDMI%20%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%20%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9) |
| AliExpress | ALI | 88–308 | 2–7 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=micro%20HDMI%20to%20HDMI%20short%20cable%2020cm) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C-micro-HDMI/) |

- **Rozetka.** Саме micro-HDMI. Mini-HDMI у Pi 4 не входить.
- **Prom.ua.** Для корпуса шукай кутовий штекер.
- **AliExpress.** Тут вибір коротких і кутових варіантів найширший.
- **OLX.** Дивись на довжину й напрямок штекера на фото.

### USB-аудіо з виходом 3,5 мм

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| AliExpress | ALI | 132–616 | 3–14 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=USB%20sound%20card%203.5mm%20headphone%20adapter) |
| Rozetka | UA | 300–800 | 300–800 UAH | [запит](https://rozetka.com.ua/ua/search/?text=USB%20%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B2%D0%B0%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%203.5%20%D0%BC%D0%BC) |
| Prom.ua | UA | 250–750 | 250–750 UAH | [запит](https://prom.ua/ua/search?search_term=USB%20%D0%B0%D1%83%D0%B4%D1%96%D0%BE%20%D0%B0%D0%B4%D0%B0%D0%BF%D1%82%D0%B5%D1%80%203.5%20jack) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-USB-%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B2%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B0/) |

- **AliExpress.** HS-100B та аналоги. Бери два різні — перевіриш, який не шумить.
- **Rozetka.** Можна повернути, якщо шумить на батарейному живленні.
- **Prom.ua.** Чип в описі часто не відповідає реальному.
- **OLX.** Перевір на місці, чи не шумить у навушниках.

### Низькопрофільні перемикачі

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| AliExpress | ALI | 22–62 | 0.5–1.4 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=Kailh%20Choc%20low%20profile%20switch%20PG1350) |
| Prom.ua | UA | 45–110 | 45–110 UAH | [запит](https://prom.ua/ua/search?search_term=Kailh%20Choc%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0%D1%87%20%D0%BD%D0%B8%D0%B7%D1%8C%D0%BA%D0%BE%D0%BF%D1%80%D0%BE%D1%84%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9) |
| Electronoff | UA | 25–90 | 25–90 UAH | [запит](https://duckduckgo.com/?q=%D1%82%D0%B0%D0%BA%D1%82%D0%BE%D0%B2%D0%B0%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0%20%D0%BD%D0%B8%D0%B7%D1%8C%D0%BA%D0%BE%D0%BF%D1%80%D0%BE%D1%84%D1%96%D0%BB%D1%8C%D0%BD%D0%B0%20site%3Aelectronoff.ua) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0%D1%87%D1%96-Kailh-Choc/) |

- **AliExpress.** Ціна за один перемикач. Лоти від 10 шт — бери з запасом на брак.
- **Prom.ua.** Ціна за один перемикач; вибір варіантів вужчий.
- **Electronoff.** Choc може не бути — переглянь альтернативні тактові кнопки під свій футпринт.
- **OLX.** Клавіатурники розпродають залишки після збірок — там і пробні комплекти.

### Ковпачки для Choc

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| AliExpress | ALI | 13–53 | 0.3–1.2 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=Kailh%20Choc%20keycaps%20low%20profile%20blank) |
| Prom.ua | UA | 30–90 | 30–90 UAH | [запит](https://prom.ua/ua/search?search_term=%D0%BA%D0%BE%D0%B2%D0%BF%D0%B0%D1%87%D0%BA%D0%B8%20Choc%20%D0%BD%D0%B8%D0%B7%D1%8C%D0%BA%D0%BE%D0%BF%D1%80%D0%BE%D1%84%D1%96%D0%BB%D1%8C%D0%BD%D1%96) |

- **AliExpress.** Ціна за один ковпачок. MX-ковпачки на Choc не стають.
- **Prom.ua.** Ціна за один ковпачок; звіряй крок між центрами.

### USB HID-контролер кнопок

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| AliExpress | ALI | 264–968 | 6–22 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=programmable%20macro%20keypad%20USB%209%20keys) |
| Electronoff | UA | 600–1 600 | 600–1600 UAH | [запит](https://duckduckgo.com/?q=%D0%BC%D0%B0%D0%BA%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B2%D1%96%D0%B0%D1%82%D1%83%D1%80%D0%B0%20USB%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0%20site%3Aelectronoff.ua) |
| Prom.ua | UA | 500–1 500 | 500–1500 UAH | [запит](https://prom.ua/ua/search?search_term=USB%20%D0%BC%D0%B0%D0%BA%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B2%D1%96%D0%B0%D1%82%D1%83%D1%80%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%BC%D0%B0%D0%BA%D1%80%D0%BE%D0%BA%D0%BB%D0%B0%D0%B2%D1%96%D0%B0%D1%82%D1%83%D1%80%D0%B0/) |

- **AliExpress.** Обов’язково перевір rollover: M8 потребує одночасних натискань.
- **Electronoff.** Альтернатива — плата на RP2040 і власна прошивка.
- **Prom.ua.** Rollover в описі майже ніколи не вказують — питай продавця.
- **OLX.** Питай, чи перепрошивається і скільки клавіш тримає одночасно.

### Живлення Pi 4

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Imrad | UA | 500–1 100 | 500–1100 UAH | [запит](https://duckduckgo.com/?q=Raspberry%20Pi%20USB-C%20power%20supply%205.1V%203A%20site%3Aimrad.com.ua) |
| Rozetka | UA | 350–900 | 350–900 UAH | [запит](https://rozetka.com.ua/ua/search/?text=%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B6%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%20USB-C%205V%203A) |
| Prom.ua | UA | 300–850 | 300–850 UAH | [запит](https://prom.ua/ua/search?search_term=%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B6%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%205V%203A%20USB-C) |
| AliExpress | ALI | 264–704 | 6–16 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=5V%203A%20USB-C%20power%20adapter%20EU%20plug) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%B1%D0%BB%D0%BE%D0%BA-%D0%B6%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F-5V-3A/) |

- **Imrad.** Офіційний БЖ — найменше проблем із просадками напруги.
- **Rozetka.** Потрібні саме 5,1 В / 3 А, а не «швидка зарядка» на 9 В.
- **Prom.ua.** Дешеві БЖ часто не тримають заявлений струм.
- **AliExpress.** Якщо берешся — лише сертифікований бренд. ⚠️ Найгірша категорія для економії: слабка ізоляція мережевої частини — це ризик для тебе, не для плати.
- **OLX.** Тільки оригінальний брендовий БЖ і тільки з перевіркою — вживана мережева частина це ризик.

### Монтаж і корпус

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Plexiwire | UA | 600–950 | 600–950 UAH | [запит](https://duckduckgo.com/?q=PETG%201.75%201%D0%BA%D0%B3%20site%3Aplexiwire.com.ua) |
| Космодром | UA | 150–500 | 150–500 UAH | [запит](https://duckduckgo.com/?q=%D1%81%D1%82%D1%96%D0%B9%D0%BA%D0%B8%20%D0%BB%D0%B0%D1%82%D1%83%D0%BD%D0%BD%D1%96%20M3%20%D0%BD%D0%B0%D0%B1%D1%96%D1%80%20%D0%B3%D0%B2%D0%B8%D0%BD%D1%82%D0%B8%20site%3Akosmodrom.ua) |
| Prom.ua | UA | 120–450 | 120–450 UAH | [запит](https://prom.ua/ua/search?search_term=%D0%BD%D0%B0%D0%B1%D1%96%D1%80%20%D0%B3%D0%B2%D0%B8%D0%BD%D1%82%D1%96%D0%B2%20%D1%81%D1%82%D1%96%D0%B9%D0%BE%D0%BA%20M3%20M2.5) |
| AliExpress | ALI | 176–616 | 4–14 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=M2.5%20M3%20standoff%20screw%20kit) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-PETG-%D1%84%D1%96%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D1%82/) |

- **Plexiwire.** Ціна за котушку 1 кг. На корпус іде значно менше — решта лишиться на ітерації.
- **Космодром.** Набір М2,5/М3 зі стійками закриває монтаж Pi і плат.
- **Prom.ua.** Бери набором — поштучно виходить дорожче.
- **AliExpress.** Набори на сотні елементів — одна з найвигідніших позицій на Ali.
- **OLX.** Котушки після проєктів віддають дешево; перевір, що пластик сухий і не крихкий.

### Захищений акумулятор

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| Rozetka | UA | 350–1 100 | 350–1100 UAH | [запит](https://rozetka.com.ua/ua/search/?text=%D0%B0%D0%BA%D1%83%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%20Li-ion%2018650%20%D0%B7%20%D0%BF%D0%BB%D0%B0%D1%82%D0%BE%D1%8E%20%D0%B7%D0%B0%D1%85%D0%B8%D1%81%D1%82%D1%83) |
| Prom.ua | UA | 300–950 | 300–950 UAH | [запит](https://prom.ua/ua/search?search_term=Li-Po%20%D0%B0%D0%BA%D1%83%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%201S%20%D0%B7%20%D0%BF%D0%BB%D0%B0%D1%82%D0%BE%D1%8E%20%D0%B7%D0%B0%D1%85%D0%B8%D1%81%D1%82%D1%83) |
| AliExpress | ALI | 220–968 | 5–22 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=protected%2018650%20Li-ion%20battery) |

- **Rozetka.** Купуй тільки із захистом (PCB/BMS) і там, де є повернення.
- **Prom.ua.** Ємність підбирай після реального виміру Вт·год.
- **AliExpress.** Позиція, де підробка небезпечна фізично, а не лише фінансово. ⚠️ Заявлена ємність часто завищена в рази; трапляються елементи без захисту під виглядом захищених.

### Заряджання + power-path + 5 В

| Вендор | Канал | За одиницю, ₴ | У валюті продавця | Пошук |
|---|---|---:|---|---|
| AliExpress | ALI | 352–1 232 | 8–28 USD | [запит](https://www.aliexpress.com/wholesale?SearchText=UPS%20power%20module%205V%20boost%20charging%20power%20path) |
| Prom.ua | UA | 550–1 600 | 550–1600 UAH | [запит](https://prom.ua/ua/search?search_term=%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%20UPS%205V%20%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D1%80%D0%B5%D0%B1%D1%96%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B6%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%20Raspberry) |
| Electronoff | UA | 600–1 700 | 600–1700 UAH | [запит](https://duckduckgo.com/?q=%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%20%D0%B6%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%20UPS%205V%20Raspberry%20Pi%20site%3Aelectronoff.ua) |
| OLX | UA | лише пошук | за оголошенням | [запит](https://www.olx.ua/uk/list/q-%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C-UPS-5V/) |

- **AliExpress.** UPSPACK V3 та аналоги. TP4056 окремо цю задачу не закриває.
- **Prom.ua.** Перевіряй заявлений безперервний струм із запасом, а не піковий.
- **Electronoff.** Швидка заміна, якщо модуль не витягне навантаження.
- **OLX.** Питай реальний струм під навантаженням, а не цифру з опису.

## Вендори

| Вендор | Канал | Термін | Доставка | Мито | Сильні позиції |
|---|---|---|---|---|---|
| [AliExpress](https://www.aliexpress.com/) | ALI | 14–45 днів | Часто «безкоштовно» — вартість уже закладена в ціну лоту | Перевір чинний безмитний поріг на посилку перед замовленням | Дисплеї, Choc-перемикачі, ковпачки, USB-аудіо, макроплати, модулі живлення |
| [Rozetka](https://rozetka.com.ua/) | UA | 1–3 дні | Нова пошта / кур’єр, часто безкоштовно від суми | Немає | microSD, кабелі, кардридери, блоки живлення, акумулятори |
| [Prom.ua](https://prom.ua/) | UA | 1–5 днів | Нова пошта, часто накладений платіж | Немає | Дрібні модулі, перемикачі, кріплення, дисплеї |
| [OLX](https://www.olx.ua/) | UA | 1–5 днів · залежить від продавця | Нова пошта, передоплата або накладений платіж | Немає | Вживані Raspberry Pi, дисплеї, макроплати, блоки живлення — там, де вторинний ринок живий |
| [Imrad](https://imrad.com.ua/) | UA | 1–4 дні | Самовивіз Київ / Нова пошта | Немає | Raspberry Pi, оригінальні блоки живлення, компоненти з документацією |
| [RCS Components](https://rcscomponents.kiev.ua/) | UA | 1–5 днів | Нова пошта | Немає | Raspberry Pi та аксесуари, пасивні компоненти, роз’єми |
| [Космодром](https://kosmodrom.ua/) | UA | 1–4 дні | Нова пошта / самовивіз | Немає | Радіодеталі, роз’єми, монтажні матеріали, інструмент |
| [Electronoff](https://electronoff.ua/) | UA | 1–4 дні | Нова пошта / самовивіз Київ | Немає | Arduino-екосистема, дисплеї, модулі, макетні матеріали |
| [Voron](https://voron.ua/) | UA | 1–4 дні | Нова пошта | Немає | Компоненти, інструмент, витратні матеріали для пайки |
| [Plexiwire](https://plexiwire.com.ua/) | UA | 1–3 дні | Нова пошта | Немає | PETG/PLA українського виробництва для друку корпуса |
| [PJRC (виробник)](https://www.pjrc.com/store/teensy41.html) | OEM | 7–21 день | Доставка зі США оплачується окремо | Мито + ПДВ понад безмитний поріг | Оригінальний Teensy 4.1 і фірмові кабелі |
| [Mouser](https://www.mouser.com/) | OEM | 5–14 днів | Кур’єрська доставка, поріг безкоштовної високий | Мито + ПДВ понад безмитний поріг | Оригінальні компоненти з підтвердженим походженням |

- **AliExpress — на що дивитись.** Клони Teensy, підроблені microSD, завищена ємність акумуляторів. Дивись відгуки з фото, відкривай спір до закриття захисту покупця.
- **Rozetka — на що дивитись.** Маркетплейс: продавці різні. Перевіряй, хто фактичний відправник і чи є гарантійний талон.
- **Prom.ua — на що дивитись.** Багато позицій — той самий товар з AliExpress із націнкою в кілька разів. Порівнюй із колонкою ALI перед покупкою.
- **OLX — на що дивитись.** Оголошення, а не магазин: ціни в БД немає, гарантії немає, повернення немає. Плати через захищену угоду й перевіряй пристрій до оплати. Карти пам’яті, ковпачки та акумулятори звідси не беремо: зношений флеш і елементи без історії не варті економії.
- **Imrad — на що дивитись.** Асортимент орієнтований на юросіб; наявність конкретного SKU перевіряй до оплати.
- **RCS Components — на що дивитись.** Ціна в картці може бути без ПДВ — звіряй підсумок у кошику.
- **Космодром — на що дивитись.** Готові DIY-модулі вибірково; специфічні дисплеї шукай в іншому місці.
- **Electronoff — на що дивитись.** Здебільшого ті самі китайські модулі — виграш у швидкості й поверненні, не в ціні.
- **Voron — на що дивитись.** Перевіряй фактичну наявність: частина позицій під замовлення.
- **Plexiwire — на що дивитись.** Колір і партія впливають на усадку — для точного корпуса друкуй з однієї котушки.
- **PJRC (виробник) — на що дивитись.** Доставка та мито можуть суттєво додати до цінника — рахуй підсумкову вартість, а не ціну на сайті.
- **Mouser — на що дивитись.** Вигідно лише одним великим замовленням на кілька позицій одразу.
