
type StateMangement = {
    url: object
    isMenuOpen: boolean
    isViewAnimate: boolean,
};
type NaviGationState = {
    navigation: []
}
type FirstHeroState = {
    firstHero: []
}
type SecondHeroState = {
    secondHero: []
}
type SingleColumnState = {
    singleColumn: []
}
type MultipleColumnState = {
    multipleColumn: []
}
type ImageModuleState = {
    imageModule: []
}
type TeamCardState = {
    teamCard: []
}
type HubSpotFormState = {
    hubSpotForm: []
}
type AppUrlState = {
    appUrl: []
}
type SocialAccountState = {
    socialAccount: []
}
type FooterState = {
    footer: []
}
type TermsAndServiceState = {
    termsAndService: []
}
type PrivacyPolicyState = {
    privacyPolicy: []
}

const INITIAL_STATE_MANAGEMENT: StateMangement = {
    url: {},
    isMenuOpen: false,
    isViewAnimate: false,
};
const INITIAL_NAVIGATION_STATE:NaviGationState = {
    navigation:[]
};
const INITIAL_FIRST_HERO_STATE:FirstHeroState = {
    firstHero:[]
};
const INITIAL_SECOND_HERO_STATE:SecondHeroState = {
    secondHero:[]
};
const INITIAL_SINGLE_COLUMN_STATE:SingleColumnState = {
    singleColumn:[]
};
const INITIAL_MULTIPLE_COLUMN_STATE:MultipleColumnState = {
    multipleColumn:[]
};
const INITIAL_IMAGE_MODULE_STATE:ImageModuleState = {
    imageModule:[]
};
const INITIAL_TEAM_CARD_STATE:TeamCardState = {
    teamCard:[]
};
const INITIAL_HUBSPOT_FORM_STATE:HubSpotFormState = {
    hubSpotForm:[]
};
const INITIAL_APP_URL_STATE:AppUrlState = {
    appUrl:[]
};
const INITIAL_SOCIAL_ACCOUNT_STATE:SocialAccountState = {
    socialAccount:[]
};
const INITIAL_FOOTER_STATE:FooterState = {
    footer:[]
};
const INITIAL_TERMS_AND_SERVICE_STATE:TermsAndServiceState = {
    termsAndService:[]
};
const INITIAL_PRIVACY_POLICY_STATE:PrivacyPolicyState = {
    privacyPolicy:[]
};


export { 
    INITIAL_STATE_MANAGEMENT, INITIAL_NAVIGATION_STATE, INITIAL_FIRST_HERO_STATE,
    INITIAL_SECOND_HERO_STATE, INITIAL_SINGLE_COLUMN_STATE, INITIAL_MULTIPLE_COLUMN_STATE, 
    INITIAL_IMAGE_MODULE_STATE, INITIAL_TEAM_CARD_STATE, INITIAL_HUBSPOT_FORM_STATE, INITIAL_APP_URL_STATE,
    INITIAL_SOCIAL_ACCOUNT_STATE, INITIAL_FOOTER_STATE, INITIAL_TERMS_AND_SERVICE_STATE, INITIAL_PRIVACY_POLICY_STATE
 };
