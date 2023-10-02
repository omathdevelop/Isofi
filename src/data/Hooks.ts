import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  onNaviGationData, onFirstHeroData,
  onSecondHeroData, onSingleColumnData,
  onMultipleColumnData, onImageModuleData,
  onTeamCardData, onHubSpotFormData,
  onAppUrlData, onFooterData,
  onSocialAccountData,onTermsAndServiceData,
  onPrivacyPolicyData
 } from './Action';
const useNaviGation = () => {
  const dispatch   = useDispatch();
   React.useEffect(() => {
   onNaviGationData().then((data) =>{
    if(!data) return;
       console.log(data)
    } ).catch((error:Error) => {
      if(error instanceof Error) return error.message
      console.log(error);
    });

   }, [])
};

const useFirstHero = () => {
  const dispatch   = useDispatch();
   React.useEffect(() => {
   onFirstHeroData().then((data) =>{
    if(!data) return;
       console.log(data)
    } ).catch((error:Error) => {
      if(error instanceof Error) return error.message
      console.log(error);
    });

   }, [])
};

const useSecondHero = () => {
  const dispatch   = useDispatch();
   React.useEffect(() => {
   onSecondHeroData().then((data) =>{
    if(!data) return;
       console.log(data)
    } ).catch((error:Error) => {
      if(error instanceof Error) return error.message
      console.log('*******ERROR******** `@useSecondHero`');
    });

   }, [])
};
const useSingleColumn = () => {
  const dispatch   = useDispatch();
   React.useEffect(() => {
   onSingleColumnData().then((data) =>{
    if(!data) return;
       console.log(data)
    } ).catch((error:Error) => {
      if(error instanceof Error) return error.message
    });

   }, [])
};
const useMultipleColumn = () => {
  const dispatch   = useDispatch();
   React.useEffect(() => {
   onMultipleColumnData().then((data) =>{
    if(!data) return;
       console.log(data)
    } ).catch((error:Error) => {
      if(error instanceof Error) return error.message
    });

   }, [])
};
const useImageModule = () => {
  const dispatch   = useDispatch();
   React.useEffect(() => {
   onImageModuleData().then((data) =>{
    if(!data) return;
       console.log(data)
    } ).catch((error:Error) => {
      if(error instanceof Error) return error.message
    });

   }, [])
};

export {
  useNaviGation, useFirstHero,
   useSecondHero, useSingleColumn,
   useMultipleColumn, useImageModule
  }




