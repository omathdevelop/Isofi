import {css} from 'styled-components';

const heroTypeOne = css`
    .content{
    position: absolute;
    top: 11.5rem;
    left: 3rem;
    display: flex;
    justify-content:flex-end;
    align-items: flex-start;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    font-family: var( --theme-font-mar);
    @media (max-width: 48rem){
        width:100%;
        left: .25rem;
        top: 9rem;
    };

    p{
        font-size: 3rem;
        color: var(--theme-hero-high-light_text);
        @media (max-width: 48rem){
        font-size:1.5rem;
        
    }
    /* @media (max-width: 30rem){
        font-size:2.2rem;
    } */
    }
}
`
const heroTypeTwo = css`
    .content{
    position: absolute;
    top: 8.5rem;
    /* left: 3rem; */
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: row;
    gap: .5rem;
    width: 100%;
    @media (max-width: 48rem){
        width:100%;
        top: 6rem;
    };

    .first-column{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        p{
        font-size: 2rem;
        font-weight: 600;
        font-family: var(--theme-font-mar);
        color: var(--theme-hero-high-light_text);
        @media (max-width: 48rem){
        font-size:3rem;
        font-weight: 600;
        text-shadow: 2px 2px 3px var(--theme-hero-high-light_text);
        font-family: var(--theme-font-sri);
    }
    @media (max-width: 48rem){
        font-size:2rem;
        padding: .5rem;
    }
    };
     
    }
    .second-column{
        p{
        font-size: 2rem;
        color: var(--theme-hero-high-light_text);
        @media (min-width: 48rem){
        font-size:1.8rem;
        font-family: var(--theme-font-sri);
    }
    /* @media (min-width: 30rem){
        font-size:.75rem;
    } */
    };
    }
    @media (max-width: 48rem) {
          .second-column{
            display: none;
          }
    }
}
`
export {heroTypeOne as HeroOneCSS, heroTypeTwo as HeroTwoCSS};