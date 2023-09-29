/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components';
import { motion } from 'framer-motion';
const IconView = styled(motion.div)`
position: relative;
top:0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media (min-width: 48rem){
    display: none;
 }
`


export {IconView };