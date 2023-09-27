import styled from 'styled-components';
import { View } from '../@AppView/component';
const RouteViews = styled(View)`
 .content{
    width:80%;
    padding: 2rem;
    margin: 5rem auto 0 auto;
    color: #fff;
    font-family: var(--theme-font-sri);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    /* box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
    .text{
        text-align: center;
        color: var(--theme-hero-high-light_text);
    }
 }
`;


export { RouteViews };