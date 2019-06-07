<template>
    <div>
        <p class="breadcrumb">Radio Customizations</p>
        <h1>Radio</h1>

        <Example title="Basic examples" :component="ExSimple" :code="ExSimpleCode" vertical docprint addPadding/>

        <Example title="Color coded types" :component="ExTypes" :code="ExTypesCode" vertical docprint addPadding/>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/radio'

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
                ExTypesCode,
            }
        }
    }
</script>
