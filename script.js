const Title = document.querySelector(".TitleText")
const Cursor = document.querySelector(".cursor")

document.addEventListener('mousemove', (e)=>{
    Cursor.style.transform = "translate(" + e.clientX + "px" + "," + e.clientY +"px)";
    Cursor.style.left = "-5px";
    Cursor.style.top = "-5px";
})
Title.addEventListener('mousemove',(e)=>{
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
})
Title.addEventListener('mouseleave', () => {
    Cursor.style.width = "15px";
    Cursor.style.height = "15px";
    Cursor.style.background = "rgba(255,140,0,0.75)";
    Title.classList.remove("from-left","from-right");
});

