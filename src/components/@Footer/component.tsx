import * as React from 'react';
import { FooterView } from "../../design/@FooterView/component";
import { AnyView, TextView, UrlView } from '../../design/@AppView/component';
import SocialMediaAccount from '../@SociaAccount/component';
import Logo from '../@Logo/component';
import { Content, Email } from './@Shared/component';
const Footer = ({isMobile}:{isMobile:boolean}) => (
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
           <TextView>info@isofi.app</TextView>
      </AnyView>
    </AnyView>
    <AnyView className={'copywrite'}>
    © 2023 Isofi Limited - All rights reserved
    </AnyView>
    <AnyView className={'legal'}>
        <TextView><UrlView to={'/termsandservice'}>Terms And Service</UrlView></TextView>|<TextView><UrlView to={'/privacypolicy'}>Privacy Policy</UrlView></TextView>

    </AnyView>
  </FooterView>
</React.Fragment>
)

export default Footer;