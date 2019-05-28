<template>
    <section>
        <h3>Default</h3>
        <div class="et-field">
            <et-switch name="switch"
                       nativeValue="yes"
                       type="switch"
                       size="is-large">Default
            </et-switch>
        </div>

        <h3>Is Switched</h3>
        <div class="et-field">
            <et-switch v-model="isSwitched">
                {{ isSwitched }}
            </et-switch>
        </div>

        <h3>Is switched custom value</h3>
        <div class="et-field">
            <et-switch v-model="isSwitchedCustom"
                       true-value="Yes"
                       false-value="No">
                {{ isSwitchedCustom }}
            </et-switch>
        </div>

        <h3>Disabled</h3>
        <div class="et-field">
            <et-switch
                disabled>
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
