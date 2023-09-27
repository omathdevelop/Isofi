enum VIEW_ANIMATION {
    JUMP = 'animate__animated animate__bounce',
    FLASHED = 'animate__animated animate__flash',
    PULSE = 'animate__animated animate__pulse',
    RUBBER_BAND = 'animate__animated animate__rubberBand'
}

enum VIEW_ANIMATION_SUPPORTER {
    DELAY = 'animate__delay-',
    REPEAT = 'animate__repeat-',
    PREFIX = 'animate__',
    // SLOWER = 'animate__slower',
    // FAST = 'animate__fast',
    // FASTER = 'animate__faster',
    DURATION = 'animate__duration-'
}
// const data = ['--animation-duration']

// const bunches = ['animate__pulse', 'animate__rubberBand']
export { VIEW_ANIMATION, VIEW_ANIMATION_SUPPORTER };