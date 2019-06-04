<template>
    <div>
        <h1>Single form example</h1>
        <p>To check out the embedded form example without the documentation wrapper "polluting" the view, please <router-link to="/demo/singlepage">visit this page</router-link>.</p>
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
