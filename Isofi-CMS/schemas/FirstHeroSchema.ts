import {defineType, defineField} from 'sanity';
import {IoArrowForward, IoImage} from 'react-icons/io5'
// The FirstHeroSchema  -> FirstHeroModule //
//             title:'Privacy Policy Content Editor',

 const FirstHeroSchema =  defineType({
    name: 'firstHero',
    title: 'The First Hero',
    type: 'document',
    icon: IoArrowForward,
    description: 'This is the hero module below the navigation module',
    groups: [{name: 'media', title: 'Media'}],
    fields: [
        defineField({
            name:'heroContent',
            title: 'The Hero Content Editor',
            type: 'blockContent'
        }),
        defineField({
            name: 'HeroImage',
            title: 'The Hero Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'media',
            icon:IoImage

        })
    ]
});

export default FirstHeroSchema;


