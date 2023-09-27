import {Routes, Route} from 'react-router-dom';
import RootRoute from './routes/@Root/route';
import PrivacyPolicyRoute from './routes/@PrivacyPolicy/component';
import TermsAndServiceRoute from './routes/@TermsAndService/component';
const App = () => 
<Routes>
    <Route>
        <Route path={'/'} element={<RootRoute />} />
        <Route path={'/privacypolicy'} element={<PrivacyPolicyRoute />} />
        <Route path={'/termsandservice'} element={<TermsAndServiceRoute />} />

    </Route>
</Routes>
  
export default App;
