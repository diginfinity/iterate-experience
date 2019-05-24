<template>
    <section class="uk-section-primary uk-light et-section-texture uk-position-relative">
        <div class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center uk-height-viewport">
            <div class="uk-width-1-1">
                <div class="uk-container">
                    <h1 class="uk-heading-small uk-text-bold">Iterate.ai ET Application Form</h1>
                    <p class="uk-margin-medium uk-text-lead">
                        The ET Application form gives our members the ability to collect information about emerging technologies <br class="uk-visible@s">
                        by providing a way to create challenges and general questionairres.
                    </p>
                    <div class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center uk-grid">
                        <div>
                            <router-link class="uk-button uk-button-primary et-button-primary uk-button-large et-button-large uk-visible@s" to="/documentation/start">Get Started</router-link>
                            <router-link class="uk-button uk-button-primary et-button-primary uk-hidden@s" to="/documentation/start">Get Started</router-link>
                        </div>
                        <div>
                            <a class="uk-button uk-button-default et-button-default uk-button-large et-button-large uk-visible@s" href="https://github.com/diginfinity/iterate-experience">Github</a>
                            <a class="uk-button uk-button-default et-button-default uk-hidden@s" href="https://github.com/diginfinity/iterate-experience">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-overlay uk-position-bottom-center">
            <p class="uk-text-small">Version: {{ version }}</p>
        </div>
    </section>
</template>

<script>
    import Package from '../../package.json'
    export default {
        name: 'App',
        data() {
            return {
                version: Package.version
            }
        }
    }
</script>
