import ImageTwo from '../../assets/fingerCross.png.png';
import { TextView,  AnyView, BreakView, SpanView } from "../../design/@AppView/component";
import { HeroImageView } from "../../design/@ImageView/component";
import type { IsResPonsive } from '../../types/responsive';
const SecondHero = ({isSmall}:IsResPonsive<boolean>) => {

    return (
        <>
        {isSmall? (
            <>
          <HeroImageView  
          setHeroImageUrl={ImageTwo}
          setHeroType={'second'}
          setContentType={'hero_two'}
          setDevice={'mobile'}
          >
          <AnyView className={'content'}>
             <AnyView className={'first-column'}>
              <TextView>The workplace is changing</TextView>
              <TextView> A new type of business is emerging.</TextView>
             </AnyView>
             <AnyView className={'second-column'}>
             <TextView>Businesses and employees, with new <BreakView/> ways of working and different values,<BreakView/> are putting mental health at the centre of their ethos.
            <BreakView/> New ways of working need a new approach to mental health treatment and wellbeing <BreakView/> <SpanView options={'content'}>Isofi puts music at the centre of everything we do</SpanView>.</TextView>
             </AnyView>
          </AnyView>
          </HeroImageView>
          {/* <Card /> */}
          </>
        ):(

         <HeroImageView  
         setHeroImageUrl={ImageTwo}
         setHeroType={'second'}
         setContentType={'hero_two'}
         >
         <AnyView className={'content'}>
            <AnyView className={'first-column'}>
             <TextView>The workplace is changing</TextView>
             <TextView> A new type of business is emerging.</TextView>
            </AnyView>
            <AnyView className={'second-column'}>
            <TextView>Businesses and employees, with new <BreakView/> ways of working and different values,<BreakView/> 
            are putting mental health at the centre of their ethos.
           <BreakView/> 
           New ways of working need a new approach to mental health treatment and wellbeing <BreakView/>Isofi puts music at the centre of everything we do.</TextView>
            </AnyView>
         </AnyView>
         </HeroImageView>
        )}
        </>
    )
};

export default SecondHero;