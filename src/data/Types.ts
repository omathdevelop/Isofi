type MenuItemTyping<T> = {
    _key:T
    menuOne:T
    menuTwo:T
    menuThree:T
    menuFour:T
}
type NaviGationDataState = {
    _id: string
    logo: string
    isMenu: boolean
    signup: string
    playlist:string
    menuItem:MenuItemTyping<string>[]
};
type FirstHeroDataState<T> = {
    _id:T
    HeroImage: T
    alt:T
    first:T
    second:T
    ordinaryColorText:T
    whiteColorText:T
}
type SecondHeroDataState<T> ={
    _id:T
    HeroImage:T
    alt:T
    firstColumnTextOne:T
    firstText:T
    secondColumnTextTwo:T
    secondText:T
    thirdText:T
}
type SingleColumnDataState<T, A> = {
  _id:T
  singleColumnImage:T
  alt:T
  content:A[]
}
type ImageModuleDataState = {
    _id:string
    image:string
    alt:string
}
type SocialAccountDataState<T> = {
        _id:T
        facebook:T
        facebookUrl:T
        instagram:T
        instagramUrl:T
        twitter:T
        twitterUrl:T
        tiktok:T
        tiktokUrl:T
        youtube:T
        youtubeUrl:T
}
type FooterDataState<T, A> = {
    _id:T
    content:A[]
    copyRightInfo:T
    isofiLogo:T
    policy:T
    serviceTerm:T
}
type AppUrlDataState<T> = {
    _id:T
    applink:T
}
type HubSpotFormDataState<T> = {
    _id:T
    hubSpotForm:T
}
type TermsAndServiceDataState<T, A> = {
    _id:T
    content:A[]
}
type PrivacyPolicyDataState<T, A> = {
    _id:T
    content:A[]
}
type TeamCardDataState<T, B> = {
    _id:T
    name:T
    tagline:T
    photo:T
    teamPhotoAlt:T
    teamCardBackGround:T
    teamCardBackGroundAlt:T
    isSingleTeam:B
    description:[]
}
type MultipleColumnDataState<T> = {
    _id:T
    firstColumnOneText:T
    firstColumnTwoText:T
    firstColumnImageOne:T
    firstColumnImageTwo:T
    secondColumnOneText:T
    secondColumnTwoText:T
    secondColumnImageOne:T
    secondColumnImageTwo:T
}
type TeamCardBackGroundImageDataState<T> = {
    _id:T
    teamCardBackGround:T
}



export type { 
    NaviGationDataState, FirstHeroDataState,
     SecondHeroDataState, SingleColumnDataState, 
     ImageModuleDataState,SocialAccountDataState,
     FooterDataState, HubSpotFormDataState, 
     AppUrlDataState, TermsAndServiceDataState,
     PrivacyPolicyDataState, TeamCardDataState, MultipleColumnDataState,
     TeamCardBackGroundImageDataState,
     MenuItemTyping
     };