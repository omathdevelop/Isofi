import ImageTwo from '../../assets/fingerCross.png.png';
import { TextView,  AnyView, SpanView } from "../../design/@AppView/component";
import {  SecondHeroImageView } from "../../design/@ImageView/component";
const SecondHero = () => {

    return (
        <>
        <SecondHeroImageView  
          setSecondHeroImageUrl={ImageTwo}
          >
          <AnyView className={'content'}>
             <AnyView className={'first-column'}>
              <TextView>The workplace is changing</TextView>
              <TextView> A new type of business is emerging.</TextView>
             </AnyView>
             <AnyView className={'second-column'}>
             <TextView>Businesses and employees, with new  ways of working and different values, are putting mental health at the centre of their ethos.</TextView>
             <TextView>New ways of working need a new approach to mental health treatment and wellbeing</TextView>
             <TextView> <SpanView options={'content'}>Isofi puts music at the centre of everything we do</SpanView></TextView>
             </AnyView>
          </AnyView>
          </SecondHeroImageView>
        </>
    )
};

export default SecondHero;