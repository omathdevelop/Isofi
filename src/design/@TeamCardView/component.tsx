import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';
const MobileCSS = css`
width:100%;
height: auto;
position: relative;
top:0;
left:0;

@media(max-width: 48rem){
  top:-2rem;
  display:block;
}
`;

const DesktopCSS = css`
position: relative;
width: 100%;
height: auto;
top: -1.5rem;
left:0;
`
const TopTeamView = styled(motion.div)<{setDevice: 'mobile'| 'desktop'}>`
${props => props.setDevice === 'mobile'? MobileCSS : props.setDevice === 'desktop' && DesktopCSS};
`
const TeamView = styled(motion.div)<{setView?: 'Team' | 'Card'}>`
 background: rgba(101, 44, 71, 0.40);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
/* box-shadow: rgb(38, 57, 77) 0px 1.3rem 1.5rem -.5rem; */
margin: 0 auto 0 auto;
/* transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.5s; */

&:hover{
/* background:rgba(131, 63, 95, 0.337);
transform: scale(1); */
cursor: pointer;
}

.team-photo {
width: 100%;
height: auto;
object-fit: cover;
object-position: center;

}

.team-name{
font-family: var(--theme-font-inter);
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
color:var(--theme-text);
};
.tagline{
  font-family: var(--theme-font-inter);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color:var(--theme-text);
  };
.team-content{
padding: .25rem .5rem .25rem .5rem;
color:var(--theme-text);
font-feature-settings: 'liga' off;
font-family: var(--theme-font-inter);
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
}

@media (min-width:48rem){
  .team-name, .tagline, .team-content{
    font-family: var(--theme-font-gilroy);

  }
  max-width: 20rem;
  .team-photo {
width: 100%;
height: auto;
 object-fit: cover;
 object-position: center;
 margin-top: -.5rem;
}
}

`

const TeamPhoto = styled(motion.img)`

`


export {TopTeamView, TeamView, TeamPhoto };