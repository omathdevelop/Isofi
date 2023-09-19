import { createGlobalStyle } from "styled-components";

const GlobalView = createGlobalStyle`
:root{
    #root{
        padding: 0;
        margin: 0;
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
  overflow: hidden;
  position: relative;
  font-family:'Metal Mania', sans-serif;

};

                /*Isofi ProJect Themes:  Colors, Fonts, Sizing  */


                            /* NaviGation Themes*/
                --theme-nav-bg:rgba(101, 44, 71, 0.48);
                --theme-nav-width: width: 90rem;  // Placeholder
                --theme-nav-width: height: 7rem;  // Placeholder
                --theme-nav-item-text:rgba(255, 255, 255, 1);
                --theme-nav-btn-first-text:rgba(255, 205, 201, 1);
                --theme-nav-btn-first-text:rgba(110, 41, 38, 1);
                --theme-nav-btn-second-bg:rgba(199, 199, 199, 1);
                --theme-nav-btn-second-text:rgba(255, 255, 255, 1);
                --theme-nav-logo:rgba(222, 148, 144, 1);
                           /* Navigation Typography  */
                --typo-logo-font:Gilroy;
                --typo-logo-size:5rem;
                --typo-logo-style:normal;
                --typo-logo-font-weight:300;
                --typo-logo-line-height:normal;

                --typo-item-font:Gilroy;
                --typo-item-size:0.875rem;
                --typo-item-style:normal;
                --typo-item-font-weight:600;
                --typo-item-line-height:normal;

                /* Hero Section Themes */
                /* --theme-hero-bg: background: linear-gradient(0deg, var(--Navigation-fill, rgba(101, 44, 71, 0.48)) 0%, var(--Navigation-fill, rgba(101, 44, 71, 0.48)) 100%), url(<path-to-image>), lightgray -1px -11.366px / 100% 141.393% no-repeat; */
               --theme-hero-high-light_text: rgba(248, 201, 195, 1);
               
   
}
`
export default GlobalView;