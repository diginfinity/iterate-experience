import Table from './Table'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Table)
    }
}

use(Plugin)

export default Plugin

export {
    Table
}
