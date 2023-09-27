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
const LogoView = styled(motion.div)`
    padding: .25rem;
    margin: .25rem;
    .logo{
        color: var(--theme-nav-logo);
        font-size: var(--typo-logo-size);
        font-weight: var(--typo-logo-font-weight);
        text-shadow: var(--typo-logo-shadow);
        cursor: pointer;

        @media (max-width: 48rem){
            font-size: var(--typo-logo-size-mobile);
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

export {HeaderView, LogoView, NavView}