import { movies } from "./movies.js";

let rowData = document.querySelector('#row')
let serch = document.querySelector('#serch')
let btn = document.querySelector('#btn')
let data = []
let za = document.querySelector('#za')
let az = document.querySelector('#az')
let sakkiz = document.querySelector('#sakkiz')
let ikki = document.querySelector('#ikki')
let horrorBtn = document.querySelector('#horrorBtn')
let dbtn = document.querySelector('#dbtn')
let advan = document.querySelector('#advan')
let Action = document.querySelector('#Action')
let Fantasy = document.querySelector('#Fantasy')



async function renderData(filterData = movies) {
    rowData.innerHTML = '';
    filterData.forEach((iteam) => {
        let cardmoves = document.createElement('div')
        cardmoves.classList.add('w-[250px]', 'bg-[#333333]', 'rounded-[10px]', 'text-center')

        cardmoves.innerHTML = `
                  <div class="w-[244px] h-[368px] bg-[#333333] text-center text-white rounded-[10px]">
                    <img src="1200x675mf.jpg.png" class="mx-auto" alt="">
                  <h2 class="my-[30px]">${iteam.Title}</h2>
                <ul class="flex gap-[27px] justify-center text-[16px]"><li>${iteam.imdb_rating}</li> <li>${iteam.movie_year}</li> <li>${iteam.runtime}</li></ul>
                <p class="text-[12px]">${iteam.Categories}</p>
                <button class="px-[10px] py-[10px] bg-[#5CB85C] text-white rounded-md my-[20px]">More info</button>
            </div>
        `
        rowData.append(cardmoves)
    });
}
renderData();


btn.addEventListener('click', function () {
    let inputSearch = serch.value.toLowerCase()
    let filterData = movies.filter(item => {
        if (typeof item.Title === 'string') {
            return item.Title.toLowerCase().includes(inputSearch);
        }
        return false;   
    }
    );
    renderData(filterData);
});

za.addEventListener('click', () => {
    movies.sort((a, b) => {
        const titleA = typeof a.Title === 'string' ? a.Title : '';
        const titleB = typeof b.Title === 'string' ? b.Title : '';
        
        return titleB.localeCompare(titleA);
    });
    renderData(movies);
});
az.addEventListener('click', () => {
    movies.sort((a, b) => {
        if (typeof a.Title === 'string' && typeof b.Title === 'string') {
            return a.Title.localeCompare(b.Title);
        }
        return 0;  
    });
    renderData(movies);
});
sakkiz.addEventListener('click', () => {
    movies.sort((a, b) => a.movie_year - b.movie_year);    
    renderData(movies);  
});
ikki.addEventListener('click', () => {
    movies.sort((a, b) => b.movie_year - a.movie_year);    
    renderData(movies);  
});


function filterHorror() {
    let filterData = movies.filter(item => 
        typeof item.Categories === 'string' && 
        item.Categories.toLowerCase().includes('horror')
    );
    renderData(filterData);
}
horrorBtn.addEventListener('click', filterHorror);


function filterDrama() {
    let filterData = movies.filter(item => 
        item.Categories.includes('Drama')
    );
    renderData(filterData);
}
dbtn.addEventListener('click', filterDrama);

function fliteradven() {
    let filterData = movies.filter(item =>
        item.Categories.includes('Adventure')
    )
    renderData(filterData);
}
advan.addEventListener('click' , fliteradven)

function fliterAction(){
    let filterData = movies.filter(item =>
        item.Categories.includes('Action') 
    )
    renderData(filterData);
}
Action.addEventListener('click', fliterAction)

function ShowFantasy(){
    let filterData = movies.filter(item => 
        item.Categories.includes('Fantasy')
    )
    renderData(filterData);
}
Fantasy.addEventListener('click', ShowFantasy)


