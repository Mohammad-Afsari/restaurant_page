// Hamburger menu functionality using materialisecss
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});



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
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Menu</a></li>
            <li><a href="#!">Contact</a></li>
        </ul>
        </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Menu</a></li>
        <li><a href="#!">Contact</a></li>
    </ul>
    `
    content.appendChild(newDiv)
})();

export default pageLoad;