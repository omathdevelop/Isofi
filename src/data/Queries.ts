
const Query = {
    naviagtion: `
    *[ _type == 'navigation'][0] {
         _id,
        logo,
        isMenu,
        menuItem,
        signup,
        playlist
    }
    `,
    firstHero: `*[ _type == 'firstHero'][0]{
        _id,
   "HeroImage": HeroImage.asset->url,
    "alt": HeroImage.alt,
    first,
    second,
    ordinaryColorText,
    whiteColorText
    }`,
    secondHero: `*[ _type == 'secondHero'][0]{
    _id,
    "HeroImage": HeroImage.asset->url,
    "alt": HeroImage.alt,
    firstColumnTextOne,
    firstText,
    secondColumnTextTwo,
    secondText,
    thirdText
    }`,
    singleColumn: `*[ _type == 'singleColumn'][0] { 
        _id,
        "singleColumnImage": singleColumnImage.asset->url,
        "alt": singleColumnImage.alt,
        content
    }`,
    multipleColumn: `*[ _type == 'multipleColumn'][0] {
        _id,
        "firstColumnImageOne": firstColumnImageOne.asset->url,
        "alt": firstColumnImageOne.alt,
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
    imageModule: `*[ _type == 'imageModule'][0] {
        _id,
        "image": image.asset->url,
        "alt":image.alt
    }`,
    teamCard: `*[ _type == 'teamCard'] {
        _id,
        description,
        "photo":photo.asset->url,
        "alt":photo.alt,
        tagline,
        name,
        "teamCardBackGround": teamCardBackGround.asset->url,
        "alt":teamCardBackGround.alt
    }`,
    hubSpotForm: `*[ _type == 'hubSpotForm'][0] {
        _id,
        hubSpotForm
    }`,
    appLink: `*[ _type == 'appLink'][0] {
        _id,
        applink
    }`,
    footer: ` *[ _type == 'footer'][0] {
         _id,
         content,
         copyRightInfo,
         isofiLogo,
         policy,
         serviceTerm
    }`,
    socialAccount: `*[ _type == 'socialAccount'][0] {
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
    termsOfService: ` *[ _type == 'termsOfService'][0] {
        _id,
        content
    }`,
    privacyPolicy: ` *[ _type == 'privacyPolicy'][0] {
        _id,
        content
    }`
};
export default Query;