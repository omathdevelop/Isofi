import styled from 'styled-components';
import {motion} from 'framer-motion';

const LoadableView = styled(motion.div)`
position: fixed;
top:0;
left:0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.288);
z-index: 2;
.loader {
  --background: linear-gradient(135deg, var(--theme-nav-bg), var(--theme-hero-high-light_text));
  --shadow: rgba(39, 94, 254, 0.28);
  --text: #6C7486;
  --page: var(--theme-hero-high-light_text);
  --page-fold: rgba(255, 255, 255, 0.52);
  --duration: 3s;
  width: 12.5rem;
  height: 9rem;
  position: absolute;
  top:20%;
  left:40%;

  @media (max-width:48rem){
    left:25%;
  }
}

.loader:before, .loader:after {
  --r: -6deg;
  content: "";
  position: absolute;
  bottom: 8px;
  width: 7rem;
  top: 80%;
  box-shadow: 0 16px 12px var(--shadow);
  transform: rotate(var(--r));
}

.loader:before {
  left: 4px;
}

.loader:after {
  --r: 6deg;
  right: 4px;
}

.loader div {
  width: 100%;
  height: 100%;
  border-radius: 13px;
  position: relative;
  z-index: 1;
  perspective: 37.5rem;
  box-shadow: 0 4px 6px var(--shadow);
  background-image: var(--background);
}

.loader div ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
}

.loader div ul li {
  --r: 180deg;
  --o: 0;
  --c: var(--page);
  position: absolute;
  top: 10px;
  left: 10px;
  transform-origin: 100% 50%;
  color: var(--c);
  opacity: var(--o);
  transform: rotateY(var(--r));
  -webkit-animation: var(--duration) ease infinite;
  animation: var(--duration) ease infinite;
}

.loader div ul li:nth-child(2) {
  --c: var(--page-fold);
  -webkit-animation-name: page-2;
  animation-name: page-2;
}

.loader div ul li:nth-child(3) {
  --c: var(--page-fold);
  -webkit-animation-name: page-3;
  animation-name: page-3;
}

.loader div ul li:nth-child(4) {
  --c: var(--page-fold);
  -webkit-animation-name: page-4;
  animation-name: page-4;
}

.loader div ul li:nth-child(5) {
  --c: var(--page-fold);
  -webkit-animation-name: page-5;
  animation-name: page-5;
}

.loader div ul li svg {
  width: 90px;
  height: 7rem;
  display: block;
}

.loader div ul li:first-child {
  --r: 0deg;
  --o: 1;
}

.loader div ul li:last-child {
  --o: 1;
}

.loader span {
  display: block;
  left: 0;
  right: 0;
  top: 100%;
  margin-top: 20px;
  text-align: center;
  color: var(--text);
}

@keyframes page-2 {
  0% {
    transform: rotateY(180deg);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  35%, 100% {
    opacity: 0;
  }

  50%, 100% {
    transform: rotateY(0deg);
  }
}

@keyframes page-3 {
  15% {
    transform: rotateY(180deg);
    opacity: 0;
  }

  35% {
    opacity: 1;
  }

  50%, 100% {
    opacity: 0;
  }

  65%, 100% {
    transform: rotateY(0deg);
  }
}

@keyframes page-4 {
  30% {
    transform: rotateY(180deg);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  65%, 100% {
    opacity: 0;
  }

  80%, 100% {
    transform: rotateY(0deg);
  }
}

@keyframes page-5 {
  45% {
    transform: rotateY(180deg);
    opacity: 0;
  }

  65% {
    opacity: 1;
  }

  80%, 100% {
    opacity: 0;
  }

  95%, 100% {
    transform: rotateY(0deg);
  }
}

`

export default LoadableView;