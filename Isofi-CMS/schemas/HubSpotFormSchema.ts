import { defineType, defineField } from "sanity";
import { IoLink } from "react-icons/io5";

const HubSpotFormSchema = defineType({
    name: 'hubSpotForm',
    title: 'HubSpot Form',
    type: 'document',
    fields: [
        defineField({
            name: 'hubSpotForm',
            title: 'HubSpot Form Link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link  not secure, please check if "https" is included'),
            icon:IoLink
        })
    ]
});

export default HubSpotFormSchema;