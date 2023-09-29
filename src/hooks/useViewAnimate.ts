import { useSelector, useDispatch } from 'react-redux';
import { setIsViewAnimate } from '../context/@redux/@slices/slice';
import { onIsViewAnimateSelector } from '../context/@redux/@selector/selector';
import { VIEW_ANIMATION, VIEW_ANIMATION_SUPPORTER } from "../constants/animation";
import type { UseViewAnimate } from "../types/hooks";
const useViewAnimate = ({ animateType, delay, repeat, prefixes }: UseViewAnimate<string>) => {
    const dispatch = useDispatch();
    const isViewAnimate = useSelector(onIsViewAnimateSelector);
    const onViewAnimateEnd = () => dispatch(setIsViewAnimate(true));
    const onHelper = (data: string) => `${data} ${VIEW_ANIMATION_SUPPORTER.DELAY}${delay}
    ${VIEW_ANIMATION_SUPPORTER.REPEAT}${repeat}
      ${VIEW_ANIMATION_SUPPORTER.PREFIX}${prefixes}`
     
     
    const jumpAnimate = onHelper(VIEW_ANIMATION.JUMP);
    const flashAnimate = onHelper(VIEW_ANIMATION.FLASHED);
    const pulseAnimate = onHelper(VIEW_ANIMATION.PULSE);
    const rubberBandAnimate = onHelper(VIEW_ANIMATION.RUBBER_BAND);
    const fadeInsideAnimate = onHelper(VIEW_ANIMATION.FADE_INSIDE);
    const fadeOutsideAnimate = onHelper(VIEW_ANIMATION.FADE_OUTSIDE);


    switch (animateType) {
        case "jump":
            return {jumpAnimate, isViewAnimate, onViewAnimateEnd}
        case "flash":
            return {flashAnimate, isViewAnimate, onViewAnimateEnd}
        case "pulse":
            return {pulseAnimate, isViewAnimate, onViewAnimateEnd}
        case "rubberBand":
            return {rubberBandAnimate, isViewAnimate, onViewAnimateEnd}
        case "fadeInside":
            return {fadeInsideAnimate, isViewAnimate, onViewAnimateEnd}
        case "fadeOutside":
            return {fadeOutsideAnimate, isViewAnimate, onViewAnimateEnd}


    }
};

export default useViewAnimate;