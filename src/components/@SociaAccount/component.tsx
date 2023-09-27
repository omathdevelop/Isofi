import {IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoTwitter, IoLogoTiktok, IoLogoInstagram} from 'react-icons/io5';
import SocialMediaView from '../../design/@SocialMediaView/component';
const SocialMediaAccount = () => {
 return (
    <SocialMediaView>
        <IoLogoFacebook  size={24} color={'rgba(255, 255, 255, 1)'} fill={'white'}/>
        <IoLogoLinkedin size={24} color={'rgba(255, 255, 255, 1)'} fill={'white'}/>
        <IoLogoTwitter size={24} color={'rgba(255, 255, 255, 1)'} fill={'white'}/>
        <IoLogoTiktok size={24} color={'rgba(255, 255, 255, 1)'} fill={'white'}/>
        <IoLogoInstagram size={24} color={'rgba(255, 255, 255, 1)'} fill={'white'}/>
        <IoLogoYoutube size={24} color={'rgba(255, 255, 255, 1)'} fill={'white'}/>

    </SocialMediaView>
 )
};

export default SocialMediaAccount;