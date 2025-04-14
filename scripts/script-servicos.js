let bg= document.getElementbyid("stars");
let moon= document.getElementbyid("moon");
let mountains_behind= document.getElementbyid("mountains_behind");
let mountains_front= document.getElementbyid("mountains_front");
let text = document.getElementbyid("text");
let btn = document.getElementbyid("btn");

window.addEventListener("scroll", function(){
  let value= window.scrollY;

  stars.style.left= value * 0.25 + "px";
  moon.style.top= value * 10.5 + "px";
  mountains_behind.style.top= value * 0.15 + "px";
  mountains_front.style.top= value * 0.15 + "px";
  text.style.marginRight= value * 4 + "px";
});