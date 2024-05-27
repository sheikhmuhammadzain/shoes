const menu = document.getElementById("menu");
document.querySelectorAll(".mobile-nav li").forEach((li) => {
  li.addEventListener("click", () => {
    menu.className = "ri-menu-5-fill";
    document.querySelector(".mobile-nav").className = "mobile-nav";
  });
});
menu.addEventListener("click", () => {
  if (menu.className == "ri-menu-5-fill") {
    menu.className = "ri-close-line";
    document.querySelector(".mobile-nav").className = "mobile-nav active";
  } else {
    menu.className = "ri-menu-5-fill";
    document.querySelector(".mobile-nav").className = "mobile-nav";
  }
});
const productButton = document.querySelectorAll(".pay");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.forEach((button) =>
  button.addEventListener("click", () => {
    payment.style.display = "flex";
  })
);
close.addEventListener("click", () => {
  payment.style.display = "none";
});

let count = 0;
const button = document.querySelectorAll("button");
button.forEach((b) =>
  b.addEventListener("click", () => {
    count++;
    document.querySelector(".item-count").innerHTML = count;
  })
);
