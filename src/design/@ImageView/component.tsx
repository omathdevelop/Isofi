import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';
import type { ImageViewTyping } from '../../types/images';
import { HeroOneCSS, HeroTwoCSS } from '../@CSS/hero.ts';
const HiddenCSS = css`
    display: none;
` 
const HeroImageView = styled(motion.div) <ImageViewTyping>`
max-width: 100%; 
height: ${props => props.setDevice === 'mobile'? '100%': '100%'};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url(${props.setHeroImageUrl})`};
position:relative;
top: ${props => props.setHeroType === 'first' ? '-5rem' : props.setHeroType === 'second' && '-4.925rem' || props.setHeroType === 'third' && '2rem'};
left: 0;
 ${props => props.setContentType === 'hero_one' && HeroOneCSS};
 ${props => props.setContentType === 'hero_two' && HeroTwoCSS};
 overflow:hidden;

 @media (max-width: 48rem){
    ${props => props.setDevice === 'mobile'  && HiddenCSS };
 }
 @media (max-device-width: 48rem){
    height: 50%
}

`
const ColumnImageView = styled(HeroImageView) <{ setColumnImageUrl: string }>`
top: -4.9rem;
background-image: ${props => `url(${props.setColumnImageUrl})`} ;
height: 50%;

@media (max-device-width: 48rem){
    height: 50%
}

`
const MobileImageView = styled(HeroImageView)`
    height: 80%;
`
export { HeroImageView, ColumnImageView, MobileImageView }