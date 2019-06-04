<template>
  <div>
    <!-- init the ET Form -->
    <et-form>
      <!-- first page -->
      <et-page>
        <!-- Add a page title in plain HTML -->
        <h4>Personal data</h4>
        <et-field label="First name">
          <et-input v-model="first_name" name="first_name_personal"></et-input>
        </et-field>
        <et-field label="Last name">
          <et-input v-model="last_name" name="last_name_personal"></et-input>
        </et-field>
        <et-field label="Middle name">
          <et-input v-model="middle_name" name="middle_name_personal"></et-input>
        </et-field>
        <et-field label="Username">
          <et-input v-model="user_name" name="user_name_personal"></et-input>
        </et-field>
        <et-field label="Password">
          <et-input type="password" name="password_personal" password-reveal></et-input>
        </et-field>
      </et-page>
      <!-- second page -->
      <et-page>
        <h4>Contact data</h4>
        <et-field label="Email">
          <et-input v-model="email" name="email_contact"></et-input>
        </et-field>
        <et-field label="Phone">
          <et-input v-model="phone" name="phone_contact"></et-input>
        </et-field>
        <et-field label="Address Street">
          <et-input v-model="address_street" name="address_street_contact"></et-input>
        </et-field>
        <et-field label="Address Street Number">
          <et-input v-model="address_street_number" name="address_street_number_contact"></et-input>
        </et-field>
        <et-field label="Address City">
          <et-input v-model="address_city" name="address_city_contact"></et-input>
        </et-field>
        <et-field label="Address State">
          <et-input v-model="address_state" name="address_state_contact"></et-input>
        </et-field>
      </et-page>
      <!-- third page -->
      <et-page>
        <h4>Business data</h4>
        <et-field label="Company name">
          <et-input v-model="company_name" name="company_name_business"></et-input>
        </et-field>
        <et-field label="Company description">
            <et-input
                type="textarea"
                max-length="1000"
                v-model="company_description"
                name="company_description_business">
            </et-input>
        </et-field>
        <et-field label="Product description">
            <et-input
                type="textarea"
                max-length="1000"
                v-model="product_description"
                name="product_description_business">
        </et-input>
        </et-field>
      </et-page>
    <!-- close the ET Form -->
    </et-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first_name: '',
        last_name:'',
        email_business: '',
        model_description_business: ''
      }
    }
  }
</script>
