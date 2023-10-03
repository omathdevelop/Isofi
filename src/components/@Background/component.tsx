import { useSelector } from 'react-redux';
import { onImageModuleSelector } from '../../context/@redux/@selector/selector';
import { BackGroundImageView } from "../../design/@ImageView/component";
import type { ImageModuleDataState } from '../../data/Types';
const BackGroundImage = () => {
   const imageModuleData = useSelector(onImageModuleSelector);
   return (<>
       {imageModuleData.map((state:ImageModuleDataState) => {
         const {_id, image} = state;
         return  <BackGroundImageView key={_id} setBackGroundImageUrl={image}/>

       })}
   </>)
};

export {BackGroundImage as ImageModule};