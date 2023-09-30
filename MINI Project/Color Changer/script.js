let rect = document.querySelector(".name");

rect.addEventListener("mousemove", (details) => {
  let rectLocation = rect.getBoundingClientRect();
  let insiderectval = details.clientX - rectLocation.left;

  if (insiderectval < rectLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  // rect.style.backgroundColor = "white";
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
