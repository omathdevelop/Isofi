type StateMangement = {
    url: object
    isMenuOpen:boolean
    isViewAnimate:boolean
};

const INITIAL_STATE_MANAGEMENT: StateMangement = {
    url: {},
    isMenuOpen:false,
    isViewAnimate:false
};

export { INITIAL_STATE_MANAGEMENT };
export type { StateMangement };
