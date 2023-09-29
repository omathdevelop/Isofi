import { useEvent } from 'react-use';
import ImageOne from '../../assets/image_one.png';
import useTextAnimate from '../../hooks/useTextAnimate';
import {  TextView, SpanView, AnyView } from '../../design/@AppView/component';
import { HeroImageView } from '../../design/@ImageView/component';
const FirstHeroModule  = () => {
    // {isRevo}:{isRevo:boolean}
    const [onTextAnimate] = useTextAnimate({selector: '.revo', text_animate_type: '1', delay:0.5, start_delay:0.2, repeat:true, duration: 2, delay_repeat:0.90})
   useEvent('load', (() => {
    onTextAnimate();
   }))
    return( 
        
            <>
            <HeroImageView 
            setHeroImageUrl={ImageOne}
            setHeroType={'first'}
            setContentType={'hero_one'}
            >
                <AnyView className={'content'}>
                    <AnyView className={'title'}>
                    <TextView className={'revo'}>Revolutionizing</TextView>
                    <TextView>mental health at</TextView>
            <TextView>work with <SpanView options={'content'}>music.</SpanView></TextView>
                    </AnyView>
                </AnyView>
            </HeroImageView>
            </>
 )
};

export default FirstHeroModule;