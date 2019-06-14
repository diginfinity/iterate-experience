<template>
    <div>
        <nav class="uk-navbar uk-navbar-container">
            <div class="uk-navbar-left">
                <img id="logo" src="https://www.deltavcapital.com/wp-content/uploads/2019/03/logo.png"/>
            </div>
            <div class="uk-navbar-right">
                <ul id="rightNav">
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">Home</a></li>
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">About</a></li>
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">Solutions</a></li>
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">Portfolio</a></li>
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">Team</a></li>
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">News</a></li>
                    <li class="uk-navbar-item uk-navbar-item-line"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div class="uk-background-cover">
            <img src="https://delta.pixelsandcode.studio/wp-content/uploads/2019/01/mountain.jpg" />
            <div class="uk-container uk-text-center  mountainTxt">
                <h1>Liquidity Solutions
                    <br>
                    & Growth Equity</h1>
                <p class="uk-text-center">We use our capital, creativity, and experience to offer liquidity
                    <br>
                    solutions and growth equity that enable private technology
                    <br>
                    companies to realize a higher trajectory of growth and success.</p>
            </div>
        </div>

        <div class="uk-container">
            <single-form />
        </div>

        <footer id="footer">
            <div class="uk-container-medium uk-flex">
                <div id="copyR" class="uk-padding-small uk-margin-auto">
                    <p>© 2019 Delta-vCapital  All Rights Reserved.</p>
                </div>
                <div id="legalD" class="uk-padding-small uk-margin-auto">
                    <h4>Legal</h4>
                    <div class="legal">
                        <ul id="legal">
                            <li class="uk-flex-inline uk-link"><a href="#">Disclaimer</a></li>
                            <li class="uk-flex-inline ">|</li>
                            <li class="uk-flex-inline uk-link"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div id="social" class="uk-padding-small uk-margin-auto">
                    <h4>Connect with us</h4>
                    <ul class="uk-flex ">
                        <li  id="in" class="uk-flex-inline">
                            <a href="https://www.linkedin.com/company/iterateai/">
                                <i class="fab fa-2x fa-linkedin"/>
                            </a>
                        </li>
                        <li id="tweet" class="uk-flex-inline">
                            <a href="https://twitter.com/iterateai">
                                <i class="fab fa-2x fa-twitter"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="footerLogo" class="uk-padding-small uk-margin-auto">
                    <img src="https://delta.pixelsandcode.studio/wp-content/uploads/2019/02/Delta-vCapital_triangles_border.png">
                </div>
            </div>
        </footer>
    </div>

</template>

<script >
    import SingleForm from './examples/singleform/Singleform';
    export default {
        name: 'DeltaV',
        components:{
            SingleForm
        }
    }
</script>

<style scoped>
    nav{
        background: rgba(0,0,0,0);
        z-index: 1;
    }
    .uk-navbar-container{

        padding-left: 30px;
        padding-right: 30px;
        font-family: Raleway, Helvetica, Arial, Lucida, sans-serif;
        position: fixed;
        right: 0;
        left: 0;

    }
    .uk-navbar-right a{
        color: black;
        text-decoration: none;
    }
    #rightNav{
        margin-bottom: 0px;

    }
    #logo{
        height: 65.594px;
        margin-left:0;
    }
    footer{
        justify-content: space-between;
        margin-left: 125px;
        margin-right: 125px;
        font-family: Raleway, Helvetica, Arial, Lucida, sans-serif;
    }
    .fab{
        color: rgb(236, 108, 84);
    }
    .uk-navbar-item {
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        padding: 20px 0px;
        margin: 0px 20px;
        display: inline-block;
        position: relative;
        opacity: 0.75;

    }
    .uk-navbar-item a:focus{
        color: rgb(236, 108, 84);
    }

    .uk-navbar-item:hover {
        opacity: 1;
    }

    .uk-navbar-item::before {
        transition: 300ms;
        height: 3px;
        content: "";
        position: absolute;
        background-color: rgb(236, 108, 84);
    }

    .uk-navbar-item-line::before {
        width: 0%;
        bottom: 30px;
    }

    .uk-navbar-item-line:hover::before {
        width: 100%;
    }
    #legal{
        padding-left:0;
    }
    #in{
        padding-right: 25px;
    }
    .legal a{
        color:black;
        text-decoration-color: rgb(236, 108, 84);
    }
    .mountainTxt{
        color:white;
        font-family: Raleway, Helvetica, Arial, Lucida, sans-serif;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    .mountainTxt h1{
        color:white;
        font-weight: bold;
    }
    .mountainTxt p{
        font-size: 27.795px;

    }
    #footerLogo{
        width: 300px;
        height: 200px;
        opacity: 0.1;
    }
    #social{
        margin-top:40px;
    }
    #legalD{
        margin-top:60px;
    }
    #copyR{
        margin-top: 100px;
    }






</style>
