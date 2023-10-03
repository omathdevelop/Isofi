import {defineType, defineField} from 'sanity';
import {TbComponents} from 'react-icons/tb';
import { ImImage } from 'react-icons/im';

// The FirstHeroSchema  -> FirstHeroModule //
//             title:'Privacy Policy Content Editor',

 const FirstHeroSchema =  defineType({
    name: 'firstHero',
    title: 'The First Hero',
    type: 'document',
    icon: TbComponents,
    description: 'This is the hero module below the navigation module',
    groups: [{name: 'media', title: 'Media', icon:ImImage}],
    fieldsets: [{name: 'firstHeroContent', title: 'The First Hero Contents'}, {name: 'thirdText', title: 'Third & White Text '}],
                fields:[
                    defineField({
                        name: 'first',
                        title: 'First Text',
                        type: 'string',
                        initialValue: 'Revolutionizing',
                        fieldset: 'firstHeroContent'
                    }),
                    defineField({
                        name: 'second',
                        title: 'Second Text',
                        type: 'string',
                        initialValue: 'mental health at',
                        fieldset: 'firstHeroContent'

                    }),
                            {
                               name:'ordinaryColorText',
                               title:'Ordinary Color Text',
                               type: 'string',
                               initialValue:'work with',
                               fieldset: 'thirdText'
                            },
                            {
                                name:'whiteColorText',
                                title:'The White Color Text',
                                type: 'string',
                                initialValue:'music.',
                                fieldset:'thirdText'
                             },
                       
                    defineField({
                        name: 'HeroImage',
                        title: 'The Hero Image',
                        type: 'image',
                        options: {
                            hotspot: true
                        },
                        group: 'media',
                        description: 'Double Check If Image Size has a width:1440 & height:615',
                        fields:[{name: 'alt', title: 'Alt Text', type:'string', description: 'Add some text that describe this image for screen reader sake'}]
            
                    })
                ],

    
});

export default FirstHeroSchema;


