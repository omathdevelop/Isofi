import { useSelector } from 'react-redux';
import { onTeamCardBackGroundSelector } from '../../context/@redux/@selector/selector';
import { TeamImageView } from "../../design/@ImageView/component";
import { AnyView } from '../../design/@AppView/component';
import { TeamCard } from './@Shared/component';
const Team = ():React.JSX.Element => {
const teamCardBackGroundImage = useSelector(onTeamCardBackGroundSelector);
return (<>
   {/* {isMobile  &&  */}
   <TeamImageView setTeamImageUrl={teamCardBackGroundImage}>
    <AnyView className={'team-card'}>
   <TeamCard/>
    </AnyView>
   </TeamImageView>  
   {/* } */}
   </>)
};

export default Team;