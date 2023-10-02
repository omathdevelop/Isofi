import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


import { 
    StateMangementReducer, NaviGationReducer, FirstHeroReducer, SecondReducer,
    SingleColumnReducer, MultipleColumnReducer, ImageModuleRedcer, TeamCardReducer,
    AppUrlReducer, HubSpotFormReducer, SocialAccountReducer, FooterReducer, PrivacyPolicyReducer, TermsAndServiceReducer
 } from "../@slices/slices";

const NaviGationPersistConfig = {
    key: 'navigation',
    storage:storage
};
const FirstHeroPersistConfig = {
    key: 'firstHero',
    storage:storage
};
const SecondHeroPersistConfig = {
    key: 'secondHero',
    storage:storage
};
const SingleColumnPersistConfig = {
    key: 'singleColumn',
    storage:storage
};
const MultipleColumnPersistConfig = {
    key: 'multipleColumn',
    storage:storage
};
const ImageModulePersistConfig = {
    key: 'imageModule',
    storage:storage
};
const TeamCardPersistConfig = {
    key: 'teamCard',
    storage:storage
};
const FooterPersistConfig = {
    key: 'footer',
    storage:storage
};
const TermsAndServicePersistConfig = {
    key: 'termAndService',
    storage:storage
};
const PrivacyPolicyPersistConfig = {
    key: 'privacyPolicy',
    storage:storage
};
const SocialAccountPersistConfig = {
    key: 'socialAccount',
    storage:storage
};
const AppUrlPersistConfig = {
    key: 'appUrl',
    storage:storage
};
const HubSpotFormPersistConfig = {
    key: 'hubSpotForm',
    storage:storage
};

const RootReducer = combineReducers({
    stateManagement: StateMangementReducer,
    navigation: persistReducer(NaviGationPersistConfig, NaviGationReducer),
    firstHero: persistReducer(FirstHeroPersistConfig, FirstHeroReducer),
    secondHero: persistReducer(SecondHeroPersistConfig, SecondReducer),
    singleColumn: persistReducer(SingleColumnPersistConfig, SingleColumnReducer),
    multipleColumn: persistReducer(MultipleColumnPersistConfig, MultipleColumnReducer),
    imageModule: persistReducer(ImageModulePersistConfig, ImageModuleRedcer),
    teamCard: persistReducer(TeamCardPersistConfig, TeamCardReducer),
    appUrl: persistReducer(AppUrlPersistConfig, AppUrlReducer),
    hubSpotForm: persistReducer(HubSpotFormPersistConfig, HubSpotFormReducer),
    footer: persistReducer(FooterPersistConfig, FooterReducer),
    socialAccount: persistReducer(SocialAccountPersistConfig, SocialAccountReducer),
    privacyPolicy: persistReducer(PrivacyPolicyPersistConfig, PrivacyPolicyReducer),
    termsAndService: persistReducer(TermsAndServicePersistConfig, TermsAndServiceReducer)



});
type RootState = ReturnType<typeof RootReducer>
export { RootReducer };
export type { RootState };