import styled from 'styled-components';
import {motion} from 'framer-motion';

const HeaderView = styled(motion.header)`
    width: var(--theme-nav-width);
    height: var(--theme-nav-height);
    background: var(--theme-nav-bg);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
`
const MobileHeaderView = styled(motion.header)`
position: absolute;
top:5vh;
left:3rem;
z-index: 1;
width: 20rem;
height: auto;
  padding: 1.2rem;
  color: var(--theme-text);
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg, transparent 35%,var(--theme-nav-bg), var(--theme-hero-high-light_text)) border-box;
  border: 2px solid transparent;
  border-radius: .5rem;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

.main-content {
  text-align: center;
}



@media (min-width:48rem){
    display:none;
}

`
const LogoView = styled(motion.div)`
padding: .25rem;
    /* margin: .25rem; */
    .logo{
        color: var(--theme-nav-logo);
        font-size: var(--typo-logo-size);
        font-weight: var(--typo-logo-font-weight);
        font-family: var(--theme-font-gilroy);
        cursor: pointer;

        @media (max-width: 48rem){
            font-size: var(--typo-logo-size-mobile);
            font-family: var(--theme-font-inter);

        }
    }
`
const NavView = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: .25rem;
`
const MobileNavView = styled(motion.nav)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
`
export {HeaderView, LogoView, NavView, MobileHeaderView, MobileNavView}