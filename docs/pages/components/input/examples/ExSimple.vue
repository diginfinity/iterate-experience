<template>
    <section>
        <et-field label="Name">
            <et-input v-model="name" name="first_name_personal"></et-input>
        </et-field>

        <et-field label="Email"
                 type="et-is-danger"
                 message="This email is invalid">
            <et-input type="email"
                    name="email_contact"
                    value="jon@"
                    maxlength="30">
            </et-input>
        </et-field>

        <et-field label="Username"
                name="user_name_personal"
                type="et-is-success"
                message="This username is available">
            <et-input value="Jon" maxlength="30" name="last_name_personal"></et-input>
        </et-field>

        <et-field label="Password">
            <et-input type="password"
                     name="password_other"
                     value="1234"
                     password-reveal>
            </et-input>
        </et-field>

        <et-field label="Message">
            <et-input maxlength="200" type="textarea" name="product_description_business"></et-input>
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
