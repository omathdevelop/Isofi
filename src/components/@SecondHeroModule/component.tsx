import { useSelector } from 'react-redux';
import { onSecondHeroSelector } from '../../context/@redux/@selector/selector';
import { TextView,  AnyView, SpanView } from "../../design/@AppView/component";
import {  SecondHeroImageView } from "../../design/@ImageView/component";
import type { SecondHeroDataState } from '../../data/Types';
const SecondHero = () => {
 const secondHeroData = useSelector(onSecondHeroSelector);
    return (
        <>
         {secondHeroData.map((state:SecondHeroDataState<string>) => {
           const {
            _id, HeroImage, firstColumnTextOne,
             firstText, secondColumnTextTwo,
              secondText, thirdText
            } = state;
          return <SecondHeroImageView 
          initial={{opacity: 0, x: 200}}
          whileInView={{opacity:1, x:[0, 40, 0, 40, 0]}}
          transition={{duration:0.80, delay:0.40}}
        key={_id}
          setSecondHeroImageUrl={HeroImage}
          >
          <AnyView className={'content'}>
             <AnyView className={'first-column'}>
              <TextView>{firstColumnTextOne}</TextView>
              <TextView>{secondColumnTextTwo}</TextView>
             </AnyView>
             <AnyView className={'second-column'}>
             <TextView>{firstText}</TextView>
             <TextView>{secondText}</TextView>
             <TextView> <SpanView options={'content'}>{thirdText}</SpanView></TextView>
             </AnyView>
          </AnyView>
          </SecondHeroImageView>
         })}
        </>
    )
};

export default SecondHero;