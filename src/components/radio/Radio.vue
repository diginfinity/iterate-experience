<template>
    <div class="et-control">
        <label
            class="et-radio radio"
            ref="label"
            :class="[newValue === nativeValue ? type : null, size]"
            :disabled="disabled"
            :tabindex="disabled ? false : 0"
            @keydown.prevent.enter.space="$refs.label.click()">
            <slot/>
            <input
                v-model="computedValue"
                tabindex="-1"
                type="radio"
                @click.stop
                :disabled="disabled"
                :required="required"
                :name="name"
                :value="nativeValue">
        </label>
    </div>
</template>

<script>
    import RequiredProps from '../../utils/RequiredProps'
    export default {
        name: 'EtRadio',
        mixins: [RequiredProps],
        props: {
            value: [String, Number, Boolean, Function, Object, Array, Symbol],
            nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
            type: {
                type: String,
                default: 'radio'
            },
            name: String,
            disabled: Boolean,
            required: Boolean,
            size: String
        },
        data() {
            return {
                newValue: this.value
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
                }
            }
        },
        watch: {
            value(value) {
                this.newValue = value
            }
        }
    }
</script>
