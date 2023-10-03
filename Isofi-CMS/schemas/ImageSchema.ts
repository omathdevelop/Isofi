import { defineType, defineField } from "sanity";
import {IoImage } from 'react-icons/io5'
import { ImImage } from "react-icons/im";

// ImageSchema -> ImageModule //

const ImageSchema = defineType({
    name: 'imageModule',
    title: 'Image Module',
    type: 'document',
    icon: ImImage,
    description: 'Here, is the one & only "Image Module"',
    fields: [
        defineField({
            name: 'image',
            title: 'Upload Image',
            type: 'image',
            options:{
                hotspot: true
            },
            fields:[{name: 'alt', title: 'Alt Text', type:'string', description: 'Add some text that describe this image for screen reader sake'}],
            description: 'Double Check If Image Size has a width:1440 & height:723',


        })
    ]
});

export default ImageSchema;