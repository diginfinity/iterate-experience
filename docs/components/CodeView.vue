<template>
    <div class="codeview">
        <div
            class="uk-text-bold
            codeview-title uk-text-small uk-padding-small uk-light uk-background-secondary"
            v-if="title">
            {{ title }}
        </div>
        <figure class="highlight uk-margin-remove-top uk-position-relative" :class="figureClasses">
            <div class="button-container uk-position-top-right" style="right:10px">
                <button
                    class="uk-button uk-button-text uk-button-small uk-text-small copy-code"
                    style="font-size: 11px">
                    Copy
                </button>
                <button
                    v-if="!expanded"
                    class="uk-button uk-button-text uk-button-small uk-text-small"
                    style="font-size: 11px"
                    @click="isExpanded = false">
                    Hide
                </button>
            </div>
            <pre
                class="uk-margin-remove-top"
                v-highlight><code :class="lang">{{ code }}</code></pre>
            <button
                v-if="!isExpanded && !expanded"
                class="codeview-showcode"
                @click="isExpanded = true">
                <et-icon
                    icon="code-tags"
                    size="et-is-small"
                    custom-class="mdi-18px"
                />
                <span>Show code</span>
            </button>
            <button
                v-if="!expanded"
                class="codeview-hidecode"
                @click="isExpanded = false">
                <et-icon
                    icon="eye-off-outline"
                    size="et-is-small"
                    custom-class="mdi-18px"
                />
                <span>Hide code</span>
            </button>
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
                isExpanded: false
            }
        },
        computed: {
            figureClasses() {
                return {
                    'et-is-collapsed': !this.bordered && !this.expanded,
                    'et-is-expanded': this.isExpanded || this.expanded
                }
            }
        }
    }
</script>
