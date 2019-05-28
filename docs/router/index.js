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
                route('documentation/checkbox', 'components/checkbox/Checkbox'),
                route('documentation/field', 'components/field/Field'),
                route('documentation/numberinput', 'components/numberinput/Numberinput'),
                route('documentation/radio', 'components/radio'),
                route('documentation/select', 'components/select'),
                route('documentation/switch', 'components/switch')
            ]
        },
        // Global redirect
        { path: '*', redirect: '' }
    ]
})

router.afterEach(afterEachGlobal)

export default router
