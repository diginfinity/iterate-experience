<template>
    <div>
        <h1 class="uk-h1 tm-heading-fragment">Installation</h1>
        <h5>Learn where to download and how to compile/include the ETExperience sources.</h5>
        <p>There are three ways to install and use ETExperience helper library</p>

        <h2 class="uk-h2 tm-heading-fragment">1. NPM or Yarn (recommended)</h2>
        <p>After creating a project with vue-cli or custom-made (usually Webpack)</p>
        <h4 class="uk-text-bold">Installation</h4>
        <CodeView code="npm install etexperience" lang="bash" expanded/>

        <hr>

        <h4 class="uk-text-bold">Usage</h4>
        <CodeView title="Full bundle (recommended)" :code="importingBundle | pre" lang="javascript" expanded/>
        <!-- <CodeView title="Individual components as Vue plugins" :code="importingComponentsAsVuePlugins | pre" lang="javascript" expanded/>
        <CodeView title="Individual components" :code="importingComponents | pre" lang="javascript" expanded/> -->

        <hr>

        <h2 class="uk-h2 tm-heading-fragment">2. Standalone</h2>
        <p>Using CDN or downloading files to serve local</p>

        <h4 class="uk-text-bold">Installation</h4>
        <p>Just download or use these as CDN:</p>
        <ul>
            <li>Script: <a href="https://unpkg.com/iterate-experience/dist/etexperience.min.js" target="_blank">https://unpkg.com/iterate-experience/dist/etexperience.min.js</a></li>
            <li>Style: <a href="https://unpkg.com/iterate-experience/dist/etexperience.min.css" target="_blank">https://unpkg.com/iterate-experience/dist/etexperience.min.css</a></li>
        </ul>

        <h4 class="uk-text-bold">Usage</h4>
        <CodeView :code="importingCDNHtml | pre" expanded/>

        <hr>

        <h2 class="uk-h2 tm-heading-fragment">3. Nuxt.js (SSR)</h2>
        <p>Using a Nuxt.js module to keep things easier.</p>

        <h4 class="uk-text-bold">Installation</h4>
        <CodeView code="npm install nuxt-iterate-experience" lang="bash" expanded/>

        <h4 class="uk-text-bold">Usage</h4>
        <p>
            Add <a href="https://github.com/diginfinity/nuxt-iterate-experience">nuxt-iterate-experience</a> to modules section of <code>nuxt.config.js</code>:
        </p>
        <CodeView :code="importingNuxtET | pre" lang="javascript" expanded/>

        <hr>

        <h3 class="uk-h3 tm-heading-fragment">Icons</h3>
        <p>Several components uses icons, you might want to add a pack. Regardless of the three suggested ways of implementation, icons are added with simply linking to the CDN network files.</p>

        <CodeView title="Material Design Icons CDN" :code="materialIcons" expanded/>
        <CodeView title="Font Awesome 5 CDN" :code="fontAwesome5" expanded/>

        <div class="uk-margin">
            <div uk-alert>
                <ul>
                    <li>Please note that ETExperience doesn't include icon packs. You have to import it as you prefer (NPM, CDN, etc.). - if you plan to use them</li>
                    <li>Please refer to corresponding documentation for latest release / CDN.</li>
                </ul>
            </div>
        </div>

        <div class="uk-margin">
            <strong>For any installation and usage method, you need Vue.js version 2.5+.</strong>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                importingBundle: `
                import Vue from 'vue'
                import EtAppForm from 'etexperience'
                import 'etexperience/dist/etexperience.css'
                Vue.use(EtAppForm)
                `,
                importingComponentsAsVuePlugins: `
                import Vue from 'vue'
                import Table from 'iterate-experience/dist/components/table'
                import Input from 'iterate-experience/dist/components/input'
                import 'iterate-experience/dist/etexperience.css'
                Vue.use(Table)
                Vue.use(Input)
                `,
                importingComponents: `
                import Vue from 'vue'
                import { Input } from 'iterate-experience/dist/components/input'
                import 'iterate-experience/dist/etexperience.css'
                Vue.component('et-input', Input)
                `,
                importingSSR: `
                import Vue from 'vue'
                import ETExperience from 'etexperience'
                import 'iterate-experience/dist/etexperience.css'
                Vue.use(ETExperience) `,
                installNuxtEtExperience: `
                // with npm
                npm install nuxt-iterate-experience
                // with yarn
                yarn add nuxt-iterate-experience
                `,
                importingNuxtET: `
                {
                    modules: [
                        // Simple usage
                        'nuxt-iterate-experience',
                        // Or you can customize
                        ['nuxt-iterate-experience', { css: false, materialDesignIcons: false }],
                    ]
                }`,
                importingCDNHtml: `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <script src="https://unpkg.com/vue"><\/script>
                        <link rel="stylesheet" type="text/css" href="./css/etexperience.min.css">
                        <script type="text/javascript" src="./js/etexperience.min.js"><\/script>
                        <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">
                        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.4.1/css/all.css">
                    </head>
                    <body>
                        <div id="app">
                            <!-- ETExperience form goes here -->
                        </div>
                        <script>
                            new Vue({
                            el: '#app'
                        })
                        </\script>
                    </body>
                    </html>`,
                    materialIcons: '<link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">',
                    fontAwesome5: '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'
                    }
                    }
    }
</script>
