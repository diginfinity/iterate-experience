<template>
    <section>

        <div class="et-field">
            <et-switch name="switch"
                       nativeValue="yes"
                       type="switch"
                       size="is-large">
                Default
            </et-switch>
        </div>

        <div class="et-field">
            <et-switch v-model="isSwitched">
                {{ isSwitched }}
            </et-switch>
        </div>

        <div class="et-field">
            <et-switch v-model="isSwitchedCustom"
                       true-value="Yes"
                       false-value="No">
                {{ isSwitchedCustom }}
            </et-switch>
        </div>

        <div class="et-field">
            <et-switch
                disabled>
                Disabled
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
