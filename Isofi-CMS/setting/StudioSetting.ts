import { IoAppsSharp } from "react-icons/io5";
import type { StructureBuilder } from "sanity/desk"
const CustomStructure = (S: StructureBuilder) =>
    S.list()
        .title('isofi Website Contents')
        .items([...S.documentTypeListItems()]);
const ViewSetting = {
    name:'isofiStudio',
    title:'isofi Studio',
    icon: IoAppsSharp
};

export { CustomStructure, ViewSetting };