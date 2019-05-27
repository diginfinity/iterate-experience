<template>
    <div
        class="et-select"
        :class="{'et-has-icon': icon}">
        <!-- <span class="et-select" :class="spanClasses"> -->
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
            <slot/>

        </select>
        <!-- </span> -->
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
            multiple: Boolean
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
