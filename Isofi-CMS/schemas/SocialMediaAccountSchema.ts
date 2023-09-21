import { defineType, defineField } from "sanity";

//  SocialMediaAccountSchema -> SocialMediaAccountModule //

const SocialMediaAccountSchema = defineType({
    name: 'socialAccount',
    title: 'Social Media Account',
    type: 'document',
    groups: [{name: 'socialAccount', title:'Social Media'}],
    fields:[
          // FaceBook Account //
          defineField({
            type: 'string',
            name: 'facebook',
            title: 'FaceBook Username',
            description: 'Try enter your facebook username, and see magic happen in just a sec, 😄 lol',
            

        }),
        defineField({
            type: 'url', 
            name: 'facebookUrl',
            title: 'Please Enter Your FaceBook Link',
             hidden: ({ document }) => !document?.facebook,
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link not secure, please check if "https" is included')


        }),
        // InstaGram Account //

        defineField({
            type: 'string', name: 'instagram',
            title: 'Instagram Username',
            description: 'Try enter your instagram username, and see magic happen in just a sec, 😄 lol',
            
        }),
        defineField({
            type: 'url', name: 'instagramUrl',
            title: 'Please Enter Your InstaGram Link',
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link not secure, please check if "https" is included'),
            hidden: ({ document }) => !document?.instagram
        }),
        // Twitter Account //

        defineField({
            type: 'string', name: 'twitter',
            title: 'Twitter Username',
            description: 'Try enter your instagram username, and see magic happen in just a sec, 😄 lol',
            
        }),
        defineField({
            type: 'url', name: 'twitterUrl',
            title: 'Please Enter Your Twitter Link',
             hidden: ({ document }) => !document?.twitter,
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link not secure, please check if "https" is included')

        }),
        // TikTok Account //

        defineField({
            type: 'string', name: 'tiktok',
            title: 'TikTok Username',
            description: 'Try enter your tiktok username, and see magic happen in just a sec, 😄 lol',
            
        }),

        defineField({
            type: 'url', name: 'tiktokUrl',
            title: 'Please Enter Your Tiktok Link', hidden: ({ document }) => !document?.tiktok,
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link not secure, please check if "https" is included')
        }),
        // YouTube Channel Account //

        defineField({
            type: 'string', name: 'youtube',
            title: 'YouTube Channel Name',
            description: 'Try enter your youtube channel name, and see magic happen in just a sec, 😄 lol',
            
        }),
        defineField({
            type: 'url', name: 'youtubeUrl',
            title: ' Your Channel Link', hidden: ({ document }) => !document?.youtube,
            validation: Rule => Rule.uri({
                scheme: ['https']
            }).warning('link not secure, please check if "https" is included')


        }),
    ]
});

export default SocialMediaAccountSchema;