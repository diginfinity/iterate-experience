<template>
    <div>
        <Example :component="ExSingleForm" vertical/>
    </div>
</template>

<script>
  import ExSingleForm from '../../examples/singleform/form/ExSingleForm'

    export default {
        data() {
            return {
                ExSingleForm
            }
        }
    }
</script>