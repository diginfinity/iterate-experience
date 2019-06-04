<template>
    <form
        ref="et_application_form"
        class="et-form-wrapper et-clearfix">
        <et-wizard
            @on-complete="onComplete"
            :start-index="startIndex">
            <slot/>
        </et-wizard>
    </form>
</template>

<script>
    import Wizard from './Wizard'
    import axios from 'axios'

    export default {
        name: 'EtForm',
        components: {
            [Wizard.name]: Wizard
        },
        props: {
            title: {
                type: String,
                default: 'ET Form'
            },
            subtitle: {
                type: String,
                default: 'Split your flow in multiple steps'
            },
            nextButtonText: {
                type: String,
                default: 'Next'
            },
            backButtonText: {
                type: String,
                default: 'Back'
            },
            finishButtonText: {
                type: String,
                default: 'Submit'
            },
            validateOnBack: Boolean,
            /***
             *
             * Index of the initial tab to display
             */
            startIndex: {
                type: Number,
                default: 0,
                validator: (value) => {
                    return value >= 0
                }
            }
        },
        methods: {
            onComplete() {
                let form = this.$refs.et_application_form

                if (!form || form.nodeName !== 'FORM') {
                    return
                }
                // eslint-disable-next-line
                let i,
                    j,
                    q = []
                for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                    if (form.elements[i].name === '') {
                        continue
                    }

                    switch (form.elements[i].nodeName) {
                        case 'INPUT':
                            switch (form.elements[i].type) {
                                case 'text':
                                case 'hidden':
                                case 'password':
                                case 'button':
                                case 'reset':
                                case 'submit':
                                    q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value))
                                    break
                                case 'checkbox':
                                case 'radio':
                                    if (form.elements[i].checked) {
                                        q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value))
                                    }
                                    break
                            }
                            break
                        case 'file':
                            break
                        case 'TEXTAREA':
                            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value))
                            break
                        case 'SELECT':
                            switch (form.elements[i].type) {
                                case 'select-one':
                                    q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value))
                                    break
                                case 'select-multiple':
                                    // eslint-disable-next-line
                                    for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                        // eslint-disable-next-line
                                        if (form.elements[i].options[j].selected) {
                                            q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value))
                                        }
                                    }
                                    break
                            }
                            break
                        case 'BUTTON':
                            switch (form.elements[i].type) {
                                case 'reset':
                                case 'submit':
                                case 'button':
                                    q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value))
                                    break
                            }
                            break
                    }
                }
                // let data = q.join('&')
                // eslint-disable-next-line
                console.log(q)
                let payload = {
                    data: q,
                    formID: 1,
                    key: 'asdsad3yhsr',
                    userID: '2364'
                }
                axios({
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    method: 'post',
                    data: payload
                })
                .then(function (response) {
                    // your action after success
                    // eslint-disable-next-line
                    console.log(response)
                })
                .catch(function (error) {
                    // your action on error success
                    // eslint-disable-next-line
                    console.log(error)
                })
            }
        }
    }
</script>
