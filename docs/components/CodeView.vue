<template>
    <div
        class="codeview"
        :class="{'expandedView':expandedView}">
        <div
            class="uk-text-bold
            codeview-title uk-text-small uk-padding-small uk-light uk-background-secondary"
            v-if="title">
            {{ title }}
        </div>
        <figure class="highlight uk-margin-remove-top uk-position-relative">
            <!-- <div
                class="clicktoexpand button-container uk-position-top-left"
                @click="showHideCall">Expand</div> -->

            <div
                class="button-container uk-position-top-left"
                style="left:10px;top:2px"
                @click="showHideCall">
                <button
                    class="uk-button uk-button-text uk-button-small uk-text-small"
                    style="font-size: 11px">
                    Expand
                </button>
            </div>

            <div class="button-container uk-position-top-right" style="right:10px;top:2px">
                <button
                    class="uk-button uk-button-text uk-button-small uk-text-small copy-code"
                    style="font-size: 11px">
                    Copy
                </button>
            </div>
            <div class="overlay"/>
            <pre
                class="uk-margin-remove-top code-example"
                v-highlight><code :class="lang">{{ code }}</code></pre>
        </figure>
    </div>
</template>

<script>
    export default {
        props: {
            lang: {
                type: String,
                default: 'html'
            },
            bordered: Boolean,
            code: String,
            expanded: Boolean,
            title: String
        },
        data() {
            return {
                expandedView: true
            }
        },
        methods: {
            showHideCall() {
                this.expandedView = !this.expandedView
            }
        }
    }
</script>
