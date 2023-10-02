import { defineType, defineField } from "sanity";
import {IoCard, IoImage} from 'react-icons/io5'
import { ImSwitch } from "react-icons/im";
// TeamCardSchema -> TeamCardModule //

const TeamCardSchema = defineType({
    name: 'teamCard',
    title: 'Team Card',
    type: 'document',
    icon: IoCard,
    description: 'A Team card, that you can find below the imageModule',
    groups: [{name: 'media', title: 'Media'}, {name: 'single', title: 'Toggle Team Card', icon: ImSwitch}],
    fields: [
        defineField({
            name:'isSingleTeam',
            title:'Switch To Single Team Card',
            type: 'boolean',
            description: 'This can be use to switch from multiple team card to single team card'

        }),
        defineField({
            name: 'photo',
            title: 'Upload Team Photo',
            type: 'image',
            options: {
                hotspot: true
            },
            fields:[{name: 'teamPhotoAlt', title: 'Alt Text', type:'string', description: 'Add some text that describe this team photo for screen reader sake'}],
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
            fields:[{name: 'teamCardBackGroundAlt', title: 'Alt Text', type:'string', description: 'Add some text that describe this image for screen reader sake'}],
            group:'media',
            description: 'Double Check If Image Size has a width:1440 & height:684',


        })
    ]
});

export default TeamCardSchema;