import { useSelector } from 'react-redux';
import { PortableText } from '@portabletext/react';
import { onSingleTeamCardSelector } from '../../context/@redux/@selector/selector';
import { AnyView, TextView } from '../../design/@AppView/component';
import { TopTeamView, TeamView, TeamPhoto } from "../../design/@TeamCardView/component";
import type { TeamCardDataState } from '../../data/Types';
const SingleTeamCard = ({isMobile}:{isMobile?:boolean}) => {
   const singleTeamCardData = useSelector(onSingleTeamCardSelector);
    return (
        <>
        {isMobile? (
          <>
          {singleTeamCardData.map((state:TeamCardDataState<string, boolean>) => {
            const {
              _id, name, tagline,
              photo, teamPhotoAlt, description
             } = state;
        
             return ( 

          <TopTeamView key={_id} setDevice={'mobile'}>
        <TeamView setView={'Team'}>
            <TeamPhoto className={'team-photo'} alt={teamPhotoAlt} src={photo}/>
            <AnyView className={'team-attribute'}>
                    <TextView className={'team-name'}>{name}</TextView>
                    <TextView className={'tagline'}>{tagline}</TextView>
                    <AnyView className={'team-content'}>
                      <PortableText value={description}/>
                    </AnyView>
            </AnyView>
        </TeamView>  
        </TopTeamView>
             )
          })}
          </>
        ):(
         <>
         {singleTeamCardData.map((state:TeamCardDataState<string, boolean>) => {
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
         
         </>
        )}
        </>
        
      )
};


export default SingleTeamCard; 