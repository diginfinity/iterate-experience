<template>
    <section>
        <et-field label="Name">
            <et-input v-model="name"></et-input>
        </et-field>

        <et-field label="Email"
                 type="et-is-danger"
                 message="This email is invalid">
            <et-input type="email"
                     value="john@"
                     maxlength="30">
            </et-input>
        </et-field>

        <et-field label="Username"
                 type="et-is-success"
                 message="This username is available">
            <et-input value="johnsilver" maxlength="30"></et-input>
        </et-field>

        <et-field label="Password">
            <et-input type="password"
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
                name: 'John Silver'
            }
        }
    }
</script>
