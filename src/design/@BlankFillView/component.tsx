import styled from 'styled-components';
import { motion } from 'framer-motion';


const BlankFillView = styled(motion.div)`

  @media (max-width: 48rem){
      position: absolute;
      top: 107.5rem;
      left:0%;
      width:100%;
      /* padding: 2.6125rem  0; */
      height: 10vh;
      background: var(--theme-bg);
      border: none;
      opacity: 0.6;

  }
`

export { BlankFillView }