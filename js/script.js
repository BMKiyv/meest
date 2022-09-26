let burger = document.querySelector('#mobile-menu');
let nav = document.querySelector('.nav__list');
let language = document.querySelector('.credential__label-language');
let languageFooter = document.querySelector('.credential__label-language-footer');
let languageBlock = document.querySelector('.credentials__list');
let languageBlockFooter = document.querySelector('.credentials__list-footer.credentials__list');
let languageText = document.querySelectorAll('.credentials__list-item.credentials__list-item-header');
let languageTextFooter = document.querySelectorAll('.credentials__list-item-footer');
let check = document.querySelectorAll('.credentials__list-checked');
let inputs = document.querySelectorAll('#parcel, #transfer');
let inputsContainer = document.querySelector('.info__wrap-buttons')
let popup = document.querySelector('#test-modal');
let calculation= document.querySelector('.sub-button');
let ship = document.querySelector('.main-button');
let openCalculate = document.querySelectorAll('.first__links-item');
let parcel = document.querySelector('#parcel')
let transfer = document.querySelector('#transfer')
let radiobuttons = document.querySelector('.info__wrap')
let parcelList = document.querySelector('#parcellist')
let transferList = document.querySelector('#transferlist')
let languageInputFooter = document.querySelector('#credential-input-footer')
let languageInput = document.querySelector('#credential-input')
let languageImg = document.querySelectorAll('.credential-img')
let modalWrap = document.querySelector('.modal__wrap')
let closeModal = document.querySelector('.calculator-popup-dismiss')
let header = document.querySelector('.header')
let iframeWindow = document.querySelector('#test-modal')

iframeWindow.addEventListener('message',(e)=>{
    if (e){
        console.log('recieved message', e);
    }
})

openCalculate[2].addEventListener('click',function(e){
    e.preventDefault()
    console.log('opened');
    popup.style.display = 'block'
    modalWrap.style.display = 'block'
    header.style.zIndex = 0
})

function closePopup(e){
    e.preventDefault()
    popup.style.display = 'none'
    modalWrap.style.display = 'none'
    header.style.zIndex = 3
}

// ship.addEventListener('click', closePopup)
// calculation.addEventListener('click',closePopup)
// closeModal.addEventListener('click',closePopup)

function listCountries(e){
    let target = e.target
    if(target===parcel){
        parcelList.style.display = 'flex'
        transferList.style.display = 'none'
    }
    else if (target === transfer){
        parcelList.style.display = 'none'
        transferList.style.display = 'flex'
    }

}

transfer.addEventListener('click',listCountries)
parcel.addEventListener('click', listCountries)


nav.addEventListener('click', function(){
    burger.checked = false
});

const handleClick = event => {
    event.preventDefault()  
    const headerOffset = 50
    const contentAnchors = document.querySelectorAll('#main, #how-it-works, #information-for-countries, #benefts, #contacts, #faq')
    const href = event.target.getAttribute("href")
    const elementToScroll = Array.from(contentAnchors).filter(item =>`#${item.getAttribute("id")}` === href ) 
    let elementPosition = elementToScroll[0].offsetTop
    if(elementPosition===882){
        elementPosition = 862
    }
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth"
    })
  }

  document.querySelectorAll(".nav__list-item").forEach(item => 
  item.addEventListener("click", handleClick))

let countriesInfoHundle = function (e) {
    let target = e.target        
    for(let item of inputs){
        if (target===item){
            target.checked = true
            item.nextElementSibling.classList.add('info__wrap-radio-active')               
        }
        else{
            target.checked = false
            item.nextElementSibling.classList.remove('info__wrap-radio-active')
        }
    }
};
let languageHundle = function (e) {
    let target = e.target
    console.log(target.name, e);
    for(let i=0;i<languageText.length;i++){
        if(target===languageText[i] || target===languageText[i].firstElementChild || target==languageText[i].lastElementChild){
            if(languageText[i].firstElementChild.innerHTML==='Ukraine'){
                language.innerHTML = 'UK'
                languageFooter.innerHTML= 'UK'
            }
            if(languageText[i].firstElementChild.innerHTML==='Russian'){
                language.innerHTML = 'RU'
                languageFooter.innerHTML= 'RU'
            }
            if(languageText[i].firstElementChild.innerHTML==='English'){
                language.innerHTML = 'EN'
                languageFooter.innerHTML= 'EN'
            }
            languageText[i].lastElementChild.style.display = 'block'
            languageTextFooter[i].lastElementChild.style.display = 'block'
        }
        else{
            languageText[i].lastElementChild.style.display = 'none';
            languageTextFooter[i].lastElementChild.style.display = 'none';
        }

    }
    
    languageInput.checked = false;
    languageBlock.style.display = 'none'
    languageImg[0].setAttribute('src','./images/opening.svg')
}
let languageHundleFooter = function (e) {
    let target = e.target
    for(let i=0;i<languageTextFooter.length;i++){
        if(target===languageTextFooter[i] || target===languageTextFooter[i].firstElementChild || target==languageTextFooter[i].lastElementChild){
            if(languageTextFooter[i].firstElementChild.innerHTML==='Ukraine'){
                language.innerHTML = 'UK'
                languageFooter.innerHTML= 'UK'
            }
            if(languageTextFooter[i].firstElementChild.innerHTML==='Russian'){
                language.innerHTML = 'RU'
                languageFooter.innerHTML= 'RU'
            }
            if(languageTextFooter[i].firstElementChild.innerHTML==='English'){
                language.innerHTML = 'EN'
                languageFooter.innerHTML= 'EN'
            }
            languageText[i].lastElementChild.style.display = 'block'
            languageTextFooter[i].lastElementChild.style.display = 'block'
        }
        else{
            languageText[i].lastElementChild.style.display = 'none'
            languageTextFooter[i].lastElementChild.style.display = 'none'
        }

    }
    
    languageInputFooter.checked = false;
    languageBlockFooter.style.display = 'none'
    languageImg[1].setAttribute('src','./images/opening.svg')
}

inputsContainer.addEventListener('click', countriesInfoHundle);
languageBlock.addEventListener('click', languageHundle);
languageBlockFooter.addEventListener('click', languageHundleFooter);
languageInput.addEventListener('click',function(){
    if(languageInput.checked===true){
    languageBlock.style.display = 'block'
    languageImg[0].setAttribute('src','./images/closing.svg')
    }
    if(languageInput.checked===false){
    languageBlock.style.display = 'none'
    languageImg[0].setAttribute('src','./images/opening.svg')
    }
})
languageInputFooter.addEventListener('click',function(){
    if(languageInputFooter.checked===true){
    languageBlockFooter.style.display = 'block'
    languageImg[1].setAttribute('src','./images/closing.svg')
    }
    if(languageInputFooter.checked===false){
    languageBlockFooter.style.display = 'none'
    languageImg[1].setAttribute('src','./images/opening.svg')
    }
})
