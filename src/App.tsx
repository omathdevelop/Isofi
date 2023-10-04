import { Routes, Route } from 'react-router-dom';
import RootRoute from './routes/@Root/route';
import PrivacyPolicyRoute from './routes/@PrivacyPolicy/component';
import TermsAndServiceRoute from './routes/@TermsAndService/component';
import useInspect from './hooks/useInspect';
import useCache from './hooks/useCache';
import {
    useNaviGation, useMultipleColumn, useSingleColumn,
    useHubSpotForm, useAppUrl, useTeamCard, useTermsAndService,
    useImageModule, useFooter, useFirstHero, useSecondHero,
    usePrivacyPolicy, useSocialAccount, useSingleTeamCard, useTeamCardBackGroundImage
} from './data/Hooks';
const App = () => {
    useNaviGation();
    useHubSpotForm();
    useAppUrl();
    useFirstHero();
    useSecondHero();
    useSingleColumn();
    useMultipleColumn();
    useImageModule();
    useTeamCard();
    useSingleTeamCard();
    useTeamCardBackGroundImage();
    useFooter();
    useSocialAccount();
    useTermsAndService();
    usePrivacyPolicy();
    useInspect();
    useCache();
    return (
        <Routes>
            <Route>
                <Route path={'/'} element={<RootRoute />} />
                <Route path={'/privacypolicy'} element={<PrivacyPolicyRoute />} />
                <Route path={'/termsandservice'} element={<TermsAndServiceRoute />} />

            </Route>
        </Routes>
    )
}

export default App;
