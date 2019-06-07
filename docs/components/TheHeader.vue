<template>
    <div class="uk-navbar-container uk-light et-navbar-container" uk-sticky="media: 960">
        <div class="uk-container uk-container-expand">
            <nav uk-navbar>
                <div class="uk-navbar-left">
                    <a href="/" class="logo-container">
                        <img
                            src="../assets/img/logo_iterate-white.png"
                            width="160"
                            height="57">
                    </a>
                    <!-- <a href="/" class="uk-navbar-item uk-logo">Iterate.ai</a> -->
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/documentation">Documentation</router-link></li>
                        <li><router-link to="/examples">Examples</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    .uk-navbar, .uk-container {
        height:100%;
    }
    .uk-container {
        /* border-bottom: 10px solid rgba(210,210,210,0.5); */
    }
    .uk-navbar-container {
        box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.33);
        height: 90px;
    }
    .uk-container {
        padding-left: 0px;
    }
    .logo-container {
        /* background-color: rgba(255, 255, 255, 0.125); */
        background: linear-gradient(
          to right,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1)) 0 0 no-repeat;
        height: 100%;
        width: 315px;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .logo-container img {
        padding: 0px 0px;
    }
    .uk-navbar .uk-navbar-right a {
        color: rgba(255, 255, 255, 0.5)
    }
    .uk-navbar .uk-navbar-right .uk-active {
        color: rgba(255, 255, 255, 0.75)!important
    }
    @media(max-width: 1399px) {
      .logo-container {
        width: 255px;
      }
    }
</style>
