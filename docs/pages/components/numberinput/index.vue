<template>
    <section>
        <et-field label="Basic">
            <et-numberinput v-model="number"></et-numberinput>
        </et-field>

        <et-field label="Input readonly">
            <et-numberinput :editable="false"></et-numberinput>
        </et-field>

        <et-field label="Disabled">
            <et-numberinput disabled></et-numberinput>
        </et-field>

        <div>
            <Example :component="checkbox" :code="checkboxCode" vertical/>

            <ApiView :data="api"/>
        </div>

    </section>

</template>

<script>
    import checkbox from '.././checkbox/index'
    import checkboxCode from '!!raw-loader!.././checkbox/index'

    export default {
        data() {
            return {
                number: 10,
                checkbox,
                checkboxCode
            }
        }
    }
</script>
