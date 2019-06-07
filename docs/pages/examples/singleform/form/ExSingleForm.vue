<template>
  <div>
    <!-- init the ET Form -->
    <et-form name=""> <!-- the form name is the form ID -->
      <!-- first page -->
      <et-page>
        <!-- Add a page title in plain HTML if any -->
        <h1>ET App Form single page example</h1>
        <h5>If you'd like to work with us, answer the questions below and we'll be in touch.</h5>

        <et-field label="Enter your first name">
          <et-input
              v-model="first_name"
              name="first_name_personal"
              pattern="[a-zA-Z ]*"
              maxlength="30"
              required>
          </et-input>
          <p class="et-input-sub">Characters accepted are a-z and space.</p>
        </et-field>

        <et-field label="Enter your last name">
          <et-input
              v-model="last_name"
              type="text"
              name="last_name_personal"
              pattern="[a-zA-Z ]*"
              maxlength="30"
              required>
          </et-input>
          <p class="et-input-sub">Characters accepted a-z and space.</p>
        </et-field>

        <et-field label="Enter your work email address">
          <et-input
            type="email"
            value=""
            name="email_business"
            v-model="email_business"
            required
            maxlength="60">
          </et-input>
          <p class="et-input-sub">Standard email address formats accepted only.</p>
        </et-field>

        <et-field label="Company name">
            <et-input
                v-model="company_name"
                name="company_name_business"
                required
                maxlength="60">
            </et-input>
            <p class="et-input-sub">Enter your company name</p>
        </et-field>

        <et-field label="Company Url">
            <et-input v-model="company_url" name="company_url_business"></et-input>
            <p class="et-input-sub">Enter your official website (with http:// or https://)</p>
        </et-field>

        <et-field label="Job title">
            <et-input v-model="job_title" name="job_title_business">
            </et-input>
            <p class="et-input-sub">Please enter your job title.</p>
        </et-field>

        <et-field label="Describe your company">
            <et-input
                type="textarea"
                max-length="1000"
                v-model="company_description"
                name="company_description_business"
                maxlength="1000"
                required>
            </et-input>
            <p class="et-input-sub">Please enter the brief description of your company; keep it short and sweet – grab attention.
            </p>
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
