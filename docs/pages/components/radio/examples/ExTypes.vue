<template>
    <section>
        <div class="field">
            <et-radio v-model="radio"
                native-value="default">
                Default
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="info"
                type="et-is-info">
                Info
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="success"
                type="et-is-success">
                Success
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="danger"
                type="et-is-danger">
                Danger
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="warning"
                type="et-is-warning">
                Warning
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="white"
                type="et-is-white">
                White
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="light"
                type="et-is-light">
                Light
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="dark"
                type="et-is-dark">
                Dark
            </et-radio>
        </div>
        <div class="field">
            <et-radio v-model="radio"
                native-value="black"
                type="et-is-black">
                Black
            </et-radio>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'default'
            }
        }
    }
</script>
