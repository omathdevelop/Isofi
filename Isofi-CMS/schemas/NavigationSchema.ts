import { defineType, defineField } from 'sanity';
import { BiNavigation } from 'react-icons/bi';
import { TbComponents } from 'react-icons/tb';
import { RiMenu4Line } from 'react-icons/ri';
import { IoOptionsOutline } from 'react-icons/io5';
//  The NaviGationSchema -> NaviGationModule //

const NavigationSchema = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: BiNavigation,
  groups: [
    { name: 'logo', title: 'Logo', icon: TbComponents },
    { name: 'menuItem', title: 'Menus', icon: RiMenu4Line },
    { name: 'buttons', title: 'Buttons', icon: TbComponents },
    { name: 'isMenuItem', title: 'Options', icon: IoOptionsOutline }
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
      of: [{
        type: 'object', name: 'one', title: 'Menus',
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
      hidden: ({ document }) => !document?.signup,

    }),
  ],
})

export default NavigationSchema;