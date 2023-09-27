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
  border-radius: 2.5rem;
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
transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s;

&:hover{
background: rgba(88, 86, 86, 0.774);
}
`;
// rgba(255, 205, 201, 1)
const PlayListButton = styled(ButtonView)`
color: var(--theme-nav-btn-playlist-text);
background: var(--theme-nav-btn-playlist-bg);
transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s;
&:hover{
background: rgb(199, 140, 136);
}
@media (max-width: 48rem){
  display: none;
}
`;

export {ButtonView, TherapyButton, PlayListButton};