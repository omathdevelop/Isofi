import { ImImage } from "react-icons/im";
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
            fields:[{name: 'alt', title: 'Alt Text', type:'string', description: 'Add some text that describe this image for screen reader sake'}],
            group: 'media',
            description: 'Double Check If Image Size has a width:1440 & height:592',
            icon:ImImage
        })
    ]
});

export default SingleColumnSchema;