const counter = document.querySelector(".counter");
const speed = 38;
// const contactSection = document.querySelector(".contact");

const updateCounter = () => {
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

