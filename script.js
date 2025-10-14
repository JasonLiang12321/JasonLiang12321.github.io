const Title = document.querySelector(".TitleText")
const Cursor = document.querySelector(".cursor")
const Background = document.querySelector(".bg")
const Background2 = document.querySelector(".bg2")
const PortfolioPage = document.querySelector(".PortfolioPage")
const ReturnButton = document.querySelector(".Return")
const PortfolioHolder = document.querySelectorAll(".PortfolioHolder")
let IsInFocusMode = false;
let OneInFocusMode;
function hoverover(e){
    Cursor.style.width = "30px";
    Cursor.style.height = "30px";
    Cursor.style.backgroundColor = "rgba(123,231,132,1)";
    const rect = Title.getBoundingClientRect();
    if(e.clientX - rect.left <= rect.width/2){
        Title.classList.add("from-left");
        Title.classList.remove("from-right");
    }else{
        Title.classList.add("from-right");
        Title.classList.remove("from-left");
    }
}
function hoverleave(){
    Cursor.style.width = "15px";
    Cursor.style.height = "15px";
    Cursor.style.background = "rgba(255,140,0,0.75)";
    Title.classList.remove("from-left","from-right");
}
document.addEventListener('mousemove', (e)=>{

    Cursor.style.left = e.clientX - 7.5+ "px";
    Cursor.style.top = e.clientY  -7.5 + "px";
 
    
})

ReturnButton.addEventListener('click', ()=>{
    Background.style.opacity = 1;
    Background.style.pointerEvents = "auto";
    PortfolioPage.style.opacity = 0;
    PortfolioHolder.forEach(el=>{
        el.style.opacity = 0;
        el.style.pointerEvents = "none";
    });
    IsInFocusMode = false;
    PortfolioPage.style.pointerEvents = "none";
    Title.style.opacity = 1;
    Title.style.pointerEvents = "auto";


})

PortfolioHolder.forEach(el=>{
    
})

Title.addEventListener('click', ()=>{
    Background.style.opacity = 0;
    Background.style.pointerEvents = "none";
    PortfolioPage.style.opacity = 1;
    
    PortfolioHolder.forEach(el=>{
        el.style.opacity=1;
        el.style.pointerEvents = "auto";
    });
    PortfolioPage.style.pointerEvents = "auto";
    Title.style.opacity = 0;
    Title.style.pointerEvents = "none";
    

})
Title.addEventListener('mousemove',hoverover);
Title.addEventListener('mouseleave', hoverleave);

ReturnButton.addEventListener('mousemove',hoverover);
ReturnButton.addEventListener('mouseleave',hoverleave);
