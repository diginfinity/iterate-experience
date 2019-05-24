<template>
    <div class="et-sidebar-left uk-visible@m">
        <div class="et-sidebar-body">
            <template v-for="(items, i) in data">
                <p class="sidebar-label" :key="items.category">
                    {{ items.category }}
                </p>
                <ul class="uk-nav uk-nav-default tm-nav uk-margin-top" :key="i">
                    <li v-for="item in normalizedData(items.pages)" :key="item.title">
                        <router-link v-if="item.title" :to="item.path">
                            <span class="sidebar-menu-text">{{ item.title }}</span>
                        </router-link>

                        <!-- submenu -->
                        <template v-else>
                            <p>{{ item.category }}</p>
                            <ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
                                <li
                                    v-for="subItem in normalizedData(item.pages)"
                                    :key="subItem.title">
                                    <router-link :to="subItem.path">
                                        <span class="sidebar-menu-text">{{ subItem.title }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
    import routes from '@/data/routes'

    export default {
        props: {
            data: Array
        },
        methods: {
            normalizedData(items) {
                return items.map((item) => {
                    return typeof item === 'string'
                        ? routes[item]
                        : item
                })
            },
            backToTop() {
                window.scroll({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>
