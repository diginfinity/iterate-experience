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

    </section>

</template>

<script>
    export default {
        data() {
            return {
                number: 10
            }
        }
    }
</script>
