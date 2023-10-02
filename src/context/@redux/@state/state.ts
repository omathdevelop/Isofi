
type StateMangement = {
    url: object
    isMenuOpen: boolean
    isViewAnimate: boolean,
};
type NaviGationState = {
    naviagtion: []
}
const INITIAL_STATE_MANAGEMENT: StateMangement = {
    url: {},
    isMenuOpen: false,
    isViewAnimate: false,
};
const INITIAL_NAVIGATION_STATE:NaviGationState = {
    naviagtion:[]
}

export { INITIAL_STATE_MANAGEMENT, INITIAL_NAVIGATION_STATE };
