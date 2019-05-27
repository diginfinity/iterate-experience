<script>
    export default {
        name: 'EtFieldBody',
        props: {
            message: {
                type: String
            },
            type: {
                type: [String, Object]
            }
        },
        render(createElement) {
            return createElement('div', { attrs: { 'class': 'et-field-body' } }, this.$slots.default.map((element) => {
                // skip returns and comments
                if (!element.tag) {
                    return element
                }
                if (this.message) {
                    return createElement('et-field', { attrs: { message: this.message, 'type': this.type } }, [element])
                }
                return createElement('et-field', { attrs: { 'type': this.type } }, [element])
            }))
        }
    }
</script>
