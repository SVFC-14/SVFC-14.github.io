var menuOpen=false;
const nav = document.getElementById("navbar");
const content = document.getElementById("content");



window.onscroll = () => {
  setNavBG();
}

window.onload = () => {
  //randomBG();
  const today = new Date();
  console.log("Swoope Volunteer Fire Company");
  console.log("All Rights Reserved " + today.getFullYear());
  console.log("---");
  console.log("Website Framework by Jekyll");
  console.log("Hosting Provided by Github Pages");
  console.log("Theming and Setup by J.Jackson");
}
function toggleMobileMenu(menu) {
  menuOpen = !menuOpen;
  menu.classList.toggle('open');
  setNavBG();
}
function postsYearFilter(filter) {
  // Change Year Nav Background Color
  var navCollection = document.getElementsByClassName("postFilter");
  for(var i = (navCollection.length - 1); i >= 0; i--)
  {
    navCollection[i].className = "postFilter";
  }
  var yearFilter = document.getElementById(filter); 
  yearFilter.classList.add("selected");
  // Change What Posts are Shown
    var postsCollection = document.getElementsByClassName("dvidedPosts");
    for(var i = (postsCollection.length - 1); i >= 0; i--)
    {
      postsCollection[i].style.display = "none";
    }
    var showYear = filter.substring(0, filter.length - 4)
    var shownPosts = document.getElementById(showYear);
    shownPosts.style.display = "block";
}
function randomBG(){
  const x = "/assets/img/bg.jpg"
  document.getElementById("break").style.backgroundImage = "url('/assets/img/bg2.jpg')"
}
function setNavBG(){
  // Spaghetti
  if(menuOpen){
    nav.className = "navbar scrolled navExpand";
    // Menu Open, Expand it
  }else{
    nav.classList.remove("navExpand");
    // Menu not open, Remove NavExpander
    var navVP = nav.getBoundingClientRect();
    var contentVP = content.getBoundingClientRect();
    var navBot = navVP.bottom;
    var contentTop = contentVP.top;
    // Menu is not open, Check Scrolled Position
    if(contentTop <= navBot){
      nav.className = "navbar scrolled";
    }else{
      nav.className = "navbar";  
    } 
  }
}