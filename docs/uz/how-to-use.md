# Calendara qo'llanmasi

## Kirish

**Calendara** - bu JavaScript uchun sozlanishi mumkin bo'lgan kalendar kutubxonasi bo'lib, sizning veb-ilovalaringizda kalendarning ko'rsatilishini va integratsiyasini osonlashtiradi. Turli sozlash variantlarini qo'llab-quvvatlaydi va foydalanishi oson.

## Qachon?

Veb-ilovalaringiz uchun moslashtirilgan va oson integratsiya qilinadigan kalendar komponenti kerak bo'lganda Calendara-dan foydalaning. Oddiy oy ko'rinishidan to'liq yil ko'rinishigacha, Calendara sanalarni boshqarish va foydalanuvchilar uchun qulay formatda ko'rsatish uchun oddiy yo'lni taqdim etadi.

## O'rnatish

Calendara-ni o'rnatish uchun terminal ilovangizda ushbu `npm` buyrug'ini kiriting:

```bash
npm install @otabekoff/calendara
```

## Foydalanish

JavaScript loyihangizda Calendara-ni ishlatishni uchun shu misol yetarli:

```js
import Calendar from '@otabekoff/calendara';

const calendar = new Calendar({
    monthNames: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
    weekNames: ['Yak', 'Dsh', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
    buttonTexts: {
        prevMonth: 'Oldingi Oy',
        nextMonth: 'Keyingi Oy',
        prevYear: 'Oldingi Yil',
        nextYear: 'Keyingi Yil',
        viewYear: 'To'liq Yilni Ko'rish'
    }
});
calendar.render();

```

## Sozlamalar

- **monthNames**: Kalendar uchun ko'rsatiladigan oy nomlari ro'yxati.
- **weekNames**: Kalendar uchun ko'rsatiladigan hafta kunlari nomlari ro'yxati.
- **buttonTexts**: Navigatsiya tugmalari uchun sozlanadigan matnlar.

## Litsenziya

Calendara [MIT Litsenziyasi](../../LICENSE.txt)ga ega.

## Muallif

Otabek Sadiridinov
