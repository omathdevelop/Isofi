import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const DesktopCSS =  css`
max-width: 100rem;
 padding: 2rem .5rem 2rem .5rem;
 background: var(--theme-bg);
 border: var(--theme-footer-border);
 position: relative;
 top: 0;
 left: 0;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;

 .logo-with-social{
width: 100%;
display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: row;
 padding: .25rem;
 }
  

`
const FooterView = styled(motion.div)<{setDevice:'destop'}>`
 max-width: 100rem;
 padding: 2rem .5rem 2rem .5rem;
 background: var(--theme-bg);
 border: var(--theme-footer-border);
 position: relative;
 top: 0;
 left: 0;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;

 .content{
    font-family: var(--theme-font-sri);
    color:var(--theme-hero-high-light_text);

 }
 .logo-with-social{
width: 100%;
display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: row;
 padding: .25rem;
 }
 .contact{
margin-left: ${props => props.setDevice === 'destop'? '140rem': ''};
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
padding: .25rem;
gap:.25rem;
color: var(--theme-hero-high-light_text);
font-size: 1rem;

.emails{
    display: flex;
    justify-content: center;
    align-items: center;
}
 }
 .copywrite{
    width:100%;
    text-align: center;
    padding: .25rem;
    font-size: .75rem;
    color: var(--theme-hero-high-light_text);
 }
 .legal{
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
padding: .25rem;
color:var(--theme-hero-high-light_text);
font-size:.75rem;
 }

 @media (min-width: 48rem){
    .contact{
        margin-left: 160%;
    }
    .copywrite{
        margin-left:-60%;
    }
    .legal{
        justify-content: right;
    }

 }
 @media (min-width:75rem){
    .contact{
        margin-left: 170%;
    }
 }
 @media (max-width:48rem){
 .content{
    display: none;
 }
 }
`;


export { FooterView };