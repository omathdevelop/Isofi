import BackGroundTexture from '../../assets/background-texture.png';
import { TeamImageView } from "../../design/@ImageView/component";
import { AnyView } from '../../design/@AppView/component';
import TeamCard from '../@TeamCard/component';

const Team = ({isMobile}:{isMobile:boolean}):React.JSX.Element => {
   return (<>
   {/* {isMobile  &&  */}
   <TeamImageView setTeamImageUrl={BackGroundTexture} setDevice={'mobile'}>
    <AnyView style={{display: 'flex', justifyContent: 'space-between'}}>
    <TeamCard isMobile={isMobile}/>
    <TeamCard isMobile={isMobile}/>
    <TeamCard isMobile={isMobile}/>
    </AnyView>
   </TeamImageView>  
   {/* } */}
   </>)
};

export default Team;