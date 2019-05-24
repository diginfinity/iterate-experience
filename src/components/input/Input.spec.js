import { shallowMount, mount } from '@vue/test-utils'
import EtInput from '@components/input/Input'
import BIcon from '@components/icon/Icon'

describe('EtInput', () => {
    it('render correctly', () => {
        const wrapper = shallowMount(EtInput)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('is vue instance', () => {
        const wrapper = shallowMount(EtInput)

        expect(wrapper.name()).toBe('EtInput')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders input element by default', () => {
        const wrapper = shallowMount(EtInput)

        expect(wrapper.contains('input')).toBeTruthy()
        expect(wrapper.classes()).toContain('et-control')
    })

    it('render textarea element when type is textarea', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: { type: 'textarea' }
        })
        const target = wrapper.find('textarea')

        expect(target.exists()).toBeTruthy()
        expect(target.classes()).toContain('et-textarea')
    })

    it('displays the icon when the icon property is true', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: { icon: 'magnify' }
        })
        const target = wrapper.find(BIcon)

        expect(target.exists()).toBeTruthy()
    })

    it('display counter when the maxlength property is passed', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: { value: 'foo', maxlength: 100 }
        })
        const counter = wrapper.find('small.et-counter')

        expect(counter.exists()).toBeTruthy()
        expect(counter.text()).toBe('3 / 100')
    })

    it('no display counter when hasCounter property set for false', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: { maxlength: 100 }
        })
        expect(wrapper.find('small.et-counter').exists()).toBeTruthy()

        wrapper.setProps({ hasCounter: false })
        expect(wrapper.find('small.et-counter').exists()).toBeFalsy()
    })

    it('render field password when the type property is password', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: {
                type: 'password',
                passwordReveal: true
            }
        })

        const target = wrapper.find('input')
        expect(target.exists()).toBeTruthy()
        expect(target.attributes().type).toBe('password')
    })

    it('toggles the visibility of the password to true when the togglePasswordVisibility method is called', (done) => {
        const wrapper = mount(EtInput, {
            propsData: {
                value: 'foo',
                type: 'password',
                passwordReveal: true
            }
        })

        wrapper.setProps({ value: 'bar' })

        expect(wrapper.find('input').exists()).toBeTruthy()
        expect(wrapper.find('input').attributes().type).toBe('password')

        const visibilityIcon = wrapper.find('.et-icon.et-is-clickable')
        expect(visibilityIcon.exists()).toBeTruthy()
        visibilityIcon.trigger('click')
        wrapper.setProps({ passwordReveal: false })
        expect(wrapper.find('input').attributes().type).toBe('text')

        wrapper.vm.$nextTick(done)
    })

    it('render the placeholder and readonly attribute when passed', () => {
        const wrapper = shallowMount(EtInput, {
            attrs: { placeholder: 'Awesome!', readonly: true }
        })
        const target = wrapper.find('input')

        expect(target.element.getAttribute('placeholder')).toBe('Awesome!')
        expect(target.element.getAttribute('readonly')).toBe('readonly')
    })

    it('expands input when expanded property is passed', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: { expanded: true }
        })

        expect(wrapper.classes()).toContain('et-is-expanded')
    })

    it('display loading icon when loading property passed', () => {
        const wrapper = shallowMount(EtInput, {
            propsData: { loading: true, icon: 'magnify' }
        })

        expect(wrapper.classes()).toContain('et-is-loading')
    })

    it('keep its value on blur', async () => {
        const wrapper = mount(EtInput, {
            propsData: {
                value: 'foo'
            },
            methods: {
                checkHtml5Validity: () => true
            }
        })

        const input = wrapper.find('input')

        input.element.value = 'bar'
        input.trigger('input')
        input.trigger('blur')

        expect(input.element.value).toBe('bar')
    })

    it('change status icon when statusType updated', () => {
        const parent = {
            data: () => ({
                newType: 'et-is-success',
                _isField: true
            }),
            components: {EtInput},
            template: `<et-input />`
        }
        const wrapper = mount(parent)

        const input = wrapper.find(EtInput)
        expect(input.vm.statusTypeIcon).toBe('check')
        wrapper.setData({ newType: 'et-is-danger' })
        expect(input.vm.statusTypeIcon).toBe('alert-circle')
        wrapper.setData({ newType: 'et-is-info' })
        expect(input.vm.statusTypeIcon).toBe('information')
        wrapper.setData({ newType: 'et-is-warning' })
        expect(input.vm.statusTypeIcon).toBe('alert')
    })
})
