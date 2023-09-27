import { Outlet } from 'react-router-dom';
import { useResponsive, configResponsive} from 'ahooks';
import useLoading from '../../hooks/useLoading';
import NaviGationModule from '../../components/@Navigation/component';
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
  configResponsive({ isXtraSmall: 0, isSmall: 485, isMedium: 768, isLarge: 820, isXtraLarge: 1200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {  isSmall, isMedium, isLarge, } = useResponsive();
  return (
    <View>
      <NaviGationModule message={'Assuming, we have the "app link" already! 🤩 going to "Isofi-CMS in ....."'}/>
      <Outlet />
      {isLoaded ? (
        <>
          <FirstHeroModule />
          <SecondHeroModule isSmall={isSmall} isMedium={isMedium} />
          <CardModule />
          <SingleColumnModule />
          <MultipleColumnModule isLarge={isLarge} isMedium={isMedium} />
          <ImageModule />
          <TeamCardModule />
          <TeamModule/>
          <Outlet />
          <FooterModule />
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