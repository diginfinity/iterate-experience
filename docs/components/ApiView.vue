<template>
    <section class="api-view">
        <h2 class="uk-h4">API</h2>
        <template v-for="component in data">

            <div :key="component.title">
                <!-- there are sometimes multiple items on page,
                so we display the title of the component block -->
                <h3
                    v-if="component.title"
                    class="subtitle">
                    {{ component.title }}
                </h3>

                <!-- we only display if props are present -->
                <div v-if="component.props">
                    <h5>Properties</h5>
                    <et-table
                        :data="component.props"
                        :columns="propsColumns"
                    />
                </div>

                <!-- we only display if slots are present -->
                <div v-if="component.slots">
                    <h5>Slots</h5>
                    <et-table
                        :data="component.slots"
                        :columns="slotsColumns"
                    />
                </div>

            </div>
        </template>
    </section>
</template>

<script>
    export default {
        props: {
            data: Array
        },
        data() {
            return {
                propsColumns: [
                    { label: 'Name', field: 'name', renderHtml: true },
                    { label: 'Description', field: 'description', renderHtml: true },
                    { label: 'Type', field: 'type' },
                    { label: 'Values', field: 'values', renderHtml: true },
                    { label: 'Default', field: 'default', renderHtml: true }
                ],
                slotsColumns: [
                    { label: 'Slot name', field: 'name', renderHtml: true },
                    { label: 'Description', field: 'description', renderHtml: true },
                    { label: 'Props (if scoped)', field: 'props', renderHtml: true }
                ]
            }
        }
    }
</script>
