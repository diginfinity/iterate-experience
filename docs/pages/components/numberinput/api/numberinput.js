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
                description: 'Type (color) of the control, optional',
                type: 'String',
                values: `<code>et-is-white</code>, <code>et-is-black</code>, <code>et-is-light</code>,
                    <code>et-is-dark</code>, <code>et-is-primary</code>, <code>et-is-info</code>, <code>et-is-success</code>,
                    <code>et-is-warning</code>, <code>et-is-danger</code>,
                    and any other colors you've set in the <code>$colors</code> list on Sass`,
                default: '<code>is-primary</code>'
            },
            // {
            //     name: '<code>size</code>',
            //     description: 'Vertical size of input, optional',
            //     type: 'String',
            //     values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
            //     default: '—'
            // },
            {
                name: '<code>expanded</code>',
                description: 'Makes input full width when inside a grouped or addon field',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            // {
            //     name: '<code>loading</code>',
            //     description: 'Add the loading state to the input',
            //     type: 'Boolean',
            //     values: '—',
            //     default: '<code>false</code>'
            // },
            {
                name: '<code>editable</code>',
                description: 'Editable input',
                type: 'Boolean',
                values: '—',
                default: '<code>true</code>'
            },
            {
                name: '<code>min</code>',
                description: 'Minimum allowed value',
                type: 'Number, String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>max</code>',
                description: 'Maxinimum allowed value',
                type: 'Number, String',
                values: '—',
                default: '—'
            },
            {
                name: '<code>step</code>',
                description: 'Incremental number step',
                type: 'Number, String',
                values: '—',
                default: '—'
            },
            // {
            //     name: '<code>controls-rounded</code>',
            //     description: 'Show rounded controls',
            //     type: 'Boolean',
            //     values: '—',
            //     default: '<code>false</code>'
            // },
            {
                name: '<code>controls-position</code>',
                description: 'Position of controls',
                type: 'String',
                values: '<code>compact<compact>',
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
