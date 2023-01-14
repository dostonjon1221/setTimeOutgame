"use strict";
const btn = document.querySelector("#btn");

 const back = document.querySelector("#back")
function muAnimation(){
    const car = document.querySelector(".car")
    let pos = 0;
    let time = setInterval(frame,10)
    function frame(){
        if(pos ==700){
            clearInterval(time)
        }else{
            pos++;
            car.style.left=pos+"px"
        }
    }
   
}
btn.addEventListener("click", muAnimation)


function myBackAnimation(){
    const car = document.querySelector(".car")
    let pos = 700;
    let time = setInterval(frame,10)
    function frame(){
        if(pos ==0){
            clearInterval()
        }else{
            pos--;
            car.style.left=pos+"px"
        }
    }
   
}
back.addEventListener("click", myBackAnimation)
