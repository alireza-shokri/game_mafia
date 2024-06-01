let $=document;
let contentAll=$.querySelector('.contentAll');
let all_persen=$.querySelectorAll('.content');
let prompt_frist_page=$.querySelector('#prompt');
let radio=$.querySelectorAll('.radio-first-page')
let kadre_pasword=$.querySelector('.kadre-pasword');
let input_pasword=$.querySelector('#input-pasword')
let button_start=$.querySelector('.button-start');
let img_cansel=$.querySelector('.img-cansel');
let persen;
let i;

img_cansel.addEventListener('click',cansel);
input_pasword.addEventListener('keyup',keydowninput);

// for frist bar--------------------------------------------------------///
for(i=0;i<all_persen.length;i++){
    all_persen[i].addEventListener('click',select_persen);
}


// keyup---------------------------------------------------------///
button_start.disabled=true;
function keydowninput(){
    if(input_pasword.value.length==10){button_start.disabled=false;
        button_start.style.backgroundColor=' burlywood';
    }
    else button_start.style.backgroundColor=' rgb(57, 61, 68)';
}

// select persen---------------------------------------------------------///
function select_persen(event){
    for(i=0;i<all_persen.length;i++) all_persen[i].removeEventListener('click',select_persen);

    kadre_pasword.style.top='40%';
    contentAll.style.opacity='20%';

   persen=event.target.parentElement;
   if(persen.getAttribute('class')!='contentAll'){
        persen.style.border='aqua 1px solid';
        persen.children[1].style.backgroundColor='aqua';
        event.target.parentElement.children[2].checked=true;
        persen.style.transform="scale(0.95)";
   }
    all_persen.forEach(function(event2){
        if(event2.getAttribute('value')!=persen.getAttribute('value'))
            if(event2.style.border!='red 1px solid'){
                event2.style.border='red 1px solid';
                event2.children[1].style.backgroundColor='rgb(75, 99, 99)';
                event2.style.transform="scale(1)";
            }
    });
}


// cansle menu pasword---------------------------------------------------------///
function cansel(){
    kadre_pasword.style.top='-200px';
    contentAll.style.opacity='100%';
    for(i=0;i<all_persen.length;i++){
        all_persen[i].addEventListener('click',select_persen);
    }
}