<template>
    <div>
        <p class="breadcrumb">Field Customizations</p>
        <h1>Input</h1>

        <h4>Basic examples</h4>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>

        <h4>Using icons</h4>
        <Example :component="ExIcons" :code="ExIconsCode" vertical/>

        <p>Note that you manualy need to link icons in order to work, depending on how you are implementig the ET form.</p>

        <p>Please use the <code>&lt;et-field&gt;</code> wrapper to get full functionaity for all input types.</p>

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
