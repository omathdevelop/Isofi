import * as React from 'react';
import {IoMail} from 'react-icons/io5';
import { FooterView } from "../../design/@FooterView/component";
import { AnyView, TextView, UrlView } from '../../design/@AppView/component';
import SocialMediaAccount from '../@SociaAccount/component';
import Logo from '../@Logo/component';
import { Content } from './@Shared/component';
const Footer = () => (
<React.Fragment>
  <FooterView>
    <AnyView className={'logo-with-social'}>
   <Logo/>
   <Content/>
   <SocialMediaAccount/>
    </AnyView>
    <AnyView className={'contact'}>
      <TextView as={'h2'}>Contact Us</TextView>
      <AnyView className={'emails'}>
      <IoMail size={20} color={'var(--theme-hero-high-light_text)'}/>
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