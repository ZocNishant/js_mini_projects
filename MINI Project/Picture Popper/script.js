// Throttling
const throttleFn = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector(".center").addEventListener(
  "mousemove",
  throttleFn((details) => {
    let div = document.createElement("div");
    div.classList.add("imgDiv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://plus.unsplash.com/premium_photo-1673716788638-2830d1c98405?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    );
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });

    gsap.to(img, {
      y: "100%",
      delay: 0.6,
      ease: Power2,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
