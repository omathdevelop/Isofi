import { defineType, defineField } from "sanity";
// import {} from 'react-icons/fa6';
const CardSchema = defineType({
    name: 'teams',
    title: 'Teams',
    type: 'document',
    description: 'This is a team module consist of three team_card',
    fieldsets: [
        {name:'firstCard', title:'First Team Card', description:'This can be use to edit the first three team card'}
],
    fields: []
})