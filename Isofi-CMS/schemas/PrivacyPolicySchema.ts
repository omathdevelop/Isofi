import { defineType, defineField } from "sanity";
import {IoDocument} from 'react-icons/io5'

const PrivacyPolicySchema = defineType({
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',
    icon:IoDocument,
    description: 'This can be use to edit "Privacy Policy" Content',
    fields: [
        defineField({
            name: 'content',
            title:'Privacy Policy Content Editor',
            type: 'blockContent',
            icon:IoDocument,
            description: 'This can be use to edit "Privacy Policy" Content',
        })
    ]
});

export default PrivacyPolicySchema;