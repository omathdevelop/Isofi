import styled, {css} from "styled-components";
import {motion} from 'framer-motion';

const TextureOneCSS = css`
.texture-one{
 position: absolute;
 top:40%;
 left:5%;
width:max-content;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 gap:.5rem;
 color: var(--theme-hero-high-light_text);
 font-size: 1.2rem;
 box-sizing: border-box;
 overflow: hidden;

 @media (max-width: 48rem) {
   font-size: 1.2rem; 
}

}

`

const TextureTwoCSS = css`
.texture-two{
 position: absolute;
 top:40%;
 left:50%;
 padding: .5rem;
 margin-left: 2rem;
max-width:max-content;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 color: var(--theme-hero-high-light_text);
 font-size: 1.2rem;
 box-sizing: border-box;
 gap:.5rem;



 @media (max-width: 48rem) {
   font-size: 1rem; 
   top:70%;
   left:0;
}

}
`
const LargeTexture = css`
 .texture-two{
  @media (max-width:52rem) {
    top:20%;
}
} 
`
const SecondLargeTexture = css`
 .texture-one{
  @media (max-width:52rem) {
    top:20%;
}
} 
`
const MultipleColumnView = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`


const ColumnView = styled(motion.div)<{isTablet:boolean}>`
position: relative;
max-width:80rem;
top: -2rem;
left: 0;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

${TextureOneCSS}
${TextureTwoCSS}
${props => props.isTablet && LargeTexture};
${props => props.isTablet && SecondLargeTexture};



@media (max-width: 48rem){
   flex-direction: column;
   justify-content: flex-start;
}
`

const ColumnOneImage = styled(motion.img)`
position: relative;
top:0;
left:0;
 width: 50%;
 height: auto;
/* border: 2px solid var(--theme-hero-high-light_text); */
border-radius:1rem;
padding: .5rem;
margin-left:.5rem;
box-shadow: rgb(38, 57, 77) 0px 1rem 1.2rem -10px; 
overflow: hidden;

@media (max-width:48rem){
  width:100%;
}

`;

const ColumnTwoImage = styled(ColumnOneImage)`
`;

export {MultipleColumnView, ColumnView, ColumnOneImage, ColumnTwoImage};

