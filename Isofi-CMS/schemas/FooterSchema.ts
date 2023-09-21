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
        { name: 'socialAccount', title: 'Social Media Accounts' }
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
            title: 'Service Term',
            type: 'string',
            initialValue: 'Term Of Service',
            group: 'footer'
        }),
        defineField({
            readOnly: true,
            name: 'policy',
            title: 'Privacy Policy',
            type: 'string',
            initialValue: 'Privacy Policy',
            group: 'footer'
        }),
        defineField({
            name: 'socialAccount',
            title: 'Social Media Account',
            type: 'array',
            group: 'socialAccount',
            of: [{
                type: 'object', name: 'social', title: 'Social Media Account',
                fields: [
                    // FaceBook Account //
                    defineField({
                        type: 'string', name: 'facebook',
                        title: 'FaceBook Username',
                        description: 'Try enter your facebook username, and see magic happen in just a sec, 😄 lol',
                        icon: IoLogoFacebook

                    }),
                    defineField({
                        type: 'url', name: 'facebookUrl',
                        title: 'Please Enter Your FaceBook Link', hidden: ({ document }) => !document?.facebook,
                        icon: IoLink,
                        validation: Rule => Rule.uri({
                            scheme: ['https']
                        }).warning('link not secure, please check if "https" is included')


                    }),
                    // InstaGram Account //

                    defineField({
                        type: 'string', name: 'instagram',
                        title: 'Instagram Username',
                        description: 'Try enter your instagram username, and see magic happen in just a sec, 😄 lol',
                        icon: IoLogoInstagram
                    }),
                    defineField({
                        type: 'url', name: 'instagramUrl',
                        title: 'Please Enter Your InstaGram Link', hidden: ({ document }) => !document?.instagram,
                        icon: IoLink,
                        validation: Rule => Rule.uri({
                            scheme: ['https']
                        }).warning('link not secure, please check if "https" is included')
                    }),
                    // Twitter Account //

                    defineField({
                        type: 'string', name: 'twitter',
                        title: 'Twitter Username',
                        description: 'Try enter your instagram username, and see magic happen in just a sec, 😄 lol',
                        icon: IoLogoTwitter
                    }),
                    defineField({
                        type: 'url', name: 'twitterUrl',
                        title: 'Please Enter Your Twitter Link', hidden: ({ document }) => !document?.twitter,
                        icon: IoLink,
                        validation: Rule => Rule.uri({
                            scheme: ['https']
                        }).warning('link not secure, please check if "https" is included')

                    }),
                    // TikTok Account //

                    defineField({
                        type: 'string', name: 'tiktok',
                        title: 'TikTok Username',
                        description: 'Try enter your tiktok username, and see magic happen in just a sec, 😄 lol',
                        icon: IoLogoTiktok
                    }),
                    defineField({
                        type: 'url', name: 'tiktokUrl',
                        title: 'Please Enter Your Tiktok Link', hidden: ({ document }) => !document?.tiktok,
                        icon: IoLink,
                        validation: Rule => Rule.uri({
                            scheme: ['https']
                        }).warning('link not secure, please check if "https" is included')
                    }),
                    // YouTube Channel Account //

                    defineField({
                        type: 'string', name: 'youtube',
                        title: 'YouTube Channel Name',
                        description: 'Try enter your youtube channel name, and see magic happen in just a sec, 😄 lol',
                        icon:IoLogoYoutube
                    }),
                    defineField({
                        type: 'url', name: 'youtubeUrl',
                        title: 'Write Your Channel Link', hidden: ({ document }) => !document?.youtube,
                        icon: IoLink,
                        validation: Rule => Rule.uri({
                            scheme: ['https']
                        }).warning('link not secure, please check if "https" is included')


                    }),
                ]
            }]
        }),


    ]
});

export default FooterSchema;