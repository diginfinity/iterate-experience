<template>
    <div>
        <p class="breadcrumb">Field Customizations</p>
        <h1>Input type elements</h1>

        <h4>Basic examples</h4>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>

        <h4>Using icons</h4>
        <Example :component="ExIcons" :code="ExIconsCode" vertical/>

        <p>Please use the <code>&lt;et-field&gt;</code> wrapper to get all functionaity.</p>

        <ApiView :data="api"/>

        

    </div>
</template>

<script>
    import api from './api/input'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    import ExIcons from './examples/ExIcons'
    import ExIconsCode from '!!raw-loader!./examples/ExIcons'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode,
                ExIcons,
                ExIconsCode
            }
        }
    }
</script>
