const gorevListesi = document.querySelector('.text')
const gorevListesiBtn = document.querySelector('.btn')
const ulListesi = document.querySelector('.gorev-listesi')

gorevListesiBtn.addEventListener('click',gorevYaz)
ulListesi.addEventListener('click',gorevHareketi)
document.addEventListener('DOMContentLoaded',localStorageOku)

function gorevHareketi(e){
  
  const hareketYeri=e.target
  if(hareketYeri.classList.contains('gorev-btn-tamamlandi'))
  {
    hareketYeri.parentElement.classList.toggle('gorev-tamamlandi')
  }
  if(hareketYeri.classList.contains('gorev-btn-sil'))
  {
   if(confirm('Silme İşlemini Onayla'))
   {
    hareketYeri.parentElement.classList.toggle('kaybol')
    const silme= hareketYeri.parentElement.children[0].innerText
    localStorageSil(silme);
    hareketYeri.parentElement.addEventListener('transitioend',function(){
    hareketYeri.parentElement.remove()
  })
   }
    
      
  
  }
}


function gorevYaz(e){
e.preventDefault()
if(gorevListesi.value.length>0)
{
  gorevItem(gorevListesi.value)

localStorageKaydet(gorevListesi.value)
gorevListesi.value=''

}
else{
  alert('Boş Görev Girilmez')
}

}



function localStorageKaydet(gorevListesi)
{
  let gorevler;

  if(localStorage.getItem('gorev')=== null)
  {
    gorevler=[]
  }
  else{
    gorevler=JSON.parse(localStorage.getItem('gorev'))
  
  }
  gorevler.push(gorevListesi)
  localStorage.setItem('gorev',JSON.stringify(gorevler))
}


function localStorageOku(){
  let gorevler;

  if(localStorage.getItem('gorev')=== null)
  {
    gorevler=[]
  }
  else{
    gorevler=JSON.parse(localStorage.getItem('gorev'))
  
  }
  gorevler.forEach(gorev => {
    gorevItem(gorev)
    
  });
}

function gorevItem(gorev)
{
  const gorevDiv=document.createElement('div')
gorevDiv.classList.add('gorev-item')
ulListesi.appendChild(gorevDiv)

const gorevLi=document.createElement('li')
gorevLi.classList.add('gorev-tanimi')
gorevLi.innerText=gorev
gorevDiv.appendChild(gorevLi)

const btnTamamlandi=document.createElement('button')
btnTamamlandi.classList.add('gorev-btn')
btnTamamlandi.classList.add('gorev-btn-tamamlandi')
btnTamamlandi.innerHTML='<i class="far fa-check-square"></i>'
gorevDiv.appendChild(btnTamamlandi)

const btnSil=document.createElement('button')
btnSil.classList.add('gorev-btn')
btnSil.classList.add('gorev-btn-sil')
btnSil.innerHTML='<i class="far fa-trash-alt"></i>'
gorevDiv.appendChild(btnSil)

}

function localStorageSil(gorev){ 
   let gorevler;
  
  if(localStorage.getItem('gorev')=== null)
  {
    gorevler=[]
  }
  else{
    gorevler=JSON.parse(localStorage.getItem('gorev'))
  
  }
const silinicekEleman=gorevler.indexOf(gorev)
  gorevler.splice(silinicekEleman,1)
  localStorage.setItem('gorev',JSON.stringify(gorevler))


}



  

