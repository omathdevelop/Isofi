import * as React from 'react';
import { useDispatch } from 'react-redux';
import {
  onNaviGationData, onFirstHeroData,
  onSecondHeroData, onSingleColumnData,
  onMultipleColumnData, onImageModuleData,
  onTeamCardData, onHubSpotFormData,
  onAppUrlData, onFooterData,
  onSocialAccountData, onTermsAndServiceData,
  onPrivacyPolicyData,
  onSingleTeamCardData
} from './Action';
import {
  setNavigation, setFirstHero, setSecondHero, setSingleColumn, setMultipleColumn,
  setImageModule, setTeamCard, setSingleTeamCard, setHubSpotForm, setAppUrl, setFooter, setSocialAccount,
  setTermsAndService, setPrivacyPolicy
} from '../context/@redux/@slices/slices';

const useNaviGation = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onNaviGationData().then((data) => {
      if (!data) return;
      dispatch(setNavigation([data]))
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
      // console.log(error);
    });

  }, [dispatch])
};

const useFirstHero = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onFirstHeroData().then((data) => {
      if (!data) return;
      dispatch(setFirstHero([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const useSecondHero = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onSecondHeroData().then((data) => {
      if (!data) return;
      dispatch(setSecondHero([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
      console.log('*******ERROR******** `@useSecondHero`');
    });

  }, [dispatch])
};
const useSingleColumn = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onSingleColumnData().then((data) => {
      if (!data) return;
      dispatch(setSingleColumn([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};
const useMultipleColumn = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onMultipleColumnData().then((data) => {
      if (!data) return;
      dispatch(setMultipleColumn([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};
const useImageModule = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onImageModuleData().then((data) => {
      if (!data) return;
      dispatch(setImageModule([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const useTeamCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onTeamCardData().then((data) => {
      if (!data) return;
      dispatch(setTeamCard(data));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};
const useSingleTeamCard = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onSingleTeamCardData().then((data) => {
      if (!data) return;
      dispatch(setSingleTeamCard([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};
const useHubSpotForm = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onHubSpotFormData().then((data) => {
      if (!data) return;
      dispatch(setHubSpotForm([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const useAppUrl = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onAppUrlData().then((data) => {
      if (!data) return;
      dispatch(setAppUrl([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const useFooter = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onFooterData().then((data) => {
      if (!data) return;
      dispatch(setFooter([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const useSocialAccount = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onSocialAccountData().then((data) => {
      if (!data) return;
      dispatch(setSocialAccount([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const useTermsAndService = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onTermsAndServiceData().then((data) => {
      if (!data) return;
      dispatch(setTermsAndService([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

const usePrivacyPolicy = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    onPrivacyPolicyData().then((data) => {
      if (!data) return;
      dispatch(setPrivacyPolicy([data]));
      console.log(data)
    }).catch((error: Error) => {
      if (error instanceof Error) return error.message
    });

  }, [dispatch])
};

export {
  useNaviGation, useFirstHero,
  useSecondHero, useSingleColumn,
  useMultipleColumn, useImageModule,
  useTeamCard, useHubSpotForm,
  useAppUrl, useFooter,
  useSocialAccount, useTermsAndService,
  usePrivacyPolicy, useSingleTeamCard
}




