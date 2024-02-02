var menuicon=document.getElementById("menu");
var sidebar =document.querySelector(".sidebar")
var container =document.getElementById("container")
menuicon.addEventListener("click",()=>{
    sidebar.classList.toggle("smallsidebar")
    container.classList.toggle("largecontainer")
});