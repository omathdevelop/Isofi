import { defineType, defineField } from "sanity";
import { BsColumnsGap } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { ImImage } from "react-icons/im";
// The MultipleColumnSchema -> Multiple Column Module //

const MultipleColumnSchema = defineType({
    name: 'multipleColumn',
    title: 'Multiple Column',
    type: 'document',
    groups: [{ name: 'media', title: 'Media', icon:ImImage }, { name: 'rowOne', title: 'Row One Editor', icon:CiEdit }, { name: 'rowTwo', title: 'Row Two Editor', icon:CiEdit }],
    fieldsets: [
        { name: 'firstRow', title: 'First Row', description: '' },
        { name: 'secondRow', title: 'Second Row', description: '' },

    ],
    description: 'This can be use to edit/add to the module with left & right images',
    icon: BsColumnsGap,
    fields: [
        defineField({
            name: 'firstColumnOneText',
            title: 'First Text',
            type: 'string',
            initialValue: 'Remote and in-person sessions support hybrid and flexible working patterns',
            fieldset: 'firstRow',
            group: 'rowOne'
        }),
        defineField({
            name: 'firstColumnTwoText',
            title: 'Second Text',
            type: 'string',
            initialValue: `with a fully HIPPA/HCPC compliant platform.`,
            fieldset: 'firstRow',
            group: 'rowOne',

        }),
        defineField({
            name: 'firstColumnImageOne',
            title: 'Image One',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [{ name: 'firstColumnImageOneAlt', title: 'Alt Text', type: 'string', description: 'Add some text that describe this image for screen reader sake' }],
            fieldset: 'firstRow',
            group: 'rowOne',
            description: 'Double Check If Image Size has a width:720 & height:573',


        }),
        defineField({
            name: 'firstColumnImageTwo',
            title: 'Image Two',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [{ name: 'firstColumnImageTwoAlt', title: 'Alt Text', type: 'string', description: 'Add some text that describe this image for screen reader sake' }],
            fieldset: 'firstRow',
            group: 'rowOne',
            description: 'Double Check If Image Size has a width:720 & height:573',


        }),
        defineField({
            name: 'secondColumnOneText',
            title: 'First Text',
            type: 'string',
            initialValue: `Remote and in-person sessions 
                            support hybrid and flexible working patterns`,
            fieldset: 'secondRow',
            group: 'rowTwo',


        }),
        defineField({
            name: 'secondColumnTwoText',
            title: 'Second Text',
            type: 'string',
            initialValue: `with a fully HIPPA/HCPC compliant platform.`,
            fieldset: 'secondRow',
            group: 'rowTwo'

        }),
        defineField({
            name: 'secondColumnImageOne',
            title: 'Image One',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [{ name: 'secondColumnImageOneAlt', title: 'Alt Text', type: 'string', description: 'Add some text that describe this image for screen reader sake' }],
            fieldset: 'secondRow',
            group: 'rowTwo',
            description: 'Double Check If Image Size has a width:720 & height:573',


        }),
        defineField({
            name: 'secondColumnImageTwo',
            title: 'Image Two',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [{ name: 'secondColumnImageTwoAlt', title: 'Alt Text', type: 'string', description: 'Add some text that describe this image for screen reader sake' }],
            fieldset: 'secondRow',
            group: 'rowTwo',
            description: 'Double Check If Image Size has a width:720 & height:573',

        })
    ]

});

export default MultipleColumnSchema;