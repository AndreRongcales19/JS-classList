const box = document.querySelector(".box");
const run = document.querySelector(".run");
const change = document.querySelector(".change");
const christmas = document.querySelector(".christmas");
const lights = document.querySelector(".lights");

run.addEventListener("click", function(){
    box.classList.toggle("error");
});

// change.addEventListener("click", function(){
//     box.classList.remove("error");
// });

// setInterval(function (){
//     box.classList.toggle("error");
// }, 2000);

lights.addEventListener("click", function(){
    christmas.classList.toggle("blinker");
});