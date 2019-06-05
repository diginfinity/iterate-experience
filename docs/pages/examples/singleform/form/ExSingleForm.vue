<template>
  <div>
    <!-- init the ET Form -->
    <et-form name="6"> <!-- the form name is the form ID -->
      <!-- first page -->
      <et-page>
        <!-- Add a page title in plain HTML -->
        <et-field label="Enter your first name">
          <et-input v-model="first_name" name="first_name_personal"></et-input>
        </et-field>
        <et-field label="Enter your last name">
          <et-input v-model="last_name" type="text" name="last_name_personal"></et-input>
        </et-field>
        <et-field label="Enter your work email address">
          <et-input
            type="email"
            value=""
            name="email_business"
            v-model="email_business"
            maxlength="30">
          </et-input>
        </et-field>
        <et-field label="Company name" message="Enter your company name">
            <et-input v-model="company_name" name="company_name_business"></et-input>
        </et-field>
        <et-field label="Company Url" message="Enter your official website (with http:// or https://)">
            <et-input v-model="company_url" name="company_url_business"></et-input>
        </et-field>
        <et-field label="Job title">
            <et-input v-model="job_title" name="job_title_business"></et-input>
        </et-field>
        <et-field label="Describe your company">
            <et-input
                type="textarea"
                max-length="1000"
                v-model="company_description"
                name="company_description_business">
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
        company_name: '',
        company_url: '',
        job_title: '',
        company_description: ''
      }
    }
  }
</script>
