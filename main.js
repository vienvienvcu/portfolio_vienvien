// $(document).ready(function(){
//     $(".about-tabs").click(function(e){
//         // console.log(e.target);
//         if($(e.target).hasClass("about-tabs")){
//             $(this).removeClass("active");
//             $(e.target).addclass("active");
//         }
//     });
// });
// console.log("hi")
// const tabsContainer = document.querySelector(".about-tabs");
//       aboutSection = document.querySelector(".about-section");
       

// tabsContainer.addEventListener("click", (e) =>{
//     // console.log(e.target);
//     if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
//         tabsContainer.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");
//         const target = e.target.getAttribute("data-tagert");
//         aboutSection.querySelector(".tab-content.active").classList.remove("active");
//         aboutSection.querySelector(target).classList.add("active");
//     }
// });
 const tabContainer = document.querySelector(".about-tabs"),
       aboutSection = document.querySelector(".about-section");
        
       tabContainer.addEventListener("click", (e)=>{
        //    console.log(e.target)
        if(e.target.classList.contains("tab-item") && ! e.target.classList.contains("active")){
            tabContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const target = e.target.getAttribute("data-tagert");
            // console.log(target)
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

        }
       })

// portfolio item detail popup

document.addEventListener("click", (e) => {
         if(e.target.classList.contains("view-project-btn")){
            //  console.log("hi")
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0,0)
            portfolioItemDetails(e.target.parentElement);
         }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it 
document.addEventListener("click",(e)=>{
 if(e.target.classList.contains("pp-inner")){
    togglePortfolioPopup()
 }  
 });


function portfolioItemDetails(portfolioItem){
    // console.log(portfolioItem);
    document.querySelector(".pp-thumbnailt img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".general-info").innerHTML;

}
// fixed header

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 60) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
}
  
// show nav-toggle 

const navToggle = document.querySelector(".nav-toggler"),
      headerToggle = document.querySelector(".header");


  navToggle.addEventListener("click",()=>{
     document.querySelector(".header .nav").classList.toggle("open")
     document.body.classList.remove("hide-scrolling");
     navToggle.classList.toggle("transition")
     
  });
  // avtive and remove menu
  const navLink = document.querySelectorAll(".link-item")
  function linkAciton(){
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")
    // remove nav
    const navMenu = document.querySelector(".header .nav")
    navMenu.classList.remove("open")
    navToggle.classList.remove("transition")

    window.scrollTo(0,0);

  }
  navLink.forEach(n => n.addEventListener("click", linkAciton))

  //  ================SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
  origin: 'top',
  distance: '88px',
  duration: 2000,
  reset: true
})
// ＝＝SCROLL HOME
sr.reveal ('.home-text',{})
sr.reveal('.scroll-down', {delay: 200})
sr.reveal('.home-img', {origin: 'right', delay: 400 })

// SCROLL ABOUT 
sr.reveal ('.about-img',{delay: 500})
sr.reveal ('.about-text',{delay: 300})
sr.reveal ('.skills',{delay: 400})
sr.reveal ('.about-tabs',{delay: 500})
// sr.reveal('.tab-content', {origin: 'right', delay: 400 })
sr.reveal ('.about-text .btn',{delay: 500})

//SCROLL SKILL 
// sr.reveal ('.skillssubtitle',{})
// sr.reveal ('.skillsname',{distance: '20px', delay: 50 ,interval: 100})
// sr.reveal ('.skillsimg',{delay: 400})

//SCROLL PORTFOLIO 
sr.reveal ('.portfolio-item',{interval: 200})

//SCROLL CONTACT 
// sr.reveal ('.contacsubtitle',{})
sr.reveal ('.contact-form',{interval:200})
sr.reveal ('.contact-info-item',{delay:400})
sr.reveal ('.csocial-links',{delay:600})