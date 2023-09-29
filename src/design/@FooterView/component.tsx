import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterView = styled(motion.div) <{ setDevice: 'destop' }>`
 width: 100%;
 padding: 2rem .5rem 2rem .5rem;
 background: var(--theme-bg);
 border: none;
 position: relative;
 top: 0;
 left: 0;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;

 .content{
font-family: Helvetica Neue;
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 1.95rem */
letter-spacing: -0.03rem;
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
margin-left: ${props => props.setDevice === 'destop' ? '140rem' : ''};
width: 100%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
padding: .25rem;
gap:.25rem;
.contact-desc{
font-family: var(--theme-font-gilroy);
font-size: 1.125rem;
font-style: normal;
font-weight: 600;
line-height: 1.75rem;
color: var(--theme-hero-high-light_text);

}
.emails{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    p{
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        font-family: var(--theme-font-gilroy);
        color: var(--theme-hero-high-light_text);

    }
}
 }
 .copywrite{
width:100%;
text-align: center;
padding: .25rem;
font-family: var(--theme-font-gilroy);;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
color:var(--theme-hero-high-light_text);
 }
 .legal{
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
padding: .25rem;
p a{
font-family: var(--theme-font-gilroy);
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
color:var(--theme-hero-high-light_text);

}
 }

 @media (min-width: 48rem){
    .contact{
        display: none;
        margin-left: 160%;
    }
    .copywrite{
        font-family: Helvetica Neue;
font-size: 1.125rem;
font-style: normal;
font-weight: 700;
line-height: 135%; /* 1.51875rem */
letter-spacing: -0.01125rem;
color: var(--theme-text);
        margin-left:-60%;
    }
    .legal{
    justify-content: right;
    p a{
font-family: Helvetica Neue;
font-size: 1.125rem;
font-style: normal;
font-weight: 700;
line-height: 135%; /* 1.51875rem */
letter-spacing: -0.01125rem;
color: var(--theme-text);
    }
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