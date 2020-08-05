// get counter element
const counter = document.querySelector(".counter");
// step
const speed = 38;


const updateCounter = () => {
  // get the target value
  const target = counter.getAttribute("data-target");
  
  const count = +counter.innerText;

  if (count < target) {
    counter.innerText = count + speed;
    setTimeout(updateCounter, 20);
  } else {
    count.innerText = target;
  }
};

// root element is default : screen
var observer = new IntersectionObserver(
  function (entries) {
    if(entries[0].isIntersecting === true)
	 updateCounter()
}, { threshold: [1] });

observer.observe(document.querySelector(".counter"));

/////////////////////////Gallery tabs ////////////////////////
//displaying opened tabs
function openTab(tab) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tab).style.display = "block";  
}

///// setting active class
// Get the container element
var btnContainer = document.querySelector(".tabBtns");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tabBtn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tabActive");
    current[0].className = current[0].className.replace(" tabActive", "");
    this.className += " tabActive";
  });
} 
