import Vue from 'vue'

export const afterEachGlobal = (to, from) => {
    const title = `${to.meta.title} | ET Experience`

    window.document.documentElement.scrollTop = 0
    window.document.title = title

    Vue.prototype.$eventHub.$emit('navigate', to.meta)
}
