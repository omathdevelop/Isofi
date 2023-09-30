import BackGroundTexture from '../../assets/background-texture.png';
import { TeamImageView } from "../../design/@ImageView/component";
import { AnyView } from '../../design/@AppView/component';
import TeamCard from '../@TeamCard/component';

const Team = ({isMobile}:{isMobile?:boolean}):React.JSX.Element => {
   return (<>
   {/* {isMobile  &&  */}
   <TeamImageView setTeamImageUrl={BackGroundTexture}>
    <AnyView className={'team-card'}>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>
   <TeamCard/>


    </AnyView>
   </TeamImageView>  
   {/* } */}
   </>)
};

export default Team;