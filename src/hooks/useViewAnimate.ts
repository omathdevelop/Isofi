import useUrl from '@ahooksjs/use-url-state'
import { VIEW_ANIMATION, VIEW_ANIMATION_SUPPORTER } from "../constants/animation";
import type { UseViewAnimate } from "../types/hooks";
const useViewAnimate = ({ animateType, delay, repeat, prefixes }: UseViewAnimate<string>) => {
    const [isViewAnimate, setIsViewAnimate] = useUrl({viewAnimate: false})
    const onViewAnimateEnd = () => setIsViewAnimate({viewAnimate: true})
    const onHelper = (data: string) => `${data} ${VIEW_ANIMATION_SUPPORTER.DELAY}${delay}
    ${VIEW_ANIMATION_SUPPORTER.REPEAT}${repeat}
      ${VIEW_ANIMATION_SUPPORTER.PREFIX}${prefixes}`
     
    const jumpAnimate = onHelper(VIEW_ANIMATION.JUMP);
    const flashAnimate = onHelper(VIEW_ANIMATION.FLASHED);
    const pulseAnimate = onHelper(VIEW_ANIMATION.PULSE);
    const rubberBandAnimate = onHelper(VIEW_ANIMATION.RUBBER_BAND);

    switch (animateType) {
        case "jump":
            return {jumpAnimate, isViewAnimate, onViewAnimateEnd}
        case "flash":
            return {flashAnimate, isViewAnimate, onViewAnimateEnd}
        case "pulse":
            return {pulseAnimate, isViewAnimate, onViewAnimateEnd}
        case "rubberBand":
            return {rubberBandAnimate, isViewAnimate, onViewAnimateEnd}
    }
};

export default useViewAnimate;