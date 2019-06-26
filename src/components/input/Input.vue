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
            @input="onInput($event);onKeyUp($event)"
            @blur="onBlur"
            @focus="onFocus">
        <div
            class="dropdown-menu"
            v-if="newType !== 'textarea' && name==='company_name_business'"
        >
            <div
                v-if="autocompleteArray.length > 0 && autocompleteShow===true"
                class="dropdown-content"
            >
                <div
                    v-for="(item) in autocompleteArray"
                    class="dropdown-item"
                    @click="onAutocompleteSelect(item.label)"
                    :key="item.id"
                >
                    {{ item.label }}
                </div>
            </div>
        </div>

        <textarea
            :name="name"
            v-if="type === 'textarea'"
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
            :class="{ 'et-is-clickable': passwordReveal }"
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
    import axios from 'axios'
    const qs = require('querystring')

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
                isFocused: false,
                lastKnownInput: '',
                autocompleteArray: [],
                autocompleteShow: false,
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
                    // this.newType = type
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
                if (this.passwordReveal) {
                    this.isPasswordVisible = !this.isPasswordVisible
                    this.newType = this.isPasswordVisible ? 'text' : 'password'
                    this.$nextTick(() => {
                        this.$refs.input.focus()
                    })
                }
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
            },
            onAutocompleteSelect(item) {
                // eslint-disable-next-line
                console.log("clicks:", item)
                this.computedValue = item
                this.autocompleteShow = false
                this.autocompleteArray = [] // clear autocomplete array
                // show please wait

                // axios({
                //     url: 'https://angular.iterate.ai/users/get_startup_logo',
                //     method: 'post',
                //     data: qs.stringify({
                //         startup_name: 'IBM',
                //         startup_type: 'STARTUP'
                //     }),
                //     config: {
                //         headers: {
                //             'Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                //             // 'X-Requested-With': 'XMLHttpRequest',
                //             'Accept': '*/*',
                //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                //             // 'X-Requested-With': 'XMLHttpRequest'
                //             // 'Cache-Control': 'no-cache'
                //             // 'Connection': 'keep-alive'
                //         },
                //         'X-Requested-With': 'XMLHttpRequest'
                //     }
                // })

                var data = qs.stringify({
                    startup_name: 'IBM',
                    startup_type: 'STARTUP'
                })

                // axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
                axios.post(
                    'https://angular.iterate.ai/users/get_startup_logo',
                    data,
                    {
                        headers: {
                            // 'Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                            // 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
                            // 'X-Requested-With': 'XMLHttpRequest',
                            // Accept: '*/*',
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            // [X-Requested-With]: 'XMLHttpRequest'
                        }
                    }
                )
                .then(function (response) {
                    // eslint-disable-next-line
                    console.log("data line:", response)
                    // your action after success
                    // if (thisOne.lastKnownInput === event.target.value) {
                    //     // eslint-disable-next-line
                    //     // console.log("data match", response)
                    //     thisOne.autocompleteArray = []
                    //     response.data.forEach((entry) => {
                    //         // tab.checked = false
                    //         // // eslint-disable-next-line
                    //         // console.log("data line:", entry)
                    //         thisOne.autocompleteArray.push(entry)
                    //     })
                    //     // eslint-disable-next-line
                    //     thisOne.autocompleteShow = true
                    //     // console.log("data array:", thisOne.autocompleteArray)
                    // } else {
                    //     thisOne.autocompleteArray = []
                    //     thisOne.autocompleteShow = false
                    // }
                })
                .catch(function (error) {
                    // eslint-disable-next-line
                    console.log(error.response)
                })

                // lock fields
            },
            onBlur() {
                setTimeout(() => {
                    this.autocompleteShow = false
                }, 250)
            },
            onKeyUp(event) {
                // if (event.target.name === 'company_name_business') {
                //     this.lastKnownInput = event.target.value
                //     // eslint-disable-next-line
                //     console.log("burek:", event.target.value)
                //     // // eslint-disable-next-line
                //     // console.log("burek:", event.target.name)
                //     var thisOne = this
                //     axios({
                //         url: 'https://angular.iterate.ai/ajaxs/get_organization/1?term=' + event.target.value,
                //         method: 'get'
                //     })
                //     .then(function (response) {
                //         // your action after success
                //         if (thisOne.lastKnownInput === event.target.value) {
                //             // eslint-disable-next-line
                //             // console.log(response.headers['set-cookie']);
                //             // console.log("data match", response)
                //             thisOne.autocompleteArray = []
                //             response.data.forEach((entry) => {
                //                 // tab.checked = false
                //                 // // eslint-disable-next-line
                //                 // console.log("data line:", entry)
                //                 thisOne.autocompleteArray.push(entry)
                //             })
                //             // eslint-disable-next-line
                //             thisOne.autocompleteShow = true
                //             // console.log("data array:", thisOne.autocompleteArray)
                //         } else {
                //             thisOne.autocompleteArray = []
                //             thisOne.autocompleteShow = false
                //         }
                //     })
                //     .catch(function (error) {
                //         // eslint-disable-next-line
                //         console.log(error.response)
                //     })
                // }
            }
        }
    }
</script>
