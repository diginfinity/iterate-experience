<template>
    <section>
        <div class="field">
            <et-checkbox :value="true">
                Default
            </et-checkbox>
        </div>
        <div class="field">
            <et-checkbox :value="true"
            type="et-is-info">
                Info
            </et-checkbox>
        </div>
        <div class="field">
            <et-checkbox :value="true"
            type="et-is-success">
                Success
            </et-checkbox>
        </div>
        <div class="field">
            <et-checkbox :value="true"
            type="et-is-danger">
                Danger
            </et-checkbox>
        </div>
        <div class="field">
            <et-checkbox :value="true"
            type="et-is-warning">
                Warning
            </et-checkbox>
        </div>
    </section>
</template>
