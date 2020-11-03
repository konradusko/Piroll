const button_nav = document.getElementById("button_nav");
const spanMenuNav = document.getElementById("span_to_active");
const navMenu_container = document.getElementById("nav_menu_container");
const header = document.getElementById("Header");
const nav = document.getElementById("nav");
const containerToMove = document.querySelectorAll(".content_container");
let dotButtons = [document.getElementById("dot_1"),document.getElementById("dot_2"),document.getElementById("dot_3")]
button_nav.addEventListener("click", ()=>{
    if(spanMenuNav.className === "active_nav"){
        navMenu_container.className="ul_container"
        spanMenuNav.className = "line_in_menu_BTN";
    }else if(nav.className === "nav_container nav_container_fixed"){
        spanMenuNav.className = "active_nav";
        navMenu_container.className = "ul_container ul_container_active";
    }else{
        spanMenuNav.className = "active_nav";
        navMenu_container.className = "ul_container ul_container_active_not_fixed";
   
    }

})
window.addEventListener("click", (e)=>{
    if(e.target.className != "button_container_menu_nav" &&spanMenuNav.className === "active_nav"){
         navMenu_container.classList.remove("ul_container_active");
        spanMenuNav.className = "line_in_menu_BTN";
    }
})

window.addEventListener("scroll", (e)=>{
    if(document.documentElement.scrollTop >= header.offsetHeight){
    nav.className = "nav_container nav_container_fixed";
    }else{
        nav.className = "nav_container";
        navMenu_container.className="ul_container"
        spanMenuNav.className = "line_in_menu_BTN";
    }
})
function dots(num){
    for(let i =0; i<dotButtons.length;i++){
        if(i == num){
            dotButtons[i].className= "dot active_dot";
        }else{
            dotButtons[i].className= "dot";
        }
    }
}
dotButtons.forEach(e =>{
    e.addEventListener("click", ()=>{
        dots(dotButtons.indexOf(e));
        for(let i =0; i<dotButtons.length;i++){
            containerToMove[i].style.transform = ("translate", "translate3d(" + (-dotButtons.indexOf(e)) + "00%,0,0)");
        }
        
    })
})
