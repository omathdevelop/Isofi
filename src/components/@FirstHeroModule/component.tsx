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
            key={_id} 
            setHeroImageUrl={HeroImage}
            setHeroType={'first'}
            setContentType={'hero_one'}
            >
                <AnyView className={'content'}>
                    <AnyView className={'title'}>
                    <TextView>{first}</TextView>
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