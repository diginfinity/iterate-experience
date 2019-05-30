export default [
    {
        props: [
            {
                name: '<code>v-model</code>',
                description: 'Binding value',
                type: 'Any',
                values: '—',
                default: '—'
            },
            {
                name: '<code>native-value</code>',
                description: 'Same as native <code>value</code>',
                type: 'Any',
                values: '—',
                default: '—'
            },
            {
                name: '<code>disabled</code>',
                description: 'Same as native <code>disabled</code>',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>required</code>',
                description: 'Same as native <code>required</code>',
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
            },
            // {
            //     name: '<code>size</code>',
            //     description: 'Size  of the control, optional',
            //     type: 'String',
            //     values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
            //     default: '—'
            // },
            {
                name: '<code>type</code>',
                description: 'Type (color) of the control, optional',
                type: 'String',
                values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>,
                    and any other colors you've set in the <code>$colors</code> list on Sass`,
                default: '—'
            }
        ]
    }
    // {
    //     title: 'Radio Button',
    //     props: [
    //         {
    //             name: '<code>v-model</code>',
    //             description: 'Binding value',
    //             type: 'Any',
    //             values: '—',
    //             default: '—'
    //         },
    //         {
    //             name: '<code>native-value</code>',
    //             description: 'Same as native <code>value</code>',
    //             type: 'Any',
    //             values: '—',
    //             default: '—'
    //         },
    //         {
    //             name: '<code>type</code>',
    //             description: 'Type (color) of the button <strong>when checked</strong>',
    //             type: 'String',
    //             values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
    //                 <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
    //                 <code>is-warning</code>, <code>is-danger</code>,
    //                 and any other colors you've set in the <code>$colors</code> list on Sass`,
    //             default: '<code>is-primary</code>'
    //         },
    //         {
    //             name: '<code>disabled</code>',
    //             description: 'Same as native <code>disabled</code>',
    //             type: 'Boolean',
    //             values: '—',
    //             default: '<code>false</code>'
    //         },
    //         {
    //             name: '<code>name</code>',
    //             description: 'Same as native <code>name</code>',
    //             type: 'String',
    //             values: '—',
    //             default: '—'
    //         },
    //         {
    //             name: '<code>size</code>',
    //             description: 'Size of the button, optional',
    //             type: 'String',
    //             values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
    //             default: '—'
    //         }
    //     ]
    // }
]