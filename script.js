let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");

let passbox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");

let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

sliderValue.textContent=  inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent= inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passbox.value= genPassword();
})

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmopqrstuvwxyz"
let allNumbers="0123456789";
let allSymbols="~^*&$#@";


function genPassword(){
    let genPassword="";
    let allChars="";
    allChars+= lowercase.checked?lowerChars:"";
    allChars+= uppercase.checked?upperChars:"";
    allChars+= numbers.checked?allNumbers:"";
    allChars+= symbols.checked?allSymbols:"";

   if(allChars ==""|| allChars.length==0){
    return genPassword;
   }

   let i=1;
   while(i<=inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
   }
    

    return genPassword;

}
copyIcon.addEventListener('click',()=>{
    if(passbox.value!=""|| passbox.value>=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password copied";
        setTimeout(()=>{
            copyIcon.innerHTML ="content-copy";
            copyIcon.title="";
        },2000)

    }
})