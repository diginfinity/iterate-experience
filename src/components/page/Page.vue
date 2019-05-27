<template>
    <div
        v-show="active"
        class="et-page"
        role="tabpanel"
        :id="tabId"
        :aria-hidden="!active"
        :aria-labelledby="`et-step-${tabId}`">
        <slot :active="active"/>
    </div>
</template>

<script>
    export default{
        name: 'EtPage',
        props: {
            title: {
                type: String,
                default: ''
            },
            /***
             * Function to execute before tab switch. Return value must be boolean
             * If the return result is false, tab switch is restricted
             */
            beforeChange: {
                type: Function
            },
            /***
             * Function to execute after tab switch. Return void for now.
             * Safe to assume necessary validation has already occured
             */
            afterChange: {
                type: Function
            },
            route: {
                type: [String, Object]
            },
            additionalInfo: {
                type: Object,
                default: () => {}
            }
        },
        inject: ['addTab', 'removeTab'],
        data() {
            return {
                active: false,
                validationError: null,
                checked: false,
                tabId: ''
            }
        },
        mounted() {
            this.addTab(this)
        },
        destroyed() {
            if (this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el)
            }
            this.removeTab(this)
        }
    }
</script>
