import { defineType, defineField } from "sanity";
import {IoArrowForward} from 'react-icons/io5'

// The MultipleColumnSchema -> Multiple Column Module //

const MultipleColumnSchema = defineType({
    name: 'multipleColumn',
    title: 'Multiple Column',
    type: 'document',
    groups: [{name: 'media', title:'Media'}, {name: 'rowOne', title:'Row One Editor'}, {name: 'rowTwo', title:'Row Two Editor'}],
    fieldsets: [
        {name: 'firstRow', title: 'First Row', description: ''},
        {name: 'secondRow', title: 'Second Row', description: ''},

],
    description:'This can be use to edit/add to the module with left & right images',
    icon: IoArrowForward,
    fields: [
                defineField({
                    name: 'firstColumnOneText',
                    title: 'First Text',
                    type:'string',
                    initialValue:'Remote and in-person sessions support hybrid and flexible working patterns',
                    fieldset:'firstRow',
                    group:'rowOne'
                }),
                defineField({
                    name: 'firstColumnTwoText',
                    title: 'Second Text',
                    type:'string',
                    initialValue:`with a fully HIPPA/HCPC compliant platform.`,
                    fieldset:'firstRow',
                     group: 'rowOne',

                }),
                        {
                            name: 'firstColummageOne',
                            title:'Image One',
                            type: 'image',
                            options: {
                                hotspot: true
                            },
                            fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
                            fieldset:'firstRow',
                            group: 'rowOne',
                            description: 'Double Check If Image Size has a width:720 & height:573',


                        },
                        {
                            name: 'firstColumnmageTwo',
                            title:'Image Two',
                            type: 'image',
                            options: {
                                hotspot: true
                            },
                            fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
                            fieldset:'firstRow',
                            group: 'rowOne',
                            description: 'Double Check If Image Size has a width:720 & height:573',


                        },
                        defineField({
                            name: 'secondColumnOneText',
                            title: 'First Text',
                            type:'string',
                            initialValue:`Remote and in-person sessions 
                            support hybrid and flexible working patterns`,
                            fieldset:'secondRow',
                            group: 'rowTwo',


                        }),
                        defineField({
                            name: 'secondColumnTwoText',
                            title: 'Second Text',
                            type:'string',
                            initialValue:`with a fully HIPPA/HCPC compliant platform.`,
                            fieldset:'secondRow',
                            group: 'rowTwo'

                        }),
                                {
                                    name: 'secondColumnImageOne',
                                    title:'Image One',
                                    type: 'image',
                                    options: {
                                        hotspot: true
                                    },
                                    fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
                                    fieldset:'secondRow',
                                    group: 'rowTwo',
                                    description: 'Double Check If Image Size has a width:720 & height:573',


                                },
                                {
                                    name: 'secondColumnImageTwo',
                                    title:'Image Two',
                                    type: 'image',
                                    options: {
                                        hotspot: true
                                    },
                                    fields:[{name: 'alt', title: 'Alt Text', type:'string'}],
                                    fieldset:'secondRow',
                                    group: 'rowTwo',
                                    description: 'Double Check If Image Size has a width:720 & height:573',

                                }
            ]
               
});

export default MultipleColumnSchema;