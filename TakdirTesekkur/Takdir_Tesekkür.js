let form = document.querySelector('form')
let beden = document.getElementById('beden')
let din = document.getElementById('din')
let görsel = document.getElementById('görsel')
let matematik = document.getElementById('matematik')
let müzik = document.getElementById('müzik')
let inkilap = document.getElementById('inkilap')
let turkce = document.getElementById('turkce')
let tasarım = document.getElementById('tasarım')
let dil = document.getElementById('dil')
let fen = document.getElementById('fen')
let yazi = document.getElementById('sonuc')


const dersler = [beden, din, görsel, matematik, müzik, inkilap, turkce, tasarım, dil, fen]

form.addEventListener('submit', belgeHesapla)

function belgeHesapla(e) {
    let sonuc = 0
    for (let i = 0; i < dersler.length; i++) {
        sonuc = sonuc + parseInt(dersler[i].value)
    }
    sonuc = sonuc / dersler.length
    yazi.style.background = 'red'

    if(beden.value=='' || din.value==='' || matematik.value==='' || fen.value===''|| dil.value==='' || görsel.value==='' || müzik.value===''|| din.value==='' || inkilap.value==='' || turkce.value==='')
    {
        alert('Boş Bırakmayınız!!!!')
    }
    else if(isNaN(beden.value)||isNaN(din.value)||isNaN(matematik.value)||isNaN(fen.value)||isNaN(dil.value)||isNaN(görsel.value)||isNaN(müzik.value)||isNaN(din.value)||isNaN(inkilap.value)||isNaN(turkce.value))
    {
        alert('Sayi Giriniz')
    }

else {
    if (beden.value < 45 || din.value < 45 || matematik.value < 45 || fen.value < 45 || dil.value < 45 || görsel.value < 45 || müzik.value < 45 || din.value < 45 || inkilap.value < 45 || turkce.value < 55) {
        yazi.innerHTML = 'Dönem Puanı: ' + sonuc.toFixed(2) + ' Sonuç: ' + 'Maalesef herhangi bir belge almaya hak kazanamadınız (Puan ortalamanız Belge almak için yeterli ancak ön koşul olarak Türkçe dersinden 55,00 diğer derslerin her birinden 45,00 puandan aşağı bir puanınız olmamalıdır.)'
        yazi.style.background = 'red'
    }
    
    else if (sonuc < 70) {
        yazi.innerHTML = 'Dönem Puanı: ' + sonuc.toFixed(2) + ' Sonuç: ' + 'Maalesef Herhangi Bir Belge Almaya Hak Kazanamadınız'}
    else if (sonuc >=85 && sonuc < 101) {

        yazi.innerHTML = 'Dönem Puanı: ' + sonuc.toFixed(2) + ' Sonuç: ' + 'Tebrikler Takdir Belgesi Almaya Hak Kazandınız'
        yazi.style.background = 'rgb(255,0,0)';
        yazi.style.background = 'linear-gradient(221deg, rgba(255,0,0,1) 35%, rgba(189,230,0,1) 90%)';
    }
    else if (sonuc < 85 && sonuc > 69) {
        yazi.innerHTML = 'Dönem Puanı: ' + sonuc.toFixed(2) + ' Sonuç: ' + 'Tebrikler Teşekkür Belgesi Almaya Hak Kazandınız'
        yazi.style.background = ' rgb(0,181,255)';
        yazi.style.background = 'linear-gradient(221deg, rgba(0,181,255,1) 35%, rgba(189,230,0,1) 90%)';
    }
    e.preventDefault()

}

    }
