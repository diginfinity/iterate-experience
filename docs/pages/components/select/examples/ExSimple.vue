<template>
    <section>

        <et-field label="Basic">
            <et-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
                <option value="vane">Vane</option>
                <option value="billy">Billy</option>
                <option value="jack">Jack</option>
            </et-select>
        </et-field>

        <et-field label="Grouped">
            <et-select placeholder="Select a character" >
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

        <et-field
            label="Error"
            type="et-is-danger"
            message="Something went wrong with this field">
            <et-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </et-select>
        </et-field>

        <et-field label="Disabled">
            <et-select placeholder="Select a character"
                       disabled>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </et-select>
        </et-field>

        <et-field label="Disabled option">
            <et-select placeholder="Select a character">
                <option value="flint">Flint</option>
                <option value="silver" disabled>Silver</option>
            </et-select>
        </et-field>

        <et-field
            label="Expanded">
            <et-select placeholder="Select a character" expanded>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </et-select>
        </et-field>

    </section>
</template>

<script>
    // import Icon from '../../../../src/components/icon/Icon'

    export default {
        components: {
            // [Icon.name]: Icon
        },
    }
</script>

