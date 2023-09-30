import styled from 'styled-components';
import { motion } from 'framer-motion';
const CardView = styled(motion.div)`
  position: relative;
  top: -4.9rem;
  /* left: 40%; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.6rem;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  background: #431F41;

  &:hover{
    background:#592256;
    transform: scale(1.1);
    cursor: pointer;
    border-radius: 10px;

  }

  @media (min-width: 48rem){
    display: none;
  }



  
.content {
   width:100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3rem;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  p{
font-family: Gilroy;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
color: var(--theme-hero-high-light_text);

@media (max-width:48rem){
  font-family: var(--theme-font-inter);
}
  }
}


`;
  
export { CardView };



