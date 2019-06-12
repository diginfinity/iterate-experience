<template>
  <div>
    <!-- init the ET Form -->
    <et-form>
      <!-- first page -->
      <et-page>
        <!-- Add a page title in plain HTML -->
        <h4>Personal data</h4>
        <et-field label="First name">
          <et-input v-model="first_name" name="first_name_personal" required></et-input>
          <p class="et-input-sub">Please enter your first name</p>
        </et-field>
        <et-field label="Last name">
          <et-input v-model="last_name" name="last_name_personal"></et-input>
          <p class="et-input-sub">Please enter your family name</p>
        </et-field>
        <et-field label="Middle name">
          <et-input v-model="middle_name" name="middle_name_personal"></et-input>
          <p class="et-input-sub">Middle name</p>
        </et-field>
        <et-field label="Username">
          <et-input v-model="user_name" name="user_name_personal"></et-input>
          <p class="et-input-sub">Please enter a user name for logging purposes</p>
        </et-field>
        <et-field label="Password">
          <et-input type="password" name="password_personal" password-reveal></et-input>
          <p class="et-input-sub">Using upper and lower case letter combined with special characters seem to help against security breaches</p>
        </et-field>
      </et-page>
      <!-- second page -->
      <et-page>
        <h4>Contact data</h4>
        <et-field label="Email">
          <et-input v-model="email" name="email_contact"></et-input>
          <p class="et-input-sub">Business email contact address with which we can reach you related to this subject</p>
        </et-field>
        <et-field label="Phone">
          <et-input v-model="phone" name="phone_contact"></et-input>
          <p class="et-input-sub">Business phone</p>
        </et-field>
        <et-field label="Address Street">
          <et-input v-model="address_street" name="address_street_contact"></et-input>
          <p class="et-input-sub">Business address street</p>
        </et-field>
        <et-field label="Address Street Number">
          <et-input v-model="address_street_number" name="address_street_number_contact"></et-input>
          <p class="et-input-sub">Business address street number</p>
        </et-field>
        <et-field label="Address City">
          <et-input v-model="address_city" name="address_city_contact"></et-input>
          <p class="et-input-sub">Business address city</p>
        </et-field>
        <et-field label="Address State">
          <et-input v-model="address_state" name="address_state_contact"></et-input>
          <p class="et-input-sub">Business address state</p>
        </et-field>
      </et-page>
      <!-- third page -->
      <et-page>
        <h4>Business data</h4>
        <et-field label="Company name">
          <et-input v-model="company_name" name="company_name_business"></et-input>
          <p class="et-input-sub">The official or unofficial name of the company</p>
        </et-field>
        <et-field label="Company description">
            <et-input
                type="textarea"
                max-length="1000"
                v-model="company_description"
                name="company_description_business">
            </et-input>
            <p class="et-input-sub">General description of the business your company does. A short snappy desc is helpful please.</p>
        </et-field>
        <et-field label="Product description">
            <et-input
                type="textarea"
                max-length="1000"
                v-model="product_description"
                name="product_description_business">
            </et-input>
            <p class="et-input-sub">General description of the product(s) your company has which we would be interested checking out, and reasons why would we do so.</p>
        </et-field>
      </et-page>
      <!-- fourth page -->
      <et-page>
        <h4>Almost done</h4>
        <et-field label="Who recommended you contacting to us?">
          <et-input
              v-model="ulta_beauty_who_recommended_custom_data_other"
              type="textarea"
              max-length="1000"
              name="ulta_beauty_who_recommended_custom_data_other"></et-input>
              <p class="et-input-sub">How did you find out about this form and that we are listening to similar companies?</p>
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
        middle_name: '',
        user_name: '',
        email: '',
        phone: '',
        address_street: '',
        address_street_number: '',
        address_city: '',
        address_state: '',
        email_business: '',
        model_description_business: '',
        company_name: '',
        company_description: '',
        product_description: '',
        ulta_beauty_who_recommended_custom_data_other: ''
      }
    }
  }
</script>
