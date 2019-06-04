<template>
    <div>
        <h1>Multi form example</h1>
        <p>To check out the embedded form example without the documentation wrapper "polluting" the view, please <router-link to="/demo/multipage">visit this page</router-link>.</p>
        <h5>If you'd like to work with Ulta Beauty, answer the questions below. We'll be in touch.</h5>
        <Example :component="ExMultiForm" :code="ExMultiFormCode" vertical/>
    </div>
</template>

<script>
  import ExMultiForm from './form/ExMultiForm'
  import ExMultiFormCode from '!!raw-loader!./form/ExMultiForm'

    export default {
        data() {
            return {
                ExMultiForm,
                ExMultiFormCode
            }
        }
    }
</script>
