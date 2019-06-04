<template>
    <div>
        <p class="breadcrumb">Field Customizations</p>
        <h1>Checkbox</h1>

        <h4>Basic examples</h4>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>

        <h4>Grouped array</h4>
        <Example :component="ExArray" :code="ExArrayCode" vertical/>

        <h4>Types</h4>
        <Example :component="ExTypes" :code="ExTypesCode" vertical/>

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
