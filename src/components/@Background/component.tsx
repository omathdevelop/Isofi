import BackGround from '../../assets/background.png';
import { BackGroundImageView } from "../../design/@ImageView/component";

const BackGroundImage = () => {
   return (<>
        <BackGroundImageView setBackGroundImageUrl={BackGround}/>
   </>)
};

export {BackGroundImage as ImageModule};