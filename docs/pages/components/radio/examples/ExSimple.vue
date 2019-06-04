<template>
    <section>
        <div class="block">

            <et-radio v-model="radio"
                native-value="Signals">
                Signals
            </et-radio>
            <et-radio v-model="radio"
                native-value="Currate">
                Currate
            </et-radio>
            <et-radio v-model="radio"
                native-value="Iterate">
                Iterate
            </et-radio>
            <et-radio v-model="radio"
                native-value="PilotPass"
                disabled>
                PilotPass
            </et-radio>
        </div>
        <p class="content">
            <b>Selection:</b>
            {{ radio }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'Currate'
            }
        }
    }
</script>
