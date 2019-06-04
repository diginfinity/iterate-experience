<template>
    <section>
        <div class="block">
            <et-checkbox v-model="checkboxGroup"
                native-value="Signals">
                Signals
            </et-checkbox>
            <et-checkbox v-model="checkboxGroup"
                native-value="Currate">
                Currate
            </et-checkbox>
            <et-checkbox v-model="checkboxGroup"
                native-value="Interplay">
                Interplay
            </et-checkbox>
            <et-checkbox v-model="checkboxGroup"
                native-value="PilotPass" disabled>
                PilotPass
            </et-checkbox>
        </div>
        <p class="content">
            <b>Selection:</b>
            {{ checkboxGroup }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkboxGroup: ['Currate']
            }
        }
    }
</script>
