import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import EtFieldBody from '@components/field/FieldBody'
import EtField from '@components/field/Field'
import EtInput from '@components/input/Input'

const localVue = createLocalVue()
localVue.component('b-field', EtField)

describe('EtFieldBody', () => {
    it('is called', () => {
        const wrapper = shallowMount(EtFieldBody, {
            slots: {
                default: 'content'
            }
        })
        expect(wrapper.name()).toBe('EtFieldBody')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('should render the text when the child is a text', () => {
        const text = 'text'
        const wrapper = shallowMount(EtFieldBody, {
            slots: {
                default: text
            }
        })
        expect(wrapper.text()).toBe(text)
    })

    describe('when child is an element', () => {
        it('should wrap the element in a et-field', () => {
            const wrapper = mount(EtFieldBody, {
                slots: {
                    default: EtInput
                },
                localVue
            })
            expect(wrapper.exists(EtField)).toBe(true)
        })

        it('should pass type prop to the et-field element', () => {
            const type = 'et-is-success'
            const wrapper = mount(EtFieldBody, {
                slots: {
                    default: EtInput
                },
                propsData: {
                    type
                },
                localVue
            })
            expect(wrapper.find(EtField).find('input').classes()).toContain(type)
        })

        it('should render the message when message prop is passed', () => {
            const message = 'some message yo'
            const type = 'et-is-danger'
            const wrapper = mount(EtFieldBody, {
                slots: {
                    default: EtInput
                },
                propsData: {
                    type,
                    message
                },
                localVue
            })
            expect(wrapper.find('p.et-help').classes()).toContain(type)
            expect(wrapper.find('p.et-help').text()).toBe(message)
        })
    })
})
