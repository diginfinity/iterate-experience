<template>
    <div>
        <header id="main-header" class="uk-padding-small">
           <div class="uk-grid uk-flex-between uk-position-top sm-header-links">
               <div class="header-links--left">
                   <a class="uk-display-inline-block uk-margin-xlarge uk-margin-remove-vertical" href="#"><span uk-icon="question"></span>HELP</a>
                   <a class="uk-display-inline-block uk-margin-xlarge uk-margin-remove-vertical" href="#"><span uk-icon="location"></span>STORES</a>
               </div>
               <div class="header-links--right  ">
                   <a class="uk-display-inline-block uk-margin-xlarge uk-margin-remove-vertical" href="#"><span uk-icon="heart"></span>WISHLIST</a>
                   <a class="uk-display-inline-block uk-margin-xlarge uk-margin-remove-vertical" href="#"><span uk-icon="user"></span>SIGN IN</a>
                   <a class="uk-display-inline-block uk-margin-xlarge uk-margin-remove-vertical" href="#"><span uk-icon="cart"></span>CHART</a>
               </div>
           </div>
            <div class="uk-container">
                <div class="logo uk-margin-auto uk-margin-bottom">
                    <a href="#">
                        <svg id="jockey-wordmark" viewBox="0 0 1008.3 169.9" width="100%" height="100%"><title>Jockey</title><path d="M142.2,6.6h-15.3c-3.8,0-6.9,3.1-6.9,6.9l0,79.9c0,33.3-16.5,51.6-46.4,51.6c-22.4,0-46.4-15.5-46.4-38.6 c0-5.6-4.6-5.9-6.8-5.9H6.9c-3.8,0-6.9,3.1-6.9,6.9v2.8c0,34,31.7,59.7,73.6,59.7c47.9,0,75.4-28.1,75.4-77.2V13.4 C149,9.7,145.9,6.6,142.2,6.6 M530,103.9h-18.9c-1.7,0-3.5,1.3-4.8,3.3c-0.2,0.2-0.5,0.9-0.6,1.1c-9.3,22.9-29.7,36.6-54.5,36.6 c-33.7,0-59.1-25.9-59.1-60.2c0-34.3,25.4-60.2,59.1-60.2c22.5,0,41.4,11.3,51.9,31c1.1,1.8,3,3.8,5.1,3.8h18.9 c3.8,0,6.8-3.1,6.8-6.9c0-1.8-0.7-2.9-0.7-2.9C518.7,19.4,486.4,0,451.2,0c-49.8,0-90.3,38.1-90.3,85c0,46.8,40.5,85,90.3,85 c38,0,72.2-22.6,85-56.1c0-0.1,0.7-1.2,0.7-3C536.9,107,533.8,103.9,530,103.9 M255,0c-49.8,0-90.3,38.1-90.3,85 c0,46.8,40.5,85,90.3,85c49.8,0,90.4-38.1,90.4-85C345.3,38.1,304.8,0,255,0 M255,145c-32.6,0-59.1-27-59.1-60.2 c0-33.2,26.5-60.2,59.1-60.2s59.1,27,59.1,60.2C314,118,287.5,145,255,145 M1000.6,6.6h-13.6c-3.6,0-7.9,2.5-10.1,6.1l-43.9,68 l-44.4-68.3c-2.2-3.6-6-5.8-9.7-5.8h-15.5c-6.3,0-9.7,4.4-5.5,11.6l58.9,89v43.1c0,6.6,5.3,11.9,11.9,11.9h6 c6.5,0,11.9-5.3,11.9-11.9v-43.1l59.4-89C1010.3,11.4,1008.6,6.6,1000.6,6.6 M834,138.5L834,138.5l-84.7-0.1l0-45h73.9 c6.6,0,12-5.5,12-12.1c0-6.6-5.3-12.2-11.9-12.2h-73.9V30.7h82.6c6.6,0,11.9-5.6,11.9-12.2c0-6.6-5.4-11.9-11.9-11.9h-99.3v0.1 c-6.6,0-12,5.3-12,12v132.1c0,6.6,5.4,11.9,12,11.9H834c6.6,0,11.9-5.3,11.9-11.9C846,144.1,840.6,138.5,834,138.5 M643.9,60.5 l42.3-43.2c2.6-2.9,3.6-5.9,2.6-8.1c-0.7-1.6-2.3-2.6-4.3-2.6h-19c-4.9,0-7.2,2.1-11.6,6.5c-4.4,4.4-69.5,68-69.5,68l0-67.6 c0-3.8-3.1-6.9-6.8-6.9l-10.5,0c-0.1,0-11.3,0.8-11.3,19.3v129.4c0,3.8,3.1,6.9,6.9,6.9h6.4c9.2,0,15.4-6.5,15.4-16.2v-28.7 l39.4-35.9l50.8,74.1c3.1,4.5,5.8,6.7,8.5,6.7h15.5c4.1,0,6.7-1.1,7.9-3.2c1.1-2.2,0.5-5.2-1.7-8.5L643.9,60.5z"></path><path d="M978,137.4c-6.4,0-11.6,5.2-11.6,11.5c0,6.3,4.5,11.4,10.9,11.4c6.4,0,12.2-5.1,12.2-11.4 C989.6,142.6,984.4,137.4,978,137.4 M978,157.9c-4.8,0-8.7-4-8.7-9c0-5,3.9-9,8.7-9c4.8,0,8.7,4,8.7,9 C986.8,153.8,982.9,157.9,978,157.9 M983.1,146.1c0-2.7-1.7-3.8-4.9-3.8h-5.2v13.1h2.3v-5.5h2l3.3,5.5h2.7l-3.6-5.6 C981.6,149.5,983.1,148.5,983.1,146.1 M975.4,148v-3.8h2.6c1.3,0,2.9,0.3,2.9,1.8c0,1.8-1.5,2-3.1,2H975.4z"></path></svg>
                    </a>
                </div>
                <nav class="nav-bar uk-text-center">
                    <a href="#" class="main-nav-item">MEN</a>
                    <a href="#" class="main-nav-item">WOMEN</a>
                    <a href="#" class="main-nav-item">SALE</a>
                    <a href="#" class="main-nav-item">DEALS</a>
                    <a href="#" class="main-nav-item"><span uk-icon="thumbnails"></span>BOXES</a>
                    <input type="text" placeholder="SEARCH" class="main-header-search"><span uk-icon="search" class="main-header-search-icon"></span>
                </nav>
            </div>
        </header>
        <main>
            <div class="uk-container">
                <MultiPage />
            </div>
        </main>
        <footer class="main-footer">
            <div class="footer-contact uk-width-1-1">
                <div class="uk-container">
                    <input type="text" class="footer-email" placeholder="Email Sign-up">
                    <a href="#" class="footer-contact-link"><span uk-icon="comments"></span>Live Chat</a>
                    <a href="#" class="footer-contact-link"><span uk-icon="mail"></span>Email Us</a>
                    <a href="#" class="footer-contact-link"><span uk-icon="phone"></span>Call/text</a>
                </div>
            </div>
            <div class="uk-container">
                <div class="uk-flex footer-padding">
                    <div clas>
                        <div class="uk-flex uk-flex-middle satisfaction-sec">
                            <div class="garant-logo">
                                <svg id="ft-satisfaction" viewBox="0 0 75 75" width="100%" height="100%"><g><circle cx="37.5" cy="37.5" r="37.5" fill="#fff"></circle><path d="M9.63 39.3c.82 0 1.5-.66 1.5-1.47 0-.8-.68-1.46-1.5-1.46s-1.49.65-1.49 1.46c0 .81.67 1.47 1.5 1.47zm56.12 0c.82 0 1.49-.66 1.49-1.47 0-.8-.67-1.46-1.5-1.46a1.47 1.47 0 1 0 .01 2.93zm-42.43-8.26l-2.3.93v-3.06L24 27.84h2.3V49.3h-2.98V31.04zm5.15 7.86v-.93c0-7.46 1.9-10.53 5.15-10.53 3.26 0 5.15 3.07 5.15 10.53v.93c0 7.46-1.9 10.52-5.15 10.52-3.25 0-5.15-3.06-5.15-10.52zm7.19 0v-.93c0-6.13-.95-7.73-2.04-7.73-1.22 0-2.17 1.6-2.17 7.73v.93c0 6.13.95 7.72 2.17 7.72s2.04-1.46 2.04-7.72zm4.47 0v-.93c0-7.46 1.9-10.53 5.15-10.53 3.25 0 5.15 3.07 5.15 10.53v.93c0 7.46-1.9 10.52-5.15 10.52-3.25 0-5.15-3.06-5.15-10.52zm7.18 0v-.93c0-6.13-.95-7.73-2.03-7.73-1.22 0-2.17 1.6-2.17 7.73v.93c0 6.13.95 7.72 2.17 7.72 1.08 0 2.03-1.46 2.03-7.72zm3.66-8.93c0-1.46.68-2.26 1.63-2.26.95 0 1.63.8 1.63 2.13v.13c0 1.47-.68 2.14-1.63 2.14-.95 0-1.63-.67-1.63-2.14zm5.42-2.13h1.22l-2.44 4-2.16 3.73h-1.22l2.44-4 2.16-3.73zm-4.2 2v.13c0 .67.14.94.4.94.28 0 .42-.27.42-.94v-.13c0-.66-.14-.93-.41-.93-.27 0-.4.27-.4.93zm2.98 3.6c0-1.47.68-2.27 1.63-2.27.95 0 1.63.8 1.63 2.13v.14c0 1.46-.68 2.13-1.63 2.13-.95 0-1.63-.67-1.63-2.13zm1.9 0v-.14c0-.66-.13-.93-.4-.93-.28 0-.41.27-.41.93v.14c0 .66.13.93.4.93.41.13.41-.27.41-.93zm-45.54-1.07l-.95-1.46a4.42 4.42 0 0 0 1.35-1.87c.14-.4.14-.53-.13-.53-.14 0-.27.13-.68.67-.68 1.2-1.49 2.26-2.7 1.86-1.1-.4-1.77-1.46-1.23-3.06.4-1.07.95-1.87 1.63-2.4L9.9 26.9a4.6 4.6 0 0 0-1.22 1.6c-.13.27 0 .4.14.53.13 0 .27-.13.68-.66.8-1.47 1.49-2.27 2.7-1.87 1.23.4 1.63 1.6 1.23 3.2a4.3 4.3 0 0 1-1.9 2.66zm-1.36-10.92l1.09-1.73 6.77 1.06-1.22 1.87-.94-.13-1.22 1.86.54.67-1.22 1.86-3.8-5.46zm4.2.8l-1.62-.27.95 1.33.67-1.06zM16 16.92l-1.35 1.2-1.22-1.2 4.06-4 1.22 1.2-1.35 1.2 3.25 3.33-1.5 1.47-3.1-3.2zM18.98 12l1.77-1.2 3.52 5.06-1.76 1.2-3.53-5.07zm5.29 2.66l.54-1.6c.82.13 1.63.13 2.3-.13.28-.27.41-.4.41-.54-.13-.13-.27-.13-.95 0-1.35.27-2.7.4-3.25-.8-.4-1.06 0-2.26 1.63-2.93a4.8 4.8 0 0 1 2.98-.4l-.54 1.6c-.68-.13-1.5 0-1.9.14-.27.13-.4.26-.27.4 0 .13.27.13.95 0 1.62-.4 2.7-.4 3.25.8.54 1.2-.14 2.26-1.63 2.92-1.22.67-2.44.8-3.52.54zm5.56-7.73L34.98 6l.27 1.73-3.12.53.14.8 2.84-.53.41 1.6-2.85.53.27 2-2.03.4-1.08-6.13zM39.04 6l2.04.13 2.17 6.4-2.3-.14-.28-.8-2.17-.26-.4.8-2.17-.14L39.04 6zm1.22 4l-.4-1.47-.68 1.47h1.08zm3.94-.27c.54-1.73 2.43-2.53 4.2-2 1.35.4 1.9 1.33 2.17 2.4l-1.9.4c-.14-.53-.4-.93-.95-1.07-.68-.26-1.36.27-1.5.94-.26.8 0 1.46.69 1.6.54.13.94 0 1.35-.4l1.36 1.46a3.6 3.6 0 0 1-3.4.67c-1.75-.54-2.7-2.27-2.03-4zM53.28 12l-1.5-.94.95-1.46 4.88 3.06-.94 1.46-1.5-.93-2.44 3.73-1.76-1.06 2.3-3.87zm5.55 1.86l1.5 1.46-4.34 4.4-1.5-1.33 4.34-4.53zm.55 4.66a3.24 3.24 0 0 1 4.6.93c1.09 1.6.82 3.6-.67 4.53a3.24 3.24 0 0 1-4.61-.93 3.05 3.05 0 0 1 .68-4.53zm2.7 3.73c.68-.4.96-1.2.41-1.87-.4-.66-1.22-.66-1.9-.26-.67.53-.94 1.33-.4 1.86.4.67 1.22.67 1.9.27zm4.89 2.26l.67 1.87-1.9 2.93 2.58-.8.68 1.86-5.96 2-.55-1.73 2.04-3.06-2.71.93-.68-1.87 5.83-2.13zM9.63 44.9c1.76-.67 3.52.13 4.34 1.99.4.93.4 1.86.13 2.66l-1.76-.53c.14-.53.14-.93 0-1.46-.27-.8-1.08-1.07-1.9-.8-.8.26-1.22 1.06-.8 1.86.13.27.26.53.4.67l.54-.27-.4-.93 1.21-.53 1.09 2.8-2.71 1.06a4.2 4.2 0 0 1-1.9-2.13c-.68-1.87-.14-3.73 1.76-4.4zm2.98 7.45l2.71-2 1.36 1.6-2.85 2c-.68.4-.68.93-.27 1.46.4.54.81.54 1.5.14l2.7-2.13 1.36 1.6-2.71 2c-1.63 1.32-3.12.8-4.2-.67-1.22-1.34-1.36-2.8.4-4zm8.68 4.53l1.62 1.2-1.62 6.52-1.76-1.33.27-.8-1.77-1.33-.8.4-1.77-1.33 5.83-3.33zm-1.09 4l.41-1.47-1.36.8.95.67zm5.43-.94l2.84 1.07c1.09.4 1.63.93 1.76 1.46.27.54.27.94 0 1.6-.27.8-.95 1.2-1.9 1.33l.55 2.4-2.17-.8-.4-2-.41-.13-.68 1.6-1.9-.8 2.3-5.73zm1.62 3.73c.4.14.82.14.95-.26.14-.4-.13-.67-.54-.8l-.81-.27-.41 1.07.81.26zm6.91-1.2l2.04.14L38.23 69l-2.3-.27-.27-.8-2.17-.26-.27.93-2.17-.27 3.11-5.86zm1.22 4l-.4-1.6-.68 1.47 1.08.13zm4.07-3.6l1.9-.4 2.7 2.27-.53-2.67 2.03-.4 1.22 6-1.76.4-2.85-2.4.54 2.8-2.03.4-1.22-6zm9.22-.67l-1.63.8-.81-1.6 5.15-2.39.81 1.6-1.62.8 1.9 4-1.9.93-1.9-4.13zm3.39-3.59l4.06-3.33 1.09 1.33-2.58 2 .4.53 2.31-1.86.95 1.2-2.3 1.86.4.54 2.58-2 1.08 1.33-4.2 3.33-3.8-4.93zm4.88-4.13l3.11-4.26 1.36 1.07-1.9 2.53.54.4 1.77-2.4 1.22.93-1.77 2.4.55.4 2.03-2.67 1.35 1.07-3.25 4.26-5.01-3.73zm3.66-5.06l.8-2.13c.96-2.26 2.58-2.93 4.21-2.26 1.76.66 2.44 2.26 1.5 4.66l-.82 2.13-5.7-2.4zm5.01-.67c.4-.93.27-1.6-.68-1.86-.81-.27-1.49.13-1.76.93l-.13.27 2.44.93.13-.27z" fill="#333d44"></path></g></svg>
                            </div>
                            <div class="uk-padding-small">
                                <span class="satisfaction-text">FREE RETURNS &<br>EXCHANGES EVERY DAY</span>
                            </div>
                        </div>
                        <div class="footer-side-links">
                            <a class="uk-display-block uk-padding-small uk-padding-remove-horizontal" href="#"><span uk-icon="credit-card"></span>REWARDS</a>
                            <a class="uk-display-block uk-padding-small uk-padding-remove-horizontal" href="#"><span uk-icon="image"></span>CATALOG</a>
                            <a class="uk-display-block uk-padding-small uk-padding-remove-horizontal" href="#"><span uk-icon="location"></span>STORES</a>
                        </div>
                        <div class="social">
                            <a href="#"><span uk-icon="facebook"></span></a>
                            <a href="#"><span uk-icon="twitter"></span></a>
                            <a href="#"><span uk-icon="instagram"></span></a>
                            <a href="#"><span uk-icon="pinterest"></span></a>
                            <a href="#"><span uk-icon="youtube"></span></a>
                            <a href="#"><span uk-icon="rss"></span></a>
                        </div>
                    </div>
                    <div>
                        <ul class="footer-link-list">
                            <li class="footer-link-group">
                                <a class="footer-list-title" href="#">CUSTOMER SERVICE ></a>
                                <div class="footer-list-items">
                                    <a href="#">Contact us</a>
                                    <a href="#">Return Policy</a>
                                    <a href="#">Shipping Information</a>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">ADA Policy</a>
                                    <a href="#">FAQ</a>
                                    <a href="#">Terms & Conditions</a>
                                    <a href="#">Patent Information</a>
                                    <a href="#">Testimonial Disclosure</a>
                                    <a href="#">Order Locator</a>
                                </div>
                            </li>
                            <li class="footer-link-group">
                                <a class="footer-list-title" href="#">MY ACOUNT ></a>
                                <div class="footer-list-items">
                                    <a href="#">Order History</a>
                                    <a href="#">Jockey Rewardsy</a>
                                    <a href="#">Personal Information</a>
                                    <a href="#">Credit Cards</a>
                                    <a href="#">Address Book</a>
                                    <a href="#">Subscriptions</a>
                                    <a href="#">Reset Password</a>
                                </div>
                            </li>
                            <li class="footer-link-group">
                                <a class="footer-list-title" href="#">SHOPPING GUIDE ></a>
                                <div class="footer-list-items">
                                    <a href="#">Store Locator</a>
                                    <a href="#">Military Discount</a>
                                    <a href="#">First Responder Discount</a>
                                    <a href="#">Student Discount</a>
                                    <a href="#">Size Charts </a>
                                    <a href="#">Gift Cards</a>
                                </div>
                            </li>
                            <li class="footer-link-group">
                                <a class="footer-list-title" href="#">OUR COMPANY ></a>
                                <div class="footer-list-items">
                                    <a href="#">Jockey Being Family®</a>
                                    <a href="#">Careers</a>
                                    <a href="#">Our History</a>
                                    <a href="#">Press Room</a>
                                    <a href="#">FMLA Rights </a>
                                    <a href="#">Ethical Production</a>
                                    <a href="#">Code of Conduct</a>
                                    <a href="#">Supply Chain Compliance</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import MultiPage from './demo/multipage/MultiPage';

    export default {
        name: 'Jockey',
        components: {
            MultiPage
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
html {
    letter-spacing: .5px!important;
}
/*===============================================
=================================================
HEADER
=================================================
===============================================*/
* {
    color: #333d44;
    font-family: 'Montserrat', sans-serif;
}

#main-header {
    border-bottom: 1px solid #cccccc;
    padding: 10px;
    padding-bottom: 0;
}

.sm-header-links a {
    font-weight: 600;
    font-size: 12.6px;
    padding: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    vertical-align: bottom;
}

.sm-header-links a span,
.main-nav-item span {
    display: inline-block;
    margin-right: 10px;
    vertical-align: bottom;
}

.sm-header-links a:hover {
    background: rgba(0,0,0,.07);
    text-decoration: none;
    color: #333d44;
}

.logo {
    width: 207px;
    height: auto;
}

#jockey-wordmark {
    fill: #333d44;
}

.main-nav-item {
    display:inline-block;
    font-weight: 900;
    font-size: 12.6px;
    position: relative;
    padding: 20px 15px;
    vertical-align: bottom;
}

.main-nav-item:hover {
    text-decoration: none;
    color: #333d44;
}

.main-nav-item:after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background-color: #333d44;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 250ms ease-in-out;
}

.main-nav-item:hover.main-nav-item:after {
    width: 100%;
}

input.main-header-search {
    border: 1px solid #333d44;
    padding: 7px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 15px;
}

input.main-header-search:active,
input.main-header-search:focus {
    outline: none;
}

/*===============================================
=================================================
MAIN
=================================================
===============================================*/
main {
    min-height: 50vh;
    padding: 100px 0;
}

/*===============================================
=================================================
FOOTER
=================================================
===============================================*/
footer.main-footer {
    background-color: #e6e6e6;
    font-size: 14px;
}

.footer-padding {
    padding-top: 20px;
    padding-bottom: 50px;
}

.footer-contact {
    background-color: #333d44;
    padding: 10px;
    height: 70px;
    vertical-align: middle;
}

.footer-email {
    border: 1px solid #333d44;
    padding: 7px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 15px;
}

input.footer-email :active,
input.footer-email :focus {
    outline: none;
}

.footer-contact-link {
    color: #fff;
}

.footer-contact-link span {
    color: #fff;
    margin: 0 10px;
}

.satisfaction-sec {
    margin-bottom: 30px;
}

.garant-logo {
    height: 70px;
    width: 70px;
}

.satisfaction-text {
    font-weight: 600;
}

.footer-side-links a {
    padding: 15px;
    font-weight: 600;
    vertical-align: bottom;
    border-radius: 5px;
}

.footer-side-links a:hover {
    background: rgba(0,0,0,.07);
    color: #333d44;
    text-decoration: none;
}

.footer-side-links a span {
    margin: 0 10px;
}

.social {
    margin-top: 30px;
}

.social a span {
    font-weight: 900;
    margin-right: 15px;
}

.footer-link-group {
    list-style: none;
    list-style-type: none;
    margin-bottom: 20px;
}

.footer-list-title {
    font-weight: 600;
}

.footer-list-items a {
    line-height: 2;
    display: inline-block;
    margin-right: 20px;
}



</style>
