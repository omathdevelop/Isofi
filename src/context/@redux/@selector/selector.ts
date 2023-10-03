import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../@reducer/reducers";
const StateMangementReducer = (state: RootState) => state.stateManagement;
const NaviGationReducer  = (state:RootState) => state.navigation;
const FirstHeroReducer  = (state:RootState) => state.firstHero;
const SecondHeroReducer  = (state:RootState) => state.secondHero;
const SingleColumnReducer  = (state:RootState) => state.singleColumn;
const MultipleColumnReducer  = (state:RootState) => state.multipleColumn;
const ImageModuleReducer  = (state:RootState) => state.imageModule;
const TeamCardReducer  = (state:RootState) => state.teamCard;
const HubSpotFormReducer  = (state:RootState) => state.hubSpotForm;
const AppUrlReducer  = (state:RootState) => state.appUrl;
const FooterReducer  = (state:RootState) => state.footer;
const SocialAccountReducer  = (state:RootState) => state.socialAccount;
const TermsAndServiceReducer  = (state:RootState) => state.termsAndService;
const PrivacyPolicyReducer  = (state:RootState) => state.privacyPolicy;

const onUrlSelector = createSelector(
    [StateMangementReducer],
    (UrlSlice) => UrlSlice.url
);

const onIsMenuOpenSelector = createSelector(
    [StateMangementReducer],
    (isMenuOpenSlice) => isMenuOpenSlice.isMenuOpen
);

const onIsViewAnimateSelector = createSelector(
    [StateMangementReducer],
    (isViewAnimateSlice) => isViewAnimateSlice.isViewAnimate
);
const onNaviGationSelector = createSelector(
    [NaviGationReducer],
    (navigationSlice) => navigationSlice.navigation
);
const onIsMenuItemSelector = createSelector(
    [NaviGationReducer],
    (navigationSlice) => navigationSlice.isMenuItem
);
const onMenuItemSelector = createSelector(
    [NaviGationReducer],
    (navigationSlice) => navigationSlice.menuItem
);
const onButtonTextSelector = createSelector(
    [NaviGationReducer],
    (navigationSlice) => navigationSlice.buttonText
);
const onLogoSelector = createSelector(
    [NaviGationReducer],
    (navigationSlice) => navigationSlice.logo
);
const onFirstHeroSelector = createSelector(
    [FirstHeroReducer],
    (firstHeroSlice) => firstHeroSlice.firstHero
);
const onSecondHeroSelector = createSelector(
    [SecondHeroReducer],
    (secondHeroSlice) => secondHeroSlice.secondHero
);
const onMultipleColumnSelector = createSelector(
    [MultipleColumnReducer],
    (multipleColumnSlice) => multipleColumnSlice.multipleColumn
);
const onSingleColumnSelector = createSelector(
    [SingleColumnReducer],
    (singleColumnSlice) => singleColumnSlice.singleColumn
);
const onImageModuleSelector = createSelector(
    [ImageModuleReducer],
    (imageModuleSlice) => imageModuleSlice.imageModule
);
const onTeamCardSelector = createSelector(
    [TeamCardReducer],
    (teamCardSlice) => teamCardSlice.teamCard
);
const onSingleTeamCardSelector = createSelector(
    [TeamCardReducer],
    (teamCardSlice) => teamCardSlice.singleTeamCard
);
const onTeamCardBackGroundSelector = createSelector(
    [TeamCardReducer],
    (teamCardSlice) => teamCardSlice.teamCardBackGround
);
const onAppUrlSelector = createSelector(
    [AppUrlReducer],
    (appUrlSlice) => appUrlSlice.appUrl
);
const onHubSpotFormSelector = createSelector(
    [HubSpotFormReducer],
    (hubSpotFormSlice) => hubSpotFormSlice.hubSpotForm
);
const onFooterSelector = createSelector(
    [FooterReducer],
    (footerSlice) => footerSlice.footer
);
const onTermsAndServiceSelector = createSelector(
    [TermsAndServiceReducer],
    (termsAndServiceSlice) => termsAndServiceSlice.termsAndService
);
const onPrivacyPolicySelector = createSelector(
    [PrivacyPolicyReducer],
    (privacyPolicySlice) => privacyPolicySlice.privacyPolicy
);
const onSocialAccountSelector = createSelector(
    [SocialAccountReducer],
    (socialAccountSlice) => socialAccountSlice.socialAccount
);
export { 
    onUrlSelector, onIsMenuOpenSelector,
     onIsViewAnimateSelector, onNaviGationSelector, onIsMenuItemSelector,
     onMenuItemSelector, onButtonTextSelector,onLogoSelector,
     onFirstHeroSelector, onSecondHeroSelector,
     onSingleColumnSelector, onMultipleColumnSelector,
     onImageModuleSelector, onHubSpotFormSelector,
     onAppUrlSelector, onTeamCardSelector, onSingleTeamCardSelector,
     onTeamCardBackGroundSelector,
     onFooterSelector, onSocialAccountSelector, 
    onTermsAndServiceSelector, onPrivacyPolicySelector

     };