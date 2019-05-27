import Form from './Form'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Form)
    }
}

use(Plugin)

export default Plugin

export {
    Form
}
