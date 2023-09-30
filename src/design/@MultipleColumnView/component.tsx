import styled, {css} from "styled-components";
import {motion} from 'framer-motion';


const TextureOneCSS = css`
.texture-one{
 position: absolute;
 /* top:0; */
 left:0;
width:100%;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 gap:.5rem;
 box-sizing: border-box;
 overflow: hidden;
 flex-shrink: 0;

 p{
  padding: .5rem;
  align-self: flex-start;
  color: var(--theme-hero-high-light_text);
  text-align: center;
  width:47%;
  font-family: Gilroy;
font-size: 2.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
@media (max-width: 48rem) {
  font-size: 1.2rem; 
}
 }


}

`

const TextureTwoCSS = css`
.texture-two{
 position: absolute;
 /* top:40%; */
 left:0%;
width:100%;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 box-sizing: border-box;
 gap:.5rem;
 flex-shrink: 0;

 p{
  padding: .5rem;
  align-self: flex-end;
  color: var(--theme-hero-high-light_text);
  text-align: center;
  width:47%;
  font-family: Gilroy;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
@media (max-width: 48rem) {
  width:90%;
  align-self: center;
  align-content: end;
font-family: Gilroy;
font-size: 1.625rem;
font-style: normal;
font-weight: 600;
line-height: normal; 
}
 }


 @media (max-width: 48rem) {
   top:58%;
}

}
`


const DevicesCSS = css`
position: relative;
width:100%;
top: -4.8rem;
left: 0;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

${TextureOneCSS}
${TextureTwoCSS}

@media (max-width: 48rem){
   flex-direction: column;
   justify-content: flex-start;
   display: none;
}
`
const MultipleColumnView = styled(motion.div)`
position: relative;
top:0;
left:0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:.75rem;

`
const ColumnView = styled(motion.div)<{setDevice?:'mobile' | 'desktop'}>`
${props => props.setDevice === 'mobile'? (DevicesCSS): (
  css`
position: relative;
width:100%;
top: -4.8rem;
left: 0;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

${TextureOneCSS}
${TextureTwoCSS}

@media (max-width: 48rem){
   flex-direction: column;
   justify-content: flex-start;
}

  `
)};
`

const ColumnOneImage = styled(motion.img)`
position: relative;
top:0;
left:0;
 width: 100%;
 height: auto;
/* border: 2px solid var(--theme-hero-high-light_text); */
overflow: hidden;

@media (max-width:48rem){
  width:100%;
}

`;

const ColumnTwoImage = styled(ColumnOneImage)`
`;

export {MultipleColumnView, ColumnView, ColumnOneImage, ColumnTwoImage};

