window.addEventListener("mousemove", function (details) {
  let rectangle = this.document.querySelector("#rect");
  let xvalue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rectangle.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rectangle.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to("#rect", {
    left: xvalue + "px",
    ease: Power3,
  });
});
