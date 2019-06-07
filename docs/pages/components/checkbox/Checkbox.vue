<template>
    <div>
        <p class="breadcrumb">Checkbox customizations</p>
        <h1>Checkbox</h1>

        <Example title="Basic examples" :component="ExSimple" :code="ExSimpleCode" vertical docprint addPadding/>

        <Example title="Grouped array" :component="ExArray" :code="ExArrayCode" vertical docprint addPadding/>

        <Example title="Types" :component="ExTypes" :code="ExTypesCode" vertical docprint addPadding/>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/checkbox'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    import ExArray from './examples/ExArray'
    import ExArrayCode from '!!raw-loader!./examples/ExArray'

    import ExTypes from './examples/ExTypes'
    import ExTypesCode from '!!raw-loader!./examples/ExTypes'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode,
                ExArray,
                ExArrayCode,
                ExTypes,
                ExTypesCode
            }
        }
    }
</script>
