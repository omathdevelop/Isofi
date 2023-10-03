import * as React from 'react';
import { useSelector } from 'react-redux';
import { onFooterSelector } from '../../context/@redux/@selector/selector';
import { FooterView } from "../../design/@FooterView/component";
import { AnyView, TextView, UrlView } from '../../design/@AppView/component';
import SocialMediaAccount from '../@SociaAccount/component';
import Logo from '../@Logo/component';
import { Content, Email } from './@Shared/component';
import type { FooterDataState } from '../../data/Types';
const Footer = ({isMobile}:{isMobile:boolean}) => { 
  const footerData = useSelector(onFooterSelector);
 
 return (
<React.Fragment>
  <FooterView>
    <AnyView className={'logo-with-social'}>
      {isMobile?(
        <Logo isMobileFooterLogo={isMobile}/>
      ):(
        <Logo isFooterLogo={true}/>

      )}
   <Content/>
   <SocialMediaAccount/>
    </AnyView>
    <AnyView className={'contact'}>
      <TextView className={'contact-desc'}>Contact Us</TextView>
      <AnyView className={'emails'}>
           <Email/>
           <TextView><a href="mailto:info@isofi.app">info@isofi.app</a></TextView>
      </AnyView>

    </AnyView>
    {footerData.map((state:FooterDataState<string, []>) => {
        const {_id, copyRightInfo, policy, serviceTerm} = state;

        return (<AnyView className={'rendered-helper'} key={_id}>
    <AnyView className={'copywrite'}>
    <TextView>©{copyRightInfo}</TextView>
    </AnyView>
    <AnyView className={'legal'}>
        <TextView><UrlView to={'/termsandservice'}>{serviceTerm}</UrlView></TextView>|<TextView><UrlView to={'/privacypolicy'}>{policy}</UrlView></TextView>

    </AnyView>

           </AnyView>
        )
      })}
  </FooterView>
</React.Fragment>
)}

export default Footer;