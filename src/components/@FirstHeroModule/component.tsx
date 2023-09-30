import ImageOne from '../../assets/image_one.png';
import {  TextView, SpanView, AnyView } from '../../design/@AppView/component';
import { HeroImageView } from '../../design/@ImageView/component';
const FirstHeroModule  = () => {
    return( 
        
            <>
            <HeroImageView 
            setHeroImageUrl={ImageOne}
            setHeroType={'first'}
            setContentType={'hero_one'}
            >
                <AnyView className={'content'}>
                    <AnyView className={'title'}>
                    <TextView>{['Revolutionizing']}</TextView>
                    <TextView>mental health at</TextView>
            <TextView>work with <SpanView options={'content'}>music.</SpanView></TextView>
                    </AnyView>
                </AnyView>
            </HeroImageView>
            </>
 )
};

export default FirstHeroModule;