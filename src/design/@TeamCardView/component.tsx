import styled from 'styled-components';
import { motion } from 'framer-motion';
const TeamView = styled(motion.div)<{setView?: 'Team' | 'Card'}>`
 position: relative;
max-width: 20rem;
top: 4rem;
 /* background: #CED2DA; */
 background: rgba(101, 44, 71, 0.40);
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
box-shadow: rgb(38, 57, 77) 0px 1.3rem 1.5rem -.5rem;
margin: 0 auto 8rem auto;
transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0.5s;

&:hover{
background:rgba(131, 63, 95, 0.337);
transform: scale(0.90);
cursor: pointer;
}
.team-photo {
width: 100%;
height: auto;
 object-fit: cover;
 object-position: center;
 margin-top: -.5rem;
}

.team-name{
  font-size: 1.5rem;
  font-weight: 600;
  color:var(--theme-hero-high-light_text);

}
.team-tagline{
  font-family: var(--theme-font-reem);
  font-size: 1rem;
}

.team-content{
  padding: .25rem .5rem .25rem .5rem;
  color:rgba(151, 148, 148, 0.831);
  font-family: var(--theme-font-sri);
  font-size: 1rem;
}

@media (min-width:48rem){
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


export { TeamView, TeamPhoto };