import { useSelector } from 'react-redux';
import { onFirstHeroSelector } from '../../context/@redux/@selector/selector';
import {  TextView, SpanView, AnyView } from '../../design/@AppView/component';
import { HeroImageView } from '../../design/@ImageView/component';
import type { FirstHeroDataState } from '../../data/Types';
const FirstHeroModule  = () => {
    const firstHeroData = useSelector(onFirstHeroSelector);
    return( 
        
            <>
            {firstHeroData.map((state:FirstHeroDataState<string>) => {
                const {
                    _id, HeroImage,  first,
                     second, ordinaryColorText, whiteColorText} = state;

                return (
            <HeroImageView
            initial={{opacity: 0, x: 200}}
            whileInView={{opacity:1, x:[0, 40, 0, 40, 0]}}
            transition={{duration:0.80, delay:0.40}}
            key={_id} 
            setHeroImageUrl={HeroImage}
            setHeroType={'first'}
            setContentType={'hero_one'}
            >
                <AnyView className={'content'}>
                    <AnyView className={'title animate__animated animate__flipInX '}>
                    <TextView >{first}</TextView>
                    <TextView>{second}</TextView>
            <TextView>{ordinaryColorText} <SpanView options={'content'}>{whiteColorText}</SpanView></TextView>
                    </AnyView>
                </AnyView>
            </HeroImageView>
                    
                )
            })}
            </>
 )
};

export default FirstHeroModule;