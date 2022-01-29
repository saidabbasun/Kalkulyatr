


function myFunction(son){
   
         
       
       if(son.innerHTML == '='){
     number.value=eval(number.value);
         
        }

else{
       if(son.innerHTML == '.'||son.innerHTML == '/'|| son.innerHTML == '*' || son.innerHTML == '-' || son.innerHTML == '+' ){

         if(number.value[number.value.length-1]=='.'|| number.value[number.value.length-1]=='/'||number.value[number.value.length-1]=='*'||number.value[number.value.length-1]=='-'||number.value[number.value.length-1]=='+'){
        number.value = number.value.substr(0,number.value.length-1);
        number.value += son.innerHTML;
         }
         else{
           number.value += son.innerHTML;
         }
       }
       else{
    number.value += son.innerHTML;
       }
      
     
       }
        if(son.innerHTML== 'AC'){
              number.value='';
       }
         if(son.innerHTML =='⟵'){
         number.value=number.value.substr(0,number.value.length-2);
        
      
       }

}
