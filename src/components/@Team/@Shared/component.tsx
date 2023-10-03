import { useSelector, useDispatch } from 'react-redux';
import { PortableText } from '@portabletext/react';
import { setTeamCardBackGround } from '../../../context/@redux/@slices/slices';
import { onTeamCardSelector, onTeamCardBackGroundSelector } from '../../../context/@redux/@selector/selector';
import { TopTeamView, TeamView, TeamPhoto } from '../../../design/@TeamCardView/component';
import { AnyView, TextView } from '../../../design/@AppView/component';
import { TeamImageView } from '../../../design/@ImageView/component';
import type { TeamCardDataState } from '../../../data/Types';
import { useEffect } from 'react';
const TeamCard = () => {
    const teamCardData = useSelector(onTeamCardSelector);
    const dispatch = useDispatch();
    useEffect(() => {
      teamCardData.map((state:TeamCardDataState<string, boolean>) => {
        const {
           teamCardBackGround
         } = state;

          dispatch(setTeamCardBackGround(teamCardBackGround));
      })
    }, [teamCardData, dispatch])
    return  (<>
    {teamCardData.map((state:TeamCardDataState<string, boolean>) => {
      const {
       _id, name, tagline,
       photo, teamPhotoAlt, description
      } = state;
     return (
       <TopTeamView key={_id} setDevice={'desktop'}>
       <TeamView setView={'Team'}>
           <TeamPhoto className={'team-photo'} alt={teamPhotoAlt} src={photo}/>
           <AnyView>
                   <TextView className={'team-name'} as={'h2'}>{name}</TextView>
                   <TextView className={'tagline'}>{tagline}</TextView>
                   <AnyView className={'team-content'}>
                     <PortableText value={description}/>
                   </AnyView>
           </AnyView>
       </TeamView>  
       </TopTeamView>
     ) 
    })}
    
    </>)
}
const MobileTeamCard = () => {
  const teamCardBackGroundImage = useSelector(onTeamCardBackGroundSelector);
    return (
        <>
       <TeamImageView setTeamImageUrl={teamCardBackGroundImage}>
                <TeamCard/>
            </TeamImageView>
           

        </>
    )
};



export {TeamCard, MobileTeamCard};