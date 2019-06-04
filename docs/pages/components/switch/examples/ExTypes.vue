<template>
    <section>
        <div class="field">
            <et-switch :value="true">
                Default
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-info">
                Info
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-success">
                Success
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-danger">
                Danger
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-warning">
                Warning
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-white">
                White
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-light">
                Light
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-dark">
                Dark
            </et-switch>
        </div>
        <div class="field">
            <et-switch :value="true"
            type="et-is-black">
                Black
            </et-switch>
        </div>
    </section>
</template>


<script>
    export default {
        data() {
            return {
                isSwitched: false,
                isSwitchedCustom: 'Yes'
            }
        }
    }
</script>
