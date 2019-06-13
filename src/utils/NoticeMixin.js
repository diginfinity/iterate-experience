import config from './config'
import { removeElement } from './helpers'

export default {
    props: {
        type: {
            type: String,
            default: 'et-is-dark'
        },
        message: String,
        duration: Number,
        queue: {
            type: Boolean,
            default: undefined
        },
        position: {
            type: String,
            default: 'et-is-top',
            validator(value) {
                return [
                    'et-is-top-right',
                    'et-is-top',
                    'et-is-top-left',
                    'et-is-bottom-right',
                    'et-is-bottom',
                    'et-is-bottom-left'
                ].indexOf(value) > -1
            }
        },
        container: String
    },
    data() {
        return {
            isActive: false,
            parentTop: null,
            parentBottom: null,
            newContainer: this.container || config.defaultContainerElement
        }
    },
    computed: {
        correctParent() {
            switch (this.position) {
                case 'et-is-top-right':
                case 'et-is-top':
                case 'et-is-top-left':
                    return this.parentTop

                case 'et-is-bottom-right':
                case 'et-is-bottom':
                case 'et-is-bottom-left':
                    return this.parentBottom
            }
        },
        transition() {
            switch (this.position) {
                case 'et-is-top-right':
                case 'et-is-top':
                case 'et-is-top-left':
                    return {
                        enter: 'fadeInDown',
                        leave: 'fadeOut'
                    }
                case 'et-is-bottom-right':
                case 'et-is-bottom':
                case 'et-is-bottom-left':
                    return {
                        enter: 'fadeInUp',
                        leave: 'fadeOut'
                    }
            }
        }
    },
    methods: {
        shouldQueue() {
            const queue = this.queue !== undefined
                ? this.queue
                : config.defaultNoticeQueue

            if (!queue) return false

            return (
                this.parentTop.childElementCount > 0 ||
                this.parentBottom.childElementCount > 0
            )
        },

        close() {
            clearTimeout(this.timer)
            this.isActive = false

            // Timeout for the animation complete before destroying
            setTimeout(() => {
                this.$destroy()
                removeElement(this.$el)
            }, 150)
        },

        showNotice() {
            if (this.shouldQueue()) {
                // Call recursively if should queue
                setTimeout(() => this.showNotice(), 250)
                return
            }
            this.correctParent.insertAdjacentElement('afterbegin', this.$el)
            this.isActive = true

            if (!this.indefinite) {
                this.timer = setTimeout(() => this.close(), this.newDuration)
            }
        },

        setupContainer() {
            this.parentTop = document.querySelector('.et-notices.et-is-top')
            this.parentBottom = document.querySelector('.et-notices.et-is-bottom')

            if (this.parentTop && this.parentBottom) return

            if (!this.parentTop) {
                this.parentTop = document.createElement('div')
                this.parentTop.className = 'et-notices et-is-top'
            }

            if (!this.parentBottom) {
                this.parentBottom = document.createElement('div')
                this.parentBottom.className = 'et-notices et-is-bottom'
            }

            const container = document.querySelector(this.newContainer) || document.body

            container.appendChild(this.parentTop)
            container.appendChild(this.parentBottom)

            if (this.newContainer) {
                this.parentTop.classList.add('et-has-custom-container')
                this.parentBottom.classList.add('et-has-custom-container')
            }
        }
    },
    beforeMount() {
        this.setupContainer()
    },
    mounted() {
        this.showNotice()
    }
}
