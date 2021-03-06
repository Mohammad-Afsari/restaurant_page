

// Parallax backgrounds
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

});

// Zoom on menu
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});

const menu = (() => {
    // Obtain container
    const content = document.getElementById('content')

    // Create new elements
    const menu = document.createElement('div')
    menu.classList.add('tab-content')
    menu.setAttribute('id', 'menuPage')
    menu.setAttribute('data-tab-content','')
    menu.innerHTML = `
    <!-- Intro -->
    <div class="parallax-container">
      <div class="parallax"><img src="./img/homebackground.jpg" id="parallaxBackground"></div>
    </div>
    <div class="section grey lighten-3 z-depth-5">
      <div class="row container" id="menu">
        <i class="medium material-icons" id="menuLogo">local_dining</i>
        <h2 class="header">Let our food take you away</h2>
        <p class="grey-text text-darken-3 lighten-3">Oh. So. Delicious.</p>
      </div>
    </div>

    <!-- Appetisers -->
    <div class="parallax-container">
      <div class="parallax"><img src="./img/appetisers/starter.jpg" id="starter"></div>
    </div>
    
    <div class="section grey lighten-3 z-depth-5">
      <div class="row container">
        <h2 class="header" id="headers">Appetisers</h2>
      <!-- Appetiser cards -->
        <div class="row">
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img class="materialboxed" src="./img/appetisers/salad.jpg">
              </div>
              <div class="card-content">
                <p>Vegeterian Salad</p>
              </div>
              <div class="card-action">
                <p>£4.99</p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img class="materialboxed" src="./img/appetisers/haloumi.jpg">
                </div>
                <div class="card-content">
                  <p>Halloumi</p>
                </div>
                <div class="card-action">
                  <p>£3.99</p>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img class="materialboxed" src="./img/appetisers/salmon-biscuits.jpg">
                </div>
                <div class="card-content">
                  <p>Salmon Bites</p>
                </div>
                <div class="card-action">
                  <p>£5.49</p>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img class="materialboxed" src="./img/appetisers/minipizza.jpg">
                </div>
                <div class="card-content">
                  <p>Pizza Bites</p>
                </div>
                <div class="card-action">
                  <p>£4.49</p>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img class="materialboxed" src="./img/appetisers/dumplings.jpg">
                </div>
                <div class="card-content">
                  <p>Dumplings</p>
                </div>
                <div class="card-action">
                  <p>£4.99</p>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img class="materialboxed" src="./img/appetisers/prawns.jpg">
                </div>
                <div class="card-content">
                  <p>Butter Prawn</p>
                </div>
                <div class="card-action">
                  <p>£6.99</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <!-- Main -->
    <div class="parallax-container">
      <div class="parallax"><img src="./img/mains/mains.jpg"></div>
    </div>
    <div class="section grey lighten-3 z-depth-5">
      <div class="row container">
        <h2 class="header" id="headers">Mains</h2>
          <!-- Main Cards -->
          <div class="row">
              <div class="col s12 m4">
              <div class="card">
                  <div class="card-image">
                  <img class="materialboxed" src="./img/mains/pizzaveg.jpg">
                  </div>
                  <div class="card-content">
                  <p>House Pizza</p>
                  </div>
                  <div class="card-action">
                  <p>£9.99</p>
                  </div>
              </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/quesadillaveg.jpg">
                  </div>
                  <div class="card-content">
                      <p>Quesadilla (Veg)</p>
                  </div>
                  <div class="card-action">
                      <p>£8.99</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/salmon.jpg">
                  </div>
                  <div class="card-content">
                      <p>Salmon</p>
                  </div>
                  <div class="card-action">
                      <p>£11.99</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/chickentacos.jpg">
                  </div>
                  <div class="card-content">
                      <p>Chicken Tacos</p>
                  </div>
                  <div class="card-action">
                      <p>£7.99</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/chickenshish.jpg">
                  </div>
                  <div class="card-content">
                      <p>Chicken Shish</p>
                  </div>
                  <div class="card-action">
                      <p>£10.99</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/chickencurry.jpg">
                  </div>
                  <div class="card-content">
                      <p>Chicken Curry</p>
                  </div>
                  <div class="card-action">
                      <p>£13.49</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/lambbiryani.jpg">
                  </div>
                  <div class="card-content">
                      <p>Lamb Biryani</p>
                  </div>
                  <div class="card-action">
                      <p>£12.49</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/burger.jpg">
                  </div>
                  <div class="card-content">
                      <p>Wagyu Burger</p>
                  </div>
                  <div class="card-action">
                      <p>£14.99</p>
                  </div>
                  </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                  <div class="card-image">
                      <img class="materialboxed" src="./img/mains/steak.jpg">
                  </div>
                  <div class="card-content">
                      <p>Fillet Steak</p>
                  </div>
                  <div class="card-action">
                      <p>£26.99</p>
                  </div>
                  </div>
              </div>
          </div>
          </div>
      </div>
      <!-- Desert / Beverage -->
    <div class="parallax-container">
      <div class="parallax"><img src="./img/deserts/deserts.jpg"></div>
    </div>
    <div class="section grey lighten-3 z-depth-5">
      <div class="row container">
        <h2 class="header" id="headers">Desert</h2>
          <!-- Desert Cards -->
          <div class="row">
              <div class="col s12 m4">
                <div class="card">
                  <div class="card-image">
                    <img class="materialboxed" src="./img/deserts/carrotcake.jpg">
                  </div>
                  <div class="card-content">
                    <p>Carrot Cake</p>
                  </div>
                  <div class="card-action">
                    <p>£4.99</p>
                  </div>
                </div>
              </div>
              <div class="col s12 m4">
                  <div class="card">
                    <div class="card-image">
                      <img class="materialboxed" src="./img/deserts/chocolatefudge.jpg">
                    </div>
                    <div class="card-content">
                      <p>Chocolate Fudge</p>
                    </div>
                    <div class="card-action">
                      <p>£7.99</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m4">
                  <div class="card">
                    <div class="card-image">
                      <img class="materialboxed" src="./img/deserts/chocolatecheesecake.jpg">
                    </div>
                    <div class="card-content">
                      <p>Chocolate Cheesecake</p>
                    </div>
                    <div class="card-action">
                      <p>£7.49</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m4">
                  <div class="card">
                    <div class="card-image">
                      <img class="materialboxed" src="./img/deserts/rasberrycake.jpg">
                    </div>
                    <div class="card-content">
                      <p>Rasberry Cake</p>
                    </div>
                    <div class="card-action">
                      <p>£4.49</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m4">
                  <div class="card">
                    <div class="card-image">
                      <img class="materialboxed" src="./img/deserts/icecream.jpg">
                    </div>
                    <div class="card-content">
                      <p>Icecream</p>
                    </div>
                    <div class="card-action">
                      <p>£5.99</p>
                    </div>
                  </div>
                </div>
                <div class="col s12 m4">
                  <div class="card">
                    <div class="card-image">
                      <img class="materialboxed" src="./img/deserts/milkshake.jpg">
                    </div>
                    <div class="card-content">
                      <p>Fererro Milkshake</p>
                    </div>
                    <div class="card-action">
                      <p>£6.99</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="page-footer menuFooter" data-tab-content id="footer">
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

    content.appendChild(menu)

})();

export default {menu};