<template>
    <section>
        <et-field label="Name">
            <et-input value="Kevin Garvy"></et-input>
        </et-field>

        <et-field label="Email"
                  type="is-danger"
                  message="This email is invalid!">
            <et-input type="email"
                      value="john@"
                      maxlength="30">
            </et-input>
        </et-field>

        <et-field label="Username"
                  type="is-success"
                  message="This username is available">
            <et-input value="johnsilver" maxlength="30"></et-input>
        </et-field>

        <et-field label="Password"
                  type="is-warning"
                  :message="['Password is too short', 'Password must have at least 8 characters']">
            <et-input value="123" type="password" maxlength="30"></et-input>
        </et-field>

        <et-field label="Subject">
            <et-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </et-select>
        </et-field>
    </section>
</template>
