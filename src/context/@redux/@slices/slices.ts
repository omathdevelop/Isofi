/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';
import {
    INITIAL_STATE_MANAGEMENT, INITIAL_NAVIGATION_STATE, INITIAL_FIRST_HERO_STATE,
    INITIAL_SECOND_HERO_STATE, INITIAL_SINGLE_COLUMN_STATE, INITIAL_MULTIPLE_COLUMN_STATE,
    INITIAL_IMAGE_MODULE_STATE, INITIAL_TEAM_CARD_STATE, INITIAL_HUBSPOT_FORM_STATE, INITIAL_APP_URL_STATE,
    INITIAL_SOCIAL_ACCOUNT_STATE, INITIAL_FOOTER_STATE, INITIAL_TERMS_AND_SERVICE_STATE, INITIAL_PRIVACY_POLICY_STATE
} from '../@state/state';
const StateMangementSlice = createSlice({
    name: 'state_management',
    initialState: INITIAL_STATE_MANAGEMENT,
    reducers: {
        setUrl(state, action) {
            state.url = { ...action.payload } as object
        },
        setIsMenuOpen(state, action) {
            state.isMenuOpen = action.payload as boolean
        },
        setIsViewAnimate(state, action) {
            state.isViewAnimate = action.payload as boolean
        }
    }
});


const NaviGationSlice = createSlice(
    {
        name: 'navigation',
        initialState: INITIAL_NAVIGATION_STATE,
        reducers: {
            setNavigation(state, action) {
                state.navigation = action.payload
            },
            setIsMenuItem(state, action){
                state.isMenuItem = action.payload
            },
            setMenuItems(state, action){
                state.menuItem = action.payload
            },
            setButtonText(state, action){
                state.buttonText = action.payload
            },
            setLogo(state, action){
                state.logo = action.payload
            }
        }

    }
);

const FirstHeroSlice = createSlice(
    {
        name: 'first_hero',
        initialState: INITIAL_FIRST_HERO_STATE,
        reducers: {
            setFirstHero(state, action) {
                state.firstHero = action.payload
            }
        }

    }
);

const SecondHeroSlice = createSlice(
    {
        name: 'second_hero',
        initialState: INITIAL_SECOND_HERO_STATE,
        reducers: {
            setSecondHero(state, action) {
                state.secondHero = action.payload
            }
        }

    }
);

const SingleColumnSlice = createSlice(
    {
        name: 'single_column',
        initialState: INITIAL_SINGLE_COLUMN_STATE,
        reducers: {
            setSingleColumn(state, action) {
                state.singleColumn = action.payload
            }
        }

    }
);

const MultipleColumnSlice = createSlice(
    {
        name: 'multiple_column',
        initialState: INITIAL_MULTIPLE_COLUMN_STATE,
        reducers: {
            setMultipleColumn(state, action) {
                state.multipleColumn = action.payload
            }
        }

    }
);

const ImageModuleSlice = createSlice(
    {
        name: 'image_module',
        initialState: INITIAL_IMAGE_MODULE_STATE,
        reducers: {
            setImageModule(state, action) {
                state.imageModule = action.payload
            }
        }

    }
);

const TeamCardSlice = createSlice(
    {
        name: 'team_card',
        initialState: INITIAL_TEAM_CARD_STATE,
        reducers: {
            setTeamCard(state, action) {
                state.teamCard = action.payload
            },
            setSingleTeamCard(state, action){
                state.singleTeamCard = action.payload
            },
            setTeamCardBackGround(state, action){
                state.teamCardBackGround = action.payload
            }
        }

    }
);
const HubSpotFormSlice = createSlice(
    {
        name: 'hubspot_form',
        initialState: INITIAL_HUBSPOT_FORM_STATE,
        reducers: {
            setHubSpotForm(state, action) {
                state.hubSpotForm = action.payload
            }
        }

    }
);

const AppUrlSlice = createSlice(
    {
        name: 'app_url',
        initialState: INITIAL_APP_URL_STATE,
        reducers: {
            setAppUrl(state, action) {
                state.appUrl = action.payload
            }
        }

    }
);
const FooterSlice = createSlice(
    {
        name: 'footer',
        initialState: INITIAL_FOOTER_STATE,
        reducers: {
            setFooter(state, action) {
                state.footer = action.payload
            }
        }

    }
);
const SocialAccountSlice = createSlice(
    {
        name: 'social_account',
        initialState: INITIAL_SOCIAL_ACCOUNT_STATE,
        reducers: {
            setSocialAccount(state, action) {
                state.socialAccount = action.payload
            }
        }

    }
);

const TermsAndServiceSlice = createSlice(
    {
        name: 'terms_and_service',
        initialState: INITIAL_TERMS_AND_SERVICE_STATE,
        reducers: {
            setTermsAndService(state, action) {
                state.termsAndService = action.payload
            }
        }

    }
);

const PrivacyPolicySlice = createSlice(
    {
        name: 'privacy_policy',
        initialState: INITIAL_PRIVACY_POLICY_STATE,
        reducers: {
            setPrivacyPolicy(state, action) {
                state.privacyPolicy = action.payload
            }
        }

    }
);

// State Reducers  //
export const StateMangementReducer = StateMangementSlice.reducer;
export const NaviGationReducer = NaviGationSlice.reducer;
export const FirstHeroReducer = FirstHeroSlice.reducer;
export const SecondReducer = SecondHeroSlice.reducer;
export const SingleColumnReducer = SingleColumnSlice.reducer;
export const MultipleColumnReducer = MultipleColumnSlice.reducer;
export const ImageModuleRedcer = ImageModuleSlice.reducer;
export const TeamCardReducer = TeamCardSlice.reducer;
export const FooterReducer = FooterSlice.reducer;
export const TermsAndServiceReducer = TermsAndServiceSlice.reducer;
export const PrivacyPolicyReducer = PrivacyPolicySlice.reducer;
export const SocialAccountReducer = SocialAccountSlice.reducer;
export const AppUrlReducer = AppUrlSlice.reducer;
export const HubSpotFormReducer = HubSpotFormSlice.reducer;

// State Action  //
export const {
    setUrl, setIsMenuOpen,
    setIsViewAnimate
} = StateMangementSlice.actions;

export const { 
    setNavigation, setIsMenuItem,
     setMenuItems, setButtonText, setLogo
    } = NaviGationSlice.actions;
    
export const { setFirstHero } = FirstHeroSlice.actions;
export const { setSecondHero } = SecondHeroSlice.actions;
export const { setSingleColumn } = SingleColumnSlice.actions;
export const { setMultipleColumn } = MultipleColumnSlice.actions;
export const { setImageModule } = ImageModuleSlice.actions;

export const { 
    setTeamCard, 
    setSingleTeamCard,
    setTeamCardBackGround 
 } = TeamCardSlice.actions;

export const { setFooter } = FooterSlice.actions;
export const { setTermsAndService } = TermsAndServiceSlice.actions;
export const { setPrivacyPolicy } = PrivacyPolicySlice.actions;
export const { setHubSpotForm } = HubSpotFormSlice.actions;
export const { setSocialAccount } = SocialAccountSlice.actions;
export const { setAppUrl } = AppUrlSlice.actions;




