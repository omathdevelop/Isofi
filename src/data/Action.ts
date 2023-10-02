import { SanityConfig } from "../configs/SanityConfig";
import Query from "./Queries";
import type { FirstHeroDataState, ImageModuleDataState, NaviGationDataState, SecondHeroDataState, SingleColumnDataState } from "./Types";
const onNaviGationData = async () => {
    const data = await SanityConfig.fetch(Query.naviagtion).then((data: NaviGationDataState[]) => {
        return data;
    }).catch(() => new Error(`******ERROR****** @onNaviGationData`));

    return data;
};
const onFirstHeroData = async () => {
    const data = await SanityConfig.fetch(Query.firstHero).then((data:FirstHeroDataState<string>[]) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onFirstHeroData`));
    return data;
};
const onSecondHeroData = async () => {
    const data = await SanityConfig.fetch(Query.secondHero).then((data:SecondHeroDataState<string>[]) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onSecondHeroData`));
    return data;
};
const onSingleColumnData = async () => {
    const data = await SanityConfig.fetch(Query.singleColumn).then((data:SingleColumnDataState<string, Array<string>>[]) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onSingleColumnData`));
    return data;
};
const onMultipleColumnData = async () => {
    const data = await SanityConfig.fetch(Query.multipleColumn).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onMultipleColumnData`));
    return data;
};
const onImageModuleData = async () => {
    const data = await SanityConfig.fetch(Query.imageModule).then((data:ImageModuleDataState[]) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onImageModuleData`));
    return data;
};
const onTeamCardData = async () => {
    const data = await SanityConfig.fetch(Query.teamCard).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onTeamCardData`));
    return data;
};
const onHubSpotFormData = async () => {
    const data = await SanityConfig.fetch(Query.hubSpotForm).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onMultipleColumnData`));
    return data;
};
const onAppUrlData = async () => {
    const data = await SanityConfig.fetch(Query.appLink).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onMultipleColumnData`));
    return data;
};
const onFooterData = async () => {
    const data = await SanityConfig.fetch(Query.footer).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onMultipleColumnData`));
    return data;
};
const onSocialAccountData = async () => {
    const data = await SanityConfig.fetch(Query.socialAccount).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onSocialAccountData`));
    return data;
};
const onTermsAndServiceData = async () => {
    const data = await SanityConfig.fetch(Query.termsOfService).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onMultipleColumnData`));
    return data;
};
const onPrivacyPolicyData = async () => {
    const data = await SanityConfig.fetch(Query.privacyPolicy).then((data:Array<string>) => {
        if(!data) return;
        return data
    }).catch(() => new Error(`******ERROR****** @onMultipleColumnData`));
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

