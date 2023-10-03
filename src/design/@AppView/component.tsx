import styled, {css} from "styled-components";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

const TopView = styled(motion.div)`
  position: relative;
  top:0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: .25rem .25rem .25rem .25rem;
  width: 50%;

  @media (min-width: 48rem){
    width: 30%
  }
`
const View = styled(motion.main)`
    max-width:100rem;
    height: 100vh;
    overflow-x: hidden;
    background: #CED2DA;
    position: relative;
    top:0;
    left:0;

    /* @media (max-width: 48rem){
      height:80vh;
    } */
        /* background: linear-gradient(0deg, var(--theme-nav-bg, rgba(101, 44, 71, 0.48)) 0%, var(--theme-nav-bg, rgba(101, 44, 71, 0.48)) 100%), lightgray -1px -11.366px / 100% 141.393% no-repeat; */
`

const TextView = styled(motion.p)`
padding: .25rem;
 word-spacing: 0.5;
 margin: .25rem;
`;
const UnorderView = styled(motion.ul)<{setOrder:'mobile'|'desktop'}>`
padding: .25rem;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: .5rem;
 flex-wrap: nowrap;


 @media (max-width: 48rem){
    ${props => props.setOrder === 'mobile'? (css`
      display: none;
    `): css`
    display: block;
    `}
 }
`
const ListView = styled(motion.li)`
    list-style: none;
    margin-left: .25rem;
    .items{
      color:#FFF;
font-family: Gilroy;
font-size: 1.2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
&:hover{
  color:var(--theme-hero-high-light_text);
}
cursor: pointer;
@media (max-width:48rem){
font-family: var(--theme-font-inter);
font-size: 1.2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
}
    }
`
const UrlView = styled(Link)`
 display: block;
    text-decoration: none;
    /* color: var(--text-gray-color); */
    &:hover{
        text-decoration: underline;
        /* text-decoration-color: var(--primary-gray-color); */
        text-decoration-skip: initial;
    }
`;
const HeroView = styled(motion.div)`
 position: relative;
    top: 50%;
    left: 0; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .single-column-text{
font-family: Gilroy;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
      color: var(--theme-hero-high-light_text);
    }

`

const LineView = styled(motion.hr)`
width: 100%;
background-color: var(--theme-hero-high-light_text);
`;
const AnyView = styled(motion.div)``;
const BreakView = styled(motion.br)``;
const SpanView = styled(motion.span)<{options: 'contents' | 'content'}>`
/* display:block; */
color: ${props => props.options === 'content'? '#FFF': props.options === 'contents' && ''};
/* width: 100%; */
line-height: normal;
`;

export {TopView, View, TextView, UrlView, ListView, UnorderView, HeroView, BreakView, SpanView, LineView, AnyView};
