let text = document.getElementById('text')
let form = document.querySelector('form')
let demo = document.querySelector('#demo')

form.addEventListener('submit', calıstır)
function calıstır(e) {
    const rastgeleSayi = Math.floor(Math.random() * 99) + 1
    const kullaniciSayisi = text.value
    let birlik = Math.floor(rastgeleSayi / 10)
    let ondalık = rastgeleSayi % 10
    let BirlerKullanici = Math.floor(kullaniciSayisi / 10)
    let ondalıkKullanici = kullaniciSayisi % 10

    if (isNaN(kullaniciSayisi) || kullaniciSayisi == '') {
        alert('Lütfen Sayi Giriniz')
    }

    else if (kullaniciSayisi <= 0 || kullaniciSayisi > 99) {
        alert('1 ile 99 Arası Sayi Giriniz.')
    }
    
    else {
        if (rastgeleSayi == kullaniciSayisi) {

            demo.innerHTML = 'TEBRİKLER 10000 TL KAZANDINIZ ' + ' Girdiğiniz Sayi: ' + kullaniciSayisi + ' Sistem Sayisi: ' + rastgeleSayi;

        }

        else if (birlik === ondalıkKullanici && ondalık === BirlerKullanici) {

            demo.innerHTML = 'TEBRİKLER 5000 TL KAZANDINIZ ' + 'Girdiğiniz Sayi: ' + kullaniciSayisi + ' Sistem Sayisi: ' + rastgeleSayi;

        }

        else if (birlik === BirlerKullanici || birlik === ondalıkKullanici || ondalık === BirlerKullanici || ondalık === ondalıkKullanici) {

            demo.innerHTML = 'TEBRİKLER 1000 TL KAZANDINIZ ' + ' Girdiğiniz Sayi: ' + kullaniciSayisi + ' Sistem Sayisi: ' + rastgeleSayi;

        }
        else {
            demo.innerHTML = 'Tekrar Deneyiniz!!!! ' + ' \n Girdiğiniz Sayi: ' + kullaniciSayisi + ' Sistem Sayisi: ' + rastgeleSayi;

        }

    }
    text.value = ''

    e.preventDefault()

}
