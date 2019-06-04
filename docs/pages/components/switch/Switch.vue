<template>
    <div>
        <p class="breadcrumb">Field Customizations</p>
        <h1>Switch</h1>

        <h4>Basic examples</h4>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>

        <h4>Color coded types</h4>
        <Example :component="ExTypes" :code="ExTypesCode" vertical/>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/switch'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    import ExTypes from './examples/ExTypes'
    import ExTypesCode from '!!raw-loader!./examples/ExTypes'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode,
                ExTypes,
                ExTypesCode
            }
        }
    }
</script>
