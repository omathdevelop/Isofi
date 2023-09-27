/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { UseTextAnimate } from "../types/hooks";

const useTextAnimate = ({selector, text_animate_type, delay, start_delay, duration, repeat, delay_repeat, overlayBackground, ...texts}:UseTextAnimate<string,boolean, number, []>) => { 
         const effectPrefix = 'txt-an-'  
        const onTextAnimate = () => {
            // eslint-disable-next-line no-undef
            new TxtAnime(selector, {
                effect: `${effectPrefix}${text_animate_type}`,
                delayStart: start_delay,
                delay: delay,
                duration: duration,
                repeat: repeat,
                repeatDelay: delay_repeat,
                text: texts,
                overlayBackground: overlayBackground
            }) 
            console.log('SELECTOR:', selector, 'TEXT_ANIMATE_TYPE:', text_animate_type)
        }
        // eslint-disable-next-line no-undef
        
        return [onTextAnimate];
    };

    export default useTextAnimate;