
// ========menu buttom =======
const menuButton = document.querySelector(".menu-button");
const Menu = document.querySelector(".menu-nav");

menuButton.addEventListener("click", () =>{
    menuButton.classList.toggle("active");
    Menu.classList.toggle("active");
})