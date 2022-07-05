//loader
// window.onload = function(){
//     setTimeout(function(){
//         var loader = document.getElementsByClassName("loader-wrapper")[0];
//         loader.style.display = "none";
//     },5000)
// }


//auto name
var typed = new Typed(".auto-input", {
    strings: ["Web Designer", "Graphic Designer", "Front End Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})




//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}


//navhide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
});

// function bodyScrollingToggle(){
//     document.body.classList.toggle("stop-scrolling");

// }
//about 
(() => {
    const aboutWrapper = document.querySelector(".about_wrapper"),
        tabsContainer = document.querySelector(".about-tabs");
    tabsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("activet")) {
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".activet").classList.remove("outer-shadow", "activet");
            event.target.classList.add("activet", "outer-shadow");
            aboutWrapper.querySelector(".tab-content.activet").classList.remove("activet");
            aboutWrapper.querySelector(target).classList.add("activet");
        }
    })
})();


function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling");

}
// portfolio popup 
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        popup = document.querySelector(".portfolio-popup"),
        prevBtn = popup.querySelector(".pp-prev"),
        nextBtn = popup.querySelector(".pp-next"),
        closeBtn = popup.querySelector(".pp-close"),
        projectsDetailsContainer = popup.querySelector(".pp-details"),
        projectsDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    // fillter portfolio
    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item") &&
            !event.target.classList.contains("activet")) {
            filterContainer.querySelector(".activet").classList.remove("outer-shadow", "activet");
            event.target.classList.add("activet", "outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) => {
                if (target === item.getAttribute("data-category") || target === 'All') {
                    item.classList.remove("hide");
                    item.classList.add("show");

                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })

    portfolioItemsContainer.addEventListener('click', (event) => {
        if (event.target.closest(".portfolio-item-inner")) {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            screenshots = screenshots.split(",");
            if (screenshots.length === 1) {
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";

            }
            slideIndex = 0;
            popupToggle();
            popupSlideshow();
            popupDetails();

        }
    })

    closeBtn.addEventListener("click", () => {
        popupToggle();
        if (projectsDetailsContainer.classList.contains("activet")) {
            popupDetailsToggle();
        }
    })

    function popupToggle() {
        popup.classList.toggle("open");
        bodyScrollingToggle();

    }

    function popupSlideshow() {
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        popup.querySelector(".pp-loader").classList.add("activet");
        popupImg.src = imgSrc;
        popupImg.onload = () => {
            popup.querySelector(".pp-loader").classList.remove("activet");

        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length;

    }

    nextBtn.addEventListener("click", () => {
        if (slideIndex === screenshots.length - 1) {
            slideIndex = 0;

        } else {
            slideIndex++;

        }
        popupSlideshow();
    })

    prevBtn.addEventListener("click", () => {
        if (slideIndex === 0) {
            slideIndex = screenshots.length - 1;

        } else {
            slideIndex--;

        }
        popupSlideshow();

    })

    function popupDetails() {
        if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
            projectsDetailsBtn.style.display = "none";
            return;
        }
        projectsDetailsBtn.style.display = "block";


        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        popup.querySelector(".pp-projects-datails").innerHTML = details;
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;

        popup.querySelector(".pp-title h4").innerHTML = title;
        const category = portfolioItems[itemIndex].getAttribute("data-category");
        popup.querySelector(".pp-projects-category").innerHTML = category;

    }
    projectsDetailsBtn.addEventListener("click", () => {
        popupDetailsToggle();
    })

    function popupDetailsToggle() {
        if (projectsDetailsContainer.classList.contains("activet")) {
            projectsDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectsDetailsBtn.querySelector("i").classList.add("fa-plus");

            projectsDetailsContainer.classList.remove("activet");
            projectsDetailsContainer.style.maxHeight = 0 + "px";

        } else {
            projectsDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectsDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectsDetailsContainer.classList.add("activet");
            projectsDetailsContainer.style.maxHeight = projectsDetailsContainer.scrollHeight + "px";
            popup.scrollTo(0, projectsDetailsContainer.offsetTop);

        }
    }
})();

//contact
// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "kandipal616@gmail.com",
//         Password : "KAnd2001@",
//         To : 'vaskarpal46@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact From Enquiry",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;