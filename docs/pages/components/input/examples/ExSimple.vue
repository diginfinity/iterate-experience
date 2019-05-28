<template>
    <section>
        <et-field label="Name">
            <et-input v-model="name" name="first_name_personal"></et-input>
        </et-field>

        <et-field label="Email"
                 type="et-is-danger"
                 message="This email is invalid">
            <et-input type="email"
                     value="john@"
                     name="email_business"
                     maxlength="30">
            </et-input>
        </et-field>

        <et-field label="Username"
                 type="et-is-success"
                 message="This username is available">
            <et-input value="johnsilver" maxlength="30" name="last_name_personal"></et-input>
        </et-field>

        <et-field label="Password">
            <et-input type="password"
                     name="password_other"
                     value="iwantmytreasure"
                     password-reveal>
            </et-input>
        </et-field>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver',
                isSwitched: false,
                isSwitchedCustom: 'Yes'
            }
        }
    }
</script>
