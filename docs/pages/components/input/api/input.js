export default [
    {
        props: [
            {
                name: '<code>v-model</code>',
                description: 'Binding value',
                type: 'String, Number',
                values: '—',
                default: '—'
            },
            {
                name: '<code>type</code>',
                description: 'Input type, like native',
                type: 'String',
                values: 'Any native input type, and <code>textarea</code>',
                default: '<code>text</code>'
            },
            {
                name: '<code>expanded</code>',
                description: 'Makes input full width when inside a grouped or addon field',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>password-reveal</code>',
                description: 'Add the reveal password functionality',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>icon</code>',
                description: 'Icon name to be added',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>icon-pack</code>',
                description: 'Icon pack to use',
                type: 'String',
                values: '<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>',
                default: '<code>mdi</code>'
            },
            {
                name: '<code>maxlength</code>',
                description: 'Same as native <code>maxlength</code>, plus character counter',
                type: 'String, Number',
                values: '—',
                default: '—'
            },
            {
                name: '<code>has-counter</code>',
                description: 'Show character counter when <code>maxlength</code> prop is passed',
                type: 'Boolean',
                values: '—',
                default: '<code>true</code>'
            },
            {
                name: '<code>custom-class</code>',
                description: 'CSS classes to be applied on input',
                type: 'String',
                values: '—',
                default: '—'
            },
            {
                name: 'Any native attribute',
                description: '—',
                type: '—',
                values: '—',
                default: '—'
            }
        ]
    }
]
