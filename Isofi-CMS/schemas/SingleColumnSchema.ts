import { defineType, defineField } from "sanity";

// The SinglColumSchema -> SingleColumnModule //

const SingleColumnSchema = defineType({
    name: 'singleColumn',
    title: 'Single Column',
    type: 'document',
    description: 'This is the Single Column Module',
    groups: [{name: 'media', title: 'Media'}],
    fields: [
        defineField({
            name: 'content',
            title: 'Single Column Content Editor',
            type: 'blockContent',
            description: 'This is where, you write/edit the single column module "content"'
        }),
        defineField({
            name: 'singleColumnImage',
            title: 'Single Column Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'media',
            description: 'This is where, you upload/update the single column module "image"'
        })
    ]
});

export default SingleColumnSchema;