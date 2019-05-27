export default {
    props: {
        name: {
            type: String,
            default: '',
            // The value must match one of these strings
            validator: function (value) {
                return (
                    value.endsWith('_other') ||
                    value.endsWith('_personal') ||
                    value.endsWith('_business') ||
                    value.endsWith('_contact')
                )
            }
        }
    }
}
