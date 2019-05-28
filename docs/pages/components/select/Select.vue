<template>
    <div>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>
        <Example :component="ExMultiple" :code="ExMultipleCode" vertical/>
        <Example :component="ExIcons" :code="ExIconsCode" vertical/>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/select'
    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
    import ExMultiple from './examples/ExMultiple'
    import ExMultipleCode from '!!raw-loader!./examples/ExMultiple'
    import ExIcons from './examples/ExIcons'
    import ExIconsCode from '!!raw-loader!./examples/ExIcons'

    export default {
        data() {
            return {
                api,
                ExSimple,
                ExSimpleCode,
                ExMultiple,
                ExMultipleCode,
                ExIcons,
                ExIconsCode
            }
        }
    }
</script>
