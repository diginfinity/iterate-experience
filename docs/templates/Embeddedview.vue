<template>
    <main>
        <div id="logo" class="uk-position-top-center uk-padding-small uk-position-relative" >
            <img src="../assets/img/logo.png">
        </div>
        <div class="et-main uk-section uk-section-default">
            <div id="cover-background" >
                <img src="../assets/img/background-lightbulb.png">
                <div id="cover" class="uk-container-small uk-position-center uk-text-center">
                    <h1 style="color:white;">REACH INTO 25+ BRANDS</h1>
                    <p>Iterate works directly with more than 25 brands. Most have global reach. </p>
                    <p> For most, Iterate operates as their Innovation Lab or an extension to</p>
                    <p>their Lab. Register (Apply) with Iterate (below) to make</p>
                    <p>us aware of your capabilities. </p>
                </div>
            </div>
            <div class="uk-container uk-container-small uk-position-relative">
                <div class="uk-card-header">
                    <nav uk-navbar>
                        <div class="uk-navbar-left">
                            <a href="#" class="uk-navbar-item uk-logo"/>
                        </div>
                        <div class="uk-navbar-center">
                            <ul class="uk-navbar-nav">
                                <li><router-link to="#">Challenges</router-link></li>
                                <li><router-link to="#">Collections</router-link></li>
                                <li><router-link to="#">Blog</router-link></li>
                                <li><router-link to="#">Inovators</router-link></li>
                            </ul>
                        </div>
                        <div class="uk-navbar-right">
                            <button class="uk-button-primary uk-button-small"><router-link to="#"/>
                                <i>LOG IN</i>
                            </button>
                        </div>
                    </nav>
                </div>
                <router-view/>
            </div>
        </div>
        <div id="footer" class="uk-container uk-container-expand uk-background-primary">
            <div class="uk-flex">
                <div class="uk-flex-inline uk-padding-small">
                    <ul class="uk-list">
                        <li>About us</li>
                        <li>Tearms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div class="uk-flex-inline uk-padding-small">
                    <ul class="uk-list">
                        <li>Our Team></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div class="text-center">
                <ul class="uk-flex">
                    <li class="uk-flex-inline uk-padding-small">
                        <a href="https://www.linkedin.com/company/iterateai/">
                            <i class="fab fa-3x fa-linkedin"/>
                        </a>
                    </li>
                    <li class="uk-flex-inline uk-padding-small">
                        <a href="https://twitter.com/iterateai">
                            <i class="fab fa-3x fa-twitter"/>
                        </a>
                    </li>
                </ul>
                <p>© 2019 Iterate.ai All rights reserved</p>
            </div>
            <div id="footer-logo" class="uk-flex uk-flex-center@m uk-flex-right@l">
                <img src="../assets/img/footerlogo.png">
            </div>
        </div>
    </main>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar'

    export default {
        components: {
            TheNavbar
        },
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>
<style>
    .uk-button-primary{
        border-radius: 30px;;
    }
    .uk-background-primary{
        background-color: rgb(254, 212, 30);
    }
    #cover{
        background-color:rgba(0, 0, 0, 0.7);
        color:white;
        padding: 30px;
    }
    #cover-background{
    }
    #footer{
        bottom:0;
    }
    #logo{
        margin-bottom: -30px;
    }
    .fa-linkedin{
        color: black;
    }
    .fa-twitter{
        color:black;
    }

</style>
