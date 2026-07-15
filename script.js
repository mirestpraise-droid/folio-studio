// Button interaction

const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";

});


button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});


});


// Scroll reveal

const cards=document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


const position=card.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}


});


});