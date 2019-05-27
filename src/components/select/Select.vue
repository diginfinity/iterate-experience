<template>
    <div
        v-show="active"
        class="et-select"
        :class="{'is-expanded': expanded, 'has-icon': icon}"
        role="tabpanel"
        :id="tabId"
        :aria-hidden="!active"
        :aria-labelledby="`et-step-${tabId}`">
        <span class="et-select" :class="spanClasses">
            <select
                v-model="computedValue"
                ref="select"
                :multiple="multiple"
                v-bind="$attrs"
                @blur="$emit('blur', $event)"
                @focus="$emit('focus',$event)">

                <template v-if="placeholder">
                    <option
                        v-if="computedValue == null"
                        :value="null"
                        disabled
                        hidden>
                        {{ placeholder }}
                    </option>
                </template>
                <slot :active="active"/>

            </select>
        </span>
        <et-icon
            v-if="icon"
            class="is-left"
            :icon="icon"
            :pack="iconPack"
            :size="iconSize"/>
    </div>
</template>

<script>
    import Icon from '../icon/Icon'
    export default{
        name: 'EtSelect',
        components: {
            [Icon.name]: Icon
        },
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
