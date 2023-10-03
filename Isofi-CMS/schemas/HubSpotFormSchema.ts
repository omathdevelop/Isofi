import { defineType, defineField } from "sanity";
import { FaHubspot } from "react-icons/fa6";

const HubSpotFormSchema = defineType({
    name: 'hubSpotForm',
    title: 'HubSpot Form',
    type: 'document',
    icon:FaHubspot,
    fields: [
        defineField({
            name: 'hubSpotForm',
            title: 'HubSpot Form Link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link  not secure, please check if "https" is included'),
        })
    ]
});

export default HubSpotFormSchema;