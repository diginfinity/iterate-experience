<template>
    <section class="">
        <h4
            v-if="docprint"
            class="code-example-title">{{ title }}
        </h4>
        <slot/>
        <div uk-margin v-if="component">
            <div :class="{'et-form-border': docprint}">
                <div class="example-component" :class="{ 'et-add-padding': addPadding }">
                    <component :is="component"/>
                </div>
            </div>
            <div v-if="code">
                <CodeView
                    :code="code"
                    bordered
                    codepen
                />
                <hr class="is-medium">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            component: [Object, Function],
            code: String,
            title: String,
            addPadding: Boolean,
            vertical: Boolean,
            docprint: Boolean
        }
    }
</script>
