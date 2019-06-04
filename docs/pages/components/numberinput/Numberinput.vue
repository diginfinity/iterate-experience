<template>
    <div>
        <p class="breadcrumb">Field Customizations</p>
        <h1>Number</h1>

        <h4>Basic examples</h4>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/numberinput'
    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode
            }
        }
    }
</script>
