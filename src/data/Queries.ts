
const Query = {
    naviagtion: `
    *[ _type == 'navigation'] {
         _id,
        logo,
        isMenu,
        menuItem,
        signup,
        playlist
    }
    `,
    firstHero: `*[ _type == 'firstHero']{
        _id,
   "HeroImage": HeroImage.asset->url,
    "alt": HeroImage.alt,
    first,
    second,
    ordinaryColorText,
    whiteColorText
    }`,
    secondHero: `*[ _type == 'secondHero']{
    _id,
    "HeroImage": HeroImage.asset->url,
    "alt": HeroImage.alt,
    firstColumnTextOne,
    firstText,
    secondColumnTextTwo,
    secondText,
    thirdText
    }`,
    singleColumn: `*[ _type == 'singleColumn'] { 
        _id,
        "singleColumnImage": singleColumnImage.asset->url,
        "alt": singleColumnImage.alt,
        content
    }`,
    multipleColumn: `*[ _type == 'multipleColumn'] {
        _id,
        "firstColummageOne": firstColumnImageOne.asset->url,
        "alt": firstColummageOne.alt,
        firstColumnOneText,
        firstColumnTwoText,
        "firstColumnImageTwo": firstColumnImageTwo.asset->url,
        "alt": firstColumnImageTwo.alt,
        "secondColumnImageOne": secondColumnImageOne.asset->url,
        "alt": secondColumnImageOne.alt,
        "secondColumnImageTwo": secondColumnImageTwo.asset->url,
        "alt": secondColumnImageTwo.alt,
        secondColumnOneText,
        secondColumnTwoText

    }`,
    imageModule: `*[ _type == 'imageModule'] {
        _id,
        "image": image.asset->url,
        "alt":image.alt
    }`,
    teamCard: `*[ _type == 'teamCard'] {
        _id,
        description,
        "image":image.asset->url,
        "alt":image.alt,
        tagline,
        teamName,
        "teamCardBackGround": teamCardBackGround.asset->url,
        "alt":teamCardBackGround.alt
    }`,
    hubSpotForm: `*[ _type == 'hubSpotForm'] {
        _id,
        hubSpotForm
    }`,
    appLink: `*[ _type == 'appLink'] {
        _id,
        applink
    }`,
    footer: ` [ _type == 'footer'] {
         _id,
         content,
         copyRightInfo,
         isofiLogo,
         policy,
         serviceTerm
    }`,
    socialAccount: `[ _type == 'socialAccount'] {
        _id,
        facebook,
        facebookUrl,
        instagram,
        instagramUrl,
        twitter,
        twitterUrl,
        tiktok,
        tiktokUrl,
        youtube,
        youtubeUrl
    }`,
    termsOfService: ` [ _type == 'termsOfService'] {
        _id,
        content
    }`,
    privacyPolicy: ` [ _type == 'privacyPolicy'] {
        _id,
        content
    }`
};
export default Query;