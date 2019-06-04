<template>
    <section>
        <h3 class="subtitle">With Material Design Icons</h3>
        <et-field>
            <et-select placeholder="Country" icon="earth">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </et-select>
        </et-field>

        <et-field>
            <et-select placeholder="Client" icon="account">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </et-select>
        </et-field>

        <h3 class="subtitle">With FontAwesome</h3>
        <et-field>
            <et-select
                placeholder="Country"
                icon="globe"
                icon-pack="fas">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </et-select>
        </et-field>

        <et-field>
            <et-select
                placeholder="Client"
                icon="user"
                icon-pack="fas">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </et-select>
        </et-field>
    </section>
</template>


<script>
    // import Icon from '../../../../src/components/icon/Icon'

    export default {
        data() {
            return {}
        },
        components: {
            // [Icon.name]: Icon
        },
    }
</script>
