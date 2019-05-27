<template>
    <div class="codeview">
        <div
            class="uk-text-bold
            codeview-title uk-text-small uk-padding-small uk-light uk-background-secondary"
            v-if="title">
            {{ title }}
        </div>
        <figure class="highlight uk-margin-remove-top uk-position-relative">
            <div class="button-container uk-position-top-right" style="right:10px">
                <button
                    class="uk-button uk-button-text uk-button-small uk-text-small copy-code"
                    style="font-size: 11px">
                    Copy
                </button>
            </div>
            <pre
                class="uk-margin-remove-top"
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
        }
    }
</script>
