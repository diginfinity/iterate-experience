import { shallowMount } from '@vue/test-utils'
import EtToast from '@components/toast/Toast'

describe('ETToast', () => {
    HTMLElement.prototype.insertAdjacentElement = jest.fn()

    it('is called', () => {
        const wrapper = shallowMount(EtToast)
        expect(wrapper.name()).toBe('EtToast')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
