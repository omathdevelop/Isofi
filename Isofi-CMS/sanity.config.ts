import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/RootSchema'
import { CustomStructure, ViewSetting } from './setting/StudioSetting';

const {name, title, icon} = ViewSetting;
export default defineConfig({
  name: 'Isofi-CMS',
  title: 'Isofi',
  basePath: '/admin',
  projectId: '6zrzzqz7',
  dataset: 'production',
  plugins: [deskTool(
    {
      name: name, title: title, icon: icon,
      structure: CustomStructure
    },
  ), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

/*

  //  studio: {
  //   components:{
  //     layout: Layout,
  //     logo: Isofi,
  //     navbar:NaviGation,
  //     toolMenu: MenuTool,
  //     field: Field,
  //     input: StringInput
  //   }
  //  },
  //  theme:IsofiStudioThemes,

*/