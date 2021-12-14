// Hamburger menu functionality using materialisecss
const sideNavigationMenu = (() => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    });    
})();

// Page content 
const pageLoad = (() => {
    // Obtain container
    const content = document.getElementById('content')

    // Create div element
    const newDiv = document.createElement('div')

    newDiv.innerHTML = `    
    <nav>
        <div class="nav-wrapper z-depth-5" id="tabs">       
            <a href="index.html" class="brand-logo" id="logo"><i class="material-icons">local_dining</i></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" id="hamburger">menu</i></a>
        <ul class="left hide-on-med-and-down">
            <li><a id="navElements" class="homeBtn" href="#home">Home</a></li>
            <li><a id="navElements" class="menuBtn" href="#menu">Menu</a></li>
            <li><a id="navElements" class="contactBtn" href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>

    <ul class="sidenav sidenav-close" id="mobile-demo">
        <li><a id="hamburgerElements" href="#home">Home</a></li>
        <li><a id="hamburgerElements" href="#menu">Menu</a></li>
        <li><a id="hamburgerElements" href="#contact">Contact</a></li>
    </ul>
    `
    content.appendChild(newDiv)
})();

export default { pageLoad, sideNavigationMenu};