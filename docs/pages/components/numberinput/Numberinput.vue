<template>
    <div>
        <p class="breadcrumb">Number input customizations</p>
        <h1>Number</h1>

        <Example title="Basic examples" :component="ExSimple" :code="ExSimpleCode" vertical docprint addPadding/>

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
