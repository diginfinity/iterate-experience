<template>
    <section>
        <h3>Multiple</h3>
        <p class="content"><b>selected</b>: {{ selectedOptions }}</p>
        <et-field>
            <et-select
                multiple
                native-size="8"
                v-model="selectedOptions">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
                <option value="vane">Vane</option>
                <option value="billy">Billy</option>
                <option value="jack">Jack</option>
                <option value="heisenberg">Heisenberg</option>
                <option value="jesse">Jesse</option>
                <option value="saul">Saul</option>
                <option value="mike">Mike</option>
            </et-select>
        </et-field>
    </section>
</template>

<script>
    // import Icon from '../../../../src/components/icon/Icon'

    export default {
        data() {
            return {
                selectedOptions: []
            }
        },
        components: {
            // [Icon.name]: Icon
        },
    }
</script>
