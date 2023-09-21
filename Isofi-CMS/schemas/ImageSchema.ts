import { defineType, defineField } from "sanity";
import {IoImage } from 'react-icons/io5'

// ImageSchema -> ImageModule //

const ImageSchema = defineType({
    name: 'imageModule',
    title: 'Image Module',
    type: 'document',
    icon: IoImage,
    description: 'Here, is the one & only "Image Module"',
    fields: [
        defineField({
            name: 'image',
            title: 'Upload Image',
            type: 'image',
            options:{
                hotspot: true
            }

        })
    ]
});

export default ImageSchema;