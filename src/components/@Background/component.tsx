import BackGround from '../../assets/background.png';
import { HeroImageView } from "../../design/@ImageView/component";

const BackGroundImage = () => {
   return (<>
        <HeroImageView setHeroImageUrl={BackGround} setHeroType={'third'} setDevice={'mobile'}/>
   </>)
};

export {BackGroundImage as ImageModule};