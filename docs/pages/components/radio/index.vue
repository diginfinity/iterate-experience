<template>
    <section>
        <div>
            <et-field>
                <et-radio v-model="radio" name="radio" native-value="Flint">Flint</et-radio>
                <et-radio v-model="radio" name="radio" native-value="Silver">Silver</et-radio>
            </et-field>
        </div>
        <p>{{ radio }}</p>
    </section>
</template>
