<template>
    <div
        class="et-control"
        :class="{ 'et-is-expanded': expanded, 'et-has-icons-left': icon }">
        <span class="et-select" :class="spanClasses">

            <select
                v-model="computedValue"
                ref="select"
                :multiple="multiple"
                :size="nativeSize"
                v-bind="$attrs"
                @blur="$emit('blur', $event) && checkHtml5Validity()"
                @focus="$emit('focus', $event)">

                <template v-if="placeholder">
                    <option
                        v-if="computedValue == null"
                        :value="null"
                        disabled
                        hidden>
                        {{ placeholder }}
                    </option>
                </template>
                <slot/>

            </select>
        </span>

        <b-icon
            v-if="icon"
            class="et-is-left"
            :icon="icon"
            :pack="iconPack"
            :size="iconSize"/>
    </div>
</template>

<script>
    import Icon from '../icon/Icon'
    import FormElementMixin from '../../utils/FormElementMixin'

    export default{
        name: 'EtSelect',
        components: {
            [Icon.name]: Icon
        },
        mixins: [FormElementMixin],
        inheritAttrs: false,
        props: {
            value: {
                type: [String, Number, Boolean, Object, Array, Symbol, Function],
                default: null
            },
            placeholder: String,
            multiple: Boolean,
            nativeSize: [String, Number]
        },
        data() {
            return {
                selected: this.value,
                _elementRef: 'select'
            }
        },
        computed: {
            computedValue: {
                get() {
                    return this.selected
                },
                set(value) {
                    this.selected = value
                    this.$emit('input', value)
                    !this.isValid && this.checkHtml5Validity()
                }
            },
            spanClasses() {
                return [this.statusType, {
                    'et-is-fullwidth': this.expanded,
                    'et-is-multiple': this.multiple,
                    'et-is-empty': this.selected === null
                }]
            }
        },
        watch: {
            value(value) {
                this.selected = value
                !this.isValid && this.checkHtml5Validity()
            }
        }

    }
</script>
