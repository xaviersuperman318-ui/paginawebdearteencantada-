const nav =document.querySelector("#nav");
const abrir= document.querySelector("#abrir");
const cierrar =document.querySelector("#cierrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})
 
cierrar.addEventListener("click", () =>{
    nav.classList.remove("visible")
})  