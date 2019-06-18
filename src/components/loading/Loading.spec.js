import { shallowMount } from '@vue/test-utils'
import EtLoading from '@components/loading/Loading'

describe('EtLoading', () => {
    it('Is called', () => {
        const wrapper = shallowMount(EtLoading)
        expect(wrapper.name()).toBe('EtLoading')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
