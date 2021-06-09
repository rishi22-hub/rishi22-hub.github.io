var display=document.getElementById('scr');
var buttons=document.querySelectorAll('button');
var disp1='';
for(items of buttons){
    items.addEventListener('click',(e)=>{
      buttontext=e.target.innerText;
        if(buttontext=='C'){
            display.value="";
            disp1='';
        }
        else if(buttontext=="="){
            display.value=eval(disp1);
        }
        else {disp1+=buttontext;display.value=disp1;}
    }
    )
}