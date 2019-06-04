<template>
    <div>
        <Example :component="ExMultiForm" vertical/>
    </div>
</template>

<script>
  import ExMultiForm from '../../examples/multiform/form/ExMultiForm'

    export default {
        data() {
            return {
                ExMultiForm
            }
        }
    }
</script>