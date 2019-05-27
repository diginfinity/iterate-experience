<template>
    <section>
        <et-input v-model="name" name="first_name"></et-input>
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
