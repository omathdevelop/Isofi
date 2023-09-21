import { IoLink } from "react-icons/io5";
import { defineType, defineField } from "sanity";


const AppUrlSchema = defineType({
    name: 'appLink',
    title: 'Isofi App Link',
    type: 'document',
    fields: [
        defineField({
            name: 'applink',
            title: 'Enter Isofi App Link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link not secure, please check if "https" is included'),
            initialValue:'http://example.com/notsecure',
            icon: IoLink
        })
    ]
});

export default AppUrlSchema;