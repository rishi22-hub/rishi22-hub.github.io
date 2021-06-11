var display=document.getElementById('scr');
var buttons=document.querySelectorAll('button');
var disp1='';
var isValid = function (s) {

   const obj = {
     "(": ")"
   }
 
   const stack = [];
 
   for (const paran of s) {
     if (obj.hasOwnProperty(paran)) {
       stack.push(paran)
     } else {
       const closeParan = stack.pop();
       if (paran !== obj[closeParan]) {
         return false;
       }
     }
   }
 
   return stack.length === 0;
 };
for(items of buttons){
    items.addEventListener('click',(e)=>{
      buttontext=e.target.innerText;
        if(buttontext==='C'){
            display.value="";
            disp1='';
        }
        else if(buttontext==="="){
            
            display.value=eval(disp1);
            disp1=display.value;
        }
        else if(buttontext==='backspace'){var str=disp1.slice(0,-1);disp1=str;display.value=disp1;}
        else {disp1+=buttontext;display.value=disp1;}
    }
    )
}