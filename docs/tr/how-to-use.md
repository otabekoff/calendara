# Calendara Dokümantasyonu

## Genel Bakış

**Calendara**, JavaScript için özelleştirilebilir bir takvim kütüphanesidir ve web uygulamalarınıza takvim ekleyip görüntülemenizi sağlar. Çeşitli özelleştirme seçenekleri sunar ve kullanımı kolaydır.

## Ne Zaman Kullanılır

Web uygulamalarınıza entegre edilebilen ve esnek bir takvim bileşenine ihtiyaç duyduğunuzda Calendara’yı kullanabilirsiniz. Basit bir ay görünümünden tam yıl görünümüne kadar, Calendara tarihlerle başa çıkmak ve kullanıcı dostu bir formatta görüntülemek için kolay bir yol sunar.

## Kurulum

Calendara’yı kurmak için npm kullanabilirsiniz. Aşağıdaki komutu çalıştırın:

```bash
npm install @otabekoff/calendara
```

## Kullanım

JavaScript projenizde Calendara’yı nasıl kullanacağınızla ilgili temel bir örnek:

```js
import Calendar from '@otabekoff/calendara';

const calendar = new Calendar({
    monthNames: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    weekNames: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    buttonTexts: {
        prevMonth: 'Önceki Ay',
        nextMonth: 'Sonraki Ay',
        prevYear: 'Önceki Yıl',
        nextYear: 'Sonraki Yıl',
        viewYear: 'Tam Yılı Görüntüle'
    }
});
calendar.render();
```

## Konfigürasyon

- **monthNames**: Takvimde görüntülenecek ay adlarının listesi.
- **weekNames**: Takvimde görüntülenecek hafta günlerinin adlarının listesi.
- **buttonTexts**: Navigasyon düğmeleri için özelleştirilebilir metinler.

## Lisans

Calendara [MIT Lisansı](../../LICENSE.txt) altında lisanslanmıştır.

## Yazar

Otabek Sadiridinov