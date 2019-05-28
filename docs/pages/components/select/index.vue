<template>
    <section>
        <h3>Basic</h3>
        <et-field label="Basic">
            <et-select placeholder="Select a character" icon="account">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
                <option value="vane">Vane</option>
                <option value="billy">Billy</option>
                <option value="jack">Jack</option>
            </et-select>
        </et-field>

        <h3>Grouped</h3>
        <et-field label="Grouped">
            <et-select placeholder="Select a character" icon="account">
                <optgroup label="Black Sails">
                    <option value="flint">Flint</option>
                    <option value="silver">Silver</option>
                    <option value="vane">Vane</option>
                    <option value="billy">Billy</option>
                    <option value="jack">Jack</option>
                </optgroup>

                <optgroup label="Breaking Bad">
                    <option value="heisenberg">Heisenberg</option>
                    <option value="jesse">Jesse</option>
                    <option value="saul">Saul</option>
                    <option value="mike">Mike</option>
                </optgroup>

                <optgroup label="Game of Thrones">
                    <option value="tyrion-lannister">Tyrion Lannister</option>
                    <option value="jamie-lannister">Jamie Lannister</option>
                    <option value="daenerys-targaryen">Daenerys Targaryen</option>
                    <option value="jon-snow">Jon Snow</option>
                </optgroup>
            </et-select>
        </et-field>

        <h3>Icon</h3>
        <et-field label="Icon">
            <et-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </et-select>
            <et-icon icon="globe"
                     icon-pack="fas"/>
        </et-field>

        <h3>Disabled</h3>
        <et-field label="Disabled">
            <et-select placeholder="Select a character" disabled>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </et-select>
        </et-field>

        <h3>Disabled options</h3>
        <et-field label="Disabled option">
            <et-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver" disabled>Silver</option>
            </et-select>
        </et-field>

        <h3>Multyple</h3>
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
    import Icon from '../../../../src/components/icon/Icon'

    export default {
        name: 'Select',
        data() {
            return {
                selectedOptions: []
            }
        },
        components: {
            [Icon.name]: Icon
        },
    }
</script>
