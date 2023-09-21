import {defineType, defineField} from 'sanity';
import {IoArrowForward, IoDocument, IoImage} from 'react-icons/io5'
// The SecondHerochema  -> SecondHeroModule //

 const SecondHeroSchema =  defineType({
    name: 'secondHero',
    title: 'The Second Hero',
    type: 'document',
    description: 'This is the hero module below the First Hero module',
    icon: IoArrowForward,
    groups: [{name: 'media', title: 'Media'}],
    fields: [
        defineField({
            name:'heroContentOne',
            title: 'The Hero Content Editor One',
            type: 'blockContent',
            description: 'This is the left-first "content" in the SecondHeroModule',
            icon: IoDocument
        }),
        defineField({
            name:'heroContentTwo',
            title: 'The Hero Content Editor Two',
            type: 'blockContent',
            description: 'This is the right-second "content" in the SecondHeroModule',
            icon: IoDocument

        }),
        defineField({
            name: 'HeroImage',
            title: 'The Hero Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'media',

        })
    ]
});

export default SecondHeroSchema;


