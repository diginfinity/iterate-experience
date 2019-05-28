<template>
    <section>
        <h3>Basic</h3>
        <et-field>
            <et-radio label="Radio"
                      v-model="radio"
                      native-value="Flint"
                      name="radio">Flint
            </et-radio>

            <et-radio label="Radio"
                      v-model="radio"
                      native-value="Silver"
                      name="radio">Silver
            </et-radio>
        </et-field>
        <p>Selection: {{ radio }}</p>

        <h3>Disabled</h3>
        <et-field>
            <et-radio label="Radio"
                      nativeValue="Silver"
                      name="radio"
                      disabled>Disabled

            </et-radio>
        </et-field>
        <Select/>
    </section>
</template>

<script>
    import Select from '!!raw-loader!../select/index';

    export default {
        components: {
            Select
        },
        data() {
            return {
                radio: 'Silver',

            }
        }
    }
</script>
