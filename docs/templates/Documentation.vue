<template>
    <main>
        <TheHeader/>
        <TheSidebar v-if="!meta.hideSidebar" :data="menu"/>
        <div class="et-main uk-section uk-section-default">
            <div class="uk-container uk-container-small uk-position-relative">
                <router-view/>
            </div>
        </div>
    </main>
</template>

<script>
    import TheHeader from '@/components/TheHeader'
    import TheNavbar from '@/components/TheNavbar'
    import TheSidebar from '@/components/TheSidebar'
    import menuData from '@/data/menu'

    export default {
        components: {
            TheHeader,
            TheNavbar,
            TheSidebar
        },
        data() {
            return {
                menu: [],
                meta: {}
            }
        },
        methods: {
            setMeta(meta) {
                this.meta = meta
                this.menu = menuData[this.meta.menu]
            }
        },
        mounted() {
            this.$eventHub.$on('navigate', this.setMeta)
            this.setMeta(this.$router.currentRoute.meta)
        }
    }
</script>
