import {defineType, defineField} from 'sanity';
import {IoAddCircle, IoArrowForward, IoMenu, IoShare } from 'react-icons/io5';
//  The NaviGationSchema -> NaviGationModule //

const NavigationSchema =  defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: IoArrowForward,
    groups: [
      {name: 'logo', title: 'Logo'},
      {name: 'menuItem', title:'Menus', icon:IoMenu},
       {name: 'buttons', title: 'Buttons'},
       {name: 'isMenuItem', title: 'Options'}
      ],
    fields: [
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'string',
        description: 'Edit isofi logo',
        group: 'logo',
        initialValue: 'ISOFI'
      }),
      defineField({
        name: 'isMenu',
        title: 'Menu Option',
        type: 'boolean',
        group: 'isMenuItem',
        description: 'You can use this to hide or show all menu items'
      }),
      defineField({
        name: 'menuItem',
        title: 'Menu Items',
        type: 'array',
        of: [{type: 'object', name: 'one', title:'Menus',
        fields: [
          {
            type: 'string',
            name: 'menuOne',
            title: 'Menu Item One',
          },
          {
            type: 'string',
            name: 'menuTwo',
            title: 'Menu  Item Two',
          },
          {
            type: 'string',
            name: 'menuThree',
            title: 'Menu  Item Three',
          },
          {
            type: 'string',
            name: 'menuFour',
            title: 'Menu  Item Four',
          },
        ],
      }],
        description: 'You can use this to edit all menu items',
        group: 'menuItem',
        icon:IoAddCircle
      }),
      defineField({
        name: 'signup',
        title: 'Therapy Signup Button',
        type: 'string',
        description: 'update the "Therapy" signup button text',
        group: 'buttons'
      }),
      defineField({
        name: 'playlist',
        title: 'Share Playlist Button',
        type: 'string',
        description: 'update the "Share Playlist"  button text',
        group: 'buttons',
        hidden: ({document}) => !document?.signup,
        icon: IoShare
  
      }),
    ],
  })
  
  export default NavigationSchema;