let inputBox=document.querySelector("textarea");
let btn=document.querySelector(".save");

function saveText(){
    const todo= inputBox.value;
    localStorage.setItem('savedText',todo);
}
window.onload= function(){
    const savedText=localStorage.getItem('savedText');
    if(savedText){
        inputBox.value=savedText;
    }
}
function clearText(){
    localStorage.clear();
    inputBox.value="";
}
// document.addEventListener("click",saveText());
// document.addEventListener("click",clearText());
