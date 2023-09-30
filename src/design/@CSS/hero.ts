import {css} from 'styled-components';

const heroTypeOne = css`
    .content{
    /* height:100%; */
    width: 100%;
    height: auto;
     display: flex; 
     justify-content:flex-end;
    align-items: flex-start; 
    flex-direction: column;
    gap: .5rem;
    text-align: center;
    position: absolute;
    top:10rem;
    left:4rem;
    /* padding: .25rem .5rem .25rem .5rem; */
   


.title{
font-family: Gilroy;
font-size: 4rem;
font-style: normal;
font-weight: 600;
line-height: normal;
color: var(--theme-hero-high-light_text);
@media (max-width: 48rem){
font-family: var(--theme-font-inter);
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
    }
}
@media (max-width: 48rem){
    left: .25rem;
    top: 9rem;
};
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
        
    };

    .first-column{
        width:40%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: .75rem;
        @media (max-width:48rem){
            width:100%;
             margin-top: -2.2rem;
             margin-left: 2.5rem;
        }
        p{
font-family: Gilroy;
font-size: 4rem;
font-style: normal;
font-weight: 600;
line-height: normal;
        color: var(--theme-hero-high-light_text);
        @media (max-width: 48rem){
font-family: var(--theme-font-inter);
font-size: 1.925rem;
font-style: normal;
font-weight: 600;
line-height: normal;
width:95%;
    }
    };
     
    }
    .second-column{
        width:60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:1rem;
        p{
font-family: Gilroy;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: normal;
color: var(--theme-hero-high-light_text);
    };
    @media (max-width:48rem){
        display:none;
    }
    }}
`
export {heroTypeOne as HeroOneCSS, heroTypeTwo as HeroTwoCSS};