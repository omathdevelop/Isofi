import { ImImage } from "react-icons/im";
import { defineType, defineField } from "sanity";


const TeamCardBackGroundSchema = defineType({
    name: 'teamCardBackGroundImage',
    title: 'Team Card BackGround',
    type: 'document',
    description: 'This can be use to update the Team Card BackGroundImage',
    icon: ImImage,
    fields: [
        defineField({
            name: 'teamCardBackGround',
            title: 'Team Card BackGround Image',
            type: 'image',
            options:{
                hotspot: true
            },
            fields:[{name: 'teamCardBackGroundAlt', title: 'Alt Text', type:'string', description: 'Add some text that describe this image for screen reader sake'}],
            description: 'Double Check If Image Size has a width:1440 & height:684',


        })
    ]
});
 
export default TeamCardBackGroundSchema;