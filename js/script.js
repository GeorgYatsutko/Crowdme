const tab = document.querySelectorAll('.tab__num'),
tabWrap = document.querySelectorAll('.tab'),
// dotLine = document.querySelectorAll('.dot-line'),
tabContent =document.querySelectorAll('.tabs__content');
console.log(tab[1]);


function hide(){
    for(let i = 0; i<tabContent.length; i++){
        tabContent[i].classList.remove('active');
        tab[i].classList.remove('active');
        // dotLine[i].classList.remove('active');
    }
}
function show(a){
    for(let i = 0; i<tab.length; i++){
        hide();
        tabContent[a].classList.add('active');
        tab[a].classList.add('active');
        // dotLine[a].classList.add('active');
    }
}

document.querySelector('.buttons').addEventListener('click', (event) =>{
    const target = event.target;

    if(target.className == 'tab'){
        for(let i = 0; i < tab.length; i++){ 
            if(target == tabWrap[i]){
                show(i);
            }
        }
    }
})