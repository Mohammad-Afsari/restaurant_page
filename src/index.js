import { pageLoad } from "./pageload"
import {sideNavigationMenu} from "./pageload"
import { homePage } from "./home";
import { menu } from "./menu"
import { contact } from "./contact"


// Get elements
const navElements = document.querySelectorAll('#navElements')
const hamburgerElements = document.querySelectorAll('#hamburgerElements')
const parallaxDiv = document.getElementById('tabs')
const home = document.getElementById('home')
const menuPage = document.getElementById('menuPage')
const contactPage = document.getElementById('contact')
const homeFooter = document.querySelector('.homeFooter')
const menuFooter = document.querySelector('.menuFooter')
const contactFooter = document.querySelector('.contactFooter')

// Navbar driven content
navElements.forEach(function(elements) {
    elements.addEventListener('click', navigateContent)
})


// Hamburger menu driven contact
hamburgerElements.forEach(function(elements) {
    elements.addEventListener('click', navigateContent)

})

// Functionality between pages
function navigateContent(e) {     
    if(e.target.innerHTML === "Home") {
        home.classList.add('active')
        homeFooter.classList.add('active')
        menuPage.classList.remove('active')
        menuFooter.classList.remove('active')
        contactPage.classList.remove('active')
        contactFooter.classList.remove('active')
    } else if (e.target.innerHTML === "Menu") {
        home.classList.remove('active')
        homeFooter.classList.remove('active')
        menuPage.classList.add('active')
        menuFooter.classList.add('active')
        contactPage.classList.remove('active')
        contactFooter.classList.remove('active')
        parallaxDiv.scrollIntoView();
    } else if (e.target.innerHTML === "Contact") {
        home.classList.remove('active')
        homeFooter.classList.remove('active')
        menuPage.classList.remove('active')
        menuFooter.classList.remove('active')
        contactPage.classList.add('active')
        contactFooter.classList.add('active')
    }
}