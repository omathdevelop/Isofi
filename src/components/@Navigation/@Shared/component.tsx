import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { 
    onIsMenuOpenSelector, onIsMenuItemSelector, 
    onMenuItemSelector, onButtonTextSelector
  } from '../../../context/@redux/@selector/selector';
import useViewAnimate from '../../../hooks/useViewAnimate';
import Logo from '../../@Logo/component';
import { container, onItem } from '../../../constants/variants';
import { PlayListButtonVariant } from '../../../design/@ButtonView/component';
import { MobileHeaderView, MobileNavView } from '../../../design/@NavigationView/component';
import { AnyView, TextView, UnorderView, ListView } from '../../../design/@AppView/component';
import type { MenuItemTyping } from '../../../data/Types';
const Menu = () => {
    return (
        <motion.svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3.79999 6.5H14.15M3.79999 11H9.19999M3.79999 15.5H18.2" stroke="#F8C9C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    )
};

const MobileMenu = ({message}: {message:string}) => {
    const isMenuItem  = useSelector(onIsMenuItemSelector);
    const menuItem = useSelector(onMenuItemSelector);
    const buttonText = useSelector(onButtonTextSelector);
    console.log(isMenuItem, menuItem, buttonText);
    const {fadeInsideAnimate} = useViewAnimate({animateType: 'fadeInside', delay:'0.5s', prefixes: 'faster'})

    const isMenuOpen = useSelector(onIsMenuOpenSelector);
     const onMessage = () => {
        alert(message);
        setTimeout(() => {
         window.open('https://isofi-cms-studio.netlify.app/');
        }, 2000)
    };
     const isMenuOpenOperation = `${isMenuOpen && fadeInsideAnimate} `
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
        return ( <UnorderView initial={'hidden'} animate={'show'} variants={container} key={_key} setOrder={'desktop'}>
                <ListView variants={onItem}><TextView className={'items'}>{menuOne}</TextView></ListView>
                <ListView variants={onItem}><TextView className={'items'}>{menuTwo}</TextView></ListView>
                <ListView variants={onItem}><TextView className={'items'}>{menuThree}</TextView></ListView>
                <ListView variants={onItem}><TextView className={'items'}>{menuFour}</TextView></ListView>
               </UnorderView>

        )
        })}
        </>
    )}
               <AnyView>
                <PlayListButtonVariant onClick={onMessage}>{buttonText?.playlist}</PlayListButtonVariant>
               </AnyView>
</MobileNavView>
  </AnyView>
{/* <AnyView className="footer">
  isofi ltd
</AnyView>  */}
        </MobileHeaderView>
    )
}

export { Menu, MobileMenu };

