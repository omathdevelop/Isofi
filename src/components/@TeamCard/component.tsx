import Photo from '../../assets/girlonbed.png';
import { AnyView, TextView } from '../../design/@AppView/component';
import { TopTeamView, TeamView, TeamPhoto } from "../../design/@TeamCardView/component";
const TeamCard = ({isMobile}:{isMobile?:boolean}) => {
    return (
        <>
        {isMobile? (
          <>
          <TopTeamView setDevice={'mobile'}>
        <TeamView setView={'Team'}>
            <TeamPhoto className={'team-photo'} src={Photo}/>
            <AnyView className={'team-attribute'}>
                    <TextView className={'team-name'}>Erin Selbert</TextView>
                    <TextView className={'tagline'}>Music Therapy Lead</TextView>
                    <AnyView className={'team-content'}>
                    <TextView>
                    Lorem ipsum dolor sit amet. Et mollitia amet ut quis unde cum veniam distinctio vel voluptatem saepe aut ipsa neque. 
                    Ex quod quia qui tenetur consequatur sit ipsa quibusdam aut quis excepturi sed mollitia iste et impedit possimus.
                    Lorem ipsum dolor sit amet.
                     </TextView>
                     <TextView>
                    Lorem ipsum dolor sit amet. Et mollitia amet ut quis unde cum
                     veniam distinctio vel voluptatem saepe aut ipsa neque. 
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias adipisci aliquam cum laudantium tempore, reprehenderit numquam placeat tempora voluptas dolores aliquid odio tenetur?
                       Perspiciatis incidunt vel eligendi odio qui ex.
                     </TextView>
                    </AnyView>
            </AnyView>
        </TeamView>  
        </TopTeamView>
          </>
        ):(
         <>
         <TopTeamView setDevice={'desktop'}>
        <TeamView setView={'Team'}>
            <TeamPhoto className={'team-photo'} src={Photo}/>
            <AnyView>
                    <TextView className={'team-name'} as={'h2'}>Erin Selbert</TextView>
                    <TextView className={'tagline'}>Music Therapy Lead</TextView>
                    <AnyView className={'team-content'}>
                    <TextView>
                    Lorem ipsum dolor sit amet. Et mollitia amet ut quis unde cum veniam distinctio vel voluptatem saepe aut ipsa neque. 
                    Ex quod quia qui tenetur consequatur sit ipsa quibusdam aut quis excepturi sed mollitia iste et impedit possimus.
                    Lorem ipsum dolor sit amet.
                     </TextView>
                     <TextView>
                    Lorem ipsum dolor sit amet. Et mollitia amet ut quis unde cum
                     veniam distinctio vel voluptatem saepe aut ipsa neque. 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                       Debitis, laudantium. Molestiae, repellat? Excepturi optio cum, repellat nam veritatis natus perferendis, quaerat tenetur praesentium officia debitis laudantium, odio minus eaque! Maxime?
                     </TextView>
                    </AnyView>
            </AnyView>
        </TeamView>  
        </TopTeamView>
         </>
        )}
        </>
        
      )
};


export default TeamCard 