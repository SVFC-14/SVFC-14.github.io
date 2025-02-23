
const content = document.getElementById("content");

function holiday(date){
  if(date.getMonth() === 11 && (date.getDate() === 24 || date.getDate() === 25)){
    console.log("Merry Christmas")
  }else if(date.getMonth() === 1 && date.getDate() === 1){
    console.log("Happy New Years")
  }else if(date.getMonth() === 6 && date.getDate() === 6){
    console.log("Its the 4th")
  }
}
window.onload = () => {
  //randomBG();
  const today = new Date();
  holiday(today)
  updateCopyright(today.getFullYear());
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
}

function updateCopyright(year){
  var copyrightFooter = document.getElementById("copyright");
  copyrightFooter.innerHTML = "© 2010-" + year + " Swoope Volunteer Fire Comapny. All rights reserved."
}

// this function is called by the OnClick method on the Year li elemtents, "this.id" is passed into the function
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
    // This gets the clicked year and removes the "-nav" from is id to get the year, i.e. "2022-nav" -> "2022"
    
    var showYear = filter.substring(0, filter.length - 4)
    console.log(showYear)
    // Determines if the selected filter is "All" or the dynamically generated year
    if(showYear !== "all"){
      var shownPosts = document.getElementById(showYear);
      shownPosts.style.display = "block";
    }else{
      for(var i = (postsCollection.length - 1); i >= 0; i--)
      {
        postsCollection[i].style.display = "block";
      }
    }
}
function randomBG(){
  const x = "/assets/img/bg.jpg"
  document.getElementById("break").style.backgroundImage = "url('/assets/img/bg2.jpg')"
}