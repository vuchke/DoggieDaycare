const counter = document.querySelector(".counter");
const speed = 38;
const contactSection = document.querySelector(".contact");

const updateCounter = () => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;

  if (count < target) {
    counter.innerText = count + speed;
    setTimeout(updateCounter, 20);
  } else {
    count.innerText = target;
  }
};

contactSection.addEventListener("mouseover", () => {
  updateCounter()
});
