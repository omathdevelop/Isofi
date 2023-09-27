import Photo from '../../assets/girlonbed.png';
import { AnyView, TextView } from '../../design/@AppView/component';
import { TeamView, TeamPhoto } from "../../design/@TeamCardView/component";
const TeamCard = () => {
    return (
        <TeamView setView={'Team'}>
            <TeamPhoto className={'team-photo'} src={Photo}/>
            <AnyView>
                    <TextView className={'team-name'} as={'h2'}>Erin Selbert</TextView>
                    <TextView>Music Therapy Lead</TextView>
                    <AnyView className={'team-content'}>
                    <TextView>
                    Lorem ipsum dolor sit amet. Et mollitia amet ut quis unde cum veniam distinctio vel voluptatem saepe aut ipsa neque. 
                    Ex quod quia qui tenetur consequatur sit ipsa quibusdam aut quis excepturi sed mollitia iste et impedit possimus.
                    Lorem ipsum dolor sit amet.
                     </TextView>
                     <TextView>
                    Lorem ipsum dolor sit amet. Et mollitia amet ut quis unde cum
                     veniam distinctio vel voluptatem saepe aut ipsa neque. 
                 
                     </TextView>
                    </AnyView>
            </AnyView>
        </TeamView>  
      )
};


export default TeamCard 