import BackGroundTexture from '../../assets/background-texture.png';
import { HeroImageView } from "../../design/@ImageView/component";
import { AnyView } from '../../design/@AppView/component';
import TeamCard from '../@TeamCard/component';

const Team = ({isMobile}:{isMobile:boolean}) => {
   return (<>
   {/* {isMobile  &&  */}
   <HeroImageView setDevice={'mobile'} setHeroImageUrl={BackGroundTexture}>
    <AnyView style={{display: 'flex', justifyContent: 'space-between'}}>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    </AnyView>
   </HeroImageView>  
   {/* } */}
   </>)
};

export default Team;