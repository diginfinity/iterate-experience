<template>
    <div>
        <p class="breadcrumb">Select/Option Customizations</p>
        <h1>Select</h1>

        <Example title="Basic examples" :component="ExSimple" :code="ExSimpleCode" vertical docprint addPadding/>

        <Example title="Multi-select" :component="ExMultiple" :code="ExMultipleCode" vertical docprint addPadding/>

        <Example title="Icon select" :component="ExIcons" :code="ExIconsCode" vertical docprint addPadding/>

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
