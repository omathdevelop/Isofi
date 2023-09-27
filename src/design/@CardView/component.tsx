import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardView = styled(motion.div)`
  position: relative;
  top: -4.8rem;
  /* left: 40%; */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80rem;
  box-shadow: 0 10px 20px rgba(137, 122, 122, 0.616);
  padding: 1.6rem;
  overflow: hidden;
  border-radius: 0px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  background: #431F41;

  &:hover{
    background:#7b2776;
    transform: rotate(-3deg);
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
  font-family: var(--theme-font-sri);
  font-size: 1.2rem;
  color: var(--theme-hero-high-light_text);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}


`;
  
export { CardView };


