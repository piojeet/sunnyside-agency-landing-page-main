const menuBtn = document.querySelector(".menu-icon img");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", function() {
    navList.classList.toggle("active");
})