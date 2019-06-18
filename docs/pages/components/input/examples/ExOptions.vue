<template>
    <section>
        <h4>Required field</h4>
        <p>Defined by adding a <code>required</code> parameter to the input field.</p>
        <et-field label="Email">
            <et-input type="email"
                    name="email_contact"
                    value=""
                    required
                    maxlength="30">
            </et-input>
            <p class="et-input-sub">Please enter your business email address</p>
        </et-field>

        <h4>Pattern matching</h4>
        <p>Defined as simple regex parameter e.g. <code>pattern="[a-zA-Z ]*"</code> </p>
        <et-field label="Enter your first name">
            <et-input
                name="first_name_personal"
                pattern="[a-zA-Z ]*"
                maxlength="30"
                required>
            </et-input>
            <p class="et-input-sub">Characters accepted are a-z and space.</p>
        </et-field>

        <h4>Input URL</h4>
        <p>Allow URL type input field</p>
        <et-field label="Enter your website address">
            <et-input
                name="email_contact"
                type="url"
                maxlength="30"
                required>
            </et-input>
            <p class="et-input-sub">Please add a URL, including the <code>http://</code> or <code>https://</code> at the beginning.</p>
        </et-field>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Jon Nordmark',
                isSwitched: false,
                isSwitchedCustom: 'Yes'
            }
        }
    }
</script>
