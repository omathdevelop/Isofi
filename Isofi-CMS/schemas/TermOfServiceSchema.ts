import { defineType, defineField } from "sanity";
import { IoDocument } from 'react-icons/io5'
const TermOfServiceSchema = defineType({
    name: 'termsOfService',
    title: 'Terms Of Service',
    type: 'document',
    icon: IoDocument,
    description: 'This is for the terms of service content page',
    fields: [
        defineField({
            name: 'content',
            title: 'Term Of Service Content Editor',
            type: 'blockContent',
            icon: IoDocument,
            description: 'This is for the terms of service content page',
        })
    ]

});

export default TermOfServiceSchema;