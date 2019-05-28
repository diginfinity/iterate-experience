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
          <et-input v-model="last_name" type="text" name="last_name_personal"></et-input>
        </et-field>
        <et-field
          label="Business email">
          <et-input
            type="email"
            value=""
            name="email_business"
            v-model="email_business"
            maxlength="30">
          </et-input>
        </et-field>
      </et-page>
      <!-- second page -->
      <et-page>
        <h4>Business data</h4>
        <et-field label="Bussiness model description">
          <et-input
            type="textarea"
            name="model_description_business"
            maxlength="1000"
            placeholder="Please enter the description of the business model you use">
            v-model="model_description_business"
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