import Page from './Page'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Page)
    }
}

use(Plugin)

export default Plugin

export {
    Page
}
