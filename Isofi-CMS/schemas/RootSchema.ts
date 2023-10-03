import NavigationSchema from "./NavigationSchema";
import ContentSchema from "./ContentSchema";
import FirstHeroSchema from "./FirstHeroSchema";
import SecondHeroSchema from "./SecondHeroSchema";
import SingleColumnSchema from "./SingleColumnSchema";
import MultipleColumnSchema from "./MultipleColumnSchema";
import ImageSchema from "./ImageSchema";
import TeamCardSchema from "./TeamCardSchema";
import FooterSchema from "./FooterSchema";
import TermOfServiceSchema from "./TermOfServiceSchema";
import PrivacyPolicySchema from "./PrivacyPolicySchema";
import HubSpotFormSchema from "./HubSpotFormSchema";
import AppUrlSchema from "./AppUrlSchema";
import SocialMediaAccountSchema from "./SocialMediaAccountSchema";
import TeamCardBackGroundSchema from "./TeamCardBackGroundSchema";
// Schema Types Definations -> RootSchema //

export const schemaTypes = [
    NavigationSchema, ContentSchema,
    FirstHeroSchema, SecondHeroSchema,
    SingleColumnSchema, MultipleColumnSchema,
    ImageSchema, TeamCardSchema,TeamCardBackGroundSchema,
    HubSpotFormSchema, AppUrlSchema,
    SocialMediaAccountSchema, FooterSchema,                           
    TermOfServiceSchema, PrivacyPolicySchema
];
