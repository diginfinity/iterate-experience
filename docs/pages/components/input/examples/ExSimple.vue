<template>
    <section>
        <!-- <et-input v-model="name" name="first_name"></et-input> -->
        <et-form> <!-- for testing -->
            <et-page>
                <et-input v-model="name" name="first_name"></et-input>
                <div class="block">
                    <et-radio v-model="name"
                              native-value="Flint">
                        Flint
                    </et-radio>
                    <et-radio v-model="name"
                              native-value="Silver">
                        Silver
                    </et-radio>
                </div>
            </et-page>
            <et-page>
                <et-input v-model="last_name" name="last_name"></et-input>
            </et-page>
            <et-numberinput/>
        </et-form>
    </section>
</template>

<script>
    import EtNumberinput from "../../../../../src/components/numberinput/Numberinput";
    export default {
        components: {EtNumberinput},
        data() {
            return {
                name: 'John Silver',
                last_name: ''
            }
        }
    }
</script>
