let vize = document.getElementById('vize')
let final = document.getElementById('final')
let form = document.querySelector('form')
let yazi = document.getElementById('demo')

form.addEventListener('submit', hesapla)
function hesapla(e) {

    let sonuc = vize.value * 40 / 100 + final.value * 60 / 100

    if (isNaN(vize.value) || isNaN(final.value)) {
        alert('Lütfen Sadece Sayi Giriniz')

    }
    else if (vize.value == '' || final.value == '') {
        alert('Boş Bırakmayınız')
    }
    else if (vize.value < 0 || final.value < 0 || vize.value > 100 || final.value > 100) {
        alert('1 ile 100 Arası Sayi Giriniz')
    }
    else {
        if (sonuc >= 50 && sonuc <= 100) {
            yazi.innerHTML = 'Vize Puanınız: ' + vize.value + ' Final Puanınız: ' + final.value + ' Ortalamanız: ' + sonuc.toFixed(2) + ' Durumunuz: ' + ' GEÇTİNİZ';
            yazi.style.color = 'green'
        }
        else if (sonuc < 50 && sonuc >= 0) {
            yazi.style.color = 'red'
            yazi.innerHTML = 'Vize Puanınız: ' + vize.value + ' Final Puanınız: ' + final.value + ' Ortalamanız: ' + sonuc.toFixed(2) + ' Durumunuz: ' + ' KALDINIZ';
        }

    }
    vize.value = ''
    final.value = ''


    e.preventDefault()


}


let a ={y: 10}; 
a.x = a;
console.log(JS0N.stringfy(a));