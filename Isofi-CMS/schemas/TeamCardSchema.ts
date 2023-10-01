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
            name: 'image',
            title: 'Upload Team Photo',
            type: 'image',
            options: {
                hotspot: true
            },
            fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
            group: 'media',
            icon: IoImage,
            description: 'The Team Photo Goes Here'
        }),
        defineField({
            name: 'teamName',
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
            initialValue: 'The Largest Music Therapy Lead Industry'
        }),
        defineField({
            name: 'teamCardBackGround',
            title: 'Team Card BackGround Image',
            type: 'image',
            options:{
                hotspot: true
            },
            fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
            group:'media'

        })
    ]
});

export default TeamCardSchema;