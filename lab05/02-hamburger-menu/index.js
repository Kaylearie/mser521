// Your code here.
function toggleMenu () {
    //target the button and save it in a variable
    //target the ul element and save it in a variable

const burgerButton = document.querySelector("#menu-toggle");
console.log(burgerButton);
burgerButton.classList.toggle("active")

const navEL = document.querySelector("#nav-links");
console.log(navEL)
navEL.classList.toggle("active")


    //then turn some classes on and off for those two elements


}