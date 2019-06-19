import { shallowMount } from '@vue/test-utils'
import EtModal from '@components/modal/Modal'

describe('EtModal', () => {
    it('is called', () => {
        const wrapper = shallowMount(EtModal)
        expect(wrapper.name()).toBe('EtModal')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
