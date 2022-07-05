// style theme
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");

})
//hide style
window.addEventListener("scroll", () => {
if(document.querySelector(".style-switcher").classList.contains("open"))
{
    document.querySelector(".style-switcher").classList.remove("open");
}
})
//style.css
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");

        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}
//light theme
const themeIcon = document.querySelector(".theme-icon");
themeIcon.addEventListener("click", () =>{
    themeIcon.querySelector("i").classList.toggle("fa-moon"); 
    themeIcon.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light-theme");

})
window.addEventListener("load", () => {

    if(document.body.classList.contains("light-theme"))
    {
        themeIcon.querySelector("i").classList.add("fa-moon");

    }
     else{
        themeIcon.querySelector("i").classList.add("fa-sun");

     }   
   
})