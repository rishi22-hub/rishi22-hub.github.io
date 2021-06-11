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
        else if(buttontext==='sin'){display.value='sin';
     var x=prompt("enter angle");
        display.value=Math.sin(x*Math.PI/180);disp1=display.value;}
        else if(buttontext==='cos'){display.value='cos';
        var x=prompt("enter angle");
           display.value=Math.cos(x*Math.PI/180);disp1=display.value;}
           else if(buttontext==='tan'){display.value='tan';
           var x=prompt("enter angle");
              display.value=Math.tan(x*Math.PI/180);disp1=display.value;}
        else {disp1+=buttontext;display.value=disp1;}
    }
    )
}