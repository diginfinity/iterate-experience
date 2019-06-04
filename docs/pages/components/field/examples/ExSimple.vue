<template>
    <section>
        <et-field label="Email"
                  type="et-is-danger"
                  message="This email is invalid!">
            <et-input type="email"
                      value="john@"
                      name="email_contact"
                      maxlength="30">
            </et-input>
        </et-field>

        <et-field label="Username"
                  type="et-is-success"
                  message="This username is available">
            <et-input
                value="johnsilver"
                name="user_name_personal"
                maxlength="30">
            </et-input>
        </et-field>

        <et-field label="Password"
                  type="et-is-warning"
                  :message="['Password is too short', 'Password must have at least 8 characters']">
            <et-input value="123" type="password" name="password_personal" maxlength="30"></et-input>
        </et-field>

        <et-field label="Subject">
            <et-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </et-select>
        </et-field>
    </section>
</template>
