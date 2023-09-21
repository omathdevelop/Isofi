import { defineType, defineField } from "sanity";
import {IoArrowForward} from 'react-icons/io5'

// The MultipleColumnSchema -> Multiple Column Module //

const MultipleColumnSchema = defineType({
    name: 'multipleColumn',
    title: 'Multiple Column',
    type: 'document',
    groups: [{name: 'media', title:'Media'}],
    description:'This can be use to edit/add to the module with left & right images',
    icon: IoArrowForward,
    fields: [
        defineField({
            name: 'content',
            title: 'The Multiple Column Content Editor',
            type: 'blockContent',
            description: 'You can edit the multiple column module "content" right here'
        }),
        defineField({
            name: 'leftImage',
            title: 'Left Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'media'
        }),
        defineField({
            name: 'rightImage',
            title: 'Right Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'media'
        })
    ]
});

export default MultipleColumnSchema;