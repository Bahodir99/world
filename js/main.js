let elCountry = document.querySelector('.countryes');


const countries = [
    {
        id:1,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytZUINdBet2-G2YLw34DwIvsDDupYqNTgng&usqp=CAU',
        name : 'Germany',
        population: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin'
    },
    {
        id:2,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStLCwjHko3RVGheTvVMInchH_GtYl1nd_KA&usqp=CAU',
        name : 'United States of America',
        population: ' 323,947,000',
        Region: 'Americas',
        Capital: 'Washington, D.C.'
    },  
    {
        id:3,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsGRZ2VLPldPYr7nn5AlXAf-p8Ir5tosusg&usqp=CAU',
        name : 'Brazil',
        population: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasília'
    },
    {
        id:4,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviijgKLIqT4OeO8rNGi0mqBQM-vTL0J-YLw&usqp=CAU',
        name : 'Iceland',
        population: '334,300',
        Region: 'Europe',
        Capital: 'Reykjavík'
    },    
    {
        id:5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJ8-POyuUHXRZG8E-izzJ43APaUQ53CFqeA&usqp=CAU',
        name : 'Afghanistan',
        population: '27,657,145',
        Region: 'Asia',
        Capital: ' Kabul'
    },    
    {
        id:6,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61Lz_Nycc28H1wXmeviwTTl6Scpe5xb3pfQ&usqp=CAU',
        name : 'Åland Islands',
        population: '28,875',
        Region: 'Europe',
        Capital: 'Mariehamn'
    },    
    {
        id:7,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd57u4pCwHok9dQO3auinDwAAJyKmoykbLg&usqp=CAU',
        name : 'Albania',
        population: '2,886,026',
        Region: 'Europe',
        Capital: 'Tirana'
    },
    {
        id:8,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQChi887mq6QlELNt-GjEObsIwZ7LqOeygQ&usqp=CAU',
        name : 'Algeria',
        population: '40,400,000',
        Region: 'Africa',
        Capital: 'Algiers'
    },
]


countries.map((i)=>{
    let elLi = document.createElement('li')

    elLi.innerHTML = `
    <img src="${i.img}" alt="">
    <div class="info">
        <h3>${i.name}</h3>
        <p>${i.population}</p>
        <p>${i.Region}</p>
        <p>${i.Capital}</p>
    </div>
    `
    elLi.classList.add('country')
    elCountry.appendChild(elLi)
})

let elMode = document.querySelector('.theme');
let elBody = document.querySelector('body');
let elSearch = document.querySelector('search');
let elHead = document.querySelector('.header1');
let elSelect = document.querySelector('.select');
let elCountries = document.querySelector('.country');
let elInp = document.querySelector('.input__light')
let elTheme = document.querySelector('.theme')


elMode.addEventListener('click' , (()=>{

    elBody.classList.toggle('body__dark')
    elSearch.classList.toggle('search__dark')
    elHead.classList.toggle('header__dark')
    elSelect.classList.toggle('select__dark')
    elCountries.classList.toggle('country__dark')
    elInp.classList.toggle('input__dark')
    elTheme.classList.toggle('theme__dark')

}))