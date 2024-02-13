window.addEventListener("load", function () {
  //how many slides
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  //how wide is each slide?
  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;
  //total width of the slider
  const totalWidth = slideCount * slideWidth + "px";
  //slide DOM element
  const slider = document.querySelector("#slider-wrapper ul");
  //next button
  const next = document.getElementById("next");
  //previous button
  const previous = document.getElementById("prev");
  let leftPosition = 0;
  let counter = 0;
  slider.style.width = totalWidth;
  next.addEventListener("click", function (event) {
    event.preventDefault();
    counter++;
    if (counter == slideCount) {
      counter = 0;
      leftPosition = `-${counter * slideWidth}px`;

      slider.style.left = leftPosition;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
  });
  previous.addEventListener("click", function (event) {
    event.preventDefault();
    counter--;
    if (counter < 0) {
      counter = slideCount - 1;

      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
  });
});
