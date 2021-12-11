const homePage = (() => {
    // Obtain container
    const content = document.getElementById('content')

    // Create home div for home page
    const home = document.createElement('div')
    home.classList.add('tab-content')
    home.innerHTML = `
    <div class="active" id="home">
        <div class="homepageHeading z-depth-5">
            <h2>We welcome you to try our amazing food!</h2>
            <h5>Delicious, healthy and affordable!</h5>
            <div class="btn-container">
                <a data-tab-target="#menu" class="waves-effect waves-light btn order-now" id="orderNow">Order Now</a>
            </div>
        </div>
        <div class="info z-depth-5">
            <div class="address">
                <div class="location">
                    <i class="medium material-icons" id="location">place</i>
                    <p>
                        29 Grand Parade, Harringay Ladder, London N4 1LG
                    </p> 
                </div>
                <div class="openingTimes">
                    <i class="medium material-icons" id="time">access_time</i>
                    <p>
                        <span>Mon-Thurs:</span> 8am-8pm<br/><span>Fri-Sun:</span> 8am-11pm
                    </p>
                </div>
            </div>
        </div>
    </div>

    <footer class="page-footer" id="footer">
        <div class="container">
        <div class="row">
            <div class="col l6 s12">
            <h5 class="white-text" id="dlishfooter">D-Lish</h5>
            <p class="grey-text text-lighten-4">Opening times:</p>
            <p class="grey-text text-lighten-4">Monday - Thursday: 8am - 8pm</p>
            <p class="grey-text text-lighten-4">Friday - Sunday: 8am - 11pm</p>
            </div>
        </div>
        </div>
        <div class="footer-copyright">
        <div class="container">
        © 2021 D-Lish developed by M-Afsari
        <a class="grey-text text-lighten-4 right" href="https://github.com/Mohammad-Afsari/resturant_page"><i class="material-icons" id="github">code</i></a>
        </div>
        </div>
    </footer>
    `

    content.appendChild(home)

})();

export default {homePage}; 