import { useSelector } from 'react-redux';
import { PortableText } from '@portabletext/react';
import { onTeamCardSelector, onTeamCardBackGroundSelector } from '../../../context/@redux/@selector/selector';
import { TopTeamView, TeamView, TeamPhoto } from '../../../design/@TeamCardView/component';
import { AnyView, TextView } from '../../../design/@AppView/component';
import { TeamImageView } from '../../../design/@ImageView/component';
import type { TeamCardDataState, TeamCardBackGroundImageDataState } from '../../../data/Types';
const TeamCard = () => {
    const teamCardData = useSelector(onTeamCardSelector);
    return  (<>
    {teamCardData.map((state:TeamCardDataState<string, boolean>) => {
      const {
       _id, name, tagline,
       photo, teamPhotoAlt, description
      } = state;
     return ( <TopTeamView key={_id} setDevice={'desktop'}>
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
  const teamCardBackGroundImageData = useSelector(onTeamCardBackGroundSelector);

    return (
        <>
         {teamCardBackGroundImageData.map((state:TeamCardBackGroundImageDataState<string>) => {
          const {_id, teamCardBackGround} = state;

          return <TeamImageView key={_id} setTeamImageUrl={teamCardBackGround}>
                <TeamCard/>
            </TeamImageView>
         })}
           

        </>
    )
};



export {TeamCard, MobileTeamCard};