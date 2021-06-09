var display=document.getElementById('scr');
var buttons=document.querySelectorAll('button');
var disp1='';

const isValid = (str = '') => {
    const map=new Map();
 
   map.set('(',')');
    const b=[];
   for(let i=0;i<str.length;i++){
      if(map.has(str.charAt(i))){
         b.push(str.charAt(i));
      } else{
         let pop=b.pop();
         if(map.get(pop)!==str.charAt(i)){
            return false;
         }
      };
   };
   return b.length===0;
}
for(items of buttons){
    items.addEventListener('click',(e)=>{
      buttontext=e.target.innerText;
        if(buttontext=='C'){
            display.value="";
            disp1='';
        }
        else if(buttontext=="="){
            if(!isValid(disp1))alert('check input and correct it');
            display.value=eval(disp1);
            disp1=display.value;
        }
        else {disp1+=buttontext;display.value=disp1;}
    }
    )
}