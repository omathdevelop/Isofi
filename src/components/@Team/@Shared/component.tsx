import BackGrounTexture from '../../../assets/background-texture.png';
import TeamCard from "../../@TeamCard/component";
import { TeamImageView } from '../../../design/@ImageView/component';
const MobileTeamCard = () => {
    return (
        <>
       <TeamImageView setTeamImageUrl={BackGrounTexture}>
                <TeamCard/>
            </TeamImageView>
           

        </>
    )
};

export default MobileTeamCard;