<template>
    <section>

        <et-field label="Basic">
            <et-select placeholder="Select a character">
                <option value="john">John</option>
                <option value="bob">Bob</option>
                <option value="jacob">Jacob</option>
                <option value="billy">Billy</option>
                <option value="jack">Jack</option>
            </et-select>
        </et-field>

        <et-field label="Grouped">
            <et-select placeholder="Select a character" >
                <optgroup label="Top Team">
                    <option value="jon">Jon</option>
                    <option value="bob">Bob</option>
                    <option value="jacob">Jacob</option>
                    <option value="billy">Billy</option>
                    <option value="jack">Jack</option>
                </optgroup>

                <optgroup label="Marketing">
                    <option value="anabela">Anabela</option>
                    <option value="andrea">Andrea</option>
                    <option value="saul">Saul</option>
                    <option value="mike">Mike</option>
                </optgroup>

                <optgroup label="Programming Team">
                    <option value="marc">Marc</option>
                    <option value="ivan">Ivan</option>
                    <option value="jose">Jose</option>
                    <option value="arjun">Arjun</option>
                </optgroup>
            </et-select>
        </et-field>

        <et-field
            label="Error"
            type="et-is-danger"
            message="Something went wrong with this field">
            <et-select placeholder="Select a character">
                <option value="jon">Jon</option>
                <option value="anne">Anne</option>
            </et-select>
        </et-field>

        <et-field label="Disabled">
            <et-select placeholder="Select a character"
                       disabled>
                <option value="jon">Jon</option>
                <option value="anne">Anne</option>
            </et-select>
        </et-field>

        <et-field label="Disabled option">
            <et-select placeholder="Select a character">
                <option value="jon">Jon</option>
                <option value="anne" disabled>Anne</option>
            </et-select>
        </et-field>

        <et-field
            label="Expanded">
            <et-select placeholder="Select a character" expanded>
                <option value="jon">Jon</option>
                <option value="anne">Anne</option>
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

