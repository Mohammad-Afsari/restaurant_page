const contact = (() => {
    // Obtain container
    const content = document.getElementById('content')

    // Create new div for contact
    const contact = document.createElement('div')
    contact.classList.add('tab-content')
    contact.setAttribute('id','contact')
    contact.setAttribute('data-tab-content','')
    contact.innerHTML = `
        <div class="row z-depth-5" id="contact">
            <div class="formMap">
                <div class="col s12 m6">
                    <form action="">
                        <div class="col s12">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">person</i>
                                <input id="title" type="text" class="validate">
                                <label for="title">Name</label>
                            </div>
                        </div>
                        <div class="col s12">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="email" type="email" class="validate">
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="col s12">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">contact_phone</i>
                                <input id="title" type="number" class="validate">
                                <label for="title">Contact Number</label>
                            </div>
                        </div>
                        <div class="col s12">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">comment</i>
                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                <label for="textarea1"> Message</label>
                            </div>
                        </div>
                        <div class="input-field col s12">
                            <input type="submit" value="Send Message" class="waves-effect waves-light btn sendMessage" id="sendMessage">
                        </div>
                    </form>
                </div>
            <div class="col s12 m6">
                <div class="col s12 z-depth-5">
                    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9917.335416127848!2d-0.0991861!3d51.5804444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79fd13de175e03b9!2sHala%20Restaurant!5e0!3m2!1sen!2suk!4v1639155410844!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
    <footer class="page-footer contactFooter" data-tab-content id="footer">
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

    content.appendChild(contact)
})();

export default { contact };