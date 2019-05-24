import './scss/etexperience-build.scss'

import * as components from './components'

import config, { setOptions } from './utils/config'
import { use, registerComponentProgrammatic } from './utils/plugins'

const EtExperience = {
    install(Vue, options = {}) {
        // Options
        setOptions(Object.assign(config, options))
        // Components
        for (let componentKey in components) {
            Vue.use(components[componentKey])
        }
        // Config component
        const EtExperienceProgrammatic = {
            setOptions(options) {
                setOptions(Object.assign(config, options))
            }
        }
        registerComponentProgrammatic(Vue, '$etexperience', EtExperienceProgrammatic)
    }
}

use(EtExperience)

export default EtExperience
