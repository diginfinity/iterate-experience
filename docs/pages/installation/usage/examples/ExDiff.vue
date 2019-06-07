<template>
  <div style="margin: 2em;">
    <!-- HTML -->
    HTML input
    <div style="margin-bottom: 1em;">
      <input type="text" placeholder="first name" name="first_name_personal">
    </div>
    <!-- ET Form -->
    <div>
      ET Form input
      <et-input type="text" v-model="name" placeholder="first name" name="first_name_personal"></et-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    }
  }
</script>