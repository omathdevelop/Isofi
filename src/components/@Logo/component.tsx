import { useNavigate } from "react-router-dom";
import { LogoView } from "../../design/@NavigationView/component";
import { TextView } from "../../design/@AppView/component";

const Logo = () =>  {
   const navigate = useNavigate();
   const onHome = ()  => navigate('/');
    return (<LogoView onClick={onHome}>
<TextView className={'logo'} as={'h4'}>Isofi</TextView>
</LogoView>)
}

export default Logo; 