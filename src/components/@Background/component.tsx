import { useSelector } from 'react-redux';
import { onImageModuleSelector } from '../../context/@redux/@selector/selector';
import { BackGroundImageView } from "../../design/@ImageView/component";
import type { ImageModuleDataState } from '../../data/Types';
const BackGroundImage = () => {
   const imageModuleData = useSelector(onImageModuleSelector);
   return (<>
       {imageModuleData.map((state:ImageModuleDataState) => {
         const {_id, image} = state;
         return  <BackGroundImageView   
         initial={{opacity: 0, x: 200}}
         whileInView={{opacity:1, x:[0, 40, 0, 40, 0]}}
         transition={{duration:0.80, delay:0.40}}
          key={_id} setBackGroundImageUrl={image}/>

       })}
   </>)
};

export {BackGroundImage as ImageModule};