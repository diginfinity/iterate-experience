<template>
    <section>
        <h3>Icon</h3>
        <et-field label="Icon">
            <et-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </et-select>
            <!--            <et-icon icon="globe"-->
            <!--                     icon-pack="fas"/>-->
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
