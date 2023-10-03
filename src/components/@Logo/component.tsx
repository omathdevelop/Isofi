import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onLogoSelector } from "../../context/@redux/@selector/selector";
import { CSSProperties } from "styled-components";
import { LogoView } from "../../design/@NavigationView/component";
import { TextView } from "../../design/@AppView/component";
const FooterLogoStyles:CSSProperties = {
fontFamily:'var(--theme-font-inter)',
fontSize: '4rem',
fontStyle: 'normal',
fontWeight:300,
lineHeight:'normal'
};
const MobileFooterLogoStyles:CSSProperties = {
    fontFamily:'var(--theme-font-inter)',
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight:300,
    lineHeight:'normal'
};

const Logo = ({isFooterLogo, isMobileFooterLogo}:{isFooterLogo?:boolean, isMobileFooterLogo?:boolean, isPage?:boolean}) =>  {
   const navigate = useNavigate();
   const logo = useSelector(onLogoSelector);
   const onHome = ()  => navigate('/');
    if(isFooterLogo){
        return (<LogoView onClick={onHome}>
            <TextView className={'logo'} style={FooterLogoStyles}>{logo}</TextView>
            </LogoView>
            )
    }
    if(isMobileFooterLogo){
        return (<LogoView onClick={onHome}>
            <TextView className={'logo'} style={MobileFooterLogoStyles}>{logo}</TextView>
            </LogoView>
            )
    }
    return (<LogoView onClick={onHome}>
<TextView className={'logo'} >{logo}</TextView>
</LogoView>)
}

export default Logo; 