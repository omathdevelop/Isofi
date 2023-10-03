import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { 
    onIsMenuOpenSelector, onIsMenuItemSelector, 
    onMenuItemSelector, onButtonTextSelector, onAppUrlSelector
  } from '../../../context/@redux/@selector/selector';
import useViewAnimate from '../../../hooks/useViewAnimate';
import Logo from '../../@Logo/component';
import { PlayListButtonVariant } from '../../../design/@ButtonView/component';
import { MobileHeaderView, MobileNavView } from '../../../design/@NavigationView/component';
import { AnyView, TextView, UnorderView, ListView } from '../../../design/@AppView/component';
import type { MenuItemTyping, AppUrlDataState } from '../../../data/Types';
const Menu = () => {
    return (
        <motion.svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3.79999 6.5H14.15M3.79999 11H9.19999M3.79999 15.5H18.2" stroke="#F8C9C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    )
};

const MobileMenu = () => {
    const isMenuItem  = useSelector(onIsMenuItemSelector);
    const menuItem = useSelector(onMenuItemSelector);
    const buttonText = useSelector(onButtonTextSelector);
    const appUrl = useSelector(onAppUrlSelector);
    const {playlist} = buttonText as {playlist:string, signup:string};
    console.log(isMenuItem, menuItem, buttonText);
    const {fadeInsideAnimate} = useViewAnimate({animateType: 'fadeInside', delay:'0.5s', prefixes: 'faster'})

    const isMenuOpen = useSelector(onIsMenuOpenSelector);
     const isMenuOpenOperation = `${isMenuOpen && fadeInsideAnimate} `;
     const onSelfMadeNavigator = (data:string) => window.open(data);
     return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <MobileHeaderView  className={isMenuOpenOperation}>
 <AnyView className="main-content">
 <Logo/>
<MobileNavView>
    {isMenuItem  && (
        <>
        {menuItem.map((state:MenuItemTyping<string>) => {
        const { _key, menuOne, menuTwo, menuThree, menuFour} = state;
        return ( <UnorderView key={_key} setOrder={'desktop'}>
                <ListView><TextView className={'items'}>{menuOne}</TextView></ListView>
                <ListView><TextView className={'items'}>{menuTwo}</TextView></ListView>
                <ListView><TextView className={'items'}>{menuThree}</TextView></ListView>
                <ListView><TextView className={'items'}>{menuFour}</TextView></ListView>
               </UnorderView>

        )
        })}
        </>
    )}            {appUrl.map((state:AppUrlDataState<string>) => {
        const {_id, applink} = state;
        return <AnyView key={_id}>
            <PlayListButtonVariant onClick={() => onSelfMadeNavigator(applink)}>{playlist}</PlayListButtonVariant>
        </AnyView>
     })}
</MobileNavView>
  </AnyView>
{/* <AnyView className="footer">
  isofi ltd
</AnyView>  */}
        </MobileHeaderView>
    )
}

export { Menu, MobileMenu };

