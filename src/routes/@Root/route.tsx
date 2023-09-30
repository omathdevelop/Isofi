import { Outlet } from 'react-router-dom';
import { useResponsive, configResponsive} from 'ahooks';
import { useSelector } from 'react-redux';
import { onIsMenuOpenSelector } from '../../context/@redux/@selector/selector';
import useLoading from '../../hooks/useLoading';
import NaviGationModule from '../../components/@Navigation/component';
import { MobileMenu } from '../../components/@Navigation/@Shared/component';
import { View } from '../../design/@AppView/component';
import FirstHeroModule from '../../components/@FirstHeroModule/component';
import SecondHeroModule from '../../components/@SecondHeroModule/component';
import SingleColumnModule from '../../components/@SingleColumn/component';
import CardModule from '../../components/@Card/component';
import MultipleColumnModule from '../../components/@MultipleColumn/component';
import { ImageModule } from '../../components/@Background/component';
import TeamCardModule from '../../components/@TeamCard/component';
import TeamModule from '../../components/@Team/component';
import FooterModule from '../../components/@Footer/component';
import Loadable from '../../components/@Loadable/component';
const Root = () => {
  const { isLoaded } = useLoading();
  const isMenuOpen = useSelector(onIsMenuOpenSelector);
  configResponsive({ isXtraSmall: 0, isSmall: 380, isMedium: 768, isLarge: 820, isXtraLarge: 1200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {   isMedium  } = useResponsive();
  const isNotMobile = !isMedium;
  return (
    <View>
      <NaviGationModule message={'Assuming, we have the "app link" already! 🤩 going to "Isofi-CMS in ....."'}/>
      <Outlet />
      {isLoaded ? (
        <>
          <FirstHeroModule />
          <SecondHeroModule />
          <CardModule />
          <SingleColumnModule />
          <MultipleColumnModule  />
          <ImageModule />
          <TeamCardModule isMobile={isNotMobile}/>
          <TeamModule isMobile={isNotMobile}/>
          {isMenuOpen  && <MobileMenu message={'Assuming, we have the "app link" already! 🤩 going to "Isofi-CMS in ....."'}/>}
           {/* <BlankFillModule/> */}
          {/* {isSmall  && !isMedium && <BlankFillModule/>} */}
          <Outlet/>
          <FooterModule isMobile={isNotMobile} />
          {/* {isSmall && <p>I AM Mobile</p>} */}

        </>
      ) : (

        <>
          <Loadable isLoaded={true} />
        </>
      )}

    </View>
  )
};

export default Root;