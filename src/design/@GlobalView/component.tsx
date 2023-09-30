import { createGlobalStyle } from "styled-components";
import { BreakPointCSS } from "../@CSS/main";
const GlobalView = createGlobalStyle`
@font-face {
  font-family:Gilroy;
  src: url('../../fonts/Gilroy-Regular.otf') format('otf');
  font-weight: normal;
}
@font-face {
  font-family:Gilroy;
  src: url('../../fonts/Gilroy-Bold.otf') format('otf');
  font-weight: bold;
}
@font-face {
  font-family:Gilroy;
  src: url('../../fonts/Gilroy-Extrabold.otf') format('otf');
  font-weight: bolder;
}
@font-face {
  font-family:GilroyItalic;
  src: url('../../fonts/Gilroy-RegularItalic.otf') format('otf');
  font-weight: normal;
}
:root{
    #root{
        padding: 0;
        margin: 0;
        ${BreakPointCSS}
      };

      *{
  a{
  font-weight: 500;
  text-decoration: none;
  }
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Gilroy', sans-serif;
  ${BreakPointCSS}

};


                /*Isofi ProJect Themes:  Colors, Fonts, Sizing  */


                            /* NaviGation Themes*/
                --theme-nav-bg:rgba(101, 44, 71, 0.48);
                --theme-nav-width: max-width: 100%;  // Placeholder
                --theme-nav-width: height: auto;  // Placeholder
                --theme-nav-item-text:rgba(255, 255, 255, 1);
                --theme-nav-btn-playlist-bg:rgba(255, 205, 201, 1);
                --theme-nav-btn-playlist-text:rgba(110, 41, 38, 1);
                --theme-nav-btn-therapy-bg:rgba(199, 199, 199, 1);
                --theme-nav-btn-therapy-text:rgba(255, 255, 255, 1);
                --theme-nav-logo:rgba(222, 148, 144, 1);
                
                           /* Navigation Typography  */
                --typo-logo-font:Gilroy;
                --typo-logo-size:2.8rem;
                --typo-logo-size-mobile:2.5rem;
                --typo-logo-style:normal;
                --typo-logo-font-weight:300;
                --typo-logo-line-height:normal;
                --typo-logo-shadow: 2px 2px 3px var(--theme-nav-logo);

                --typo-item-font:Gilroy;
                --typo-item-size:0.875rem;
                --typo-item-style:normal;
                --typo-item-font-weight:400;
                --typo-item-line-height:normal;
               
                /* Hero Section Themes */
                /* --theme-hero-bg: background: linear-gradient(0deg, var(--Navigation-fill, rgba(101, 44, 71, 0.48)) 0%, var(--Navigation-fill, rgba(101, 44, 71, 0.48)) 100%), url(<path-to-image>), lightgray -1px -11.366px / 100% 141.393% no-repeat; */
               --theme-hero-high-light_text: rgba(248, 201, 195, 1);

               /* Font Families */
               --theme-font-gilroy:Gilroy;
               --theme-font-inter:'Inter', sans-serif;
               --theme-footer-border:1px solid #000;
               --theme-bg: #2C082A;
               --theme-text: #FFF;
               
}
`
export default GlobalView;