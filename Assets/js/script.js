
// ========menu buttom =======
const menuButton = document.querySelector(".menu-button");
const Menu = document.querySelector(".menu-nav");

menuButton.addEventListener("click", () =>{
    menuButton.classList.toggle("active");
    Menu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.
    addEventListener("click", () =>{
        menuButton.classList.remove("active");
        Menu.classList.remove("active");
    }))