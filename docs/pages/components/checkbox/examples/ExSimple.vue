<template>
    <section>
        <et-field>
            <et-checkbox>Basic</et-checkbox>
        </et-field>
        <et-field>
            <et-checkbox v-model="checkbox">
                {{ checkbox }}
            </et-checkbox>
        </et-field>
        <et-field>
            <et-checkbox v-model="checkboxCustom"
                         true-value="Yes"
                         false-value="No">
                {{ checkboxCustom }}
            </et-checkbox>
        </et-field>
        <et-field>
            <et-checkbox :indeterminate="true">
                Indenterminate
            </et-checkbox>
        </et-field>
        <et-field>
            <et-checkbox disabled>Disabled</et-checkbox>
        </et-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                checkbox: false,
                checkboxCustom: 'Yes'
            }
        }
    }
</script>
