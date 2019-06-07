<template>
    <div>
        <p class="breadcrumb">Input Customizations</p>
        <h1>Input</h1>

        <Example title="Basic examples" :component="ExSimple" :code="ExSimpleCode" vertical docprint addPadding/>

        <Example title="Options available" :component="ExOptions" :code="ExOptionsCode" vertical docprint addPadding/>

        <Example title="Using icons" :component="ExIcons" :code="ExIconsCode" vertical docprint addPadding/>

        <p>Note that you manualy need to link icons in order to work, depending on how you are implementig the ET form.</p>

        <p>Please use the <code>&lt;et-field&gt;</code> wrapper to get full functionaity for all input types.</p>

        <ApiView :data="api"/>

        

    </div>
</template>

<script>
    import api from './api/input'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    import ExOptions from './examples/ExOptions'
    import ExOptionsCode from '!!raw-loader!./examples/ExOptions'

    import ExIcons from './examples/ExIcons'
    import ExIconsCode from '!!raw-loader!./examples/ExIcons'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode,
                ExOptions,
                ExOptionsCode,
                ExIcons,
                ExIconsCode
            }
        }
    }
</script>
