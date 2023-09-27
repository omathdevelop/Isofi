type UseTextAnimate<S extends string, B extends boolean, N extends number, A extends []> = {
    selector: S
    text_animate_type: S
    start_delay: N
    delay: N
    duration: N
    repeat?: B,
    delay_repeat?: N
    overlayBackground?: S
    texts?: A
};

type UseViewAnimate<S> = {
    animateType: 'jump' | 'flash' | 'pulse' | 'rubberBand'
    delay?: S,
    repeat?: S,
    duration?: S
    prefixes?: 'slow' | 'fast' | 'slower' | 'faster' | 'infinite'
}


export type { UseTextAnimate, UseViewAnimate };

