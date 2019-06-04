<template>
    <div class="et-control" :class="rootClasses">
        <input
            :name="name"
            v-if="type !== 'textarea'"
            ref="input"
            class="et-input"
            :class="[inputClasses, customClass]"
            :type="newType"
            :autocomplete="newAutocomplete"
            :maxlength="maxlength"
            :value="computedValue"
            v-bind="$attrs"
            @input="onInput"
            @blur="onBlur"
            @focus="onFocus">

        <textarea
            :name="name"
            v-else
            ref="textarea"
            class="et-textarea"
            :class="[inputClasses, customClass]"
            :maxlength="maxlength"
            :value="computedValue"
            v-bind="$attrs"
            @input="onInput"
            @blur="onBlur"
            @focus="onFocus"/>

        <et-icon
            v-if="icon"
            class="et-is-left"
            :icon="icon"
            :pack="iconPack"
            :size="iconSize"/>

        <et-icon
            v-if="!loading && (passwordReveal || statusType)"
            class="et-is-right"
            :class="{ 'is-clickable': passwordReveal }"
            :icon="passwordReveal ? passwordVisibleIcon : statusTypeIcon"
            :pack="iconPack"
            :size="iconSize"
            :type="!passwordReveal ? statusType : 'et-is-primary'"
            both
            @click.native="togglePasswordVisibility"/>

        <small
            v-if="maxlength && hasCounter && type !== 'number'"
            class="et-help et-counter"
            :class="{ 'et-is-invisible': !isFocused }">
            {{ valueLength }} / {{ maxlength }}
        </small>
    </div>
</template>

<script>
    import Icon from '../icon/Icon'
    import config from '../../utils/config'
    import FormElementMixin from '../../utils/FormElementMixin'
    import RequiredProps from '../../utils/RequiredProps'

    export default {
        name: 'EtInput',
        components: {
            [Icon.name]: Icon
        },
        mixins: [FormElementMixin, RequiredProps],
        inheritAttrs: false,
        props: {
            name: [Number, String],
            value: [Number, String],
            type: {
                type: String,
                default: 'text'
            },
            passwordReveal: Boolean,
            hasCounter: {
                type: Boolean,
                default: () => config.defaultInputHasCounter
            },
            customClass: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                newValue: this.value,
                newType: this.type,
                newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
                isPasswordVisible: false,
                _elementRef: this.type === 'textarea'
                    ? 'textarea'
                    : 'input'
            }
        },
        computed: {
            computedValue: {
                get() {
                    return this.newValue
                },
                set(value) {
                    this.newValue = value
                    this.$emit('input', value)
                    !this.isValid && this.checkHtml5Validity()
                }
            },
            rootClasses() {
                return [
                    this.iconPosition,
                    this.size,
                    {
                        'et-is-expanded': this.expanded,
                        'et-is-loading': this.loading,
                        'et-is-clearfix': !this.hasMessage
                    }
                ]
            },
            inputClasses() {
                return [
                    this.statusType,
                    this.size,
                    { 'et-is-rounded': this.rounded }
                ]
            },
            hasIconRight() {
                return this.passwordReveal || this.loading || this.statusType
            },
            /**
             * Position of the icon or if it's both sides.
             */
            iconPosition() {
                if (this.icon && this.hasIconRight) {
                    return 'et-has-icons-left et-has-icons-right'
                } else if (!this.icon && this.hasIconRight) {
                    return 'et-has-icons-right'
                } else if (this.icon) {
                    return 'et-has-icons-left'
                }
            },
            /**
             * Icon name (MDI) based on the type.
             */
            statusTypeIcon() {
                switch (this.statusType) {
                    case 'et-is-success': return 'check'
                    case 'et-is-danger': return 'alert-circle'
                    case 'et-is-info': return 'information'
                    case 'et-is-warning': return 'alert'
                }
            },
            /**
             * Check if have any message prop from parent if it's a Field.
             */
            hasMessage() {
                return !!this.statusMessage
            },
            /**
             * Current password-reveal icon name.
             */
            passwordVisibleIcon() {
                return !this.isPasswordVisible ? 'eye' : 'eye-off'
            },
            /**
             * Get value length
             */
            valueLength() {
                if (typeof this.computedValue === 'string') {
                    return this.computedValue.length
                } else if (typeof this.computedValue === 'number') {
                    return this.computedValue.toString().length
                }
                return 0
            }
        },
        watch: {
            /**
             * When v-model is changed:
             *   1. Set internal value.
             */
            value(value) {
                this.newValue = value
            }
        },
        methods: {
            /**
             * Toggle the visibility of a password-reveal input
             * by changing the type and focus the input right away.
             */
            togglePasswordVisibility() {
                this.isPasswordVisible = !this.isPasswordVisible
                this.newType = this.isPasswordVisible ? 'text' : 'password'
                this.$nextTick(() => {
                    this.$refs.input.focus()
                })
            },
            /**
             * Input's 'input' event listener, 'nextTick' is used to prevent event firing
             * before ui update, helps when using masks (Cleavejs and potentially others).
             */
            onInput(event) {
                this.$nextTick(() => {
                    if (event.target) {
                        this.computedValue = event.target.value
                    }
                })
            }
        }
    }
</script>
