<template>
    <div class="uk-navbar-container uk-light et-navbar-container" uk-sticky="media: 960">
        <div class="uk-container uk-container-expand">
            <nav uk-navbar>
                <div class="uk-navbar-left">
                    <a href="/" class="uk-navbar-item uk-logo">Iterate.ai</a>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/documentation">Documentation</router-link></li>
                        <li><router-link to="/form">Form</router-link></li>
                        <li><router-link to="/examples">Examples</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
