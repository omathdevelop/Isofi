/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuItem, setMenuItems, setButtonText, setLogo } from "../../context/@redux/@slices/slices";
import { onNaviGationSelector, onAppUrlSelector, onHubSpotFormSelector } from "../../context/@redux/@selector/selector";
import useMenu from "../../hooks/useMenu";
import { HeaderView, NavView } from "../../design/@NavigationView/component";
import { UnorderView, ListView, TextView, TopView, AnyView } from "../../design/@AppView/component";
import { IconView } from "../../design/@IconView/component";
import Button from "../@Button/component";
import Logo from "../@Logo/component";
import { Menu } from "./@Shared/component";
import { BUTTON_TYPE_CLASSES } from "../../constants/button";
import type { NaviGationDataState, MenuItemTyping, AppUrlDataState, HubSpotFormDataState } from "../../data/Types";
const NaviGation = () => {
    const dispatch = useDispatch();
    const navigation_data = useSelector(onNaviGationSelector);
    const appUrl = useSelector(onAppUrlSelector);
    const hubSpotForm = useSelector(onHubSpotFormSelector);
    useEffect(() => {
        navigation_data.map((state:NaviGationDataState) => {
            const {logo, isMenu, playlist, signup, menuItem} = state;
            dispatch(setIsMenuItem(isMenu));
            dispatch(setMenuItems(menuItem));
                 dispatch(setButtonText({playlist:playlist, signup:signup}));
                 dispatch(setLogo(logo));
        })
    }, [navigation_data, dispatch])
    const { onMenuOpen } = useMenu();
    const onSelfMadeNavigator = (data:string) => window.open(data);

    return (<HeaderView>
                {navigation_data.map((state:NaviGationDataState) => {
                 const {_id, isMenu, playlist, signup, menuItem} = state;
                 
                 return ( <NavView key={_id}>
                <Logo/>
                {isMenu  && ( 
                    <> 
                    {menuItem.map((items:MenuItemTyping<string>) => {
                      const { _key, menuOne, menuTwo, menuThree, menuFour} = items;
                        return (<UnorderView key={_key} setOrder={'mobile'}>
                        <ListView><TextView className={'items'}>{menuOne}</TextView></ListView>
                        <ListView><TextView className={'items'}>{menuTwo}</TextView></ListView>
                        <ListView><TextView className={'items'}>{menuThree}</TextView></ListView>
                        <ListView><TextView className={'items'}>{menuFour}</TextView></ListView>
                        </UnorderView>
                        )
                    })}
            
                    </>
                )}
                <TopView>
                {hubSpotForm.map((state:HubSpotFormDataState<string>) => {
                        const {_id, hubSpotForm} = state;
                        return <AnyView key={_id}>
                    <Button onClick={() => onSelfMadeNavigator(hubSpotForm)} buttonType={BUTTON_TYPE_CLASSES.therapy}><TextView>{signup}</TextView></Button>
                        </AnyView>
                     })}
                     {appUrl.map((state:AppUrlDataState<string>) => {
                        const {_id, applink} = state;
                        return <AnyView key={_id}>
                            <Button onClick={() => onSelfMadeNavigator(applink)} buttonType={BUTTON_TYPE_CLASSES.playlist}><TextView>{playlist}</TextView></Button>
                        </AnyView>
                     })}
                    <IconView onClick={onMenuOpen}><Menu /></IconView>
                </TopView>
                    
                    </NavView>
                 )
                })}
        </HeaderView>
    )
};

export default NaviGation;