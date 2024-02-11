var score = 0;
var timer = 60;
var hitavi = 0;



function makeBubble(){
    var clutter = "";

for(var i = 1; i<=168; i++){
   var avi = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${avi}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent= score;
}

function runTimer(){
    var timers=setInterval(function() {
        if(timer>0){
        timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timers);
            document.querySelector("#pbtm").innerHTML=`<h1> GAME OVER </h1>`
        }
    },1000);
}

function getNewHit(){
  hitavi =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitavi;

}
 document.querySelector("#pbtm").addEventListener("click",function(dets){

   var clickednum = Number(dets.target.textContent);
   if (clickednum === hitavi){
    increaseScore();
    makeBubble();
    getNewHit();
   }
 });

runTimer();
makeBubble();
getNewHit();


// GSAP 
gsap.from("#panel",{
    color:"black",
    duration:2,
    x:50

})
var tl =gsap.timeline();
tl
.from("#ptop",{
    opacity:0,
    x:2,
    duration:1
})
.from("#pbtm",{
    opacity:0,
    y:1,
    duration:1
})
.from("#pbtm h1",{
    y:90,
    opacity:0,
    scale:1
})


