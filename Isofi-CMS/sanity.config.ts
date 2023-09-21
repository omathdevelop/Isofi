import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/RootSchema'
// import Layout from './@Isofi/customs/components/@Layout';
// import Isofi from './@Isofi/customs/components/@Logo';
// import NaviGation from './@Isofi/customs/components/@NaviGation';
// import MenuTool from './@Isofi/customs/components/@MenuTool';
// import StringInput from './@Isofi/customs/components/@StringInput';
// import Field from './@Isofi/customs/components/@Field';
// import IsofiStudioThemes from './@Isofi/themes/custom'
export default defineConfig({
  name: 'Isofi-CMS',
  title: 'Isofi',
  basePath: '/admin',
  projectId: '6zrzzqz7',
  dataset: 'production',
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
  plugins: [deskTool({ name: 'isofiStudio', title: 'Isofi Studio' }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
