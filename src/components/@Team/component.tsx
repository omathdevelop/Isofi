import { useSelector } from 'react-redux';
import { onTeamCardBackGroundSelector } from '../../context/@redux/@selector/selector';
import { TeamImageView } from "../../design/@ImageView/component";
import { AnyView } from '../../design/@AppView/component';
import { TeamCard } from './@Shared/component';
import type { TeamCardBackGroundImageDataState } from '../../data/Types';
const Team = ():React.JSX.Element => {
const teamCardBackGroundImageData = useSelector(onTeamCardBackGroundSelector);
return (<>
   {teamCardBackGroundImageData.map((state:TeamCardBackGroundImageDataState<string>) => {
    const {_id, teamCardBackGround} = state;

    return <TeamImageView
    initial={{opacity: 0, x: 200}}
    whileInView={{opacity:1, x:[0, 40, 0, 40, 0]}}
    transition={{duration:0.80, delay:0.40}}
     key={_id} setTeamImageUrl={teamCardBackGround}>
    <AnyView className={'team-card'}>
   <TeamCard/>
    </AnyView>
   </TeamImageView>  
   })}
   </>
   )
};

export default Team;