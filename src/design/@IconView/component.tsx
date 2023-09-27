/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components';
import { FaAlignLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';
const IconView = styled(motion.div)`
position: relative;
top:0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`
const Menu = styled(FaAlignLeft)`
 width: 2rem;
 height: 2rem;
 color: var(--theme-nav-therapy-bg);
 @media (min-width: 48rem){
    display: none;
 }
`

export {IconView, Menu };