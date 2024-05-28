let $=document;
let all_persen=$.querySelectorAll('.content');
let prompt_frist_page=$.querySelector('#prompt');
let button_start=$.querySelector('.button-start');
let persen;
let i;

for(i=0;i<all_persen.length;i++){
    all_persen[i].addEventListener('click',select_persen);
}
function select_persen(event){
   persen=event.target.parentElement;
   persen_value=event.target.parentElement.getAttribute('value');
    persen.style.border='blue 2px solid';
    persen.children[1].style.backgroundColor='aqua';

    all_persen.forEach(function(event2){
        if(event2.getAttribute('value')!=persen.getAttribute('value'))
            if(event2.style.border!='red 1px solid'){
                event2.style.border='red 1px solid';
                event2.children[1].style.backgroundColor='rgb(75, 99, 99)';
            }
    });
    if(persen_value)
        button_start.style.backgroundColor=' burlywood';

    console.log(persen_value)
}
