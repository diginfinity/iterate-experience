import { shallowMount } from '@vue/test-utils'
import EtDialog from '@components/dialog/Dialog'

describe('EtDialog', () => {
    it('is called', () => {
        const wrapper = shallowMount(EtDialog, {
            attachToDocument: true
        })
        expect(wrapper.name()).toBe('EtDialog')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
