import {defineType, defineField} from 'sanity';
import {IoArrowForward, IoImage} from 'react-icons/io5';
import { ImImage } from "react-icons/im";
import { CiEdit } from 'react-icons/ci'
import {TbComponents} from 'react-icons/tb';

// The SecondHerochema  -> SecondHeroModule //

 const SecondHeroSchema =  defineType({
    name: 'secondHero',
    title: 'The Second Hero',
    type: 'document',
    description: 'This is the hero module below the First Hero module',
    icon: TbComponents,
    groups: [
        {name: 'media', title: 'Media', icon:ImImage},
        {name: 'heroContentEditorOne', title: 'Hero Editor One', icon: CiEdit},
        {name: 'heroContentEditorTwo', title: 'Hero  Editor Two', icon: CiEdit},

],
fieldsets: [{name: 'columnOne', title: 'Column One', description: 'The Hero Content Editor One'},
{name: 'columnTwo', title: 'Column Two', description: 'The Hero Content Editor Two'}
  ],
    fields: [ 
                defineField({
                    name: 'firstColumnTextOne',
                    title: 'First Text',
                    type: 'string',
                    initialValue:'The workplace is changing',
                    fieldset:'columnOne',
                    group:'heroContentEditorOne'
                }),
                defineField({
                    name: 'secondColumnTextTwo',
                    title: 'Second Text',
                    type: 'string',
                    initialValue:'A new type of business is emerging.',
                    fieldset:'columnOne',
                    group:'heroContentEditorOne',


                }),
                defineField({
                    name:'firstText',
                    title: 'First Text',
                    type: 'string',
                    initialValue: 'Businesses and employees, with new ways of working and different values, are putting mental health at the centre of their ethos.',
                    fieldset: 'columnTwo',
                    group:'heroContentEditorTwo',

                }),
                defineField({
                    name:'secondText',
                    title: 'Second Text',
                    type: 'string',
                    initialValue: 'New ways of working need a new approach to mental health treatment and wellbeing',
                    fieldset: 'columnTwo',
                    group:'heroContentEditorTwo',


                }),
                defineField({
                    name:'thirdText',
                    title: 'The Third & White Text',
                    type: 'string',
                    initialValue: 'Isofi puts music at the centre of everything we do',
                    fieldset: 'columnTwo',
                    group:'heroContentEditorTwo',


                }),
                defineField({
                    name: 'HeroImage',
                    title: 'The Hero Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields:[{name: 'alt', title: 'Alt Text', type:'string', description: 'Add some text that describe this image for screen reader sake'}],
                    group: 'media',
                    description: 'Double Check If Image Size has a width:1440 & height:592',

        
                })
            ],
    
});

export default SecondHeroSchema;


