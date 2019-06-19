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
        data() {
            return {
                formName: '0'
            }
        },
        methods: {
            onComplete() {
                // // eslint-disable-next-line
                // console.log(this)

                let form = this.$refs.et_application_form

                // eslint-disable-next-line
                console.log(form)

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

                    // eslint-disable-next-line
                    // var thisKey = form.elements[i].name
                    // var thisValue = encodeURIComponent(form.elements[i].value)

                    switch (form.elements[i].nodeName) {
                        case 'INPUT':
                            switch (form.elements[i].type) {
                                case 'text':
                                case 'hidden':
                                case 'password':
                                case 'email':
                                case 'button':
                                case 'reset':
                                case 'submit':
                                    q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value))
                                    // eslint-disable-next-line
                                    // q.push({ [form.elements[i].name] : thisValue })
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
                // eslint-disable-next-line
                console.log(form.name)

                this.clearFormData(form)

                if (form.name !== '') {
                    // eslint-disable-next-line
                    // console.log('no-name')
                    let payload = {
                        form_data: q,
                        form_id: form.name
                    }
                    const isFullPage = true
                    const loadingComponent = this.$loading.open({
                        container: isFullPage ? null : this.$refs.element.$el
                    })
                    const thisOne = this
                    axios({
                        url: 'http://34.220.186.89/api/forms',
                        method: 'post',
                        data: payload
                        // headers: {
                        //     'Access-Control-Allow-Origin': '*'
                        // }
                    })
                    .then(function (response) {
                        // your action after success
                        // eslint-disable-next-line
                        console.log(response)
                        thisOne.clearFormData(form)
                        thisOne.$dialog.alert({
                            title: 'Thank you!',
                            message: 'Your data has been sucessfully submitted.',
                            confirmText: 'Close'
                        })
                        loadingComponent.close()
                        // setTimeout(() => loadingComponent.close(), 500)
                    })
                    .catch(function (error) {
                        // your action on error success
                        // eslint-disable-next-line
                        console.log(error)
                        thisOne.$dialog.alert({
                            title: 'Error',
                            message: 'Your data has not been submitted. Please try again later.',
                            confirmText: 'Close'
                        })
                        loadingComponent.close()
                        // setTimeout(() => loadingComponent.close(), 500)
                    })
                }
            },
            clearFormData(form) {
                /* eslint-disable */
                form.reset()
                // let i, j
                // for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                //     // if (form.elements[i].name === '') {
                //     //     continue
                //     // }
                //     form.elements[i].value = '' 
                //     // console.log(form.elements[i])
                // }

            }
        }
    }
</script>
