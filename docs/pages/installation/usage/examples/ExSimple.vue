<template>
  <div>
    <et-form>
      <et-page>
        First name
        <et-input type="text" v-model="first_name" name="first_name_personal"></et-input>
        Last name
        <et-input type="text" v-model="last_name" name="last_name_personal"></et-input>
      </et-page>
    </et-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first_name: '',
        last_name: ''
      }
    }
  }
</script>