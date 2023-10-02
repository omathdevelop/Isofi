import { SanityConfig } from "../configs/SanityConfig";
import Query from "./Queries";
import type { AppUrlDataState, FirstHeroDataState, FooterDataState, HubSpotFormDataState, ImageModuleDataState, NaviGationDataState, PrivacyPolicyDataState, SecondHeroDataState, SingleColumnDataState, SocialAccountDataState, TermsAndServiceDataState } from "./Types";
const onNaviGationData = async () => {
    const data = await SanityConfig.fetch(Query.naviagtion).then((data: NaviGationDataState) => {
        return data;
    }).catch(() => {
        console.log('*******Error******')
    });

    return data;
};
const onFirstHeroData = async () => {
    const data = await SanityConfig.fetch(Query.firstHero).then((data:FirstHeroDataState<string>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onSecondHeroData = async () => {
    const data = await SanityConfig.fetch(Query.secondHero).then((data:SecondHeroDataState<string>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onSingleColumnData = async () => {
    const data = await SanityConfig.fetch(Query.singleColumn).then((data:SingleColumnDataState<string, Array<string>>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onMultipleColumnData = async () => {
    const data = await SanityConfig.fetch(Query.multipleColumn).then((data:object) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onImageModuleData = async () => {
    const data = await SanityConfig.fetch(Query.imageModule).then((data:ImageModuleDataState) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onTeamCardData = async () => {
    const data = await SanityConfig.fetch(Query.teamCard).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onHubSpotFormData = async () => {
    const data = await SanityConfig.fetch(Query.hubSpotForm).then((data:HubSpotFormDataState<string>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onAppUrlData = async () => {
    const data = await SanityConfig.fetch(Query.appLink).then((data:AppUrlDataState<string>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onFooterData = async () => {
    const data = await SanityConfig.fetch(Query.footer).then((data:FooterDataState<string, Array<string>>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onSocialAccountData = async () => {
    const data = await SanityConfig.fetch(Query.socialAccount).then((data:SocialAccountDataState<string>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onTermsAndServiceData = async () => {
    const data = await SanityConfig.fetch(Query.termsOfService).then((data:TermsAndServiceDataState<string, Array<string>>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};
const onPrivacyPolicyData = async () => {
    const data = await SanityConfig.fetch(Query.privacyPolicy).then((data:PrivacyPolicyDataState<string, Array<string>>) => {
        if(!data) return;
        return data
    }).catch(() => {
        console.log('*******Error******')
    });
    return data;
};


export { 
    onNaviGationData, onFirstHeroData,
    onSecondHeroData, onSingleColumnData,
    onMultipleColumnData, onImageModuleData,
    onTeamCardData, onHubSpotFormData,
    onAppUrlData, onFooterData,
    onSocialAccountData, onTermsAndServiceData,
    onPrivacyPolicyData 
    };

