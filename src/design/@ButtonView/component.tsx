import styled from 'styled-components';
import {motion} from 'framer-motion';

const ButtonView = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: .75rem;
  height: 2rem;
  border: none;
  box-shadow: rgb(38, 57, 77) 0px 1rem 1.2rem -10px; 
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


/* &:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.button-88:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
} */
`;
const TherapyButton = styled(ButtonView)`
color: var(--theme-nav-btn-therapy-text);
background: var(--theme-nav-btn-therapy-bg);
text-align: center;
font-family: Gilroy;
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.00894rem;
transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s;

`;
// rgba(255, 205, 201, 1)
const PlayListButton = styled(ButtonView)`
color: var(--theme-nav-btn-playlist-text);
background: var(--theme-nav-btn-playlist-bg);
text-align: center;
font-family: Gilroy;
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1.25rem; /* 166.667% */
letter-spacing: 0.01338rem;
flex-shrink: 0;
transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s;
&:hover{
background: rgb(199, 140, 136);
}
@media (max-width: 48rem){
  display: none;
}
`;

export {ButtonView, TherapyButton, PlayListButton};