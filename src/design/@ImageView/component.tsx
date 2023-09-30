import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';
import type { ImageViewTyping } from '../../types/images';
import { HeroOneCSS, HeroTwoCSS } from '../@CSS/hero.ts';
const HiddenCSS = css`
    display: none;
` 
const HeroImageView = styled(motion.div) <ImageViewTyping>`
max-width:100%;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url(${props.setHeroImageUrl})`};
position:relative;
top:0;
top: ${props => props.setHeroType === 'first' ? '-5rem' :props.setHeroType === 'third' && '-4.7rem'};
left: 0;
${props => props.setContentType === 'hero_one' && HeroOneCSS};
 /* 
 overflow:hidden; */

 @media (max-width: 48rem){
    height:50vh;
    ${props => props.setDevice === 'mobile'  && HiddenCSS };
    /* top: ${props => props.setHeroType === 'first' ? '0' : props.setHeroType === 'second' && '-4.925rem' || props.setHeroType === 'third' && '2rem'}; */
 }

`
const SecondHeroImageView = styled(HeroImageView)<{setSecondHeroImageUrl:string}>`
top: -4.925rem;
max-width: 100%;
height:100vh;
background-image: ${props => `url(${props.setSecondHeroImageUrl})`} ;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
${HeroTwoCSS};
 
@media (max-width:48rem){
    height:50vh;


} 
`
const ColumnImageView = styled(HeroImageView) <{ setColumnImageUrl: string }>`
top: -4.9rem;
max-width:100%;
height:100vh;
background-image: ${props => `url(${props.setColumnImageUrl})`} ;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
 
@media (max-width:48rem){
    display:none;

} 
`
const BackGroundImageView = styled(HeroImageView)<{setBackGroundImageUrl:string}>`
top:-4.7rem;
max-width:100%;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url(${props.setBackGroundImageUrl})`} ;
@media (max-width:48rem){
    display:none;

} 

`
const TeamImageView = styled(HeroImageView)<{setTeamImageUrl:string, setDevice?:'mobile'|'desktop'}>`
position:relative;
top:0;
left:0;
overflow: hidden;
max-width:100%;
height: auto;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url(${props.setTeamImageUrl})`};
.team-card{
    display: grid;
    grid-template-columns:repeat(20rem, 1fr);
    gap: 2rem;
    
    @media (min-width:48rem){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    
        /* ${props => props.setDevice === 'mobile' && HiddenCSS  }; */
    
    } 
}
`
export { HeroImageView, SecondHeroImageView, ColumnImageView, BackGroundImageView, TeamImageView }
