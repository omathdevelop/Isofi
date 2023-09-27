import { HeaderView, NavView } from "../../design/@NavigationView/component";
import { UnorderView, ListView, TextView, TopView } from "../../design/@AppView/component";
import { IconView, Menu } from "../../design/@IconView/component";
import Button from "../@Button/component";
import Logo from "../@Logo/component";
import { BUTTON_TYPE_CLASSES } from "../../constants/button";
const NaviGation = ({message}:{message:string}) => {
    const onMessage = () => {
        alert(message);
        setTimeout(() => {
         window.open('https://isofi-cms-studio.netlify.app/')
        }, 2000)
    };
    return (
        <HeaderView>
            <NavView>
               <Logo/>
               <UnorderView>
                <ListView><TextView className={'items'}>menuone</TextView></ListView>
                <ListView><TextView className={'items'}>menutwo</TextView></ListView>
                <ListView><TextView className={'items'}>menuthree</TextView></ListView>
                <ListView><TextView className={'items'}>menufour</TextView></ListView>
               </UnorderView>
               <TopView>
                <Button buttonType={BUTTON_TYPE_CLASSES.therapy}><TextView>Therapist signup</TextView></Button>
                <Button onClick={onMessage} buttonType={BUTTON_TYPE_CLASSES.playlist}><TextView>Create Playlist</TextView></Button>
                <IconView><Menu/></IconView>
               </TopView>
            </NavView>
        </HeaderView>
    )
};

export default NaviGation;