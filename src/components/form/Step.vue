<template>
    <li :class="{active:tab.active}">
        <a
            href="javascript:void(0)"
            :class="{'et-disabled': !tab.checked}">
            <div
                class="et-step-marker"
                role="tab"
                :tabindex="tab.checked ? 0 : ''"
                :id="`et-step-${tab.tabId}`"
                :aria-controls="tab.tabId"
                :aria-disabled="tab.active"
                :aria-selected="tab.active"
                :class="{'et-checked': tab.checked}">
                <div v-if="tab.active" class="et-step-container-active">
                    {{ index + 1 }}
                </div>
                <div v-if="!tab.active" class="et-step-container">
                    {{ index + 1 }}
                </div>
            </div>
            <slot name="title">
                <span
                    class="et-step-title"
                    :class="{'et-active':tab.active}">
                    {{ tab.title }}</span>
            </slot>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'EtStep',
        props: {
            tab: {
                type: Object,
                default: () => {
                }
            },
            index: {
                type: Number,
                default: 0
            }
        }
    }
</script>
