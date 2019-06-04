export default [
    {
        props: [
            {
                name: '<code>type</code>',
                description: 'Type (color) of the switch, optional',
                type: 'String',
                values: `<code>et-is-white</code>, <code>et-is-black</code>, <code>et-is-light</code>,
                    <code>et-is-dark</code>, <code>et-is-primary</code>, <code>et-is-info</code>, <code>et-is-success</code>,
                    <code>et-is-warning</code>, <code>et-is-danger</code>,
                    and any other colors you've set in the <code>$colors</code> list on Sass`,
                default: '—'
            },
            {
                name: '<code>v-model</code>',
                description: 'Binding value',
                type: 'Any',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>native-value</code>',
                description: 'Same as native <code>value</code>',
                type: 'Any',
                values: '—',
                default: '—'
            },
            {
                name: '<code>true-value</code>',
                description: `Overrides the returned value when it's checked`,
                type: 'Any',
                values: '—',
                default: '<code>true</code>'
            },
            {
                name: '<code>false-value</code>',
                description: `Overrides the returned value when it's not checked`,
                type: 'Any',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>disabled</code>',
                description: 'Same as native <code>disabled</code>',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>name</code>',
                description: 'Same as native <code>name</code>',
                type: 'String',
                values: '—',
                default: '—'
            }
        ]
    }
]
