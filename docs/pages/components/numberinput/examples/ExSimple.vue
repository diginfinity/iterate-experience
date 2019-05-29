<template>
    <section>
        <et-field label="Basic">
            <et-numberinput name="test_number_other" v-model="number"></et-numberinput>
        </et-field>

        <et-field label="Input readonly">
            <et-numberinput name="test_number_1_other" :editable="false"></et-numberinput>
        </et-field>

        <et-field label="Disabled">
            <et-numberinput name="test_number_2_other" disabled></et-numberinput>
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
