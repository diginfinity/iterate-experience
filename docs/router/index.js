import Vue from 'vue'
import Router from 'vue-router'

import { afterEachGlobal } from './guards'
import routes from '@/data/routes'

Vue.use(Router)

function route(path, component) {
    return {
        path,
        name: path,
        meta: routes[path],
        component: () => import(`@/pages/${component}`)
    }
}

// Templates
const Documentation = () => import('@/templates/Documentation')

const router = new Router({
    mode: 'history',
    linkActiveClass: 'uk-active',
    base: __dirname,
    routes: [
        route('/', 'Home'),
        {
            path: '/',
            component: Documentation,
            children: [
                // Documentation
                route('documentation', 'Documentation'),
                route('documentation/start', 'installation/Start'),
                route('documentation/customization', 'installation/Customization'),
                route('documentation/usage', 'installation/Usage'),
                route('documentation/personal', 'predefined/Personal'),
                route('documentation/business', 'predefined/Business'),
                route('documentation/contact', 'predefined/Contact'),
                route('documentation/other', 'predefined/Other'),
                route('documentation/input', 'components/input/Input'),
                route('documentation/checkbox', 'components/checkbox'),
                route('documentation/field', 'components/field'),
                route('documentation/numberinput', 'components/numberinput'),
                route('documentation/radio', 'components/radio/Radio'),
                route('documentation/select', 'components/select/Select'),
                route('documentation/switch', 'components/switch/Switch')
            ]
        },
        // Global redirect
        { path: '*', redirect: '' }
    ]
})

router.afterEach(afterEachGlobal)

export default router
