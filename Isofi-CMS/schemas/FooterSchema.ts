import { defineType, defineField } from "sanity";
import {TbComponents} from 'react-icons/tb';
import {FcPrivacy, FcServices} from 'react-icons/fc';

//  FooterSchema -> FooterModule //

const FooterSchema = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: TbComponents,
    description: 'You can use this, to edit all content in the "Footer Module"',
    groups: [
        { name: 'footer', title: 'Footer', icon:TbComponents },
        { name: 'terms', title: 'Terms Of Service', icon:FcServices},
        { name: 'policy', title: 'Privacy Policy', icon:FcPrivacy },
        { name: 'logo', title: 'Logo', icon:TbComponents }


    ],
    fields: [
        defineField({
            readOnly:true,
            name: 'isofiLogo',
            title: 'Isofi Logo',
            type: 'string',
            validation: Rule => Rule.required().warning('isofi Logo is required'),
            initialValue: 'isofi',
            group: 'logo',
            description:'Cannot edit this'
        }),
        defineField({
            name: 'content',
            title: 'Footer Content Editor',
            type: 'blockContent',
            validation: Rule => Rule.required().max(200).warning('content "Charater" cannot be more than  `200 chars`'),
            // initialValue: 'Isofi',
            group: 'footer'
        }),
        defineField({
            name: 'copyRightInfo',
            title: 'Copy Right Info',
            type: 'string',
            initialValue: '2018-2023 isofi Limited. All Right Reserved',
            group: 'footer'
        }),
        defineField({
            readOnly: true,
            name: 'serviceTerm',
            title: 'Terms And Service ',
            type: 'string',
            initialValue: 'Terms And Service',
            group: 'terms',
            description: 'Cannot Edit This!'
        }),
        defineField({
            readOnly: true,
            name: 'policy',
            title: 'Privacy Policy',
            type: 'string',
            initialValue: 'Privacy Policy',
            group: 'policy',
            description: 'Cannot Edit This!'

        })
    ]
});

export default FooterSchema;