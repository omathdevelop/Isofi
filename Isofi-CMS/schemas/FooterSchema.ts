import { defineType, defineField } from "sanity";
import { IoArrowForward, IoLink, IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'

//  FooterSchema -> FooterModule //

const FooterSchema = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: IoArrowForward,
    description: 'You can use this, to edit all content in the "Footer Module"',
    groups: [
        { name: 'footer', title: 'Footer' },
        { name: 'terms', title: 'Terms Of Service' },
        { name: 'policy', title: 'Privacy Policy' }

    ],
    fields: [
        defineField({
            name: 'isofiLogo',
            title: 'Isofi Logo',
            type: 'string',
            validation: Rule => Rule.required().warning('isofi Logo is required'),
            initialValue: 'Isofi',
            group: 'footer'
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