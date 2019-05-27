<template>
    <section class="example-section uk-margin">
        <p class="uk-h4">{{ title }}</p>
        <slot/>
        <div uk-margin v-if="code && component">
            <div class="uk-padding" style="border: 1px #e5e5e5 solid">
                <div class="example-component" :class="{ 'is-paddingless': paddingless }">
                    <component :is="component"/>
                </div>
            </div>
            <div>
                <CodeView
                    :code="code"
                    bordered
                    codepen
                />
            </div>
        </div>
        <hr class="is-medium">
    </section>
</template>

<script>
    export default {
        props: {
            component: [Object, Function],
            code: String,
            title: String,
            paddingless: Boolean,
            vertical: Boolean
        }
    }
</script>
