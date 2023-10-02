type MenuItemTyping<T> = {
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


// type TeamCardDataState<T> = {
//    image:T
//    alt:T

// }
// type MultipleColumnDataState<T> = {
//     _id:T
//     firstColumnImageOne:T
//     alt: T
//     firstColumnImageTwo:{
//         alt:T
//     }
    
// }




export type { 
    NaviGationDataState, FirstHeroDataState,
     SecondHeroDataState, SingleColumnDataState, 
     ImageModuleDataState
     };