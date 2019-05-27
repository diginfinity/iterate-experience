import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import EtField from '@components/field/Field'
import EtFieldBody from '@components/field/FieldBody'
import EtInput from '@components/input/Input'

const localVue = createLocalVue()
localVue.component('ey-field', EtField)
localVue.component('et-field-body', EtFieldBody)
localVue.component('et-input', EtInput)

describe('EtField', () => {
    it('is called', () => {
        const wrapper = shallowMount(EtField)
        expect(wrapper.name()).toBe('EtField')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('sets fieldLabelSize to "is-normal" when horizontal==true and input elements are inside', () => {
        const wrapper = mount(EtField, {
            localVue,
            propsData: { horizontal: true },
            slots: { default: [EtInput] }
        })

        expect(wrapper.vm._data).toEqual(expect.objectContaining({fieldLabelSize: 'et-is-normal'}))
    })

    describe('class names for the root div.field', () => {
        it('contains "is-expanded" when prop "expanded" is set', () => {
            const wrapper = shallowMount(EtField, { propsData: { expanded: true } })
            expect(wrapper.find('.et-field').classes()).toContain('et-is-expanded')
        })

        it('contains "is-grouped-multiline" when prop "groupMultiline" is set', () => {
            const wrapper = shallowMount(EtField, { propsData: { groupMultiline: true } })
            expect(wrapper.find('.et-field').classes()).toContain('et-is-grouped-multiline')
        })
    })

    describe('Passing a message prop', () => {
        const generateMountOptions = ({message}) => {
            return {
                propsData: {message},
                localVue,
                slots: {
                    default: [EtInput, '<button class="button">Button</button>']
                }
            }
        }

        it('adds a help <p> element in the root div.field when "message" prop is passed', () => {
            const message = 'Some string message'
            const mountOptions = generateMountOptions({message})
            const wrapper = shallowMount(EtField, mountOptions)
            expect(wrapper.find('.et-field').find('p.et-help').text()).toEqual(message)
        })

        it('given an array of string as message, it joins the messages with line breaks', () => {
            const message = [
                'Some string message 1',
                'Some string message 2',
                'Some string message 3',
                'Some string message 4',
                'Some string message 5'
            ]
            const mountOptions = generateMountOptions({message})
            const wrapper = shallowMount(EtField, mountOptions)
            expect(wrapper.find('p.et-help').html()).toContain(message.join(' <br> '))
        })

        it('given an object as message, it grabs the keys and joins them with line breaks', () => {
            const message = {
                message1: 'Some string message 1',
                message2: 'Some string message 2',
                message3: 'Some string message 3',
                message4: 'Some string message 4',
                message5: 'Some string message 5'
            }
            const mountOptions = generateMountOptions({message})
            const wrapper = shallowMount(EtField, mountOptions)
            expect(wrapper.find('p.et-help').html()).toContain(Object.keys(message).join(' <br> '))
        })

        it(`given an array of string with an object as one of the elements as message, it grabs the
        keys of the object and joins them with the messages with line breaks`, () => {
            const message = [
                'Some string message 1',
                {
                    message2: 'Some string message 2',
                    message3: 'Some string message 3'
                },
                'Some string message 4',
                'Some string message 5'
            ]
            const mountOptions = generateMountOptions({message})
            const wrapper = shallowMount(EtField, mountOptions)
            expect(wrapper.find('p.et-help').html()).toContain([
                message[0],
                'message2',
                'message3',
                message[2],
                message[3]
            ].join(' <br> '))
        })
    })

    describe('Passing true for grouped prop', () => {
        const mountOptions = {
            propsData: {
                grouped: true
            },
            localVue,
            slots: {
                default: [EtInput, '<button class="button">Button</button>']
            }
        }

        it('groups the children together', () => {
            const wrapper = shallowMount(EtField, mountOptions)
            expect(wrapper.find('.et-field').classes()).toContain('et-is-grouped')
        })

        it('appends the classname with value of position when "position" prop is passed', () => {
            const {propsData} = mountOptions
            const wrapper = shallowMount(EtField, {
                ...mountOptions,
                propsData: {
                    ...propsData,
                    position: 'et-is-centered'
                }
            })
            expect(wrapper.find('.et-field').classes()).toContain('et-is-grouped')
            expect(wrapper.find('.et-field').classes()).toContain('et-is-grouped-centered')
        })

        it('adds a label element under the root div.field when "label" prop is passed', () => {
            const {propsData} = mountOptions
            const wrapper = shallowMount(EtField, {
                ...mountOptions,
                propsData: {
                    ...propsData,
                    label: 'Some label'
                }
            })
            expect(wrapper.find('.et-field').find('label').isVisible()).toBe(true)
        })
    })

    describe('Passing true for horizontal prop', () => {
        const generateMountOptions = (props) => {
            return {
                propsData: {
                    horizontal: true,
                    ...props
                },
                localVue,
                slots: {
                    default: EtField
                }
            }
        }

        it('adds "et-is-horizontal" to root div.et-field', () => {
            const mountOptions = generateMountOptions()
            const wrapper = shallowMount(EtField, mountOptions)
            expect(wrapper.find('.et-field').classes()).toContain('et-is-horizontal')
        })

        it('produces a div.et-field-label + .field-body', () => {
            const mountOptions = generateMountOptions()
            const wrapper = mount(EtField, mountOptions)
            expect(wrapper.find('.et-field').find('.et-field-label').isVisible()).toBe(true)
            expect(wrapper.find('.et-field').find('.et-field-label + .et-field-body').isVisible()).toBe(true)
        })

        it('adds a label element under .et-field-label when "label" prop is passed', () => {
            const mountOptions = generateMountOptions({label: 'Some label'})
            const wrapper = mount(EtField, mountOptions)
            expect(wrapper.find('.et-field-label').find('label.et-label').isVisible()).toBe(true)
        })

        it('adds a help <p> element in the div.et-field-body when "message" prop is passed', () => {
            const message = 'Some message'
            const mountOptions = generateMountOptions({message})
            const wrapper = mount(EtField, mountOptions)
            const helpWrapper = wrapper.find('.et-field').find('.et-field-body').find('.et-help')
            expect(helpWrapper.isVisible()).toBe(true)
            expect(helpWrapper.text()).toEqual(message)
        })
    })
})
