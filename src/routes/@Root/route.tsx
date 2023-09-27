import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useResponsive, configResponsive, useTimeout } from 'ahooks';
// import Default from '../../components/@Default/component';
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
  const { isXtraSmall, isSmall, isMedium, isLarge, isXtraLarge } = useResponsive();
  return (
    <View>
      <NaviGationModule />
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
          <TeamModule isMedium={isMedium}/>
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