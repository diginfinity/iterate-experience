<template>
    <div>
        <h1>Single form example</h1>
        <h5>If you'd like to work with Ulta Beauty, answer the questions below. We'll be in touch.</h5>
        <Example :component="ExSingleForm" :code="ExSingleFormCode" vertical/>
    </div>
</template>

<script>
  import ExSingleForm from './form/ExSingleForm'
  import ExSingleFormCode from '!!raw-loader!./form/ExSingleForm'

    export default {
        data() {
            return {
                ExSingleForm,
                ExSingleFormCode
            }
        }
    }
</script>
