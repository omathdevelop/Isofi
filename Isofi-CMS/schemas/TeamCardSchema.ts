import { defineType, defineField } from "sanity";
import {IoCard, IoImage} from 'react-icons/io5'
// TeamCardSchema -> TeamCardModule //

const TeamCardSchema = defineType({
    name: 'teamCard',
    title: 'Team Card',
    type: 'document',
    icon: IoCard,
    description: 'A Team card, that you can find below the imageModule',
    groups: [{name: 'media', title: 'Media'}],
    fields: [
        defineField({
            name: 'photo',
            title: 'Upload Team Photo',
            type: 'image',
            options: {
                hotspot: true
            },
            fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
            group: 'media',
            icon: IoImage,
            description: 'Double Check If Image Size has a width:384 & height:235',

        }),
        defineField({
            name: 'name',
            title: 'Enter Team Name',
            type: 'string',
            validation: Rule => Rule.required().warning('Team "name" is required!'),
            initialValue: 'Erin Seibert'
        }),
        defineField({
            name: 'tagline',
            title: 'Enter Team Tagline',
            type: 'string',
            validation: Rule => Rule.required().warning('Team "tagline"  is required!'),
            initialValue: 'Music Therapy Lead'
        }),
        defineField({
            name: 'description',
            title: 'Team Description',
            type: 'blockContent',
            initialValue: 'writing code is the only thing that matter to me!'
        }),
        defineField({
            name: 'teamCardBackGround',
            title: 'Team Card BackGround Image',
            type: 'image',
            options:{
                hotspot: true
            },
            fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
            group:'media',
            description: 'Double Check If Image Size has a width:1440 & height:684',


        })
    ]
});

export default TeamCardSchema;