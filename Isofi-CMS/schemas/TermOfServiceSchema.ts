import { defineType, defineField } from "sanity";
import {FcServices} from 'react-icons/fc';
const TermOfServiceSchema = defineType({
    name: 'termsOfService',
    title: 'Terms Of Service',
    type: 'document',
    icon: FcServices,
    description: 'This is for the terms of service content page',
    fields: [
        defineField({
            name: 'content',
            title: 'Term Of Service Content Editor',
            type: 'blockContent',
            description: 'This is for the terms of service content page',
        })
    ]

});

export default TermOfServiceSchema;