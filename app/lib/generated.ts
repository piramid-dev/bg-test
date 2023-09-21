import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GraphQLClient } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: any; output: any; }
  CustomData: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FloatType: { input: any; output: any; }
  IntType: { input: any; output: any; }
  ItemId: { input: any; output: any; }
  JsonField: { input: any; output: any; }
  MetaTagAttributes: { input: any; output: any; }
  UploadId: { input: any; output: any; }
};

/** Linking fields */
export enum AboutModelFieldsReferencingArticleModel {
  AboutRelatedArticles = 'about_relatedArticles'
}

/** Linking fields */
export enum AboutModelFieldsReferencingAwardModel {
  AboutBestProducts = 'about_bestProducts',
  AboutSelectedProducts = 'about_selectedProducts'
}

export type AboutModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bestProducts?: InputMaybe<LinksFilter>;
  featuredProductsHeading?: InputMaybe<StringFilter>;
  featuredProductsImage?: InputMaybe<FileFilter>;
  featuredProductsSubheading?: InputMaybe<StringFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  relatedArticles?: InputMaybe<LinksFilter>;
  relatedArticlesHeading?: InputMaybe<StringFilter>;
  selectedProducts?: InputMaybe<LinksFilter>;
  video?: InputMaybe<VideoFilter>;
  videoCover?: InputMaybe<FileFilter>;
};

export enum AboutModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  FeaturedProductsHeadingAsc = 'featuredProductsHeading_ASC',
  FeaturedProductsHeadingDesc = 'featuredProductsHeading_DESC',
  FeaturedProductsSubheadingAsc = 'featuredProductsSubheading_ASC',
  FeaturedProductsSubheadingDesc = 'featuredProductsSubheading_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RelatedArticlesHeadingAsc = 'relatedArticlesHeading_ASC',
  RelatedArticlesHeadingDesc = 'relatedArticlesHeading_DESC'
}

/** Record of type About (about) */
export type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _allFeaturedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFeaturedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedArticlesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bestProducts: Array<AwardRecord>;
  featuredProductsHeading?: Maybe<Scalars['String']['output']>;
  featuredProductsImage?: Maybe<FileField>;
  featuredProductsSubheading?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  relatedArticles: Array<ArticleRecord>;
  relatedArticlesHeading?: Maybe<Scalars['String']['output']>;
  selectedProducts: Array<AwardRecord>;
  video?: Maybe<VideoField>;
  videoCover?: Maybe<FileField>;
};


/** Record of type About (about) */
export type AboutRecord_AllFeaturedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecord_AllFeaturedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecord_AllHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecord_AllRelatedArticlesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecordFeaturedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecordFeaturedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecordHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type About (about) */
export type AboutRecordRelatedArticlesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum AirbagModelFieldsReferencingAwardModel {
  AirbagAwards = 'airbag_awards'
}

/** Linking fields */
export enum AirbagModelFieldsReferencingBrandModel {
  AirbagBrand = 'airbag_brand'
}

/** Linking fields */
export enum AirbagModelFieldsReferencingProductFamilyModel {
  AirbagFamilies = 'airbag_families'
}

/** Linking fields */
export enum AirbagModelFieldsReferencingScopeModel {
  AirbagScopes = 'airbag_scopes'
}

export type AirbagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AirbagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AirbagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  inflationSystem?: InputMaybe<LinkFilter>;
  inflationTime?: InputMaybe<IntegerFilter>;
  inflationTimeDescription?: InputMaybe<StringFilter>;
  inflationType?: InputMaybe<LinkFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinkFilter>;
  sizes?: InputMaybe<StringFilter>;
  sizesDescription?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  volume?: InputMaybe<IntegerFilter>;
  volumeAirbag?: InputMaybe<IntegerFilter>;
  volumeBaloon?: InputMaybe<IntegerFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
  weightDescription?: InputMaybe<StringFilter>;
};

export enum AirbagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InflationTimeDescriptionAsc = 'inflationTimeDescription_ASC',
  InflationTimeDescriptionDesc = 'inflationTimeDescription_DESC',
  InflationTimeAsc = 'inflationTime_ASC',
  InflationTimeDesc = 'inflationTime_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  SizesDescriptionAsc = 'sizesDescription_ASC',
  SizesDescriptionDesc = 'sizesDescription_DESC',
  SizesAsc = 'sizes_ASC',
  SizesDesc = 'sizes_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  VolumeAirbagAsc = 'volumeAirbag_ASC',
  VolumeAirbagDesc = 'volumeAirbag_DESC',
  VolumeBaloonAsc = 'volumeBaloon_ASC',
  VolumeBaloonDesc = 'volumeBaloon_DESC',
  VolumeAsc = 'volume_ASC',
  VolumeDesc = 'volume_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC',
  WeightDescriptionAsc = 'weightDescription_ASC',
  WeightDescriptionDesc = 'weightDescription_DESC'
}

/** Record of type Airbag (airbag) */
export type AirbagRecord = RecordInterface & {
  __typename?: 'AirbagRecord';
  _allInflationTimeDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSizesDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSizesLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWeightDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  inflationSystem?: Maybe<InflationSystemRecord>;
  inflationTime?: Maybe<Scalars['IntType']['output']>;
  inflationTimeDescription?: Maybe<Scalars['String']['output']>;
  inflationType?: Maybe<InflationTypeRecord>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes?: Maybe<ScopeRecord>;
  sizes?: Maybe<Scalars['String']['output']>;
  sizesDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['IntType']['output']>;
  volumeAirbag?: Maybe<Scalars['IntType']['output']>;
  volumeBaloon?: Maybe<Scalars['IntType']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
  weightDescription?: Maybe<Scalars['String']['output']>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllInflationTimeDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllSizesDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllSizesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_AllWeightDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordInflationTimeDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordSizesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordSizesDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Airbag (airbag) */
export type AirbagRecordWeightDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum ArticleModelFieldsReferencingCategoryModel {
  ArticleCategories = 'article_categories'
}

/** Linking fields */
export enum ArticleModelFieldsReferencingPersonModel {
  ArticleAuthor = 'article_author',
  ArticlePhotographer = 'article_photographer'
}

/** Linking fields */
export enum ArticleModelFieldsReferencingSkierModel {
  ArticleSkiers = 'article_skiers'
}

export type ArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  author?: InputMaybe<LinksFilter>;
  categories?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  photographer?: InputMaybe<LinksFilter>;
  skiers?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<LinksFilter>;
};

export type ArticleModelModulesField = ComparativeSliderRecord | ContentRecord | FeaturedHeadingRecord | FeaturedTwoColumnTextRecord | HeadingRecord | HeroRecord | ImageRecord | ImageWithTextRecord | ProductsSliderRecord | QuoteRecord | TwoColumnTextRecord | VideoRecord;

export type ArticleModelModulesFieldListListNonNullMultiLocaleField = {
  __typename?: 'ArticleModelModulesFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<ArticleModelModulesField>;
};

export enum ArticleModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Articolo (article) */
export type ArticleRecord = RecordInterface & {
  __typename?: 'ArticleRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allModulesLocales?: Maybe<Array<ArticleModelModulesFieldListListNonNullMultiLocaleField>>;
  _allReferencingAbouts: Array<AboutRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAboutsMeta: CollectionMetadata;
  _allReferencingBrands: Array<BrandRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBrandsMeta: CollectionMetadata;
  _allReferencingCategories: Array<CategoryRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCategoriesMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingProductFamilies: Array<ProductFamilyRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProductFamiliesMeta: CollectionMetadata;
  _allReferencingScopes: Array<ScopeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingScopesMeta: CollectionMetadata;
  _allReferencingSkiers: Array<SkierRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkiersMeta: CollectionMetadata;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author: Array<PersonRecord>;
  categories: Array<CategoryRecord>;
  id: Scalars['ItemId']['output'];
  metadata?: Maybe<SeoField>;
  modules: Array<ArticleModelModulesField>;
  photographer: Array<PersonRecord>;
  skiers: Array<SkierRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics: Array<TopicRecord>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllModulesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingAboutsMetaArgs = {
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingBrandsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BrandModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BrandModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBrandAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingBrandsMetaArgs = {
  filter?: InputMaybe<BrandModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBrandAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingCategoriesMetaArgs = {
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingProductFamiliesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductFamilyAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingProductFamiliesMetaArgs = {
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProductFamilyAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingScopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ScopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ScopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenScopeAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingScopesMetaArgs = {
  filter?: InputMaybe<ScopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenScopeAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingSkiersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkierModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkierModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkierAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllReferencingSkiersMetaArgs = {
  filter?: InputMaybe<SkierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkierAndArticle>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecordModulesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Articolo (article) */
export type ArticleRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum ArtvaModelFieldsReferencingAwardModel {
  ArtvaAwards = 'artva_awards'
}

/** Linking fields */
export enum ArtvaModelFieldsReferencingBrandModel {
  ArtvaBrand = 'artva_brand'
}

/** Linking fields */
export enum ArtvaModelFieldsReferencingProductFamilyModel {
  ArtvaFamilies = 'artva_families'
}

/** Linking fields */
export enum ArtvaModelFieldsReferencingScopeModel {
  ArtvaScopes = 'artva_scopes'
}

export type ArtvaModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArtvaModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArtvaModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  antennasNumber?: InputMaybe<IntegerFilter>;
  autonomy?: InputMaybe<IntegerFilter>;
  autonomyDescription?: InputMaybe<StringFilter>;
  awards?: InputMaybe<LinksFilter>;
  batteryType?: InputMaybe<StringFilter>;
  brand?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  depth?: InputMaybe<IntegerFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  height?: InputMaybe<IntegerFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  softwareDescription?: InputMaybe<StringFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  typology?: InputMaybe<StringFilter>;
  warranty?: InputMaybe<IntegerFilter>;
  warrantyDescription?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
  weightDescription?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntegerFilter>;
};

export enum ArtvaModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AntennasNumberAsc = 'antennasNumber_ASC',
  AntennasNumberDesc = 'antennasNumber_DESC',
  AutonomyDescriptionAsc = 'autonomyDescription_ASC',
  AutonomyDescriptionDesc = 'autonomyDescription_DESC',
  AutonomyAsc = 'autonomy_ASC',
  AutonomyDesc = 'autonomy_DESC',
  BatteryTypeAsc = 'batteryType_ASC',
  BatteryTypeDesc = 'batteryType_DESC',
  DepthAsc = 'depth_ASC',
  DepthDesc = 'depth_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  SoftwareDescriptionAsc = 'softwareDescription_ASC',
  SoftwareDescriptionDesc = 'softwareDescription_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TypologyAsc = 'typology_ASC',
  TypologyDesc = 'typology_DESC',
  WarrantyDescriptionAsc = 'warrantyDescription_ASC',
  WarrantyDescriptionDesc = 'warrantyDescription_DESC',
  WarrantyAsc = 'warranty_ASC',
  WarrantyDesc = 'warranty_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC',
  WeightDescriptionAsc = 'weightDescription_ASC',
  WeightDescriptionDesc = 'weightDescription_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Record of type Artva (artva) */
export type ArtvaRecord = RecordInterface & {
  __typename?: 'ArtvaRecord';
  _allAutonomyDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBatteryTypeLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSoftwareDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTypologyLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWarrantyDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWeightDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  antennasNumber?: Maybe<Scalars['IntType']['output']>;
  autonomy?: Maybe<Scalars['IntType']['output']>;
  autonomyDescription?: Maybe<Scalars['String']['output']>;
  awards: Array<AwardRecord>;
  batteryType?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<BrandRecord>;
  channels: Array<ChannelRecord>;
  depth?: Maybe<Scalars['IntType']['output']>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['ItemId']['output'];
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes: Array<ScopeRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  softwareDescription?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  typology?: Maybe<Scalars['String']['output']>;
  warranty?: Maybe<Scalars['IntType']['output']>;
  warrantyDescription?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
  weightDescription?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllAutonomyDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllBatteryTypeLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllSoftwareDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllTypologyLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllWarrantyDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_AllWeightDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordAutonomyDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordBatteryTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordSoftwareDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordTypologyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordWarrantyDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Artva (artva) */
export type ArtvaRecordWeightDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AttitudeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AttitudeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AttitudeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum AttitudeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Atteggiamento (attitude) */
export type AttitudeRecord = RecordInterface & {
  __typename?: 'AttitudeRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Atteggiamento (attitude) */
export type AttitudeRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Atteggiamento (attitude) */
export type AttitudeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Atteggiamento (attitude) */
export type AttitudeRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type AuthorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum AuthorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Autore (author) */
export type AuthorRecord = RecordInterface & {
  __typename?: 'AuthorRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Autore (author) */
export type AuthorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type AwardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AwardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AwardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  color?: InputMaybe<ColorFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  logo?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  shortName?: InputMaybe<StringFilter>;
  year?: InputMaybe<LinkFilter>;
};

export enum AwardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC'
}

/** Record of type Premi (award) */
export type AwardRecord = RecordInterface & {
  __typename?: 'AwardRecord';
  _allLabelLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingAbouts: Array<AboutRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAboutsMeta: CollectionMetadata;
  _allReferencingAirbags: Array<AirbagRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAirbagsMeta: CollectionMetadata;
  _allReferencingArtvas: Array<ArtvaRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtvasMeta: CollectionMetadata;
  _allReferencingAxes: Array<AxRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAxesMeta: CollectionMetadata;
  _allReferencingBindings: Array<BindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBindingsMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingCrampons: Array<CramponRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCramponsMeta: CollectionMetadata;
  _allReferencingHarnesses: Array<HarnessRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHarnessesMeta: CollectionMetadata;
  _allReferencingHelmets: Array<HelmetRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHelmetsMeta: CollectionMetadata;
  _allReferencingPoles: Array<PoleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPolesMeta: CollectionMetadata;
  _allReferencingProbes: Array<ProbeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProbesMeta: CollectionMetadata;
  _allReferencingRopes: Array<RopeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingRopesMeta: CollectionMetadata;
  _allReferencingShovels: Array<ShovelRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingShovelsMeta: CollectionMetadata;
  _allReferencingSkins: Array<SkinRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkinsMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allReferencingSplitboardBindings: Array<SplitboardBindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBindingsMeta: CollectionMetadata;
  _allReferencingSplitboardBoots: Array<SplitboardBootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBootsMeta: CollectionMetadata;
  _allReferencingSplitboards: Array<SplitboardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardsMeta: CollectionMetadata;
  _allShortNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  color?: Maybe<ColorField>;
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  logo?: Maybe<FileField>;
  name: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  year: EditionRecord;
};


/** Record of type Premi (award) */
export type AwardRecord_AllLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingAboutsMetaArgs = {
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingAirbagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AirbagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingAirbagsMetaArgs = {
  filter?: InputMaybe<AirbagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingArtvasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtvaModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingArtvasMetaArgs = {
  filter?: InputMaybe<ArtvaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingAxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingAxesMetaArgs = {
  filter?: InputMaybe<AxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingBindingsMetaArgs = {
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingCramponsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CramponModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingCramponsMetaArgs = {
  filter?: InputMaybe<CramponModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingHarnessesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HarnessModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingHarnessesMetaArgs = {
  filter?: InputMaybe<HarnessModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingHelmetsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HelmetModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingHelmetsMetaArgs = {
  filter?: InputMaybe<HelmetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingPolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingPolesMetaArgs = {
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingProbesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProbeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingProbesMetaArgs = {
  filter?: InputMaybe<ProbeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingRopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenRopeAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingRopesMetaArgs = {
  filter?: InputMaybe<RopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenRopeAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingShovelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShovelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingShovelsMetaArgs = {
  filter?: InputMaybe<ShovelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSkinsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSkinsMetaArgs = {
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSplitboardBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSplitboardBindingsMetaArgs = {
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSplitboardBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSplitboardBootsMetaArgs = {
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllReferencingSplitboardsMetaArgs = {
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndAward>;
};


/** Record of type Premi (award) */
export type AwardRecord_AllShortNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Premi (award) */
export type AwardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Premi (award) */
export type AwardRecordLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Premi (award) */
export type AwardRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Premi (award) */
export type AwardRecordShortNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum AxModelFieldsReferencingAwardModel {
  AxAwards = 'ax_awards'
}

/** Linking fields */
export enum AxModelFieldsReferencingBrandModel {
  AxBrand = 'ax_brand'
}

/** Linking fields */
export enum AxModelFieldsReferencingProductFamilyModel {
  AxFamilies = 'ax_families'
}

/** Linking fields */
export enum AxModelFieldsReferencingScopeModel {
  AxScopes = 'ax_scopes'
}

export type AxModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AxModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AxModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  handleLengthDescription?: InputMaybe<StringFilter>;
  handleLengthMax?: InputMaybe<IntegerFilter>;
  handleLengthMin?: InputMaybe<IntegerFilter>;
  handleMaterial?: InputMaybe<LinkFilter>;
  headMaterial?: InputMaybe<LinkFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinkFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum AxModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  HandleLengthDescriptionAsc = 'handleLengthDescription_ASC',
  HandleLengthDescriptionDesc = 'handleLengthDescription_DESC',
  HandleLengthMaxAsc = 'handleLengthMax_ASC',
  HandleLengthMaxDesc = 'handleLengthMax_DESC',
  HandleLengthMinAsc = 'handleLengthMin_ASC',
  HandleLengthMinDesc = 'handleLengthMin_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Piccozza (ax) */
export type AxRecord = RecordInterface & {
  __typename?: 'AxRecord';
  _allHandleLengthDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  handleLengthDescription?: Maybe<Scalars['String']['output']>;
  handleLengthMax?: Maybe<Scalars['IntType']['output']>;
  handleLengthMin?: Maybe<Scalars['IntType']['output']>;
  handleMaterial?: Maybe<MaterialRecord>;
  headMaterial?: Maybe<MaterialRecord>;
  id: Scalars['ItemId']['output'];
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes?: Maybe<ScopeRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Piccozza (ax) */
export type AxRecord_AllHandleLengthDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Piccozza (ax) */
export type AxRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Piccozza (ax) */
export type AxRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Piccozza (ax) */
export type AxRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Piccozza (ax) */
export type AxRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Piccozza (ax) */
export type AxRecordHandleLengthDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Piccozza (ax) */
export type AxRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Piccozza (ax) */
export type AxRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Piccozza (ax) */
export type AxRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Blocco vantaggio (benefit_block) */
export type BenefitBlockRecord = RecordInterface & {
  __typename?: 'BenefitBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  layeredImages: Array<LayeredImageRecord>;
  subheading?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  textPosition?: Maybe<Scalars['String']['output']>;
};


/** Block of type Blocco vantaggio (benefit_block) */
export type BenefitBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type BenefitBlockRecordListListNonNullMultiLocaleField = {
  __typename?: 'BenefitBlockRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<BenefitBlockRecord>;
};

/** Block of type Vantaggio (benefit) */
export type BenefitRecord = RecordInterface & {
  __typename?: 'BenefitRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Vantaggio (benefit) */
export type BenefitRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum BindingModelFieldsReferencingAwardModel {
  BindingAwards = 'binding_awards'
}

/** Linking fields */
export enum BindingModelFieldsReferencingBrandModel {
  BindingBrand = 'binding_brand'
}

/** Linking fields */
export enum BindingModelFieldsReferencingCategoryModel {
  BindingCategories = 'binding_categories'
}

/** Linking fields */
export enum BindingModelFieldsReferencingProductFamilyModel {
  BindingFamilies = 'binding_families'
}

/** Linking fields */
export enum BindingModelFieldsReferencingScopeModel {
  BindingScopes = 'binding_scopes'
}

/** Linking fields */
export enum BindingModelFieldsReferencingSkierModel {
  BindingSkierTypes = 'binding_skierTypes'
}

export type BindingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BindingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BindingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  availableVersions?: InputMaybe<StringFilter>;
  awards?: InputMaybe<LinksFilter>;
  boots?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  colors?: InputMaybe<LinksFilter>;
  cramponsSlot?: InputMaybe<BooleanFilter>;
  cramponsSlotOptional?: InputMaybe<BooleanFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  drop?: InputMaybe<FloatFilter>;
  dynafitInsertsRelease?: InputMaybe<IntegerFilter>;
  dynafitInsertsReleaseGloves?: InputMaybe<IntegerFilter>;
  dynafitInsertsReleasePole?: InputMaybe<IntegerFilter>;
  dynafitInsertsStepin?: InputMaybe<IntegerFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  editions?: InputMaybe<LinksFilter>;
  families?: InputMaybe<LinksFilter>;
  heelDynafitInsertsRelease?: InputMaybe<IntegerFilter>;
  heelOtherInsertsRelease?: InputMaybe<IntegerFilter>;
  heelOutsoleFreerideInsertsRelease?: InputMaybe<IntegerFilter>;
  heelOutsoleTrailInsertsRelease?: InputMaybe<IntegerFilter>;
  heelWeightMeasured?: InputMaybe<IntegerFilter>;
  id?: InputMaybe<ItemIdFilter>;
  materials?: InputMaybe<LinksFilter>;
  measurementsComplete?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<SeoFilter>;
  mountingScrewsNumber?: InputMaybe<IntegerFilter>;
  mountingScrewsWeightMeasured?: InputMaybe<IntegerFilter>;
  name?: InputMaybe<StringFilter>;
  otherInsertsRelease?: InputMaybe<IntegerFilter>;
  otherInsertsReleaseGloves?: InputMaybe<IntegerFilter>;
  otherInsertsReleasePole?: InputMaybe<IntegerFilter>;
  otherInsertsStepin?: InputMaybe<IntegerFilter>;
  outsoleFreerideInsertsRelease?: InputMaybe<IntegerFilter>;
  outsoleTrailInsertsRelease?: InputMaybe<IntegerFilter>;
  pinHeelHeight?: InputMaybe<FloatFilter>;
  pinToeHeight?: InputMaybe<FloatFilter>;
  previewDescription?: InputMaybe<TextFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  releaseGloves?: InputMaybe<IntegerFilter>;
  releasePole?: InputMaybe<IntegerFilter>;
  releaseRangeAdjustable?: InputMaybe<BooleanFilter>;
  releaseRangeMax?: InputMaybe<FloatFilter>;
  releaseRangeMin?: InputMaybe<FloatFilter>;
  releasedIn?: InputMaybe<StringFilter>;
  scopes?: InputMaybe<LinksFilter>;
  skiBrake?: InputMaybe<StringFilter>;
  skiBrakeOptional?: InputMaybe<BooleanFilter>;
  skiBrakeWidthMax?: InputMaybe<FloatFilter>;
  skiBrakeWidthMin?: InputMaybe<FloatFilter>;
  skierTypes?: InputMaybe<LinksFilter>;
  skis?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  stepin?: InputMaybe<IntegerFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedFitDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  testedPreview?: InputMaybe<StringFilter>;
  toeWeightMeasured?: InputMaybe<IntegerFilter>;
  types?: InputMaybe<LinksFilter>;
  versions?: InputMaybe<LinksFilter>;
  walkingModes?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
  weightMeasured?: InputMaybe<IntegerFilter>;
};

export enum BindingModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AvailableVersionsAsc = 'availableVersions_ASC',
  AvailableVersionsDesc = 'availableVersions_DESC',
  CramponsSlotOptionalAsc = 'cramponsSlotOptional_ASC',
  CramponsSlotOptionalDesc = 'cramponsSlotOptional_DESC',
  CramponsSlotAsc = 'cramponsSlot_ASC',
  CramponsSlotDesc = 'cramponsSlot_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DropAsc = 'drop_ASC',
  DropDesc = 'drop_DESC',
  DynafitInsertsReleaseGlovesAsc = 'dynafitInsertsReleaseGloves_ASC',
  DynafitInsertsReleaseGlovesDesc = 'dynafitInsertsReleaseGloves_DESC',
  DynafitInsertsReleasePoleAsc = 'dynafitInsertsReleasePole_ASC',
  DynafitInsertsReleasePoleDesc = 'dynafitInsertsReleasePole_DESC',
  DynafitInsertsReleaseAsc = 'dynafitInsertsRelease_ASC',
  DynafitInsertsReleaseDesc = 'dynafitInsertsRelease_DESC',
  DynafitInsertsStepinAsc = 'dynafitInsertsStepin_ASC',
  DynafitInsertsStepinDesc = 'dynafitInsertsStepin_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  HeelDynafitInsertsReleaseAsc = 'heelDynafitInsertsRelease_ASC',
  HeelDynafitInsertsReleaseDesc = 'heelDynafitInsertsRelease_DESC',
  HeelOtherInsertsReleaseAsc = 'heelOtherInsertsRelease_ASC',
  HeelOtherInsertsReleaseDesc = 'heelOtherInsertsRelease_DESC',
  HeelOutsoleFreerideInsertsReleaseAsc = 'heelOutsoleFreerideInsertsRelease_ASC',
  HeelOutsoleFreerideInsertsReleaseDesc = 'heelOutsoleFreerideInsertsRelease_DESC',
  HeelOutsoleTrailInsertsReleaseAsc = 'heelOutsoleTrailInsertsRelease_ASC',
  HeelOutsoleTrailInsertsReleaseDesc = 'heelOutsoleTrailInsertsRelease_DESC',
  HeelWeightMeasuredAsc = 'heelWeightMeasured_ASC',
  HeelWeightMeasuredDesc = 'heelWeightMeasured_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MeasurementsCompleteAsc = 'measurementsComplete_ASC',
  MeasurementsCompleteDesc = 'measurementsComplete_DESC',
  MountingScrewsNumberAsc = 'mountingScrewsNumber_ASC',
  MountingScrewsNumberDesc = 'mountingScrewsNumber_DESC',
  MountingScrewsWeightMeasuredAsc = 'mountingScrewsWeightMeasured_ASC',
  MountingScrewsWeightMeasuredDesc = 'mountingScrewsWeightMeasured_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OtherInsertsReleaseGlovesAsc = 'otherInsertsReleaseGloves_ASC',
  OtherInsertsReleaseGlovesDesc = 'otherInsertsReleaseGloves_DESC',
  OtherInsertsReleasePoleAsc = 'otherInsertsReleasePole_ASC',
  OtherInsertsReleasePoleDesc = 'otherInsertsReleasePole_DESC',
  OtherInsertsReleaseAsc = 'otherInsertsRelease_ASC',
  OtherInsertsReleaseDesc = 'otherInsertsRelease_DESC',
  OtherInsertsStepinAsc = 'otherInsertsStepin_ASC',
  OtherInsertsStepinDesc = 'otherInsertsStepin_DESC',
  OutsoleFreerideInsertsReleaseAsc = 'outsoleFreerideInsertsRelease_ASC',
  OutsoleFreerideInsertsReleaseDesc = 'outsoleFreerideInsertsRelease_DESC',
  OutsoleTrailInsertsReleaseAsc = 'outsoleTrailInsertsRelease_ASC',
  OutsoleTrailInsertsReleaseDesc = 'outsoleTrailInsertsRelease_DESC',
  PinHeelHeightAsc = 'pinHeelHeight_ASC',
  PinHeelHeightDesc = 'pinHeelHeight_DESC',
  PinToeHeightAsc = 'pinToeHeight_ASC',
  PinToeHeightDesc = 'pinToeHeight_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  ReleaseGlovesAsc = 'releaseGloves_ASC',
  ReleaseGlovesDesc = 'releaseGloves_DESC',
  ReleasePoleAsc = 'releasePole_ASC',
  ReleasePoleDesc = 'releasePole_DESC',
  ReleaseRangeAdjustableAsc = 'releaseRangeAdjustable_ASC',
  ReleaseRangeAdjustableDesc = 'releaseRangeAdjustable_DESC',
  ReleaseRangeMaxAsc = 'releaseRangeMax_ASC',
  ReleaseRangeMaxDesc = 'releaseRangeMax_DESC',
  ReleaseRangeMinAsc = 'releaseRangeMin_ASC',
  ReleaseRangeMinDesc = 'releaseRangeMin_DESC',
  ReleasedInAsc = 'releasedIn_ASC',
  ReleasedInDesc = 'releasedIn_DESC',
  SkiBrakeOptionalAsc = 'skiBrakeOptional_ASC',
  SkiBrakeOptionalDesc = 'skiBrakeOptional_DESC',
  SkiBrakeWidthMaxAsc = 'skiBrakeWidthMax_ASC',
  SkiBrakeWidthMaxDesc = 'skiBrakeWidthMax_DESC',
  SkiBrakeWidthMinAsc = 'skiBrakeWidthMin_ASC',
  SkiBrakeWidthMinDesc = 'skiBrakeWidthMin_DESC',
  SkiBrakeAsc = 'skiBrake_ASC',
  SkiBrakeDesc = 'skiBrake_DESC',
  StepinAsc = 'stepin_ASC',
  StepinDesc = 'stepin_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TestedPreviewAsc = 'testedPreview_ASC',
  TestedPreviewDesc = 'testedPreview_DESC',
  ToeWeightMeasuredAsc = 'toeWeightMeasured_ASC',
  ToeWeightMeasuredDesc = 'toeWeightMeasured_DESC',
  WalkingModesAsc = 'walkingModes_ASC',
  WalkingModesDesc = 'walkingModes_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC',
  WeightMeasuredAsc = 'weightMeasured_ASC',
  WeightMeasuredDesc = 'weightMeasured_DESC'
}

/** Record of type Attacco (binding) */
export type BindingRecord = RecordInterface & {
  __typename?: 'BindingRecord';
  _allAvailableVersionsLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allPreviewDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSkiBrakeLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedFitDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWalkingModesLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  availableVersions?: Maybe<Scalars['String']['output']>;
  awards: Array<AwardRecord>;
  boots: Array<BootRecord>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  colors: Array<ColorRecord>;
  cramponsSlot?: Maybe<Scalars['BooleanType']['output']>;
  cramponsSlotOptional?: Maybe<Scalars['BooleanType']['output']>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  drop?: Maybe<Scalars['FloatType']['output']>;
  dynafitInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  dynafitInsertsReleaseGloves?: Maybe<Scalars['IntType']['output']>;
  dynafitInsertsReleasePole?: Maybe<Scalars['IntType']['output']>;
  dynafitInsertsStepin?: Maybe<Scalars['IntType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  editions: Array<EditionRecord>;
  families: Array<ProductFamilyRecord>;
  heelDynafitInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  heelOtherInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  heelOutsoleFreerideInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  heelOutsoleTrailInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  heelWeightMeasured?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['ItemId']['output'];
  materials: Array<MaterialRecord>;
  measurementsComplete?: Maybe<Scalars['BooleanType']['output']>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  mountingScrewsNumber?: Maybe<Scalars['IntType']['output']>;
  mountingScrewsWeightMeasured?: Maybe<Scalars['IntType']['output']>;
  name: Scalars['String']['output'];
  otherInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  otherInsertsReleaseGloves?: Maybe<Scalars['IntType']['output']>;
  otherInsertsReleasePole?: Maybe<Scalars['IntType']['output']>;
  otherInsertsStepin?: Maybe<Scalars['IntType']['output']>;
  outsoleFreerideInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  outsoleTrailInsertsRelease?: Maybe<Scalars['IntType']['output']>;
  pinHeelHeight?: Maybe<Scalars['FloatType']['output']>;
  pinToeHeight?: Maybe<Scalars['FloatType']['output']>;
  previewDescription?: Maybe<Scalars['String']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  releaseGloves?: Maybe<Scalars['IntType']['output']>;
  releasePole?: Maybe<Scalars['IntType']['output']>;
  releaseRangeAdjustable?: Maybe<Scalars['BooleanType']['output']>;
  releaseRangeMax?: Maybe<Scalars['FloatType']['output']>;
  releaseRangeMin?: Maybe<Scalars['FloatType']['output']>;
  releasedIn?: Maybe<Scalars['String']['output']>;
  scopes: Array<ScopeRecord>;
  skiBrake?: Maybe<Scalars['String']['output']>;
  skiBrakeOptional?: Maybe<Scalars['BooleanType']['output']>;
  skiBrakeWidthMax?: Maybe<Scalars['FloatType']['output']>;
  skiBrakeWidthMin?: Maybe<Scalars['FloatType']['output']>;
  skierTypes: Array<SkierRecord>;
  skis: Array<SkiRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  stepin?: Maybe<Scalars['IntType']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedFitDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  testedPreview: Scalars['String']['output'];
  toeWeightMeasured?: Maybe<Scalars['IntType']['output']>;
  types: Array<BindingTypeRecord>;
  versions: Array<SkiRecord>;
  walkingModes?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
  weightMeasured?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllAvailableVersionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllPreviewDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllSkiBrakeLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllTestedFitDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllWalkingModesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecordAvailableVersionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecordPreviewDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco (binding) */
export type BindingRecordSkiBrakeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco (binding) */
export type BindingRecordTestedFitDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco (binding) */
export type BindingRecordWalkingModesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco (binding) */
export type BindingRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type BindingTypeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BindingTypeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BindingTypeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum BindingTypeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Tipologia di attacco (binding_type) */
export type BindingTypeRecord = RecordInterface & {
  __typename?: 'BindingTypeRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Tipologia di attacco (binding_type) */
export type BindingTypeRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tipologia di attacco (binding_type) */
export type BindingTypeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tipologia di attacco (binding_type) */
export type BindingTypeRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Linking fields */
export enum BootModelFieldsReferencingAwardModel {
  BootAwards = 'boot_awards'
}

/** Linking fields */
export enum BootModelFieldsReferencingBrandModel {
  BootBrand = 'boot_brand'
}

/** Linking fields */
export enum BootModelFieldsReferencingCategoryModel {
  BootCategories = 'boot_categories'
}

/** Linking fields */
export enum BootModelFieldsReferencingPersonModel {
  BootSkiedBy = 'boot_skiedBy'
}

/** Linking fields */
export enum BootModelFieldsReferencingProductFamilyModel {
  BootFamilies = 'boot_families'
}

/** Linking fields */
export enum BootModelFieldsReferencingScopeModel {
  BootScopes = 'boot_scopes'
}

/** Linking fields */
export enum BootModelFieldsReferencingSkierModel {
  BootSkierTypes = 'boot_skierTypes'
}

export type BootModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BootModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BootModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  alsoSuitableFor?: InputMaybe<TextFilter>;
  ankleWidthMax?: InputMaybe<FloatFilter>;
  awards?: InputMaybe<LinksFilter>;
  bindings?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  colors?: InputMaybe<LinksFilter>;
  cuffRom?: InputMaybe<IntegerFilter>;
  curveDownhill?: InputMaybe<LinkFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  editions?: InputMaybe<LinksFilter>;
  families?: InputMaybe<LinksFilter>;
  flexBackwardsDownhill?: InputMaybe<IntegerFilter>;
  flexForwardDownhill?: InputMaybe<IntegerFilter>;
  flexFourtyfiveDownhill?: InputMaybe<IntegerFilter>;
  flexNinetyDownhill?: InputMaybe<IntegerFilter>;
  forceFifteenForwardUphill?: InputMaybe<FloatFilter>;
  forceTenBackwardsUphill?: InputMaybe<FloatFilter>;
  forefootWidthMax?: InputMaybe<FloatFilter>;
  id?: InputMaybe<ItemIdFilter>;
  ingredient?: InputMaybe<LinksFilter>;
  inserts?: InputMaybe<LinksFilter>;
  isSustainableDr?: InputMaybe<BooleanFilter>;
  isSustainableRec?: InputMaybe<BooleanFilter>;
  isSustainableRnw?: InputMaybe<BooleanFilter>;
  labBootfitting?: InputMaybe<IntegerFilter>;
  labBuckles?: InputMaybe<IntegerFilter>;
  labCramponability?: InputMaybe<IntegerFilter>;
  labSkiwalk?: InputMaybe<IntegerFilter>;
  lastMax?: InputMaybe<FloatFilter>;
  lastMin?: InputMaybe<FloatFilter>;
  leanForward?: InputMaybe<StringFilter>;
  leverDescription?: InputMaybe<StringFilter>;
  leverNumber?: InputMaybe<IntegerFilter>;
  linerDescription?: InputMaybe<StringFilter>;
  linerMaterials?: InputMaybe<LinksFilter>;
  linerWeight?: InputMaybe<IntegerFilter>;
  madeIn?: InputMaybe<LinkFilter>;
  measurementsComplete?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  notSuitableFor?: InputMaybe<TextFilter>;
  performanceClimbing?: InputMaybe<IntegerFilter>;
  performanceSkiing?: InputMaybe<IntegerFilter>;
  performanceSkisAscent?: InputMaybe<IntegerFilter>;
  performanceWalk?: InputMaybe<IntegerFilter>;
  pinDistance?: InputMaybe<FloatFilter>;
  previewDescription?: InputMaybe<TextFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  productStatus?: InputMaybe<LinkFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  releasedIn?: InputMaybe<StringFilter>;
  scopes?: InputMaybe<LinksFilter>;
  shaftHeightMax?: InputMaybe<IntegerFilter>;
  shellLengthExternalDeclared?: InputMaybe<IntegerFilter>;
  shellLengthExternalMeasured?: InputMaybe<IntegerFilter>;
  shellLengthInner?: InputMaybe<IntegerFilter>;
  shellMaterials?: InputMaybe<LinksFilter>;
  shellWeight?: InputMaybe<IntegerFilter>;
  shellWidthExternal?: InputMaybe<FloatFilter>;
  sizeDeclared?: InputMaybe<FloatFilter>;
  sizeMax?: InputMaybe<FloatFilter>;
  sizeMin?: InputMaybe<FloatFilter>;
  sizeTested?: InputMaybe<FloatFilter>;
  sizeWeighed?: InputMaybe<FloatFilter>;
  sizesDescription?: InputMaybe<StringFilter>;
  skiedBy?: InputMaybe<LinksFilter>;
  skierTypes?: InputMaybe<LinksFilter>;
  skis?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  soleDescription?: InputMaybe<StringFilter>;
  soleThicknessToe?: InputMaybe<FloatFilter>;
  suitableFor?: InputMaybe<TextFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  testedLabDescription?: InputMaybe<TextFilter>;
  testedPreview?: InputMaybe<StringFilter>;
  testedSkiingDescription?: InputMaybe<TextFilter>;
  testedWalkDescription?: InputMaybe<TextFilter>;
  thermalValue?: InputMaybe<StringFilter>;
  tongueHeightMax?: InputMaybe<IntegerFilter>;
  usedBy?: InputMaybe<StringFilter>;
  versions?: InputMaybe<LinksFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
  weightMeasured?: InputMaybe<IntegerFilter>;
};

export enum BootModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AnkleWidthMaxAsc = 'ankleWidthMax_ASC',
  AnkleWidthMaxDesc = 'ankleWidthMax_DESC',
  CuffRomAsc = 'cuffRom_ASC',
  CuffRomDesc = 'cuffRom_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  FlexBackwardsDownhillAsc = 'flexBackwardsDownhill_ASC',
  FlexBackwardsDownhillDesc = 'flexBackwardsDownhill_DESC',
  FlexForwardDownhillAsc = 'flexForwardDownhill_ASC',
  FlexForwardDownhillDesc = 'flexForwardDownhill_DESC',
  FlexFourtyfiveDownhillAsc = 'flexFourtyfiveDownhill_ASC',
  FlexFourtyfiveDownhillDesc = 'flexFourtyfiveDownhill_DESC',
  FlexNinetyDownhillAsc = 'flexNinetyDownhill_ASC',
  FlexNinetyDownhillDesc = 'flexNinetyDownhill_DESC',
  ForceFifteenForwardUphillAsc = 'forceFifteenForwardUphill_ASC',
  ForceFifteenForwardUphillDesc = 'forceFifteenForwardUphill_DESC',
  ForceTenBackwardsUphillAsc = 'forceTenBackwardsUphill_ASC',
  ForceTenBackwardsUphillDesc = 'forceTenBackwardsUphill_DESC',
  ForefootWidthMaxAsc = 'forefootWidthMax_ASC',
  ForefootWidthMaxDesc = 'forefootWidthMax_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsSustainableDrAsc = 'isSustainableDr_ASC',
  IsSustainableDrDesc = 'isSustainableDr_DESC',
  IsSustainableRecAsc = 'isSustainableRec_ASC',
  IsSustainableRecDesc = 'isSustainableRec_DESC',
  IsSustainableRnwAsc = 'isSustainableRnw_ASC',
  IsSustainableRnwDesc = 'isSustainableRnw_DESC',
  LabBootfittingAsc = 'labBootfitting_ASC',
  LabBootfittingDesc = 'labBootfitting_DESC',
  LabBucklesAsc = 'labBuckles_ASC',
  LabBucklesDesc = 'labBuckles_DESC',
  LabCramponabilityAsc = 'labCramponability_ASC',
  LabCramponabilityDesc = 'labCramponability_DESC',
  LabSkiwalkAsc = 'labSkiwalk_ASC',
  LabSkiwalkDesc = 'labSkiwalk_DESC',
  LastMaxAsc = 'lastMax_ASC',
  LastMaxDesc = 'lastMax_DESC',
  LastMinAsc = 'lastMin_ASC',
  LastMinDesc = 'lastMin_DESC',
  LeanForwardAsc = 'leanForward_ASC',
  LeanForwardDesc = 'leanForward_DESC',
  LeverDescriptionAsc = 'leverDescription_ASC',
  LeverDescriptionDesc = 'leverDescription_DESC',
  LeverNumberAsc = 'leverNumber_ASC',
  LeverNumberDesc = 'leverNumber_DESC',
  LinerDescriptionAsc = 'linerDescription_ASC',
  LinerDescriptionDesc = 'linerDescription_DESC',
  LinerWeightAsc = 'linerWeight_ASC',
  LinerWeightDesc = 'linerWeight_DESC',
  MeasurementsCompleteAsc = 'measurementsComplete_ASC',
  MeasurementsCompleteDesc = 'measurementsComplete_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PerformanceClimbingAsc = 'performanceClimbing_ASC',
  PerformanceClimbingDesc = 'performanceClimbing_DESC',
  PerformanceSkiingAsc = 'performanceSkiing_ASC',
  PerformanceSkiingDesc = 'performanceSkiing_DESC',
  PerformanceSkisAscentAsc = 'performanceSkisAscent_ASC',
  PerformanceSkisAscentDesc = 'performanceSkisAscent_DESC',
  PerformanceWalkAsc = 'performanceWalk_ASC',
  PerformanceWalkDesc = 'performanceWalk_DESC',
  PinDistanceAsc = 'pinDistance_ASC',
  PinDistanceDesc = 'pinDistance_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  ReleasedInAsc = 'releasedIn_ASC',
  ReleasedInDesc = 'releasedIn_DESC',
  ShaftHeightMaxAsc = 'shaftHeightMax_ASC',
  ShaftHeightMaxDesc = 'shaftHeightMax_DESC',
  ShellLengthExternalDeclaredAsc = 'shellLengthExternalDeclared_ASC',
  ShellLengthExternalDeclaredDesc = 'shellLengthExternalDeclared_DESC',
  ShellLengthExternalMeasuredAsc = 'shellLengthExternalMeasured_ASC',
  ShellLengthExternalMeasuredDesc = 'shellLengthExternalMeasured_DESC',
  ShellLengthInnerAsc = 'shellLengthInner_ASC',
  ShellLengthInnerDesc = 'shellLengthInner_DESC',
  ShellWeightAsc = 'shellWeight_ASC',
  ShellWeightDesc = 'shellWeight_DESC',
  ShellWidthExternalAsc = 'shellWidthExternal_ASC',
  ShellWidthExternalDesc = 'shellWidthExternal_DESC',
  SizeDeclaredAsc = 'sizeDeclared_ASC',
  SizeDeclaredDesc = 'sizeDeclared_DESC',
  SizeMaxAsc = 'sizeMax_ASC',
  SizeMaxDesc = 'sizeMax_DESC',
  SizeMinAsc = 'sizeMin_ASC',
  SizeMinDesc = 'sizeMin_DESC',
  SizeTestedAsc = 'sizeTested_ASC',
  SizeTestedDesc = 'sizeTested_DESC',
  SizeWeighedAsc = 'sizeWeighed_ASC',
  SizeWeighedDesc = 'sizeWeighed_DESC',
  SizesDescriptionAsc = 'sizesDescription_ASC',
  SizesDescriptionDesc = 'sizesDescription_DESC',
  SoleDescriptionAsc = 'soleDescription_ASC',
  SoleDescriptionDesc = 'soleDescription_DESC',
  SoleThicknessToeAsc = 'soleThicknessToe_ASC',
  SoleThicknessToeDesc = 'soleThicknessToe_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TestedPreviewAsc = 'testedPreview_ASC',
  TestedPreviewDesc = 'testedPreview_DESC',
  ThermalValueAsc = 'thermalValue_ASC',
  ThermalValueDesc = 'thermalValue_DESC',
  TongueHeightMaxAsc = 'tongueHeightMax_ASC',
  TongueHeightMaxDesc = 'tongueHeightMax_DESC',
  UsedByAsc = 'usedBy_ASC',
  UsedByDesc = 'usedBy_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC',
  WeightMeasuredAsc = 'weightMeasured_ASC',
  WeightMeasuredDesc = 'weightMeasured_DESC'
}

/** Record of type Scarponi (boot) */
export type BootRecord = RecordInterface & {
  __typename?: 'BootRecord';
  _allAlsoSuitableForLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLeanForwardLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLeverDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLinerDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allNotSuitableForLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPreviewDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSizesDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSoleDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSuitableForLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedLabDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedSkiingDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedWalkDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUsageSuggestionsLocales?: Maybe<Array<UsageSuggestionRecordListListNonNullMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alsoSuitableFor?: Maybe<Scalars['String']['output']>;
  ankleWidthMax?: Maybe<Scalars['FloatType']['output']>;
  awards: Array<AwardRecord>;
  bindings: Array<BindingRecord>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  colors: Array<ColorRecord>;
  cuffRom?: Maybe<Scalars['IntType']['output']>;
  curveDownhill?: Maybe<CurveRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  editions: Array<EditionRecord>;
  families: Array<ProductFamilyRecord>;
  flexBackwardsDownhill?: Maybe<Scalars['IntType']['output']>;
  flexForwardDownhill?: Maybe<Scalars['IntType']['output']>;
  flexFourtyfiveDownhill?: Maybe<Scalars['IntType']['output']>;
  flexNinetyDownhill?: Maybe<Scalars['IntType']['output']>;
  forceFifteenForwardUphill?: Maybe<Scalars['FloatType']['output']>;
  forceTenBackwardsUphill?: Maybe<Scalars['FloatType']['output']>;
  forefootWidthMax?: Maybe<Scalars['FloatType']['output']>;
  id: Scalars['ItemId']['output'];
  ingredient: Array<IngredientRecord>;
  inserts: Array<InsertRecord>;
  isSustainableDr?: Maybe<Scalars['BooleanType']['output']>;
  isSustainableRec?: Maybe<Scalars['BooleanType']['output']>;
  isSustainableRnw?: Maybe<Scalars['BooleanType']['output']>;
  labBootfitting?: Maybe<Scalars['IntType']['output']>;
  labBuckles?: Maybe<Scalars['IntType']['output']>;
  labCramponability?: Maybe<Scalars['IntType']['output']>;
  labSkiwalk?: Maybe<Scalars['IntType']['output']>;
  lastMax?: Maybe<Scalars['FloatType']['output']>;
  lastMin?: Maybe<Scalars['FloatType']['output']>;
  leanForward?: Maybe<Scalars['String']['output']>;
  leverDescription?: Maybe<Scalars['String']['output']>;
  leverNumber?: Maybe<Scalars['IntType']['output']>;
  linerDescription?: Maybe<Scalars['String']['output']>;
  linerMaterials: Array<MaterialRecord>;
  linerWeight?: Maybe<Scalars['IntType']['output']>;
  madeIn?: Maybe<CountryRecord>;
  measurementsComplete?: Maybe<Scalars['BooleanType']['output']>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  notSuitableFor?: Maybe<Scalars['String']['output']>;
  performanceClimbing?: Maybe<Scalars['IntType']['output']>;
  performanceSkiing?: Maybe<Scalars['IntType']['output']>;
  performanceSkisAscent?: Maybe<Scalars['IntType']['output']>;
  performanceWalk?: Maybe<Scalars['IntType']['output']>;
  pinDistance?: Maybe<Scalars['FloatType']['output']>;
  previewDescription?: Maybe<Scalars['String']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  productStatus?: Maybe<StatusRecord>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  releasedIn?: Maybe<Scalars['String']['output']>;
  scopes: Array<ScopeRecord>;
  shaftHeightMax?: Maybe<Scalars['IntType']['output']>;
  shellLengthExternalDeclared?: Maybe<Scalars['IntType']['output']>;
  shellLengthExternalMeasured?: Maybe<Scalars['IntType']['output']>;
  shellLengthInner?: Maybe<Scalars['IntType']['output']>;
  shellMaterials: Array<MaterialRecord>;
  shellWeight?: Maybe<Scalars['IntType']['output']>;
  shellWidthExternal?: Maybe<Scalars['FloatType']['output']>;
  sizeDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizeMax?: Maybe<Scalars['FloatType']['output']>;
  sizeMin?: Maybe<Scalars['FloatType']['output']>;
  sizeTested?: Maybe<Scalars['FloatType']['output']>;
  sizeWeighed?: Maybe<Scalars['FloatType']['output']>;
  sizesDescription?: Maybe<Scalars['String']['output']>;
  skiedBy: Array<PersonRecord>;
  skierTypes: Array<SkierRecord>;
  skis: Array<SkiRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  soleDescription?: Maybe<Scalars['String']['output']>;
  soleThicknessToe?: Maybe<Scalars['FloatType']['output']>;
  suitableFor?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  testedLabDescription?: Maybe<Scalars['String']['output']>;
  testedPreview: Scalars['String']['output'];
  testedSkiingDescription?: Maybe<Scalars['String']['output']>;
  testedWalkDescription?: Maybe<Scalars['String']['output']>;
  thermalValue?: Maybe<Scalars['String']['output']>;
  tongueHeightMax?: Maybe<Scalars['IntType']['output']>;
  usageSuggestions: Array<UsageSuggestionRecord>;
  usedBy?: Maybe<Scalars['String']['output']>;
  versions: Array<BootRecord>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
  weightMeasured?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllAlsoSuitableForLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllLeanForwardLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllLeverDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllLinerDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllNotSuitableForLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllPreviewDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllSizesDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllSoleDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllSuitableForLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllTestedLabDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllTestedSkiingDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllTestedWalkDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllUsageSuggestionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordAlsoSuitableForArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordLeanForwardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordLeverDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordLinerDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordNotSuitableForArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordPreviewDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordSizesDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordSoleDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordSuitableForArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordTestedLabDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordTestedSkiingDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordTestedWalkDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi (boot) */
export type BootRecordUsageSuggestionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi (boot) */
export type BootRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum BrandModelFieldsReferencingArticleModel {
  BrandFeaturedArticles = 'brand_featuredArticles',
  BrandRelatedArticles = 'brand_relatedArticles'
}

/** Linking fields */
export enum BrandModelFieldsReferencingProductFamilyModel {
  BrandRelatedFamilies = 'brand_relatedFamilies'
}

export type BrandModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BrandModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BrandModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  country?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  featuredArticles?: InputMaybe<LinksFilter>;
  gallery?: InputMaybe<GalleryFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  information?: InputMaybe<TextFilter>;
  isFeatured?: InputMaybe<BooleanFilter>;
  logo?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<ParentFilter>;
  position?: InputMaybe<PositionFilter>;
  relatedArticles?: InputMaybe<LinksFilter>;
  relatedArticlesHeading?: InputMaybe<StringFilter>;
  relatedArticlesSubheading?: InputMaybe<StringFilter>;
  relatedFamilies?: InputMaybe<LinksFilter>;
  relatedFamiliesHeading?: InputMaybe<StringFilter>;
  relatedFamiliesImage?: InputMaybe<FileFilter>;
  relatedFamiliesImageMobile?: InputMaybe<FileFilter>;
  relatedProductsHeading?: InputMaybe<StringFilter>;
  relatedProductsImage?: InputMaybe<FileFilter>;
  relatedProductsSubheading?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  subheading?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export enum BrandModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RelatedArticlesHeadingAsc = 'relatedArticlesHeading_ASC',
  RelatedArticlesHeadingDesc = 'relatedArticlesHeading_DESC',
  RelatedArticlesSubheadingAsc = 'relatedArticlesSubheading_ASC',
  RelatedArticlesSubheadingDesc = 'relatedArticlesSubheading_DESC',
  RelatedFamiliesHeadingAsc = 'relatedFamiliesHeading_ASC',
  RelatedFamiliesHeadingDesc = 'relatedFamiliesHeading_DESC',
  RelatedProductsHeadingAsc = 'relatedProductsHeading_ASC',
  RelatedProductsHeadingDesc = 'relatedProductsHeading_DESC',
  RelatedProductsSubheadingAsc = 'relatedProductsSubheading_ASC',
  RelatedProductsSubheadingDesc = 'relatedProductsSubheading_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

/** Record of type Marca (brand) */
export type BrandRecord = RecordInterface & {
  __typename?: 'BrandRecord';
  _allCountryLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allInformationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingAirbags: Array<AirbagRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAirbagsMeta: CollectionMetadata;
  _allReferencingArtvas: Array<ArtvaRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtvasMeta: CollectionMetadata;
  _allReferencingAxes: Array<AxRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAxesMeta: CollectionMetadata;
  _allReferencingBindings: Array<BindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBindingsMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingCrampons: Array<CramponRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCramponsMeta: CollectionMetadata;
  _allReferencingHarnesses: Array<HarnessRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHarnessesMeta: CollectionMetadata;
  _allReferencingHelmets: Array<HelmetRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHelmetsMeta: CollectionMetadata;
  _allReferencingPoles: Array<PoleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPolesMeta: CollectionMetadata;
  _allReferencingProbes: Array<ProbeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProbesMeta: CollectionMetadata;
  _allReferencingRopes: Array<RopeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingRopesMeta: CollectionMetadata;
  _allReferencingShovels: Array<ShovelRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingShovelsMeta: CollectionMetadata;
  _allReferencingSkins: Array<SkinRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkinsMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allReferencingSplitboardBindings: Array<SplitboardBindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBindingsMeta: CollectionMetadata;
  _allReferencingSplitboardBoots: Array<SplitboardBootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBootsMeta: CollectionMetadata;
  _allReferencingSplitboards: Array<SplitboardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardsMeta: CollectionMetadata;
  _allRelatedArticlesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedArticlesSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedFamiliesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  children?: Maybe<Array<Maybe<BrandRecord>>>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featuredArticles: Array<ArticleRecord>;
  gallery: Array<FileField>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  information?: Maybe<Scalars['String']['output']>;
  isFeatured?: Maybe<Scalars['BooleanType']['output']>;
  logo?: Maybe<FileField>;
  name: Scalars['String']['output'];
  parent?: Maybe<BrandRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  relatedArticles: Array<ArticleRecord>;
  relatedArticlesHeading?: Maybe<Scalars['String']['output']>;
  relatedArticlesSubheading?: Maybe<Scalars['String']['output']>;
  relatedFamilies: Array<ProductFamilyRecord>;
  relatedFamiliesHeading?: Maybe<Scalars['String']['output']>;
  relatedFamiliesImage?: Maybe<FileField>;
  relatedFamiliesImageMobile?: Maybe<FileField>;
  relatedProductsHeading?: Maybe<Scalars['String']['output']>;
  relatedProductsImage?: Maybe<FileField>;
  relatedProductsSubheading?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  subheading?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllCountryLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllInformationLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingAirbagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AirbagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingAirbagsMetaArgs = {
  filter?: InputMaybe<AirbagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingArtvasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtvaModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingArtvasMetaArgs = {
  filter?: InputMaybe<ArtvaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingAxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingAxesMetaArgs = {
  filter?: InputMaybe<AxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingBindingsMetaArgs = {
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingCramponsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CramponModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingCramponsMetaArgs = {
  filter?: InputMaybe<CramponModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingHarnessesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HarnessModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingHarnessesMetaArgs = {
  filter?: InputMaybe<HarnessModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingHelmetsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HelmetModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingHelmetsMetaArgs = {
  filter?: InputMaybe<HelmetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingPolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingPolesMetaArgs = {
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingProbesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProbeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingProbesMetaArgs = {
  filter?: InputMaybe<ProbeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingRopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenRopeAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingRopesMetaArgs = {
  filter?: InputMaybe<RopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenRopeAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingShovelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShovelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingShovelsMetaArgs = {
  filter?: InputMaybe<ShovelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSkinsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSkinsMetaArgs = {
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSplitboardBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSplitboardBindingsMetaArgs = {
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSplitboardBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSplitboardBootsMetaArgs = {
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllReferencingSplitboardsMetaArgs = {
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndBrand>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllRelatedArticlesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllRelatedArticlesSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllRelatedFamiliesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllRelatedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllRelatedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordCountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordInformationArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Marca (brand) */
export type BrandRecordRelatedArticlesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordRelatedArticlesSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordRelatedFamiliesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordRelatedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordRelatedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Marca (brand) */
export type BrandRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum CategoryModelFieldsReferencingArticleModel {
  CategoryRelatedArticles = 'category_relatedArticles'
}

/** Linking fields */
export enum CategoryModelFieldsReferencingProductFamilyModel {
  CategoryRelatedFamilies = 'category_relatedFamilies'
}

/** Linking fields */
export enum CategoryModelFieldsReferencingScopeModel {
  CategoryScope = 'category_scope'
}

export type CategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<ParentFilter>;
  position?: InputMaybe<PositionFilter>;
  relatedArticles?: InputMaybe<LinksFilter>;
  relatedArticlesHeading?: InputMaybe<StringFilter>;
  relatedArticlesSubheading?: InputMaybe<StringFilter>;
  relatedFamilies?: InputMaybe<LinksFilter>;
  relatedFamiliesHeading?: InputMaybe<StringFilter>;
  relatedFamiliesImage?: InputMaybe<FileFilter>;
  relatedFamiliesImageMobile?: InputMaybe<FileFilter>;
  relatedProductsHeading?: InputMaybe<StringFilter>;
  relatedProductsImage?: InputMaybe<FileFilter>;
  relatedProductsSubheading?: InputMaybe<StringFilter>;
  scope?: InputMaybe<LinkFilter>;
  slug?: InputMaybe<SlugFilter>;
  subheading?: InputMaybe<StringFilter>;
};

export enum CategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  RelatedArticlesHeadingAsc = 'relatedArticlesHeading_ASC',
  RelatedArticlesHeadingDesc = 'relatedArticlesHeading_DESC',
  RelatedArticlesSubheadingAsc = 'relatedArticlesSubheading_ASC',
  RelatedArticlesSubheadingDesc = 'relatedArticlesSubheading_DESC',
  RelatedFamiliesHeadingAsc = 'relatedFamiliesHeading_ASC',
  RelatedFamiliesHeadingDesc = 'relatedFamiliesHeading_DESC',
  RelatedProductsHeadingAsc = 'relatedProductsHeading_ASC',
  RelatedProductsHeadingDesc = 'relatedProductsHeading_DESC',
  RelatedProductsSubheadingAsc = 'relatedProductsSubheading_ASC',
  RelatedProductsSubheadingDesc = 'relatedProductsSubheading_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC'
}

/** Record of type Categorie (category) */
export type CategoryRecord = RecordInterface & {
  __typename?: 'CategoryRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingArticles: Array<ArticleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArticlesMeta: CollectionMetadata;
  _allReferencingBindings: Array<BindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBindingsMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingPeople: Array<PersonRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPeopleMeta: CollectionMetadata;
  _allReferencingPoles: Array<PoleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPolesMeta: CollectionMetadata;
  _allReferencingSkins: Array<SkinRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkinsMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allReferencingSplitboardBindings: Array<SplitboardBindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBindingsMeta: CollectionMetadata;
  _allReferencingSplitboardBoots: Array<SplitboardBootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBootsMeta: CollectionMetadata;
  _allReferencingSplitboards: Array<SplitboardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardsMeta: CollectionMetadata;
  _allRelatedArticlesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedArticlesSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedFamiliesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  children?: Maybe<Array<Maybe<CategoryRecord>>>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  name: Scalars['String']['output'];
  parent?: Maybe<CategoryRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  relatedArticles: Array<ArticleRecord>;
  relatedArticlesHeading?: Maybe<Scalars['String']['output']>;
  relatedArticlesSubheading?: Maybe<Scalars['String']['output']>;
  relatedFamilies: Array<ProductFamilyRecord>;
  relatedFamiliesHeading?: Maybe<Scalars['String']['output']>;
  relatedFamiliesImage?: Maybe<FileField>;
  relatedFamiliesImageMobile?: Maybe<FileField>;
  relatedProductsHeading?: Maybe<Scalars['String']['output']>;
  relatedProductsImage?: Maybe<FileField>;
  relatedProductsSubheading?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<ScopeRecord>;
  slug: Scalars['String']['output'];
  subheading?: Maybe<Scalars['String']['output']>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArticleAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingArticlesMetaArgs = {
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArticleAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingBindingsMetaArgs = {
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingPolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingPolesMetaArgs = {
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSkinsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSkinsMetaArgs = {
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSplitboardBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSplitboardBindingsMetaArgs = {
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSplitboardBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSplitboardBootsMetaArgs = {
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllReferencingSplitboardsMetaArgs = {
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndCategory>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllRelatedArticlesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllRelatedArticlesSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllRelatedFamiliesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllRelatedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllRelatedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_AllSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Categorie (category) */
export type CategoryRecordHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordRelatedArticlesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordRelatedArticlesSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordRelatedFamiliesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordRelatedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordRelatedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Categorie (category) */
export type CategoryRecordSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ChannelModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ChannelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ChannelModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum ChannelModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Canale (channel) */
export type ChannelRecord = RecordInterface & {
  __typename?: 'ChannelRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Canale (channel) */
export type ChannelRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Specifies how to filter Color fields */
export type ColorFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type ColorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ColorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntegerFilter>;
  rgb?: InputMaybe<ColorFilter>;
};

export enum ColorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC'
}

/** Record of type Colore (color) */
export type ColorRecord = RecordInterface & {
  __typename?: 'ColorRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['IntType']['output']>;
  rgb?: Maybe<ColorField>;
};


/** Record of type Colore (color) */
export type ColorRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Colore (color) */
export type ColorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Colore (color) */
export type ColorRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum CommonModelFieldsReferencingProductFamilyModel {
  CommonSafetyFamiliesRelated = 'common_safetyFamiliesRelated'
}

export type CommonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CommonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CommonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  allProductsImage?: InputMaybe<FileFilter>;
  allProductsTitle?: InputMaybe<StringFilter>;
  blogHeading?: InputMaybe<StringFilter>;
  blogImage?: InputMaybe<FileFilter>;
  blogSubheading?: InputMaybe<StringFilter>;
  brandHeading?: InputMaybe<StringFilter>;
  brandSubheading?: InputMaybe<StringFilter>;
  categoryCtaText?: InputMaybe<StringFilter>;
  categoryCtaUrl?: InputMaybe<StringFilter>;
  categoryHeading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  launchText?: InputMaybe<TextFilter>;
  launchTextSecondary?: InputMaybe<TextFilter>;
  safetyFamiliesRelated?: InputMaybe<LinksFilter>;
  safetyHeading?: InputMaybe<StringFilter>;
  safetyImage?: InputMaybe<FileFilter>;
  safetyImageMobile?: InputMaybe<FileFilter>;
  scopesHeading?: InputMaybe<StringFilter>;
  servicesHeading?: InputMaybe<StringFilter>;
  teamHeading?: InputMaybe<StringFilter>;
  teamImage?: InputMaybe<FileFilter>;
  teamSliderTitle?: InputMaybe<StringFilter>;
  teamSubheading?: InputMaybe<StringFilter>;
  testerHeading?: InputMaybe<StringFilter>;
  testerImage?: InputMaybe<FileFilter>;
  testerSubheading?: InputMaybe<StringFilter>;
  workedOnHeading?: InputMaybe<StringFilter>;
  workedOnSubheading?: InputMaybe<StringFilter>;
};

export enum CommonModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AllProductsTitleAsc = 'allProductsTitle_ASC',
  AllProductsTitleDesc = 'allProductsTitle_DESC',
  BlogHeadingAsc = 'blogHeading_ASC',
  BlogHeadingDesc = 'blogHeading_DESC',
  BlogSubheadingAsc = 'blogSubheading_ASC',
  BlogSubheadingDesc = 'blogSubheading_DESC',
  BrandHeadingAsc = 'brandHeading_ASC',
  BrandHeadingDesc = 'brandHeading_DESC',
  BrandSubheadingAsc = 'brandSubheading_ASC',
  BrandSubheadingDesc = 'brandSubheading_DESC',
  CategoryCtaTextAsc = 'categoryCtaText_ASC',
  CategoryCtaTextDesc = 'categoryCtaText_DESC',
  CategoryCtaUrlAsc = 'categoryCtaUrl_ASC',
  CategoryCtaUrlDesc = 'categoryCtaUrl_DESC',
  CategoryHeadingAsc = 'categoryHeading_ASC',
  CategoryHeadingDesc = 'categoryHeading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SafetyHeadingAsc = 'safetyHeading_ASC',
  SafetyHeadingDesc = 'safetyHeading_DESC',
  ScopesHeadingAsc = 'scopesHeading_ASC',
  ScopesHeadingDesc = 'scopesHeading_DESC',
  ServicesHeadingAsc = 'servicesHeading_ASC',
  ServicesHeadingDesc = 'servicesHeading_DESC',
  TeamHeadingAsc = 'teamHeading_ASC',
  TeamHeadingDesc = 'teamHeading_DESC',
  TeamSliderTitleAsc = 'teamSliderTitle_ASC',
  TeamSliderTitleDesc = 'teamSliderTitle_DESC',
  TeamSubheadingAsc = 'teamSubheading_ASC',
  TeamSubheadingDesc = 'teamSubheading_DESC',
  TesterHeadingAsc = 'testerHeading_ASC',
  TesterHeadingDesc = 'testerHeading_DESC',
  TesterSubheadingAsc = 'testerSubheading_ASC',
  TesterSubheadingDesc = 'testerSubheading_DESC',
  WorkedOnHeadingAsc = 'workedOnHeading_ASC',
  WorkedOnHeadingDesc = 'workedOnHeading_DESC',
  WorkedOnSubheadingAsc = 'workedOnSubheading_ASC',
  WorkedOnSubheadingDesc = 'workedOnSubheading_DESC'
}

/** Record of type Common (common) */
export type CommonRecord = RecordInterface & {
  __typename?: 'CommonRecord';
  _allAllProductsTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBlogHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBlogSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBrandHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBrandSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCategoryCtaTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCategoryCtaUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCategoryHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLaunchTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLaunchTextSecondaryLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSafetyHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allScopesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allServicesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allServicesUrlsLocales?: Maybe<Array<UrlRecordListListNonNullMultiLocaleField>>;
  _allTeamHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTeamSliderTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTeamSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTesterHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTesterSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWorkedOnHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWorkedOnSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  allProductsImage?: Maybe<FileField>;
  allProductsTitle?: Maybe<Scalars['String']['output']>;
  blogHeading?: Maybe<Scalars['String']['output']>;
  blogImage?: Maybe<FileField>;
  blogSubheading?: Maybe<Scalars['String']['output']>;
  brandHeading?: Maybe<Scalars['String']['output']>;
  brandSubheading?: Maybe<Scalars['String']['output']>;
  categoryCtaText?: Maybe<Scalars['String']['output']>;
  categoryCtaUrl?: Maybe<Scalars['String']['output']>;
  categoryHeading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  launchText?: Maybe<Scalars['String']['output']>;
  launchTextSecondary?: Maybe<Scalars['String']['output']>;
  safetyFamiliesRelated: Array<ProductFamilyRecord>;
  safetyHeading?: Maybe<Scalars['String']['output']>;
  safetyImage?: Maybe<FileField>;
  safetyImageMobile?: Maybe<FileField>;
  scopesHeading?: Maybe<Scalars['String']['output']>;
  servicesHeading?: Maybe<Scalars['String']['output']>;
  servicesUrls: Array<UrlRecord>;
  teamHeading?: Maybe<Scalars['String']['output']>;
  teamImage?: Maybe<FileField>;
  teamSliderTitle?: Maybe<Scalars['String']['output']>;
  teamSubheading?: Maybe<Scalars['String']['output']>;
  testerHeading?: Maybe<Scalars['String']['output']>;
  testerImage?: Maybe<FileField>;
  testerSubheading?: Maybe<Scalars['String']['output']>;
  workedOnHeading?: Maybe<Scalars['String']['output']>;
  workedOnSubheading?: Maybe<Scalars['String']['output']>;
};


/** Record of type Common (common) */
export type CommonRecord_AllAllProductsTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllBlogHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllBlogSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllBrandHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllBrandSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllCategoryCtaTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllCategoryCtaUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllCategoryHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllLaunchTextLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Common (common) */
export type CommonRecord_AllLaunchTextSecondaryLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Common (common) */
export type CommonRecord_AllSafetyHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllScopesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllServicesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllServicesUrlsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllTeamHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllTeamSliderTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllTeamSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllTesterHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllTesterSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllWorkedOnHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_AllWorkedOnSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordAllProductsTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordBlogHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordBlogSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordBrandHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordBrandSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordCategoryCtaTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordCategoryCtaUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordCategoryHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordLaunchTextArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Common (common) */
export type CommonRecordLaunchTextSecondaryArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Common (common) */
export type CommonRecordSafetyHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordScopesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordServicesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordServicesUrlsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordTeamHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordTeamSliderTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordTeamSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordTesterHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordTesterSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordWorkedOnHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Common (common) */
export type CommonRecordWorkedOnSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Slide comparativa (comparative_slide) */
export type ComparativeSlideRecord = RecordInterface & {
  __typename?: 'ComparativeSlideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  traits: Array<TraitRecord>;
};


/** Block of type Slide comparativa (comparative_slide) */
export type ComparativeSlideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Carosello comparativo (comparative_slider) */
export type ComparativeSliderRecord = RecordInterface & {
  __typename?: 'ComparativeSliderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  legend?: Maybe<Scalars['String']['output']>;
  slides: Array<ComparativeSlideRecord>;
};


/** Block of type Carosello comparativo (comparative_slider) */
export type ComparativeSliderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ConstructionTechniqueModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConstructionTechniqueModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConstructionTechniqueModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum ConstructionTechniqueModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Tecniche costruzione (construction_technique) */
export type ConstructionTechniqueRecord = RecordInterface & {
  __typename?: 'ConstructionTechniqueRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Tecniche costruzione (construction_technique) */
export type ConstructionTechniqueRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tecniche costruzione (construction_technique) */
export type ConstructionTechniqueRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tecniche costruzione (construction_technique) */
export type ConstructionTechniqueRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Contenuto (content) */
export type ContentRecord = RecordInterface & {
  __typename?: 'ContentRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Contenuto (content) */
export type ContentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Contenuto (content) */
export type ContentRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CookiePrivacyModelModulesField = ContentRecord | HeadingRecord;

export type CookiePrivacyModelModulesFieldListListNonNullMultiLocaleField = {
  __typename?: 'CookiePrivacyModelModulesFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<CookiePrivacyModelModulesField>;
};

/** Record of type Cookie & privacy (cookie_privacy) */
export type CookiePrivacyRecord = RecordInterface & {
  __typename?: 'CookiePrivacyRecord';
  _allModulesLocales?: Maybe<Array<CookiePrivacyModelModulesFieldListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  modules: Array<CookiePrivacyModelModulesField>;
};


/** Record of type Cookie & privacy (cookie_privacy) */
export type CookiePrivacyRecord_AllModulesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cookie & privacy (cookie_privacy) */
export type CookiePrivacyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cookie & privacy (cookie_privacy) */
export type CookiePrivacyRecordModulesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type CountryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
};

export enum CountryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

/** Record of type Country (country) */
export type CountryRecord = RecordInterface & {
  __typename?: 'CountryRecord';
  _allCountryLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Record of type Country (country) */
export type CountryRecord_AllCountryLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Country (country) */
export type CountryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Country (country) */
export type CountryRecordCountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum CramponModelFieldsReferencingAwardModel {
  CramponAwards = 'crampon_awards'
}

/** Linking fields */
export enum CramponModelFieldsReferencingBrandModel {
  CramponBrand = 'crampon_brand'
}

/** Linking fields */
export enum CramponModelFieldsReferencingProductFamilyModel {
  CramponFamilies = 'crampon_families'
}

/** Linking fields */
export enum CramponModelFieldsReferencingScopeModel {
  CramponScopes = 'crampon_scopes'
}

export type CramponModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CramponModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CramponModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  materials?: InputMaybe<LinksFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  tipsNumber?: InputMaybe<IntegerFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum CramponModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TipsNumberAsc = 'tipsNumber_ASC',
  TipsNumberDesc = 'tipsNumber_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Rampone (crampon) */
export type CramponRecord = RecordInterface & {
  __typename?: 'CramponRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  materials: Array<MaterialRecord>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes: Array<ScopeRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  tipsNumber?: Maybe<Scalars['IntType']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Rampone (crampon) */
export type CramponRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rampone (crampon) */
export type CramponRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Rampone (crampon) */
export type CramponRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rampone (crampon) */
export type CramponRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rampone (crampon) */
export type CramponRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Rampone (crampon) */
export type CramponRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Rampone (crampon) */
export type CramponRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreditModelModulesField = ContentRecord | HeadingRecord;

export type CreditModelModulesFieldListListNonNullMultiLocaleField = {
  __typename?: 'CreditModelModulesFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<CreditModelModulesField>;
};

/** Record of type Credits (credit) */
export type CreditRecord = RecordInterface & {
  __typename?: 'CreditRecord';
  _allModulesLocales?: Maybe<Array<CreditModelModulesFieldListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  modules: Array<CreditModelModulesField>;
};


/** Record of type Credits (credit) */
export type CreditRecord_AllModulesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Credits (credit) */
export type CreditRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Credits (credit) */
export type CreditRecordModulesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type CurveArcModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CurveArcModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CurveArcModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum CurveArcModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Arco di curva (curve_arc) */
export type CurveArcRecord = RecordInterface & {
  __typename?: 'CurveArcRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Arco di curva (curve_arc) */
export type CurveArcRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Arco di curva (curve_arc) */
export type CurveArcRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Arco di curva (curve_arc) */
export type CurveArcRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type CurveModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CurveModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CurveModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum CurveModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Curva (curve) */
export type CurveRecord = RecordInterface & {
  __typename?: 'CurveRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Curva (curve) */
export type CurveRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Curva (curve) */
export type CurveRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Curva (curve) */
export type CurveRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum EditionModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Anno edizione (edition) */
export type EditionRecord = RecordInterface & {
  __typename?: 'EditionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Anno edizione (edition) */
export type EditionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

/** Block of type Titolo in evidenza (featured_heading) */
export type FeaturedHeadingRecord = RecordInterface & {
  __typename?: 'FeaturedHeadingRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  subtext?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Titolo in evidenza (featured_heading) */
export type FeaturedHeadingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Testo due colonne in evidenza (featured_two_column_text) */
export type FeaturedTwoColumnTextRecord = RecordInterface & {
  __typename?: 'FeaturedTwoColumnTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  firstColumnText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  secondColumnText?: Maybe<Scalars['String']['output']>;
  swapColumns?: Maybe<Scalars['BooleanType']['output']>;
};


/** Block of type Testo due colonne in evidenza (featured_two_column_text) */
export type FeaturedTwoColumnTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Testo due colonne in evidenza (featured_two_column_text) */
export type FeaturedTwoColumnTextRecordFirstColumnTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Testo due colonne in evidenza (featured_two_column_text) */
export type FeaturedTwoColumnTextRecordSecondColumnTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter Floating-point fields */
export type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']['input']>;
};

export type FormModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answers?: InputMaybe<JsonFilter>;
  finishedAt?: InputMaybe<DateTimeFilter>;
  formType?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  product?: InputMaybe<LinkFilter>;
  startedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<LinkFilter>;
};

export enum FormModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  FinishedAtAsc = 'finishedAt_ASC',
  FinishedAtDesc = 'finishedAt_DESC',
  FormTypeAsc = 'formType_ASC',
  FormTypeDesc = 'formType_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StartedAtAsc = 'startedAt_ASC',
  StartedAtDesc = 'startedAt_DESC'
}

export type FormModelProductField = AirbagRecord | ArtvaRecord | AxRecord | BindingRecord | BootRecord | CramponRecord | HarnessRecord | HelmetRecord | PoleRecord | ProbeRecord | ShovelRecord | SkiRecord | SkinRecord | SplitboardBindingRecord | SplitboardBootRecord | SplitboardRecord;

/** Record of type Form (form) */
export type FormRecord = RecordInterface & {
  __typename?: 'FormRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answers?: Maybe<Scalars['JsonField']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  formType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  product?: Maybe<FormModelProductField>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UserRecord>;
};


/** Record of type Form (form) */
export type FormRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Linking fields */
export enum HarnessModelFieldsReferencingAwardModel {
  HarnessAwards = 'harness_awards'
}

/** Linking fields */
export enum HarnessModelFieldsReferencingBrandModel {
  HarnessBrand = 'harness_brand'
}

/** Linking fields */
export enum HarnessModelFieldsReferencingProductFamilyModel {
  HarnessFamilies = 'harness_families'
}

/** Linking fields */
export enum HarnessModelFieldsReferencingScopeModel {
  HarnessScopes = 'harness_scopes'
}

export type HarnessModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HarnessModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HarnessModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum HarnessModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Imbrago (harness) */
export type HarnessRecord = RecordInterface & {
  __typename?: 'HarnessRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes: Array<ScopeRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Imbrago (harness) */
export type HarnessRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Titolo (heading) */
export type HeadingRecord = RecordInterface & {
  __typename?: 'HeadingRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  size?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Titolo (heading) */
export type HeadingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum HelmetModelFieldsReferencingAwardModel {
  HelmetAwards = 'helmet_awards'
}

/** Linking fields */
export enum HelmetModelFieldsReferencingBrandModel {
  HelmetBrand = 'helmet_brand'
}

/** Linking fields */
export enum HelmetModelFieldsReferencingProductFamilyModel {
  HelmetFamilies = 'helmet_families'
}

/** Linking fields */
export enum HelmetModelFieldsReferencingScopeModel {
  HelmetScopes = 'helmet_scopes'
}

export type HelmetModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HelmetModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HelmetModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  certification?: InputMaybe<StringFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinksFilter>;
  sizeMax?: InputMaybe<IntegerFilter>;
  sizeMin?: InputMaybe<IntegerFilter>;
  sizesDescription?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum HelmetModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CertificationAsc = 'certification_ASC',
  CertificationDesc = 'certification_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  SizeMaxAsc = 'sizeMax_ASC',
  SizeMaxDesc = 'sizeMax_DESC',
  SizeMinAsc = 'sizeMin_ASC',
  SizeMinDesc = 'sizeMin_DESC',
  SizesDescriptionAsc = 'sizesDescription_ASC',
  SizesDescriptionDesc = 'sizesDescription_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Casco (helmet) */
export type HelmetRecord = RecordInterface & {
  __typename?: 'HelmetRecord';
  _allCertificationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSizesDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  certification?: Maybe<Scalars['String']['output']>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes: Array<ScopeRecord>;
  sizeMax?: Maybe<Scalars['IntType']['output']>;
  sizeMin?: Maybe<Scalars['IntType']['output']>;
  sizesDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Casco (helmet) */
export type HelmetRecord_AllCertificationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecord_AllSizesDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Casco (helmet) */
export type HelmetRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecordCertificationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecordSizesDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Casco (helmet) */
export type HelmetRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Casco (helmet) */
export type HelmetRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Hero (hero) */
export type HeroRecord = RecordInterface & {
  __typename?: 'HeroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heroType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  subheading?: Maybe<Scalars['String']['output']>;
};


/** Block of type Hero (hero) */
export type HeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Hero (hero) */
export type HeroRecordSubheadingArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Linking fields */
export enum HomeModelFieldsReferencingArticleModel {
  HomeArticleCarouselArticles = 'home_articleCarouselArticles',
  HomeFeaturedArticles = 'home_featuredArticles'
}

/** Linking fields */
export enum HomeModelFieldsReferencingProductFamilyModel {
  HomeRelatedFamilies = 'home_relatedFamilies'
}

export type HomeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  articleCarouselArticles?: InputMaybe<LinksFilter>;
  articleCarouselSubtitle?: InputMaybe<StringFilter>;
  articleCarouselTitle?: InputMaybe<StringFilter>;
  featuredArticles?: InputMaybe<LinksFilter>;
  gallery?: InputMaybe<GalleryFilter>;
  id?: InputMaybe<ItemIdFilter>;
  launchText?: InputMaybe<TextFilter>;
  launchVideo?: InputMaybe<VideoFilter>;
  launchVideoCaption?: InputMaybe<StringFilter>;
  relatedFamilies?: InputMaybe<LinksFilter>;
  relatedFamiliesHeading?: InputMaybe<StringFilter>;
  relatedFamiliesImage?: InputMaybe<FileFilter>;
  relatedFamiliesImageMobile?: InputMaybe<FileFilter>;
  relatedProductsHeading?: InputMaybe<StringFilter>;
  relatedProductsImage?: InputMaybe<FileFilter>;
  relatedProductsSubheading?: InputMaybe<StringFilter>;
};

export enum HomeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ArticleCarouselSubtitleAsc = 'articleCarouselSubtitle_ASC',
  ArticleCarouselSubtitleDesc = 'articleCarouselSubtitle_DESC',
  ArticleCarouselTitleAsc = 'articleCarouselTitle_ASC',
  ArticleCarouselTitleDesc = 'articleCarouselTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LaunchVideoCaptionAsc = 'launchVideoCaption_ASC',
  LaunchVideoCaptionDesc = 'launchVideoCaption_DESC',
  RelatedFamiliesHeadingAsc = 'relatedFamiliesHeading_ASC',
  RelatedFamiliesHeadingDesc = 'relatedFamiliesHeading_DESC',
  RelatedProductsHeadingAsc = 'relatedProductsHeading_ASC',
  RelatedProductsHeadingDesc = 'relatedProductsHeading_DESC',
  RelatedProductsSubheadingAsc = 'relatedProductsSubheading_ASC',
  RelatedProductsSubheadingDesc = 'relatedProductsSubheading_DESC'
}

/** Record of type Home (home) */
export type HomeRecord = RecordInterface & {
  __typename?: 'HomeRecord';
  _allArticleCarouselSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allArticleCarouselTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLaunchTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLaunchVideoCaptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLauncherCarouselLocales?: Maybe<Array<LauncherRecordListListNonNullMultiLocaleField>>;
  _allRelatedFamiliesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  articleCarouselArticles: Array<ArticleRecord>;
  articleCarouselSubtitle?: Maybe<Scalars['String']['output']>;
  articleCarouselTitle?: Maybe<Scalars['String']['output']>;
  featuredArticles: Array<ArticleRecord>;
  gallery: Array<FileField>;
  id: Scalars['ItemId']['output'];
  launchText?: Maybe<Scalars['String']['output']>;
  launchVideo?: Maybe<VideoField>;
  launchVideoCaption?: Maybe<Scalars['String']['output']>;
  launcherCarousel: Array<LauncherRecord>;
  relatedFamilies: Array<ProductFamilyRecord>;
  relatedFamiliesHeading?: Maybe<Scalars['String']['output']>;
  relatedFamiliesImage?: Maybe<FileField>;
  relatedFamiliesImageMobile?: Maybe<FileField>;
  relatedProductsHeading?: Maybe<Scalars['String']['output']>;
  relatedProductsImage?: Maybe<FileField>;
  relatedProductsSubheading?: Maybe<Scalars['String']['output']>;
};


/** Record of type Home (home) */
export type HomeRecord_AllArticleCarouselSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_AllArticleCarouselTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_AllLaunchTextLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home (home) */
export type HomeRecord_AllLaunchVideoCaptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_AllLauncherCarouselLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_AllRelatedFamiliesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_AllRelatedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_AllRelatedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordArticleCarouselSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordArticleCarouselTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordLaunchTextArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home (home) */
export type HomeRecordLaunchVideoCaptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordLauncherCarouselArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordRelatedFamiliesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordRelatedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home (home) */
export type HomeRecordRelatedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Immagine (image) */
export type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
};


/** Block of type Immagine (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Immagine con testo (image_with_text) */
export type ImageWithTextRecord = RecordInterface & {
  __typename?: 'ImageWithTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  swapColumns?: Maybe<Scalars['BooleanType']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Immagine con testo (image_with_text) */
export type ImageWithTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Immagine con testo (image_with_text) */
export type ImageWithTextRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type InflationSystemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InflationSystemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InflationSystemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum InflationSystemModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Sistema gonfiaggio (inflation_system) */
export type InflationSystemRecord = RecordInterface & {
  __typename?: 'InflationSystemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Sistema gonfiaggio (inflation_system) */
export type InflationSystemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type InflationTypeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InflationTypeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InflationTypeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum InflationTypeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Tipologia gonfiaggio (inflation_type) */
export type InflationTypeRecord = RecordInterface & {
  __typename?: 'InflationTypeRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Tipologia gonfiaggio (inflation_type) */
export type InflationTypeRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tipologia gonfiaggio (inflation_type) */
export type InflationTypeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tipologia gonfiaggio (inflation_type) */
export type InflationTypeRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type IngredientModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<IngredientModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IngredientModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum IngredientModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Ingrediente (ingredient) */
export type IngredientRecord = RecordInterface & {
  __typename?: 'IngredientRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo: FileField;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};


/** Record of type Ingrediente (ingredient) */
export type IngredientRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type InsertModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InsertModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InsertModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum InsertModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Inserto (insert) */
export type InsertRecord = RecordInterface & {
  __typename?: 'InsertRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Inserto (insert) */
export type InsertRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Inserto (insert) */
export type InsertRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Inserto (insert) */
export type InsertRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAboutAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AboutModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AboutModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAboutAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AboutModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AboutModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAirbagAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AirbagModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AirbagModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAirbagAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AirbagModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AirbagModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAirbagAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AirbagModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AirbagModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAirbagAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AirbagModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AirbagModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArticleAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArticleModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArticleModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArticleAndPerson = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArticleModelFieldsReferencingPersonModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArticleModelFieldsReferencingPersonModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArticleAndSkier = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArticleModelFieldsReferencingSkierModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArticleModelFieldsReferencingSkierModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtvaAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtvaModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtvaModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtvaAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtvaModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtvaModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtvaAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtvaModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtvaModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenArtvaAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ArtvaModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ArtvaModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAxAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AxModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AxModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAxAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AxModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AxModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAxAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AxModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AxModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAxAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AxModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AxModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBindingAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BindingModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BindingModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBindingAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BindingModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BindingModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBindingAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BindingModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BindingModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBindingAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BindingModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BindingModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBindingAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BindingModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BindingModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBindingAndSkier = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BindingModelFieldsReferencingSkierModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BindingModelFieldsReferencingSkierModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndPerson = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingPersonModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingPersonModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBootAndSkier = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BootModelFieldsReferencingSkierModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BootModelFieldsReferencingSkierModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBrandAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BrandModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BrandModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenBrandAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<BrandModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<BrandModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCategoryAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CategoryModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CategoryModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCategoryAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CategoryModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CategoryModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCategoryAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CategoryModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CategoryModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCommonAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CommonModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CommonModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCramponAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CramponModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CramponModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCramponAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CramponModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CramponModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCramponAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CramponModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CramponModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenCramponAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<CramponModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<CramponModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHarnessAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HarnessModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HarnessModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHarnessAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HarnessModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HarnessModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHarnessAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HarnessModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HarnessModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHarnessAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HarnessModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HarnessModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHelmetAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HelmetModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HelmetModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHelmetAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HelmetModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HelmetModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHelmetAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HelmetModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HelmetModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHelmetAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HelmetModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HelmetModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomeAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomeModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomeModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPersonAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PersonModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PersonModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPersonAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PersonModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PersonModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPersonAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PersonModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PersonModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPersonAndSkier = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PersonModelFieldsReferencingSkierModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PersonModelFieldsReferencingSkierModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPoleAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PoleModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PoleModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPoleAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PoleModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PoleModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPoleAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PoleModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PoleModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPoleAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PoleModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PoleModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPoleAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PoleModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PoleModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProbeAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProbeModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProbeModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProbeAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProbeModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProbeModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProbeAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProbeModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProbeModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProbeAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProbeModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProbeModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenProductFamilyAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ProductFamilyModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ProductFamilyModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenRopeAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<RopeModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<RopeModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenRopeAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<RopeModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<RopeModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenRopeAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<RopeModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<RopeModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenScopeAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ScopeModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ScopeModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenScopeAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ScopeModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ScopeModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenShovelAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ShovelModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ShovelModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenShovelAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ShovelModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ShovelModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenShovelAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ShovelModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ShovelModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenShovelAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ShovelModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ShovelModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndPerson = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingPersonModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingPersonModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkiAndSkier = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkiModelFieldsReferencingSkierModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkiModelFieldsReferencingSkierModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkierAndArticle = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkierModelFieldsReferencingArticleModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkierModelFieldsReferencingArticleModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkierAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkierModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkierModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkierAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkierModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkierModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkinAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkinModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkinModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkinAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkinModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkinModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkinAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkinModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkinModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkinAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkinModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkinModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSkinAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SkinModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SkinModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardAndPerson = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardModelFieldsReferencingPersonModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardModelFieldsReferencingPersonModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBindingAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBindingAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBindingAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBindingAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBindingAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBindingModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBootAndAward = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingAwardModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingAwardModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBootAndBrand = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingBrandModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingBrandModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBootAndCategory = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingCategoryModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingCategoryModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBootAndProductFamily = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingProductFamilyModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingProductFamilyModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenSplitboardBootAndScope = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingScopeModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<SplitboardBootModelFieldsReferencingScopeModel>>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAboutAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAboutAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAboutAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAboutAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAirbagAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAirbagAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAirbagAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAirbagAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAirbagAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAirbagAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAirbagAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAirbagAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArticleAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArticleAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArticleAndPerson = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArticleAndPerson>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArticleAndSkier = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArticleAndSkier>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtvaAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtvaAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtvaAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtvaAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtvaAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtvaAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenArtvaAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenArtvaAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAxAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAxAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAxAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAxAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAxAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAxAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAxAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAxAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBindingAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBindingAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBindingAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBindingAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBindingAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBindingAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBindingAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBindingAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBindingAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBindingAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBindingAndSkier = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBindingAndSkier>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndPerson = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndPerson>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBootAndSkier = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBootAndSkier>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBrandAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBrandAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenBrandAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenBrandAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCategoryAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCategoryAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCategoryAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCategoryAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCategoryAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCategoryAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCommonAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCommonAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCramponAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCramponAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCramponAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCramponAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCramponAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCramponAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenCramponAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenCramponAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHarnessAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHarnessAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHarnessAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHarnessAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHarnessAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHarnessAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHarnessAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHarnessAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHelmetAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHelmetAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHelmetAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHelmetAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHelmetAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHelmetAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHelmetAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHelmetAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomeAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomeAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPersonAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPersonAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPersonAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPersonAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPersonAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPersonAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPersonAndSkier = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPersonAndSkier>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPoleAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPoleAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPoleAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPoleAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPoleAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPoleAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPoleAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPoleAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPoleAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPoleAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProbeAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProbeAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProbeAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProbeAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProbeAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProbeAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProbeAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProbeAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenProductFamilyAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenProductFamilyAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenRopeAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenRopeAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenRopeAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenRopeAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenRopeAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenRopeAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenScopeAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenScopeAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenScopeAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenScopeAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenShovelAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenShovelAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenShovelAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenShovelAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenShovelAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenShovelAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenShovelAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenShovelAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndPerson = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndPerson>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkiAndSkier = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkiAndSkier>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkierAndArticle = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkierAndArticle>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkierAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkierAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkierAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkierAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkinAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkinAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkinAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkinAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkinAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkinAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkinAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkinAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSkinAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSkinAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardAndPerson = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardAndPerson>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBindingAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBindingAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBindingAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBindingAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBindingAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBindingAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBindingAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBindingAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBindingAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBindingAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBootAndAward = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBootAndAward>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBootAndBrand = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBootAndBrand>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBootAndCategory = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBootAndCategory>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBootAndProductFamily = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBootAndProductFamily>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenSplitboardBootAndScope = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenSplitboardBootAndScope>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Launcher (launcher) */
export type LauncherRecord = RecordInterface & {
  __typename?: 'LauncherRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  animation?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  primaryButtonLabel?: Maybe<Scalars['String']['output']>;
  primaryButtonUrl?: Maybe<Scalars['String']['output']>;
  secondaryButtonLabel?: Maybe<Scalars['String']['output']>;
  secondaryButtonUrl?: Maybe<Scalars['String']['output']>;
  showFormNotSubmitted?: Maybe<Scalars['String']['output']>;
  showGuests?: Maybe<Scalars['BooleanType']['output']>;
  showSubscribers?: Maybe<Scalars['BooleanType']['output']>;
  showUsers?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type Launcher (launcher) */
export type LauncherRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Launcher (launcher) */
export type LauncherRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LauncherRecordListListNonNullMultiLocaleField = {
  __typename?: 'LauncherRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<LauncherRecord>;
};

/** Block of type Immagine a livelli (layered_image) */
export type LayeredImageRecord = RecordInterface & {
  __typename?: 'LayeredImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  desktopSettings?: Maybe<Scalars['JsonField']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  mobileSettings?: Maybe<Scalars['JsonField']['output']>;
};


/** Block of type Immagine a livelli (layered_image) */
export type LayeredImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type LayeredImageRecordListListNonNullMultiLocaleField = {
  __typename?: 'LayeredImageRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<LayeredImageRecord>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Linking locales */
export enum LinkingLocale {
  NonLocalized = '_nonLocalized',
  En = 'en',
  It = 'it'
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

export type MaterialModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MaterialModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MaterialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum MaterialModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Materiale (material) */
export type MaterialRecord = RecordInterface & {
  __typename?: 'MaterialRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Materiale (material) */
export type MaterialRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Materiale (material) */
export type MaterialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Materiale (material) */
export type MaterialRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Media (media_product) */
export type MediaProductRecord = RecordInterface & {
  __typename?: 'MediaProductRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  printGallery: Array<FileField>;
  printImage?: Maybe<FileField>;
  webGallery: Array<FileField>;
  webImage?: Maybe<FileField>;
  webImagePreview?: Maybe<FileField>;
  webImageTest?: Maybe<FileField>;
};


/** Block of type Media (media_product) */
export type MediaProductRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with a parent record or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Linking fields */
export enum PersonModelFieldsReferencingCategoryModel {
  PersonCategories = 'person_categories'
}

/** Linking fields */
export enum PersonModelFieldsReferencingProductFamilyModel {
  PersonRelatedFamilies = 'person_relatedFamilies'
}

/** Linking fields */
export enum PersonModelFieldsReferencingScopeModel {
  PersonScopes = 'person_scopes'
}

/** Linking fields */
export enum PersonModelFieldsReferencingSkierModel {
  PersonSkiers = 'person_skiers'
}

export type PersonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  birthDate?: InputMaybe<DateFilter>;
  categories?: InputMaybe<LinksFilter>;
  description?: InputMaybe<StringFilter>;
  gallery?: InputMaybe<GalleryFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  information?: InputMaybe<TextFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<LinksFilter>;
  relatedFamilies?: InputMaybe<LinksFilter>;
  relatedProductsHeading?: InputMaybe<StringFilter>;
  relatedProductsSubheading?: InputMaybe<StringFilter>;
  roles?: InputMaybe<LinksFilter>;
  scopes?: InputMaybe<LinksFilter>;
  skiers?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum PersonModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BirthDateAsc = 'birthDate_ASC',
  BirthDateDesc = 'birthDate_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RelatedProductsHeadingAsc = 'relatedProductsHeading_ASC',
  RelatedProductsHeadingDesc = 'relatedProductsHeading_DESC',
  RelatedProductsSubheadingAsc = 'relatedProductsSubheading_ASC',
  RelatedProductsSubheadingDesc = 'relatedProductsSubheading_DESC'
}

export type PersonModelProductsField = BindingRecord | BootRecord | PoleRecord | SkiRecord | SkinRecord | SplitboardBindingRecord | SplitboardBootRecord | SplitboardRecord;

/** Record of type Persona (person) */
export type PersonRecord = RecordInterface & {
  __typename?: 'PersonRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allInformationLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allJobTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingArticles: Array<ArticleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArticlesMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allReferencingSplitboards: Array<SplitboardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardsMeta: CollectionMetadata;
  _allRelatedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTraitsLocales?: Maybe<Array<TraitRecordListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  birthDate?: Maybe<Scalars['Date']['output']>;
  categories: Array<CategoryRecord>;
  description?: Maybe<Scalars['String']['output']>;
  gallery: Array<FileField>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  information?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  products: Array<PersonModelProductsField>;
  relatedFamilies: Array<ProductFamilyRecord>;
  relatedProductsHeading?: Maybe<Scalars['String']['output']>;
  relatedProductsSubheading?: Maybe<Scalars['String']['output']>;
  roles: Array<RoleRecord>;
  scopes: Array<ScopeRecord>;
  skiers: Array<SkierRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  traits: Array<TraitRecord>;
  urls: Array<UrlRecord>;
  video: Array<VideoRecord>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllInformationLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllJobTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArticleAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingArticlesMetaArgs = {
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArticleAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllReferencingSplitboardsMetaArgs = {
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndPerson>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllRelatedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllRelatedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecord_AllTraitsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecordInformationArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Persona (person) */
export type PersonRecordJobTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecordRelatedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecordRelatedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Persona (person) */
export type PersonRecordTraitsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum PoleModelFieldsReferencingAwardModel {
  PoleAwards = 'pole_awards'
}

/** Linking fields */
export enum PoleModelFieldsReferencingBrandModel {
  PoleBrand = 'pole_brand'
}

/** Linking fields */
export enum PoleModelFieldsReferencingCategoryModel {
  PoleCategories = 'pole_categories'
}

/** Linking fields */
export enum PoleModelFieldsReferencingProductFamilyModel {
  PoleFamilies = 'pole_families'
}

/** Linking fields */
export enum PoleModelFieldsReferencingScopeModel {
  PoleScopes = 'pole_scopes'
}

export type PoleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PoleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PoleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  basketDiameter?: InputMaybe<IntegerFilter>;
  basketShape?: InputMaybe<StringFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  handleMaterials?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinksFilter>;
  shaftMaterials?: InputMaybe<LinksFilter>;
  sizeMax?: InputMaybe<IntegerFilter>;
  sizeMin?: InputMaybe<IntegerFilter>;
  sizeWeighed?: InputMaybe<StringFilter>;
  sizesDescription?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  tipDescription?: InputMaybe<StringFilter>;
  types?: InputMaybe<LinksFilter>;
  website?: InputMaybe<StringFilter>;
  weightMeasured?: InputMaybe<IntegerFilter>;
};

export enum PoleModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasketDiameterAsc = 'basketDiameter_ASC',
  BasketDiameterDesc = 'basketDiameter_DESC',
  BasketShapeAsc = 'basketShape_ASC',
  BasketShapeDesc = 'basketShape_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  SizeMaxAsc = 'sizeMax_ASC',
  SizeMaxDesc = 'sizeMax_DESC',
  SizeMinAsc = 'sizeMin_ASC',
  SizeMinDesc = 'sizeMin_DESC',
  SizeWeighedAsc = 'sizeWeighed_ASC',
  SizeWeighedDesc = 'sizeWeighed_DESC',
  SizesDescriptionAsc = 'sizesDescription_ASC',
  SizesDescriptionDesc = 'sizesDescription_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TipDescriptionAsc = 'tipDescription_ASC',
  TipDescriptionDesc = 'tipDescription_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightMeasuredAsc = 'weightMeasured_ASC',
  WeightMeasuredDesc = 'weightMeasured_DESC'
}

/** Record of type Bastone (pole) */
export type PoleRecord = RecordInterface & {
  __typename?: 'PoleRecord';
  _allBasketShapeLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSizeWeighedLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSizesDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTipDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  basketDiameter?: Maybe<Scalars['IntType']['output']>;
  basketShape?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  handleMaterials: Array<MaterialRecord>;
  id: Scalars['ItemId']['output'];
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes: Array<ScopeRecord>;
  shaftMaterials: Array<MaterialRecord>;
  sizeMax?: Maybe<Scalars['IntType']['output']>;
  sizeMin?: Maybe<Scalars['IntType']['output']>;
  sizeWeighed?: Maybe<Scalars['String']['output']>;
  sizesDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  tipDescription?: Maybe<Scalars['String']['output']>;
  types: Array<PoleTypeRecord>;
  website?: Maybe<Scalars['String']['output']>;
  weightMeasured?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllBasketShapeLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllSizeWeighedLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllSizesDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllTipDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecordBasketShapeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecordSizeWeighedArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecordSizesDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Bastone (pole) */
export type PoleRecordTipDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Bastone (pole) */
export type PoleRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type PoleTypeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PoleTypeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PoleTypeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum PoleTypeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Tipologia di bastone (pole_type) */
export type PoleTypeRecord = RecordInterface & {
  __typename?: 'PoleTypeRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Tipologia di bastone (pole_type) */
export type PoleTypeRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tipologia di bastone (pole_type) */
export type PoleTypeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tipologia di bastone (pole_type) */
export type PoleTypeRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Linking fields */
export enum ProbeModelFieldsReferencingAwardModel {
  ProbeAwards = 'probe_awards'
}

/** Linking fields */
export enum ProbeModelFieldsReferencingBrandModel {
  ProbeBrand = 'probe_brand'
}

/** Linking fields */
export enum ProbeModelFieldsReferencingProductFamilyModel {
  ProbeFamilies = 'probe_families'
}

/** Linking fields */
export enum ProbeModelFieldsReferencingScopeModel {
  ProbeScopes = 'probe_scopes'
}

export type ProbeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProbeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProbeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  cableMaterial?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  closingDescription?: InputMaybe<StringFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  diameter?: InputMaybe<FloatFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  material?: InputMaybe<LinkFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  openLength?: InputMaybe<IntegerFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinkFilter>;
  segmentsLength?: InputMaybe<IntegerFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  tipDescription?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum ProbeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ClosingDescriptionAsc = 'closingDescription_ASC',
  ClosingDescriptionDesc = 'closingDescription_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  DiameterAsc = 'diameter_ASC',
  DiameterDesc = 'diameter_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenLengthAsc = 'openLength_ASC',
  OpenLengthDesc = 'openLength_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  SegmentsLengthAsc = 'segmentsLength_ASC',
  SegmentsLengthDesc = 'segmentsLength_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TipDescriptionAsc = 'tipDescription_ASC',
  TipDescriptionDesc = 'tipDescription_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Sonda (probe) */
export type ProbeRecord = RecordInterface & {
  __typename?: 'ProbeRecord';
  _allClosingDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTipDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  cableMaterial?: Maybe<MaterialRecord>;
  channels: Array<ChannelRecord>;
  closingDescription?: Maybe<Scalars['String']['output']>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  diameter?: Maybe<Scalars['FloatType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  material?: Maybe<MaterialRecord>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  openLength?: Maybe<Scalars['IntType']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes?: Maybe<ScopeRecord>;
  segmentsLength?: Maybe<Scalars['IntType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  tipDescription?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Sonda (probe) */
export type ProbeRecord_AllClosingDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sonda (probe) */
export type ProbeRecord_AllTipDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecordClosingDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sonda (probe) */
export type ProbeRecordTipDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sonda (probe) */
export type ProbeRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum ProductFamilyModelFieldsReferencingArticleModel {
  ProductFamilyRelatedArticles = 'productFamily_relatedArticles'
}

export type ProductFamilyModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFamilyModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFamilyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  imageSmall?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  relatedArticles?: InputMaybe<LinksFilter>;
  relatedArticlesHeading?: InputMaybe<StringFilter>;
  relatedArticlesSubheading?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum ProductFamilyModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RelatedArticlesHeadingAsc = 'relatedArticlesHeading_ASC',
  RelatedArticlesHeadingDesc = 'relatedArticlesHeading_DESC',
  RelatedArticlesSubheadingAsc = 'relatedArticlesSubheading_ASC',
  RelatedArticlesSubheadingDesc = 'relatedArticlesSubheading_DESC'
}

/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord = RecordInterface & {
  __typename?: 'ProductFamilyRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingAirbags: Array<AirbagRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAirbagsMeta: CollectionMetadata;
  _allReferencingArtvas: Array<ArtvaRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtvasMeta: CollectionMetadata;
  _allReferencingAxes: Array<AxRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAxesMeta: CollectionMetadata;
  _allReferencingBindings: Array<BindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBindingsMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingBrands: Array<BrandRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBrandsMeta: CollectionMetadata;
  _allReferencingCategories: Array<CategoryRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCategoriesMeta: CollectionMetadata;
  _allReferencingCommons: Array<CommonRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCommonsMeta: CollectionMetadata;
  _allReferencingCrampons: Array<CramponRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCramponsMeta: CollectionMetadata;
  _allReferencingHarnesses: Array<HarnessRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHarnessesMeta: CollectionMetadata;
  _allReferencingHelmets: Array<HelmetRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHelmetsMeta: CollectionMetadata;
  _allReferencingHomes: Array<HomeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomesMeta: CollectionMetadata;
  _allReferencingPeople: Array<PersonRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPeopleMeta: CollectionMetadata;
  _allReferencingPoles: Array<PoleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPolesMeta: CollectionMetadata;
  _allReferencingProbes: Array<ProbeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProbesMeta: CollectionMetadata;
  _allReferencingRopes: Array<RopeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingRopesMeta: CollectionMetadata;
  _allReferencingScopes: Array<ScopeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingScopesMeta: CollectionMetadata;
  _allReferencingShovels: Array<ShovelRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingShovelsMeta: CollectionMetadata;
  _allReferencingSkiers: Array<SkierRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkiersMeta: CollectionMetadata;
  _allReferencingSkins: Array<SkinRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkinsMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allReferencingSplitboardBindings: Array<SplitboardBindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBindingsMeta: CollectionMetadata;
  _allReferencingSplitboardBoots: Array<SplitboardBootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBootsMeta: CollectionMetadata;
  _allReferencingSplitboards: Array<SplitboardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardsMeta: CollectionMetadata;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  imageSmall?: Maybe<FileField>;
  name: Scalars['String']['output'];
  relatedArticles: Array<ArticleRecord>;
  relatedArticlesHeading?: Maybe<Scalars['String']['output']>;
  relatedArticlesSubheading?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingAirbagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AirbagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingAirbagsMetaArgs = {
  filter?: InputMaybe<AirbagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingArtvasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtvaModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingArtvasMetaArgs = {
  filter?: InputMaybe<ArtvaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingAxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingAxesMetaArgs = {
  filter?: InputMaybe<AxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingBindingsMetaArgs = {
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingBrandsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BrandModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BrandModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBrandAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingBrandsMetaArgs = {
  filter?: InputMaybe<BrandModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBrandAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingCategoriesMetaArgs = {
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingCommonsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CommonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCommonAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingCommonsMetaArgs = {
  filter?: InputMaybe<CommonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCommonAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingCramponsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CramponModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingCramponsMetaArgs = {
  filter?: InputMaybe<CramponModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingHarnessesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HarnessModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingHarnessesMetaArgs = {
  filter?: InputMaybe<HarnessModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingHelmetsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HelmetModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingHelmetsMetaArgs = {
  filter?: InputMaybe<HelmetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingHomesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingHomesMetaArgs = {
  filter?: InputMaybe<HomeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingPolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingPolesMetaArgs = {
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingProbesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProbeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingProbesMetaArgs = {
  filter?: InputMaybe<ProbeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingRopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenRopeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingRopesMetaArgs = {
  filter?: InputMaybe<RopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenRopeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingScopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ScopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ScopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenScopeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingScopesMetaArgs = {
  filter?: InputMaybe<ScopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenScopeAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingShovelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShovelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingShovelsMetaArgs = {
  filter?: InputMaybe<ShovelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSkiersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkierModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkierModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkierAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSkiersMetaArgs = {
  filter?: InputMaybe<SkierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkierAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSkinsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSkinsMetaArgs = {
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSplitboardBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSplitboardBindingsMetaArgs = {
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSplitboardBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSplitboardBootsMetaArgs = {
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllReferencingSplitboardsMetaArgs = {
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndProductFamily>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Famiglia prodotti (product_family) */
export type ProductFamilyRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductsSliderModelProductsField = AirbagRecord | ArtvaRecord | AxRecord | BindingRecord | BootRecord | CramponRecord | HarnessRecord | HelmetRecord | PoleRecord | ProbeRecord | RopeRecord | ShovelRecord | SkiRecord | SkinRecord | SplitboardBindingRecord | SplitboardBootRecord | SplitboardRecord;

/** Block of type Carosello prodotti (products_slider) */
export type ProductsSliderRecord = RecordInterface & {
  __typename?: 'ProductsSliderRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  actionText?: Maybe<Scalars['String']['output']>;
  actionUrl?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  products: Array<ProductsSliderModelProductsField>;
};


/** Block of type Carosello prodotti (products_slider) */
export type ProductsSliderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAirbagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allArtvasMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAttitudesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAuthorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAwardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAxesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBindingTypesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBindingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBootsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBrandsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allChannelsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allColorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allConstructionTechniquesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCountriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCramponsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCurveArcsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCurvesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEditionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFormsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHarnessesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHelmetsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInflationSystemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInflationTypesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allIngredientsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInsertsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMaterialsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPoleTypesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPolesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProbesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductFamiliesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRolesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRopesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allScopesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allShovelsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSkiersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSkinsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSkisMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSplitboardBindingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSplitboardBootsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSplitboardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allStatusesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTopicsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allUsersMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns the single instance record */
  about?: Maybe<AboutRecord>;
  /** Returns a specific record */
  airbag?: Maybe<AirbagRecord>;
  /** Returns a collection of records */
  allAirbags: Array<AirbagRecord>;
  /** Returns a collection of records */
  allArticles: Array<ArticleRecord>;
  /** Returns a collection of records */
  allArtvas: Array<ArtvaRecord>;
  /** Returns a collection of records */
  allAttitudes: Array<AttitudeRecord>;
  /** Returns a collection of records */
  allAuthors: Array<AuthorRecord>;
  /** Returns a collection of records */
  allAwards: Array<AwardRecord>;
  /** Returns a collection of records */
  allAxes: Array<AxRecord>;
  /** Returns a collection of records */
  allBindingTypes: Array<BindingTypeRecord>;
  /** Returns a collection of records */
  allBindings: Array<BindingRecord>;
  /** Returns a collection of records */
  allBoots: Array<BootRecord>;
  /** Returns a collection of records */
  allBrands: Array<BrandRecord>;
  /** Returns a collection of records */
  allCategories: Array<CategoryRecord>;
  /** Returns a collection of records */
  allChannels: Array<ChannelRecord>;
  /** Returns a collection of records */
  allColors: Array<ColorRecord>;
  /** Returns a collection of records */
  allConstructionTechniques: Array<ConstructionTechniqueRecord>;
  /** Returns a collection of records */
  allCountries: Array<CountryRecord>;
  /** Returns a collection of records */
  allCrampons: Array<CramponRecord>;
  /** Returns a collection of records */
  allCurveArcs: Array<CurveArcRecord>;
  /** Returns a collection of records */
  allCurves: Array<CurveRecord>;
  /** Returns a collection of records */
  allEditions: Array<EditionRecord>;
  /** Returns a collection of records */
  allForms: Array<FormRecord>;
  /** Returns a collection of records */
  allHarnesses: Array<HarnessRecord>;
  /** Returns a collection of records */
  allHelmets: Array<HelmetRecord>;
  /** Returns a collection of records */
  allInflationSystems: Array<InflationSystemRecord>;
  /** Returns a collection of records */
  allInflationTypes: Array<InflationTypeRecord>;
  /** Returns a collection of records */
  allIngredients: Array<IngredientRecord>;
  /** Returns a collection of records */
  allInserts: Array<InsertRecord>;
  /** Returns a collection of records */
  allMaterials: Array<MaterialRecord>;
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>;
  /** Returns a collection of records */
  allPoleTypes: Array<PoleTypeRecord>;
  /** Returns a collection of records */
  allPoles: Array<PoleRecord>;
  /** Returns a collection of records */
  allProbes: Array<ProbeRecord>;
  /** Returns a collection of records */
  allProductFamilies: Array<ProductFamilyRecord>;
  /** Returns a collection of records */
  allRoles: Array<RoleRecord>;
  /** Returns a collection of records */
  allRopes: Array<RopeRecord>;
  /** Returns a collection of records */
  allScopes: Array<ScopeRecord>;
  /** Returns a collection of records */
  allShovels: Array<ShovelRecord>;
  /** Returns a collection of records */
  allSkiers: Array<SkierRecord>;
  /** Returns a collection of records */
  allSkins: Array<SkinRecord>;
  /** Returns a collection of records */
  allSkis: Array<SkiRecord>;
  /** Returns a collection of records */
  allSplitboardBindings: Array<SplitboardBindingRecord>;
  /** Returns a collection of records */
  allSplitboardBoots: Array<SplitboardBootRecord>;
  /** Returns a collection of records */
  allSplitboards: Array<SplitboardRecord>;
  /** Returns a collection of records */
  allStatuses: Array<StatusRecord>;
  /** Returns a collection of records */
  allTopics: Array<TopicRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allUsers: Array<UserRecord>;
  /** Returns a specific record */
  article?: Maybe<ArticleRecord>;
  /** Returns a specific record */
  artva?: Maybe<ArtvaRecord>;
  /** Returns a specific record */
  attitude?: Maybe<AttitudeRecord>;
  /** Returns a specific record */
  author?: Maybe<AuthorRecord>;
  /** Returns a specific record */
  award?: Maybe<AwardRecord>;
  /** Returns a specific record */
  ax?: Maybe<AxRecord>;
  /** Returns a specific record */
  binding?: Maybe<BindingRecord>;
  /** Returns a specific record */
  bindingType?: Maybe<BindingTypeRecord>;
  /** Returns a specific record */
  boot?: Maybe<BootRecord>;
  /** Returns a specific record */
  brand?: Maybe<BrandRecord>;
  /** Returns a specific record */
  category?: Maybe<CategoryRecord>;
  /** Returns a specific record */
  channel?: Maybe<ChannelRecord>;
  /** Returns a specific record */
  color?: Maybe<ColorRecord>;
  /** Returns the single instance record */
  common?: Maybe<CommonRecord>;
  /** Returns a specific record */
  constructionTechnique?: Maybe<ConstructionTechniqueRecord>;
  /** Returns the single instance record */
  cookiePrivacy?: Maybe<CookiePrivacyRecord>;
  /** Returns a specific record */
  country?: Maybe<CountryRecord>;
  /** Returns a specific record */
  crampon?: Maybe<CramponRecord>;
  /** Returns the single instance record */
  credit?: Maybe<CreditRecord>;
  /** Returns a specific record */
  curve?: Maybe<CurveRecord>;
  /** Returns a specific record */
  curveArc?: Maybe<CurveArcRecord>;
  /** Returns a specific record */
  edition?: Maybe<EditionRecord>;
  /** Returns a specific record */
  form?: Maybe<FormRecord>;
  /** Returns a specific record */
  harness?: Maybe<HarnessRecord>;
  /** Returns a specific record */
  helmet?: Maybe<HelmetRecord>;
  /** Returns the single instance record */
  home?: Maybe<HomeRecord>;
  /** Returns a specific record */
  inflationSystem?: Maybe<InflationSystemRecord>;
  /** Returns a specific record */
  inflationType?: Maybe<InflationTypeRecord>;
  /** Returns a specific record */
  ingredient?: Maybe<IngredientRecord>;
  /** Returns a specific record */
  insert?: Maybe<InsertRecord>;
  /** Returns a specific record */
  material?: Maybe<MaterialRecord>;
  /** Returns a specific record */
  person?: Maybe<PersonRecord>;
  /** Returns a specific record */
  pole?: Maybe<PoleRecord>;
  /** Returns a specific record */
  poleType?: Maybe<PoleTypeRecord>;
  /** Returns a specific record */
  probe?: Maybe<ProbeRecord>;
  /** Returns a specific record */
  productFamily?: Maybe<ProductFamilyRecord>;
  /** Returns a specific record */
  role?: Maybe<RoleRecord>;
  /** Returns a specific record */
  rope?: Maybe<RopeRecord>;
  /** Returns a specific record */
  scope?: Maybe<ScopeRecord>;
  /** Returns a specific record */
  shovel?: Maybe<ShovelRecord>;
  /** Returns a specific record */
  ski?: Maybe<SkiRecord>;
  /** Returns a specific record */
  skier?: Maybe<SkierRecord>;
  /** Returns a specific record */
  skin?: Maybe<SkinRecord>;
  /** Returns a specific record */
  splitboard?: Maybe<SplitboardRecord>;
  /** Returns a specific record */
  splitboardBinding?: Maybe<SplitboardBindingRecord>;
  /** Returns a specific record */
  splitboardBoot?: Maybe<SplitboardBootRecord>;
  /** Returns a specific record */
  status?: Maybe<StatusRecord>;
  /** Returns the single instance record */
  subscription?: Maybe<SubscriptionRecord>;
  /** Returns a specific record */
  topic?: Maybe<TopicRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  user?: Maybe<UserRecord>;
};


/** The query root for this schema */
export type Query_AllAirbagsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllArticlesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllArtvasMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAttitudesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AttitudeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAuthorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAwardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllAxesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllBindingTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllBindingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllBootsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllBrandsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BrandModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllChannelsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChannelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllColorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllConstructionTechniquesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ConstructionTechniqueModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCountriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCramponsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCurveArcsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CurveArcModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCurvesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CurveModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllEditionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EditionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFormsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllHarnessesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllHelmetsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllInflationSystemsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InflationSystemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllInflationTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InflationTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllIngredientsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<IngredientModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllInsertsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InsertModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMaterialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPoleTypesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPolesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProbesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductFamiliesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRolesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRopesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllScopesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ScopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllShovelsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSkiersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSkinsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSkisMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSplitboardBindingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSplitboardBootsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllSplitboardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllStatusesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatusModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTopicsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TopicModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUsersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UserModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAirbagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AirbagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAllAirbagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AirbagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllArtvasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtvaModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAttitudesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AttitudeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AttitudeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAwardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AwardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllAxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllBindingTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllBrandsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BrandModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BrandModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllChannelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChannelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ChannelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllColorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllConstructionTechniquesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ConstructionTechniqueModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ConstructionTechniqueModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCountriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCramponsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CramponModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCurveArcsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CurveArcModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CurveArcModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCurvesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CurveModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CurveModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllEditionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EditionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EditionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFormsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllHarnessesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HarnessModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllHelmetsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HelmetModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllInflationSystemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InflationSystemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InflationSystemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllInflationTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InflationTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InflationTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllIngredientsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<IngredientModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IngredientModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllInsertsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InsertModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InsertModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMaterialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MaterialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MaterialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPoleTypesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleTypeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleTypeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProbesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProbeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProductFamiliesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllScopesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ScopeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ScopeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllShovelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShovelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSkiersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkierModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkierModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSkinsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSplitboardBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSplitboardBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllStatusesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatusModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTopicsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TopicModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TopicModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUsersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UserModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UserModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryArticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryArtvaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtvaModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAttitudeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AttitudeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AttitudeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAuthorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAwardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AwardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AwardModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryAxArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AxModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryBindingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryBindingTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingTypeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryBootArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryBrandArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BrandModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BrandModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryChannelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChannelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ChannelModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryColorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ColorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ColorModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCommonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryConstructionTechniqueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ConstructionTechniqueModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ConstructionTechniqueModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCookiePrivacyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCountryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CountryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CountryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCramponArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CramponModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCreditArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryCurveArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CurveModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CurveModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCurveArcArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CurveArcModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CurveArcModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryEditionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EditionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EditionModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFormArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryHarnessArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HarnessModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryHelmetArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HelmetModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryHomeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryInflationSystemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InflationSystemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InflationSystemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryInflationTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InflationTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InflationTypeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryIngredientArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<IngredientModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IngredientModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryInsertArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InsertModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InsertModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMaterialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MaterialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MaterialModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPersonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPoleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPoleTypeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleTypeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleTypeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProbeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProbeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductFamilyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductFamilyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductFamilyModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRoleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRopeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RopeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryScopeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ScopeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ScopeModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryShovelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShovelModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySkiArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySkierArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkierModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySkinArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySplitboardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySplitboardBindingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySplitboardBootArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryStatusArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<StatusModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<StatusModelOrderBy>>>;
};


/** The query root for this schema */
export type QuerySubscriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryTopicArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TopicModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TopicModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
export type QueryUserArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UserModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UserModelOrderBy>>>;
};

/** Block of type Citazione (quote) */
export type QuoteRecord = RecordInterface & {
  __typename?: 'QuoteRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  author?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  quote?: Maybe<Scalars['String']['output']>;
};


/** Block of type Citazione (quote) */
export type QuoteRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Motivo (reason) */
export type ReasonRecord = RecordInterface & {
  __typename?: 'ReasonRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
};


/** Block of type Motivo (reason) */
export type ReasonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ReasonRecordListListNonNullMultiLocaleField = {
  __typename?: 'ReasonRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<ReasonRecord>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export type RoleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RoleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RoleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum RoleModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Ruolo (role) */
export type RoleRecord = RecordInterface & {
  __typename?: 'RoleRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
};


/** Record of type Ruolo (role) */
export type RoleRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ruolo (role) */
export type RoleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ruolo (role) */
export type RoleRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum RopeModelFieldsReferencingAwardModel {
  RopeAwards = 'rope_awards'
}

/** Linking fields */
export enum RopeModelFieldsReferencingBrandModel {
  RopeBrand = 'rope_brand'
}

/** Linking fields */
export enum RopeModelFieldsReferencingProductFamilyModel {
  RopeFamilies = 'rope_families'
}

export type RopeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RopeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RopeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  diameter?: InputMaybe<IntegerFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightPerMeter?: InputMaybe<IntegerFilter>;
};

export enum RopeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  DiameterAsc = 'diameter_ASC',
  DiameterDesc = 'diameter_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightPerMeterAsc = 'weightPerMeter_ASC',
  WeightPerMeterDesc = 'weightPerMeter_DESC'
}

/** Record of type Cordino (rope) */
export type RopeRecord = RecordInterface & {
  __typename?: 'RopeRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  diameter?: Maybe<Scalars['IntType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightPerMeter?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Cordino (rope) */
export type RopeRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cordino (rope) */
export type RopeRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Cordino (rope) */
export type RopeRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cordino (rope) */
export type RopeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cordino (rope) */
export type RopeRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cordino (rope) */
export type RopeRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Cordino (rope) */
export type RopeRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum ScopeModelFieldsReferencingArticleModel {
  ScopeRelatedArticles = 'scope_relatedArticles'
}

/** Linking fields */
export enum ScopeModelFieldsReferencingProductFamilyModel {
  ScopeRelatedFamilies = 'scope_relatedFamilies'
}

export type ScopeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ScopeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ScopeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  imageSmall?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntegerFilter>;
  relatedArticles?: InputMaybe<LinksFilter>;
  relatedArticlesHeading?: InputMaybe<StringFilter>;
  relatedArticlesSubheading?: InputMaybe<StringFilter>;
  relatedFamilies?: InputMaybe<LinksFilter>;
  relatedFamiliesHeading?: InputMaybe<StringFilter>;
  relatedFamiliesImage?: InputMaybe<FileFilter>;
  relatedFamiliesImageMobile?: InputMaybe<FileFilter>;
  relatedProductsHeading?: InputMaybe<StringFilter>;
  relatedProductsImage?: InputMaybe<FileFilter>;
  relatedProductsSubheading?: InputMaybe<StringFilter>;
  relatedProductsTextPosition?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  subheading?: InputMaybe<StringFilter>;
};

export enum ScopeModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  RelatedArticlesHeadingAsc = 'relatedArticlesHeading_ASC',
  RelatedArticlesHeadingDesc = 'relatedArticlesHeading_DESC',
  RelatedArticlesSubheadingAsc = 'relatedArticlesSubheading_ASC',
  RelatedArticlesSubheadingDesc = 'relatedArticlesSubheading_DESC',
  RelatedFamiliesHeadingAsc = 'relatedFamiliesHeading_ASC',
  RelatedFamiliesHeadingDesc = 'relatedFamiliesHeading_DESC',
  RelatedProductsHeadingAsc = 'relatedProductsHeading_ASC',
  RelatedProductsHeadingDesc = 'relatedProductsHeading_DESC',
  RelatedProductsSubheadingAsc = 'relatedProductsSubheading_ASC',
  RelatedProductsSubheadingDesc = 'relatedProductsSubheading_DESC',
  RelatedProductsTextPositionAsc = 'relatedProductsTextPosition_ASC',
  RelatedProductsTextPositionDesc = 'relatedProductsTextPosition_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC'
}

/** Record of type Ambito (scope) */
export type ScopeRecord = RecordInterface & {
  __typename?: 'ScopeRecord';
  _allHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allReferencingAirbags: Array<AirbagRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAirbagsMeta: CollectionMetadata;
  _allReferencingArtvas: Array<ArtvaRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArtvasMeta: CollectionMetadata;
  _allReferencingAxes: Array<AxRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAxesMeta: CollectionMetadata;
  _allReferencingBindings: Array<BindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBindingsMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingCategories: Array<CategoryRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCategoriesMeta: CollectionMetadata;
  _allReferencingCrampons: Array<CramponRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingCramponsMeta: CollectionMetadata;
  _allReferencingHarnesses: Array<HarnessRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHarnessesMeta: CollectionMetadata;
  _allReferencingHelmets: Array<HelmetRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHelmetsMeta: CollectionMetadata;
  _allReferencingPeople: Array<PersonRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPeopleMeta: CollectionMetadata;
  _allReferencingPoles: Array<PoleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPolesMeta: CollectionMetadata;
  _allReferencingProbes: Array<ProbeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingProbesMeta: CollectionMetadata;
  _allReferencingShovels: Array<ShovelRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingShovelsMeta: CollectionMetadata;
  _allReferencingSkiers: Array<SkierRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkiersMeta: CollectionMetadata;
  _allReferencingSkins: Array<SkinRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkinsMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allReferencingSplitboardBindings: Array<SplitboardBindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBindingsMeta: CollectionMetadata;
  _allReferencingSplitboardBoots: Array<SplitboardBootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardBootsMeta: CollectionMetadata;
  _allReferencingSplitboards: Array<SplitboardRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSplitboardsMeta: CollectionMetadata;
  _allRelatedArticlesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedArticlesSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedFamiliesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsTextPositionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  imageSmall?: Maybe<FileField>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['IntType']['output']>;
  relatedArticles: Array<ArticleRecord>;
  relatedArticlesHeading?: Maybe<Scalars['String']['output']>;
  relatedArticlesSubheading?: Maybe<Scalars['String']['output']>;
  relatedFamilies: Array<ProductFamilyRecord>;
  relatedFamiliesHeading?: Maybe<Scalars['String']['output']>;
  relatedFamiliesImage?: Maybe<FileField>;
  relatedFamiliesImageMobile?: Maybe<FileField>;
  relatedProductsHeading?: Maybe<Scalars['String']['output']>;
  relatedProductsImage?: Maybe<FileField>;
  relatedProductsSubheading?: Maybe<Scalars['String']['output']>;
  relatedProductsTextPosition?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  subheading?: Maybe<Scalars['String']['output']>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingAirbagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AirbagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AirbagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingAirbagsMetaArgs = {
  filter?: InputMaybe<AirbagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAirbagAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingArtvasArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArtvaModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArtvaModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingArtvasMetaArgs = {
  filter?: InputMaybe<ArtvaModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArtvaAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingAxesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AxModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AxModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingAxesMetaArgs = {
  filter?: InputMaybe<AxModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAxAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingBindingsMetaArgs = {
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingCategoriesMetaArgs = {
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCategoryAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingCramponsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CramponModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CramponModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingCramponsMetaArgs = {
  filter?: InputMaybe<CramponModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenCramponAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingHarnessesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HarnessModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HarnessModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingHarnessesMetaArgs = {
  filter?: InputMaybe<HarnessModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHarnessAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingHelmetsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HelmetModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HelmetModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingHelmetsMetaArgs = {
  filter?: InputMaybe<HelmetModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHelmetAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingPolesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PoleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PoleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingPolesMetaArgs = {
  filter?: InputMaybe<PoleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPoleAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingProbesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProbeModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProbeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingProbesMetaArgs = {
  filter?: InputMaybe<ProbeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenProbeAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingShovelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ShovelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ShovelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingShovelsMetaArgs = {
  filter?: InputMaybe<ShovelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenShovelAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSkiersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkierModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkierModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkierAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSkiersMetaArgs = {
  filter?: InputMaybe<SkierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkierAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSkinsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkinModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkinModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSkinsMetaArgs = {
  filter?: InputMaybe<SkinModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkinAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSplitboardBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSplitboardBindingsMetaArgs = {
  filter?: InputMaybe<SplitboardBindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBindingAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSplitboardBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardBootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardBootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSplitboardBootsMetaArgs = {
  filter?: InputMaybe<SplitboardBootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardBootAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSplitboardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SplitboardModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SplitboardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllReferencingSplitboardsMetaArgs = {
  filter?: InputMaybe<SplitboardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSplitboardAndScope>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllRelatedArticlesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllRelatedArticlesSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllRelatedFamiliesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllRelatedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllRelatedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllRelatedProductsTextPositionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_AllSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordRelatedArticlesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordRelatedArticlesSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordRelatedFamiliesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordRelatedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordRelatedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordRelatedProductsTextPositionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Ambito (scope) */
export type ScopeRecordSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Linking fields */
export enum ShovelModelFieldsReferencingAwardModel {
  ShovelAwards = 'shovel_awards'
}

/** Linking fields */
export enum ShovelModelFieldsReferencingBrandModel {
  ShovelBrand = 'shovel_brand'
}

/** Linking fields */
export enum ShovelModelFieldsReferencingProductFamilyModel {
  ShovelFamilies = 'shovel_families'
}

/** Linking fields */
export enum ShovelModelFieldsReferencingScopeModel {
  ShovelScopes = 'shovel_scopes'
}

export type ShovelModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShovelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ShovelModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  bucketSize?: InputMaybe<IntegerFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  handleDescription?: InputMaybe<StringFilter>;
  handleSize?: InputMaybe<IntegerFilter>;
  id?: InputMaybe<ItemIdFilter>;
  material?: InputMaybe<LinkFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  openLength?: InputMaybe<IntegerFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinkFilter>;
  slug?: InputMaybe<SlugFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum ShovelModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BucketSizeAsc = 'bucketSize_ASC',
  BucketSizeDesc = 'bucketSize_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  HandleDescriptionAsc = 'handleDescription_ASC',
  HandleDescriptionDesc = 'handleDescription_DESC',
  HandleSizeAsc = 'handleSize_ASC',
  HandleSizeDesc = 'handleSize_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenLengthAsc = 'openLength_ASC',
  OpenLengthDesc = 'openLength_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Pala (shovel) */
export type ShovelRecord = RecordInterface & {
  __typename?: 'ShovelRecord';
  _allHandleDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  bucketSize?: Maybe<Scalars['IntType']['output']>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  handleDescription?: Maybe<Scalars['String']['output']>;
  handleSize?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['ItemId']['output'];
  material?: Maybe<MaterialRecord>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  openLength?: Maybe<Scalars['IntType']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes?: Maybe<ScopeRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Pala (shovel) */
export type ShovelRecord_AllHandleDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pala (shovel) */
export type ShovelRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pala (shovel) */
export type ShovelRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Pala (shovel) */
export type ShovelRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pala (shovel) */
export type ShovelRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pala (shovel) */
export type ShovelRecordHandleDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pala (shovel) */
export type ShovelRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pala (shovel) */
export type ShovelRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Pala (shovel) */
export type ShovelRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  En = 'en',
  It = 'it'
}

/** Block of type Misura (size) */
export type SizeRecord = RecordInterface & {
  __typename?: 'SizeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  size?: Maybe<Scalars['FloatType']['output']>;
};


/** Block of type Misura (size) */
export type SizeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Misura splitboard (size_splitboard) */
export type SizeSplitboardRecord = RecordInterface & {
  __typename?: 'SizeSplitboardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  size?: Maybe<Scalars['String']['output']>;
};


/** Block of type Misura splitboard (size_splitboard) */
export type SizeSplitboardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum SkiModelFieldsReferencingAwardModel {
  SkiAwards = 'ski_awards'
}

/** Linking fields */
export enum SkiModelFieldsReferencingBrandModel {
  SkiBrand = 'ski_brand'
}

/** Linking fields */
export enum SkiModelFieldsReferencingCategoryModel {
  SkiCategories = 'ski_categories'
}

/** Linking fields */
export enum SkiModelFieldsReferencingPersonModel {
  SkiSkiedBy = 'ski_skiedBy'
}

/** Linking fields */
export enum SkiModelFieldsReferencingProductFamilyModel {
  SkiFamilies = 'ski_families'
}

/** Linking fields */
export enum SkiModelFieldsReferencingScopeModel {
  SkiScopes = 'ski_scopes'
}

/** Linking fields */
export enum SkiModelFieldsReferencingSkierModel {
  SkiSkierTypes = 'ski_skierTypes'
}

export type SkiModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkiModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SkiModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  alsoSuitableFor?: InputMaybe<TextFilter>;
  attitudes?: InputMaybe<LinksFilter>;
  awards?: InputMaybe<LinksFilter>;
  baseMaterials?: InputMaybe<LinksFilter>;
  bindings?: InputMaybe<LinksFilter>;
  boots?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  colors?: InputMaybe<LinksFilter>;
  construction?: InputMaybe<LinkFilter>;
  curveRadiusDeclared?: InputMaybe<FloatFilter>;
  curveRadiusDescription?: InputMaybe<StringFilter>;
  curveRadiusMeasured?: InputMaybe<FloatFilter>;
  deck?: InputMaybe<FloatFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  edgeContact?: InputMaybe<IntegerFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  editions?: InputMaybe<LinksFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  lengthDeclared?: InputMaybe<FloatFilter>;
  lengthMeasured?: InputMaybe<FloatFilter>;
  levelAdvanced?: InputMaybe<IntegerFilter>;
  levelBeginner?: InputMaybe<IntegerFilter>;
  levelGrowing?: InputMaybe<IntegerFilter>;
  levelHigh?: InputMaybe<IntegerFilter>;
  liftSurface?: InputMaybe<IntegerFilter>;
  line?: InputMaybe<IntegerFilter>;
  madeIn?: InputMaybe<LinkFilter>;
  materials?: InputMaybe<LinksFilter>;
  measurementsComplete?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  notSuitableFor?: InputMaybe<TextFilter>;
  previewDescription?: InputMaybe<TextFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  productStatus?: InputMaybe<LinkFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  releasedIn?: InputMaybe<StringFilter>;
  rockerTail?: InputMaybe<FloatFilter>;
  rockerTip?: InputMaybe<FloatFilter>;
  scopes?: InputMaybe<LinksFilter>;
  sizeCurveRadiusDeclared?: InputMaybe<FloatFilter>;
  sizeDeclared?: InputMaybe<FloatFilter>;
  sizeLengthDeclared?: InputMaybe<FloatFilter>;
  sizeMax?: InputMaybe<FloatFilter>;
  sizeMin?: InputMaybe<FloatFilter>;
  sizeTested?: InputMaybe<FloatFilter>;
  sizeWeightDeclared?: InputMaybe<FloatFilter>;
  sizeWidthDeclared?: InputMaybe<FloatFilter>;
  skiedBy?: InputMaybe<LinksFilter>;
  skierTypes?: InputMaybe<LinksFilter>;
  slope?: InputMaybe<IntegerFilter>;
  slug?: InputMaybe<SlugFilter>;
  snowCrust?: InputMaybe<IntegerFilter>;
  snowHard?: InputMaybe<IntegerFilter>;
  snowPowder?: InputMaybe<IntegerFilter>;
  snowWet?: InputMaybe<IntegerFilter>;
  suggestedArcCurve?: InputMaybe<LinkFilter>;
  suitableFor?: InputMaybe<TextFilter>;
  summit?: InputMaybe<IntegerFilter>;
  tailWidthDeclared?: InputMaybe<FloatFilter>;
  tailWidthMeasured?: InputMaybe<FloatFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  testedLabDescription?: InputMaybe<TextFilter>;
  testedOnsnowDescription?: InputMaybe<TextFilter>;
  testedPreview?: InputMaybe<StringFilter>;
  tipWidthDeclared?: InputMaybe<FloatFilter>;
  tipWidthMeasured?: InputMaybe<FloatFilter>;
  twistCenter?: InputMaybe<FloatFilter>;
  twistTail?: InputMaybe<FloatFilter>;
  twistTip?: InputMaybe<FloatFilter>;
  usedBy?: InputMaybe<StringFilter>;
  versions?: InputMaybe<LinksFilter>;
  waistFlex?: InputMaybe<IntegerFilter>;
  waistWidthDeclared?: InputMaybe<FloatFilter>;
  waistWidthMeasured?: InputMaybe<FloatFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
  weightMeasuredLeft?: InputMaybe<IntegerFilter>;
  weightMeasuredRight?: InputMaybe<IntegerFilter>;
};

export enum SkiModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CurveRadiusDeclaredAsc = 'curveRadiusDeclared_ASC',
  CurveRadiusDeclaredDesc = 'curveRadiusDeclared_DESC',
  CurveRadiusDescriptionAsc = 'curveRadiusDescription_ASC',
  CurveRadiusDescriptionDesc = 'curveRadiusDescription_DESC',
  CurveRadiusMeasuredAsc = 'curveRadiusMeasured_ASC',
  CurveRadiusMeasuredDesc = 'curveRadiusMeasured_DESC',
  DeckAsc = 'deck_ASC',
  DeckDesc = 'deck_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  EdgeContactAsc = 'edgeContact_ASC',
  EdgeContactDesc = 'edgeContact_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LengthDeclaredAsc = 'lengthDeclared_ASC',
  LengthDeclaredDesc = 'lengthDeclared_DESC',
  LengthMeasuredAsc = 'lengthMeasured_ASC',
  LengthMeasuredDesc = 'lengthMeasured_DESC',
  LevelAdvancedAsc = 'levelAdvanced_ASC',
  LevelAdvancedDesc = 'levelAdvanced_DESC',
  LevelBeginnerAsc = 'levelBeginner_ASC',
  LevelBeginnerDesc = 'levelBeginner_DESC',
  LevelGrowingAsc = 'levelGrowing_ASC',
  LevelGrowingDesc = 'levelGrowing_DESC',
  LevelHighAsc = 'levelHigh_ASC',
  LevelHighDesc = 'levelHigh_DESC',
  LiftSurfaceAsc = 'liftSurface_ASC',
  LiftSurfaceDesc = 'liftSurface_DESC',
  LineAsc = 'line_ASC',
  LineDesc = 'line_DESC',
  MeasurementsCompleteAsc = 'measurementsComplete_ASC',
  MeasurementsCompleteDesc = 'measurementsComplete_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  ReleasedInAsc = 'releasedIn_ASC',
  ReleasedInDesc = 'releasedIn_DESC',
  RockerTailAsc = 'rockerTail_ASC',
  RockerTailDesc = 'rockerTail_DESC',
  RockerTipAsc = 'rockerTip_ASC',
  RockerTipDesc = 'rockerTip_DESC',
  SizeCurveRadiusDeclaredAsc = 'sizeCurveRadiusDeclared_ASC',
  SizeCurveRadiusDeclaredDesc = 'sizeCurveRadiusDeclared_DESC',
  SizeDeclaredAsc = 'sizeDeclared_ASC',
  SizeDeclaredDesc = 'sizeDeclared_DESC',
  SizeLengthDeclaredAsc = 'sizeLengthDeclared_ASC',
  SizeLengthDeclaredDesc = 'sizeLengthDeclared_DESC',
  SizeMaxAsc = 'sizeMax_ASC',
  SizeMaxDesc = 'sizeMax_DESC',
  SizeMinAsc = 'sizeMin_ASC',
  SizeMinDesc = 'sizeMin_DESC',
  SizeTestedAsc = 'sizeTested_ASC',
  SizeTestedDesc = 'sizeTested_DESC',
  SizeWeightDeclaredAsc = 'sizeWeightDeclared_ASC',
  SizeWeightDeclaredDesc = 'sizeWeightDeclared_DESC',
  SizeWidthDeclaredAsc = 'sizeWidthDeclared_ASC',
  SizeWidthDeclaredDesc = 'sizeWidthDeclared_DESC',
  SlopeAsc = 'slope_ASC',
  SlopeDesc = 'slope_DESC',
  SnowCrustAsc = 'snowCrust_ASC',
  SnowCrustDesc = 'snowCrust_DESC',
  SnowHardAsc = 'snowHard_ASC',
  SnowHardDesc = 'snowHard_DESC',
  SnowPowderAsc = 'snowPowder_ASC',
  SnowPowderDesc = 'snowPowder_DESC',
  SnowWetAsc = 'snowWet_ASC',
  SnowWetDesc = 'snowWet_DESC',
  SummitAsc = 'summit_ASC',
  SummitDesc = 'summit_DESC',
  TailWidthDeclaredAsc = 'tailWidthDeclared_ASC',
  TailWidthDeclaredDesc = 'tailWidthDeclared_DESC',
  TailWidthMeasuredAsc = 'tailWidthMeasured_ASC',
  TailWidthMeasuredDesc = 'tailWidthMeasured_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TestedPreviewAsc = 'testedPreview_ASC',
  TestedPreviewDesc = 'testedPreview_DESC',
  TipWidthDeclaredAsc = 'tipWidthDeclared_ASC',
  TipWidthDeclaredDesc = 'tipWidthDeclared_DESC',
  TipWidthMeasuredAsc = 'tipWidthMeasured_ASC',
  TipWidthMeasuredDesc = 'tipWidthMeasured_DESC',
  TwistCenterAsc = 'twistCenter_ASC',
  TwistCenterDesc = 'twistCenter_DESC',
  TwistTailAsc = 'twistTail_ASC',
  TwistTailDesc = 'twistTail_DESC',
  TwistTipAsc = 'twistTip_ASC',
  TwistTipDesc = 'twistTip_DESC',
  UsedByAsc = 'usedBy_ASC',
  UsedByDesc = 'usedBy_DESC',
  WaistFlexAsc = 'waistFlex_ASC',
  WaistFlexDesc = 'waistFlex_DESC',
  WaistWidthDeclaredAsc = 'waistWidthDeclared_ASC',
  WaistWidthDeclaredDesc = 'waistWidthDeclared_DESC',
  WaistWidthMeasuredAsc = 'waistWidthMeasured_ASC',
  WaistWidthMeasuredDesc = 'waistWidthMeasured_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC',
  WeightMeasuredLeftAsc = 'weightMeasuredLeft_ASC',
  WeightMeasuredLeftDesc = 'weightMeasuredLeft_DESC',
  WeightMeasuredRightAsc = 'weightMeasuredRight_ASC',
  WeightMeasuredRightDesc = 'weightMeasuredRight_DESC'
}

/** Record of type Sci (ski) */
export type SkiRecord = RecordInterface & {
  __typename?: 'SkiRecord';
  _allAlsoSuitableForLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCurveRadiusDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allNotSuitableForLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPreviewDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSuitableForLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedLabDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedOnsnowDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUsageSuggestionsLocales?: Maybe<Array<UsageSuggestionRecordListListNonNullMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alsoSuitableFor?: Maybe<Scalars['String']['output']>;
  attitudes: Array<AttitudeRecord>;
  awards: Array<AwardRecord>;
  baseMaterials: Array<MaterialRecord>;
  bindings: Array<BindingRecord>;
  boots: Array<BootRecord>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  colors: Array<ColorRecord>;
  construction?: Maybe<ConstructionTechniqueRecord>;
  curveRadiusDeclared?: Maybe<Scalars['FloatType']['output']>;
  curveRadiusDescription?: Maybe<Scalars['String']['output']>;
  curveRadiusMeasured?: Maybe<Scalars['FloatType']['output']>;
  deck?: Maybe<Scalars['FloatType']['output']>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  edgeContact?: Maybe<Scalars['IntType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  editions: Array<EditionRecord>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  lengthDeclared?: Maybe<Scalars['FloatType']['output']>;
  lengthMeasured?: Maybe<Scalars['FloatType']['output']>;
  levelAdvanced?: Maybe<Scalars['IntType']['output']>;
  levelBeginner?: Maybe<Scalars['IntType']['output']>;
  levelGrowing?: Maybe<Scalars['IntType']['output']>;
  levelHigh?: Maybe<Scalars['IntType']['output']>;
  liftSurface?: Maybe<Scalars['IntType']['output']>;
  line?: Maybe<Scalars['IntType']['output']>;
  madeIn?: Maybe<CountryRecord>;
  materials: Array<MaterialRecord>;
  measurementsComplete?: Maybe<Scalars['BooleanType']['output']>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  notSuitableFor?: Maybe<Scalars['String']['output']>;
  previewDescription?: Maybe<Scalars['String']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  productStatus?: Maybe<StatusRecord>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  releasedIn?: Maybe<Scalars['String']['output']>;
  rockerTail?: Maybe<Scalars['FloatType']['output']>;
  rockerTip?: Maybe<Scalars['FloatType']['output']>;
  scopes: Array<ScopeRecord>;
  sizeCurveRadiusDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizeDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizeLengthDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizeMax?: Maybe<Scalars['FloatType']['output']>;
  sizeMin?: Maybe<Scalars['FloatType']['output']>;
  sizeTested?: Maybe<Scalars['FloatType']['output']>;
  sizeWeightDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizeWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizesAvailable: Array<SizeRecord>;
  skiedBy: Array<PersonRecord>;
  skierTypes: Array<SkierRecord>;
  slope?: Maybe<Scalars['IntType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  snowCrust?: Maybe<Scalars['IntType']['output']>;
  snowHard?: Maybe<Scalars['IntType']['output']>;
  snowPowder?: Maybe<Scalars['IntType']['output']>;
  snowWet?: Maybe<Scalars['IntType']['output']>;
  suggestedArcCurve?: Maybe<CurveArcRecord>;
  suitableFor?: Maybe<Scalars['String']['output']>;
  summit?: Maybe<Scalars['IntType']['output']>;
  tailWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  tailWidthMeasured?: Maybe<Scalars['FloatType']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  testedLabDescription?: Maybe<Scalars['String']['output']>;
  testedOnsnowDescription?: Maybe<Scalars['String']['output']>;
  testedPreview: Scalars['String']['output'];
  tipWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  tipWidthMeasured?: Maybe<Scalars['FloatType']['output']>;
  twistCenter?: Maybe<Scalars['FloatType']['output']>;
  twistTail?: Maybe<Scalars['FloatType']['output']>;
  twistTip?: Maybe<Scalars['FloatType']['output']>;
  usageSuggestions: Array<UsageSuggestionRecord>;
  usedBy?: Maybe<Scalars['String']['output']>;
  versions: Array<SkiRecord>;
  waistFlex?: Maybe<Scalars['IntType']['output']>;
  waistWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  waistWidthMeasured?: Maybe<Scalars['FloatType']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
  weightMeasuredLeft?: Maybe<Scalars['IntType']['output']>;
  weightMeasuredRight?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllAlsoSuitableForLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllCurveRadiusDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllNotSuitableForLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllPreviewDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllSuitableForLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllTestedLabDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllTestedOnsnowDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllUsageSuggestionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecordAlsoSuitableForArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordCurveRadiusDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecordNotSuitableForArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordPreviewDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordSuitableForArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordTestedLabDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordTestedOnsnowDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sci (ski) */
export type SkiRecordUsageSuggestionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sci (ski) */
export type SkiRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum SkierModelFieldsReferencingArticleModel {
  SkierRelatedArticles = 'skier_relatedArticles'
}

/** Linking fields */
export enum SkierModelFieldsReferencingProductFamilyModel {
  SkierRelatedFamilies = 'skier_relatedFamilies'
}

/** Linking fields */
export enum SkierModelFieldsReferencingScopeModel {
  SkierScope = 'skier_scope'
}

export type SkierModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkierModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SkierModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  relatedArticles?: InputMaybe<LinksFilter>;
  relatedArticlesHeading?: InputMaybe<StringFilter>;
  relatedArticlesSubheading?: InputMaybe<StringFilter>;
  relatedFamilies?: InputMaybe<LinksFilter>;
  relatedFamiliesHeading?: InputMaybe<StringFilter>;
  relatedFamiliesImage?: InputMaybe<FileFilter>;
  relatedFamiliesImageMobile?: InputMaybe<FileFilter>;
  relatedProductsHeading?: InputMaybe<StringFilter>;
  relatedProductsImage?: InputMaybe<FileFilter>;
  relatedProductsSubheading?: InputMaybe<StringFilter>;
  scope?: InputMaybe<LinkFilter>;
  slug?: InputMaybe<SlugFilter>;
  subheading?: InputMaybe<StringFilter>;
};

export enum SkierModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RelatedArticlesHeadingAsc = 'relatedArticlesHeading_ASC',
  RelatedArticlesHeadingDesc = 'relatedArticlesHeading_DESC',
  RelatedArticlesSubheadingAsc = 'relatedArticlesSubheading_ASC',
  RelatedArticlesSubheadingDesc = 'relatedArticlesSubheading_DESC',
  RelatedFamiliesHeadingAsc = 'relatedFamiliesHeading_ASC',
  RelatedFamiliesHeadingDesc = 'relatedFamiliesHeading_DESC',
  RelatedProductsHeadingAsc = 'relatedProductsHeading_ASC',
  RelatedProductsHeadingDesc = 'relatedProductsHeading_DESC',
  RelatedProductsSubheadingAsc = 'relatedProductsSubheading_ASC',
  RelatedProductsSubheadingDesc = 'relatedProductsSubheading_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC'
}

/** Record of type Sciatore (skier) */
export type SkierRecord = RecordInterface & {
  __typename?: 'SkierRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReferencingArticles: Array<ArticleRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingArticlesMeta: CollectionMetadata;
  _allReferencingBindings: Array<BindingRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBindingsMeta: CollectionMetadata;
  _allReferencingBoots: Array<BootRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingBootsMeta: CollectionMetadata;
  _allReferencingPeople: Array<PersonRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPeopleMeta: CollectionMetadata;
  _allReferencingSkis: Array<SkiRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingSkisMeta: CollectionMetadata;
  _allRelatedArticlesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedArticlesSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedFamiliesHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allRelatedProductsSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  name: Scalars['String']['output'];
  relatedArticles: Array<ArticleRecord>;
  relatedArticlesHeading?: Maybe<Scalars['String']['output']>;
  relatedArticlesSubheading?: Maybe<Scalars['String']['output']>;
  relatedFamilies: Array<ProductFamilyRecord>;
  relatedFamiliesHeading?: Maybe<Scalars['String']['output']>;
  relatedFamiliesImage?: Maybe<FileField>;
  relatedFamiliesImageMobile?: Maybe<FileField>;
  relatedProductsHeading?: Maybe<Scalars['String']['output']>;
  relatedProductsImage?: Maybe<FileField>;
  relatedProductsSubheading?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<ScopeRecord>;
  slug: Scalars['String']['output'];
  subheading?: Maybe<Scalars['String']['output']>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArticleAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingArticlesMetaArgs = {
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenArticleAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingBindingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BindingModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BindingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingBindingsMetaArgs = {
  filter?: InputMaybe<BindingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBindingAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingBootsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BootModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BootModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingBootsMetaArgs = {
  filter?: InputMaybe<BootModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenBootAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPersonAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingSkisArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SkiModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SkiModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllReferencingSkisMetaArgs = {
  filter?: InputMaybe<SkiModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenSkiAndSkier>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllRelatedArticlesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllRelatedArticlesSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllRelatedFamiliesHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllRelatedProductsHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllRelatedProductsSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_AllSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordRelatedArticlesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordRelatedArticlesSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordRelatedFamiliesHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordRelatedProductsHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordRelatedProductsSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sciatore (skier) */
export type SkierRecordSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum SkinModelFieldsReferencingAwardModel {
  SkinAwards = 'skin_awards'
}

/** Linking fields */
export enum SkinModelFieldsReferencingBrandModel {
  SkinBrand = 'skin_brand'
}

/** Linking fields */
export enum SkinModelFieldsReferencingCategoryModel {
  SkinCategories = 'skin_categories'
}

/** Linking fields */
export enum SkinModelFieldsReferencingProductFamilyModel {
  SkinFamilies = 'skin_families'
}

/** Linking fields */
export enum SkinModelFieldsReferencingScopeModel {
  SkinScopes = 'skin_scopes'
}

export type SkinModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkinModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SkinModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  distance?: InputMaybe<FloatFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  materials?: InputMaybe<LinksFilter>;
  materialsDescription?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  pricesDescription?: InputMaybe<StringFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  scopes?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  speedSliding?: InputMaybe<FloatFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  time?: InputMaybe<FloatFilter>;
  website?: InputMaybe<StringFilter>;
  weightDryMeasured?: InputMaybe<FloatFilter>;
  weightWetMeasured?: InputMaybe<FloatFilter>;
};

export enum SkinModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  DistanceAsc = 'distance_ASC',
  DistanceDesc = 'distance_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MaterialsDescriptionAsc = 'materialsDescription_ASC',
  MaterialsDescriptionDesc = 'materialsDescription_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  PricesDescriptionAsc = 'pricesDescription_ASC',
  PricesDescriptionDesc = 'pricesDescription_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  SpeedSlidingAsc = 'speedSliding_ASC',
  SpeedSlidingDesc = 'speedSliding_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDryMeasuredAsc = 'weightDryMeasured_ASC',
  WeightDryMeasuredDesc = 'weightDryMeasured_DESC',
  WeightWetMeasuredAsc = 'weightWetMeasured_ASC',
  WeightWetMeasuredDesc = 'weightWetMeasured_DESC'
}

/** Record of type Pelle (skin) */
export type SkinRecord = RecordInterface & {
  __typename?: 'SkinRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  distance?: Maybe<Scalars['FloatType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  id: Scalars['ItemId']['output'];
  materials: Array<MaterialRecord>;
  materialsDescription?: Maybe<Scalars['String']['output']>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  pricesDescription?: Maybe<Scalars['String']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  scopes: Array<ScopeRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  speedSliding?: Maybe<Scalars['FloatType']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['FloatType']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDryMeasured?: Maybe<Scalars['FloatType']['output']>;
  weightWetMeasured?: Maybe<Scalars['FloatType']['output']>;
};


/** Record of type Pelle (skin) */
export type SkinRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pelle (skin) */
export type SkinRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Pelle (skin) */
export type SkinRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pelle (skin) */
export type SkinRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pelle (skin) */
export type SkinRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pelle (skin) */
export type SkinRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Pelle (skin) */
export type SkinRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Linking fields */
export enum SplitboardBindingModelFieldsReferencingAwardModel {
  SplitboardBindingAwards = 'splitboardBinding_awards'
}

/** Linking fields */
export enum SplitboardBindingModelFieldsReferencingBrandModel {
  SplitboardBindingBrand = 'splitboardBinding_brand'
}

/** Linking fields */
export enum SplitboardBindingModelFieldsReferencingCategoryModel {
  SplitboardBindingCategories = 'splitboardBinding_categories'
}

/** Linking fields */
export enum SplitboardBindingModelFieldsReferencingProductFamilyModel {
  SplitboardBindingFamilies = 'splitboardBinding_families'
}

/** Linking fields */
export enum SplitboardBindingModelFieldsReferencingScopeModel {
  SplitboardBindingScopes = 'splitboardBinding_scopes'
}

export type SplitboardBindingModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SplitboardBindingModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SplitboardBindingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  alpinism?: InputMaybe<IntegerFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  colors?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  featHibackRigidity?: InputMaybe<IntegerFilter>;
  featStrapComfort?: InputMaybe<IntegerFilter>;
  featUsageSpeed?: InputMaybe<IntegerFilter>;
  funFreeride?: InputMaybe<IntegerFilter>;
  heelLifterAvailable?: InputMaybe<BooleanFilter>;
  heelLockAvailable?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  levelAdvanced?: InputMaybe<IntegerFilter>;
  levelBeginner?: InputMaybe<IntegerFilter>;
  levelGrowing?: InputMaybe<IntegerFilter>;
  levelHigh?: InputMaybe<IntegerFilter>;
  longHike?: InputMaybe<IntegerFilter>;
  measurementsComplete?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<SeoFilter>;
  nagativeHibackAvailable?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  previewDescription?: InputMaybe<TextFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  releasedIn?: InputMaybe<StringFilter>;
  scopes?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  splitboardBoots?: InputMaybe<LinksFilter>;
  splitboards?: InputMaybe<LinksFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  testedOnsnowDescription?: InputMaybe<TextFilter>;
  testedPreview?: InputMaybe<StringFilter>;
  versions?: InputMaybe<LinksFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum SplitboardBindingModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AlpinismAsc = 'alpinism_ASC',
  AlpinismDesc = 'alpinism_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  FeatHibackRigidityAsc = 'featHibackRigidity_ASC',
  FeatHibackRigidityDesc = 'featHibackRigidity_DESC',
  FeatStrapComfortAsc = 'featStrapComfort_ASC',
  FeatStrapComfortDesc = 'featStrapComfort_DESC',
  FeatUsageSpeedAsc = 'featUsageSpeed_ASC',
  FeatUsageSpeedDesc = 'featUsageSpeed_DESC',
  FunFreerideAsc = 'funFreeride_ASC',
  FunFreerideDesc = 'funFreeride_DESC',
  HeelLifterAvailableAsc = 'heelLifterAvailable_ASC',
  HeelLifterAvailableDesc = 'heelLifterAvailable_DESC',
  HeelLockAvailableAsc = 'heelLockAvailable_ASC',
  HeelLockAvailableDesc = 'heelLockAvailable_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LevelAdvancedAsc = 'levelAdvanced_ASC',
  LevelAdvancedDesc = 'levelAdvanced_DESC',
  LevelBeginnerAsc = 'levelBeginner_ASC',
  LevelBeginnerDesc = 'levelBeginner_DESC',
  LevelGrowingAsc = 'levelGrowing_ASC',
  LevelGrowingDesc = 'levelGrowing_DESC',
  LevelHighAsc = 'levelHigh_ASC',
  LevelHighDesc = 'levelHigh_DESC',
  LongHikeAsc = 'longHike_ASC',
  LongHikeDesc = 'longHike_DESC',
  MeasurementsCompleteAsc = 'measurementsComplete_ASC',
  MeasurementsCompleteDesc = 'measurementsComplete_DESC',
  NagativeHibackAvailableAsc = 'nagativeHibackAvailable_ASC',
  NagativeHibackAvailableDesc = 'nagativeHibackAvailable_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  ReleasedInAsc = 'releasedIn_ASC',
  ReleasedInDesc = 'releasedIn_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TestedPreviewAsc = 'testedPreview_ASC',
  TestedPreviewDesc = 'testedPreview_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord = RecordInterface & {
  __typename?: 'SplitboardBindingRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allPreviewDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedOnsnowDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alpinism?: Maybe<Scalars['IntType']['output']>;
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  colors: Array<ColorRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  featHibackRigidity?: Maybe<Scalars['IntType']['output']>;
  featStrapComfort?: Maybe<Scalars['IntType']['output']>;
  featUsageSpeed?: Maybe<Scalars['IntType']['output']>;
  funFreeride?: Maybe<Scalars['IntType']['output']>;
  heelLifterAvailable?: Maybe<Scalars['BooleanType']['output']>;
  heelLockAvailable?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  levelAdvanced?: Maybe<Scalars['IntType']['output']>;
  levelBeginner?: Maybe<Scalars['IntType']['output']>;
  levelGrowing?: Maybe<Scalars['IntType']['output']>;
  levelHigh?: Maybe<Scalars['IntType']['output']>;
  longHike?: Maybe<Scalars['IntType']['output']>;
  measurementsComplete?: Maybe<Scalars['BooleanType']['output']>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  nagativeHibackAvailable?: Maybe<Scalars['BooleanType']['output']>;
  name: Scalars['String']['output'];
  previewDescription?: Maybe<Scalars['String']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  releasedIn?: Maybe<Scalars['String']['output']>;
  scopes: Array<ScopeRecord>;
  sizesAvailable: Array<SizeSplitboardRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  splitboardBoots: Array<SplitboardBootRecord>;
  splitboards: Array<SplitboardRecord>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  testedOnsnowDescription?: Maybe<Scalars['String']['output']>;
  testedPreview: Scalars['String']['output'];
  versions: Array<SplitboardBindingRecord>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord_AllPreviewDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord_AllTestedOnsnowDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecordPreviewDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecordTestedOnsnowDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Attacco splitboard (splitboard_binding) */
export type SplitboardBindingRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum SplitboardBootModelFieldsReferencingAwardModel {
  SplitboardBootAwards = 'splitboardBoot_awards'
}

/** Linking fields */
export enum SplitboardBootModelFieldsReferencingBrandModel {
  SplitboardBootBrand = 'splitboardBoot_brand'
}

/** Linking fields */
export enum SplitboardBootModelFieldsReferencingCategoryModel {
  SplitboardBootCategories = 'splitboardBoot_categories'
}

/** Linking fields */
export enum SplitboardBootModelFieldsReferencingProductFamilyModel {
  SplitboardBootFamilies = 'splitboardBoot_families'
}

/** Linking fields */
export enum SplitboardBootModelFieldsReferencingScopeModel {
  SplitboardBootScopes = 'splitboardBoot_scopes'
}

export type SplitboardBootModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SplitboardBootModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SplitboardBootModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  alpinism?: InputMaybe<IntegerFilter>;
  awards?: InputMaybe<LinksFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  colors?: InputMaybe<LinksFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  featComfort?: InputMaybe<IntegerFilter>;
  featRigidity?: InputMaybe<IntegerFilter>;
  featSoleFit?: InputMaybe<IntegerFilter>;
  featSupportLateral?: InputMaybe<IntegerFilter>;
  funFreeride?: InputMaybe<IntegerFilter>;
  id?: InputMaybe<ItemIdFilter>;
  levelAdvanced?: InputMaybe<IntegerFilter>;
  levelBeginner?: InputMaybe<IntegerFilter>;
  levelGrowing?: InputMaybe<IntegerFilter>;
  levelHigh?: InputMaybe<IntegerFilter>;
  longHike?: InputMaybe<IntegerFilter>;
  measurementsComplete?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  previewDescription?: InputMaybe<TextFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  releasedIn?: InputMaybe<StringFilter>;
  scopes?: InputMaybe<LinksFilter>;
  sizeMax?: InputMaybe<FloatFilter>;
  sizeMin?: InputMaybe<FloatFilter>;
  slug?: InputMaybe<SlugFilter>;
  splitboardBindings?: InputMaybe<LinksFilter>;
  splitboards?: InputMaybe<LinksFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  testedOnsnowDescription?: InputMaybe<TextFilter>;
  testedPreview?: InputMaybe<StringFilter>;
  versions?: InputMaybe<LinksFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum SplitboardBootModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  AlpinismAsc = 'alpinism_ASC',
  AlpinismDesc = 'alpinism_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  FeatComfortAsc = 'featComfort_ASC',
  FeatComfortDesc = 'featComfort_DESC',
  FeatRigidityAsc = 'featRigidity_ASC',
  FeatRigidityDesc = 'featRigidity_DESC',
  FeatSoleFitAsc = 'featSoleFit_ASC',
  FeatSoleFitDesc = 'featSoleFit_DESC',
  FeatSupportLateralAsc = 'featSupportLateral_ASC',
  FeatSupportLateralDesc = 'featSupportLateral_DESC',
  FunFreerideAsc = 'funFreeride_ASC',
  FunFreerideDesc = 'funFreeride_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LevelAdvancedAsc = 'levelAdvanced_ASC',
  LevelAdvancedDesc = 'levelAdvanced_DESC',
  LevelBeginnerAsc = 'levelBeginner_ASC',
  LevelBeginnerDesc = 'levelBeginner_DESC',
  LevelGrowingAsc = 'levelGrowing_ASC',
  LevelGrowingDesc = 'levelGrowing_DESC',
  LevelHighAsc = 'levelHigh_ASC',
  LevelHighDesc = 'levelHigh_DESC',
  LongHikeAsc = 'longHike_ASC',
  LongHikeDesc = 'longHike_DESC',
  MeasurementsCompleteAsc = 'measurementsComplete_ASC',
  MeasurementsCompleteDesc = 'measurementsComplete_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  ReleasedInAsc = 'releasedIn_ASC',
  ReleasedInDesc = 'releasedIn_DESC',
  SizeMaxAsc = 'sizeMax_ASC',
  SizeMaxDesc = 'sizeMax_DESC',
  SizeMinAsc = 'sizeMin_ASC',
  SizeMinDesc = 'sizeMin_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TestedPreviewAsc = 'testedPreview_ASC',
  TestedPreviewDesc = 'testedPreview_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord = RecordInterface & {
  __typename?: 'SplitboardBootRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allPreviewDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedOnsnowDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alpinism?: Maybe<Scalars['IntType']['output']>;
  awards: Array<AwardRecord>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  colors: Array<ColorRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  featComfort?: Maybe<Scalars['IntType']['output']>;
  featRigidity?: Maybe<Scalars['IntType']['output']>;
  featSoleFit?: Maybe<Scalars['IntType']['output']>;
  featSupportLateral?: Maybe<Scalars['IntType']['output']>;
  funFreeride?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['ItemId']['output'];
  levelAdvanced?: Maybe<Scalars['IntType']['output']>;
  levelBeginner?: Maybe<Scalars['IntType']['output']>;
  levelGrowing?: Maybe<Scalars['IntType']['output']>;
  levelHigh?: Maybe<Scalars['IntType']['output']>;
  longHike?: Maybe<Scalars['IntType']['output']>;
  measurementsComplete?: Maybe<Scalars['BooleanType']['output']>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  previewDescription?: Maybe<Scalars['String']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  releasedIn?: Maybe<Scalars['String']['output']>;
  scopes: Array<ScopeRecord>;
  sizeMax?: Maybe<Scalars['FloatType']['output']>;
  sizeMin?: Maybe<Scalars['FloatType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  splitboardBindings: Array<SplitboardBindingRecord>;
  splitboards: Array<SplitboardRecord>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  testedOnsnowDescription?: Maybe<Scalars['String']['output']>;
  testedPreview: Scalars['String']['output'];
  versions: Array<SplitboardBootRecord>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord_AllPreviewDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord_AllTestedOnsnowDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecordPreviewDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecordTestedOnsnowDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Scarponi splitboard (splitboard_boot) */
export type SplitboardBootRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum SplitboardModelFieldsReferencingAwardModel {
  SplitboardAwards = 'splitboard_awards'
}

/** Linking fields */
export enum SplitboardModelFieldsReferencingBrandModel {
  SplitboardBrand = 'splitboard_brand'
}

/** Linking fields */
export enum SplitboardModelFieldsReferencingCategoryModel {
  SplitboardCategories = 'splitboard_categories'
}

/** Linking fields */
export enum SplitboardModelFieldsReferencingPersonModel {
  SplitboardSkiedBy = 'splitboard_skiedBy'
}

/** Linking fields */
export enum SplitboardModelFieldsReferencingProductFamilyModel {
  SplitboardFamilies = 'splitboard_families'
}

/** Linking fields */
export enum SplitboardModelFieldsReferencingScopeModel {
  SplitboardScopes = 'splitboard_scopes'
}

export type SplitboardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SplitboardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SplitboardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  awards?: InputMaybe<LinksFilter>;
  baseMaterials?: InputMaybe<LinksFilter>;
  bigMountain?: InputMaybe<IntegerFilter>;
  brand?: InputMaybe<LinkFilter>;
  categories?: InputMaybe<LinksFilter>;
  channels?: InputMaybe<LinksFilter>;
  colors?: InputMaybe<LinksFilter>;
  construction?: InputMaybe<LinkFilter>;
  descriptionsComplete?: InputMaybe<BooleanFilter>;
  detectionsComplete?: InputMaybe<BooleanFilter>;
  edgeEffective?: InputMaybe<FloatFilter>;
  editingComplete?: InputMaybe<BooleanFilter>;
  families?: InputMaybe<LinksFilter>;
  funFreeride?: InputMaybe<IntegerFilter>;
  id?: InputMaybe<ItemIdFilter>;
  levelAdvanced?: InputMaybe<IntegerFilter>;
  levelBeginner?: InputMaybe<IntegerFilter>;
  levelGrowing?: InputMaybe<IntegerFilter>;
  levelHigh?: InputMaybe<IntegerFilter>;
  longHike?: InputMaybe<IntegerFilter>;
  materials?: InputMaybe<LinksFilter>;
  metadata?: InputMaybe<SeoFilter>;
  name?: InputMaybe<StringFilter>;
  previewDescription?: InputMaybe<TextFilter>;
  priceEur?: InputMaybe<FloatFilter>;
  priceUsd?: InputMaybe<FloatFilter>;
  proofreadingComplete?: InputMaybe<BooleanFilter>;
  ratingsComplete?: InputMaybe<BooleanFilter>;
  releasedIn?: InputMaybe<StringFilter>;
  scopes?: InputMaybe<LinksFilter>;
  sidecutRadius?: InputMaybe<StringFilter>;
  sizeDeclared?: InputMaybe<FloatFilter>;
  sizeMax?: InputMaybe<FloatFilter>;
  sizeMin?: InputMaybe<FloatFilter>;
  sizeTested?: InputMaybe<FloatFilter>;
  skiedBy?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  splitboardBindings?: InputMaybe<LinksFilter>;
  splitboardBoots?: InputMaybe<LinksFilter>;
  steep?: InputMaybe<IntegerFilter>;
  tailWidthDeclared?: InputMaybe<FloatFilter>;
  testedDescription?: InputMaybe<TextFilter>;
  testedIn?: InputMaybe<StringFilter>;
  testedOnsnowDescription?: InputMaybe<TextFilter>;
  testedPreview?: InputMaybe<StringFilter>;
  tipWidthDeclared?: InputMaybe<FloatFilter>;
  versions?: InputMaybe<LinksFilter>;
  waistWidthDeclared?: InputMaybe<FloatFilter>;
  website?: InputMaybe<StringFilter>;
  weightDeclared?: InputMaybe<IntegerFilter>;
};

export enum SplitboardModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BigMountainAsc = 'bigMountain_ASC',
  BigMountainDesc = 'bigMountain_DESC',
  DescriptionsCompleteAsc = 'descriptionsComplete_ASC',
  DescriptionsCompleteDesc = 'descriptionsComplete_DESC',
  DetectionsCompleteAsc = 'detectionsComplete_ASC',
  DetectionsCompleteDesc = 'detectionsComplete_DESC',
  EdgeEffectiveAsc = 'edgeEffective_ASC',
  EdgeEffectiveDesc = 'edgeEffective_DESC',
  EditingCompleteAsc = 'editingComplete_ASC',
  EditingCompleteDesc = 'editingComplete_DESC',
  FunFreerideAsc = 'funFreeride_ASC',
  FunFreerideDesc = 'funFreeride_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LevelAdvancedAsc = 'levelAdvanced_ASC',
  LevelAdvancedDesc = 'levelAdvanced_DESC',
  LevelBeginnerAsc = 'levelBeginner_ASC',
  LevelBeginnerDesc = 'levelBeginner_DESC',
  LevelGrowingAsc = 'levelGrowing_ASC',
  LevelGrowingDesc = 'levelGrowing_DESC',
  LevelHighAsc = 'levelHigh_ASC',
  LevelHighDesc = 'levelHigh_DESC',
  LongHikeAsc = 'longHike_ASC',
  LongHikeDesc = 'longHike_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceEurAsc = 'priceEur_ASC',
  PriceEurDesc = 'priceEur_DESC',
  PriceUsdAsc = 'priceUsd_ASC',
  PriceUsdDesc = 'priceUsd_DESC',
  ProofreadingCompleteAsc = 'proofreadingComplete_ASC',
  ProofreadingCompleteDesc = 'proofreadingComplete_DESC',
  RatingsCompleteAsc = 'ratingsComplete_ASC',
  RatingsCompleteDesc = 'ratingsComplete_DESC',
  ReleasedInAsc = 'releasedIn_ASC',
  ReleasedInDesc = 'releasedIn_DESC',
  SidecutRadiusAsc = 'sidecutRadius_ASC',
  SidecutRadiusDesc = 'sidecutRadius_DESC',
  SizeDeclaredAsc = 'sizeDeclared_ASC',
  SizeDeclaredDesc = 'sizeDeclared_DESC',
  SizeMaxAsc = 'sizeMax_ASC',
  SizeMaxDesc = 'sizeMax_DESC',
  SizeMinAsc = 'sizeMin_ASC',
  SizeMinDesc = 'sizeMin_DESC',
  SizeTestedAsc = 'sizeTested_ASC',
  SizeTestedDesc = 'sizeTested_DESC',
  SteepAsc = 'steep_ASC',
  SteepDesc = 'steep_DESC',
  TailWidthDeclaredAsc = 'tailWidthDeclared_ASC',
  TailWidthDeclaredDesc = 'tailWidthDeclared_DESC',
  TestedInAsc = 'testedIn_ASC',
  TestedInDesc = 'testedIn_DESC',
  TestedPreviewAsc = 'testedPreview_ASC',
  TestedPreviewDesc = 'testedPreview_DESC',
  TipWidthDeclaredAsc = 'tipWidthDeclared_ASC',
  TipWidthDeclaredDesc = 'tipWidthDeclared_DESC',
  WaistWidthDeclaredAsc = 'waistWidthDeclared_ASC',
  WaistWidthDeclaredDesc = 'waistWidthDeclared_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  WeightDeclaredAsc = 'weightDeclared_ASC',
  WeightDeclaredDesc = 'weightDeclared_DESC'
}

/** Record of type Splitboard (splitboard) */
export type SplitboardRecord = RecordInterface & {
  __typename?: 'SplitboardRecord';
  _allMetadataLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allPreviewDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTestedOnsnowDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allWebsiteLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  awards: Array<AwardRecord>;
  baseMaterials: Array<MaterialRecord>;
  bigMountain?: Maybe<Scalars['IntType']['output']>;
  brand?: Maybe<BrandRecord>;
  categories: Array<CategoryRecord>;
  channels: Array<ChannelRecord>;
  colors: Array<ColorRecord>;
  construction?: Maybe<ConstructionTechniqueRecord>;
  descriptionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  detectionsComplete?: Maybe<Scalars['BooleanType']['output']>;
  edgeEffective?: Maybe<Scalars['FloatType']['output']>;
  editingComplete?: Maybe<Scalars['BooleanType']['output']>;
  families: Array<ProductFamilyRecord>;
  funFreeride?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['ItemId']['output'];
  levelAdvanced?: Maybe<Scalars['IntType']['output']>;
  levelBeginner?: Maybe<Scalars['IntType']['output']>;
  levelGrowing?: Maybe<Scalars['IntType']['output']>;
  levelHigh?: Maybe<Scalars['IntType']['output']>;
  longHike?: Maybe<Scalars['IntType']['output']>;
  materials: Array<MaterialRecord>;
  media: Array<MediaProductRecord>;
  metadata?: Maybe<SeoField>;
  name: Scalars['String']['output'];
  previewDescription?: Maybe<Scalars['String']['output']>;
  priceEur?: Maybe<Scalars['FloatType']['output']>;
  priceUsd?: Maybe<Scalars['FloatType']['output']>;
  proofreadingComplete?: Maybe<Scalars['BooleanType']['output']>;
  ratingsComplete?: Maybe<Scalars['BooleanType']['output']>;
  releasedIn?: Maybe<Scalars['String']['output']>;
  scopes: Array<ScopeRecord>;
  sidecutRadius?: Maybe<Scalars['String']['output']>;
  sizeDeclared?: Maybe<Scalars['FloatType']['output']>;
  sizeMax?: Maybe<Scalars['FloatType']['output']>;
  sizeMin?: Maybe<Scalars['FloatType']['output']>;
  sizeTested?: Maybe<Scalars['FloatType']['output']>;
  sizesAvailable: Array<SizeSplitboardRecord>;
  skiedBy: Array<PersonRecord>;
  slug?: Maybe<Scalars['String']['output']>;
  splitboardBindings: Array<SplitboardBindingRecord>;
  splitboardBoots: Array<SplitboardBootRecord>;
  steep?: Maybe<Scalars['IntType']['output']>;
  tailWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  testedDescription?: Maybe<Scalars['String']['output']>;
  testedIn?: Maybe<Scalars['String']['output']>;
  testedOnsnowDescription?: Maybe<Scalars['String']['output']>;
  testedPreview: Scalars['String']['output'];
  tipWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  versions: Array<SplitboardRecord>;
  waistWidthDeclared?: Maybe<Scalars['FloatType']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weightDeclared?: Maybe<Scalars['IntType']['output']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecord_AllMetadataLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecord_AllPreviewDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecord_AllTestedDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecord_AllTestedOnsnowDescriptionLocalesArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecord_AllWebsiteLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecordMetadataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecordPreviewDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecordTestedDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecordTestedOnsnowDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Splitboard (splitboard) */
export type SplitboardRecordWebsiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

export type StatusModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<StatusModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StatusModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
};

export enum StatusModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Stato (status) */
export type StatusRecord = RecordInterface & {
  __typename?: 'StatusRecord';
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
};


/** Record of type Stato (status) */
export type StatusRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Stato (status) */
export type StatusRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Stato (status) */
export type StatusRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String']['output'];
};

/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord = RecordInterface & {
  __typename?: 'SubscriptionRecord';
  _allBenefitsBlocksLocales?: Maybe<Array<BenefitBlockRecordListListNonNullMultiLocaleField>>;
  _allCtaButtonTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCtaButtonUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFooterButtonTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFooterButtonUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFooterHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFooterLayeredImagesLocales?: Maybe<Array<LayeredImageRecordListListNonNullMultiLocaleField>>;
  _allFooterNotesLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allFooterTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHeroHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHeroSubheadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLayeredImagesLocales?: Maybe<Array<LayeredImageRecordListListNonNullMultiLocaleField>>;
  _allPlusHeadingLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allReasonsLocales?: Maybe<Array<ReasonRecordListListNonNullMultiLocaleField>>;
  _allReasonsTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  benefits: Array<BenefitRecord>;
  benefitsBlocks: Array<BenefitBlockRecord>;
  ctaButtonText?: Maybe<Scalars['String']['output']>;
  ctaButtonUrl?: Maybe<Scalars['String']['output']>;
  footerButtonText?: Maybe<Scalars['String']['output']>;
  footerButtonUrl?: Maybe<Scalars['String']['output']>;
  footerHeading?: Maybe<Scalars['String']['output']>;
  footerLayeredImages: Array<LayeredImageRecord>;
  footerNotes?: Maybe<Scalars['String']['output']>;
  footerText?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubheading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  layeredImages: Array<LayeredImageRecord>;
  plusHeading?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['IntType']['output']>;
  reasons: Array<ReasonRecord>;
  reasonsImage?: Maybe<FileField>;
  reasonsTitle?: Maybe<Scalars['String']['output']>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllBenefitsBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllCtaButtonTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllCtaButtonUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllFooterButtonTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllFooterButtonUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllFooterHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllFooterLayeredImagesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllFooterNotesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllFooterTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllHeroHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllHeroSubheadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllLayeredImagesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllPlusHeadingLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllReasonsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_AllReasonsTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordBenefitsBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordCtaButtonTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordCtaButtonUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordFooterButtonTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordFooterButtonUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordFooterHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordFooterLayeredImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordFooterNotesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordFooterTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordHeroHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordHeroSubheadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordLayeredImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordPlusHeadingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordReasonsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Abbonamento (subscription) */
export type SubscriptionRecordReasonsTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type TopicModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum TopicModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Tema (topic) */
export type TopicRecord = RecordInterface & {
  __typename?: 'TopicRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


/** Record of type Tema (topic) */
export type TopicRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tema (topic) */
export type TopicRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tema (topic) */
export type TopicRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tema (topic) */
export type TopicRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tema (topic) */
export type TopicRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Caratteristica (trait) */
export type TraitRecord = RecordInterface & {
  __typename?: 'TraitRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


/** Block of type Caratteristica (trait) */
export type TraitRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TraitRecordListListNonNullMultiLocaleField = {
  __typename?: 'TraitRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<TraitRecord>;
};

/** Block of type Testo due colonne (two_column_text) */
export type TwoColumnTextRecord = RecordInterface & {
  __typename?: 'TwoColumnTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  firstColumnHeading?: Maybe<Scalars['String']['output']>;
  firstColumnText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  secondColumnHeading?: Maybe<Scalars['String']['output']>;
  secondColumnText?: Maybe<Scalars['String']['output']>;
  swapColumns?: Maybe<Scalars['BooleanType']['output']>;
};


/** Block of type Testo due colonne (two_column_text) */
export type TwoColumnTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Testo due colonne (two_column_text) */
export type TwoColumnTextRecordFirstColumnTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type Testo due colonne (two_column_text) */
export type TwoColumnTextRecordSecondColumnTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type Url (url) */
export type UrlRecord = RecordInterface & {
  __typename?: 'UrlRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Url (url) */
export type UrlRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type UrlRecordListListNonNullMultiLocaleField = {
  __typename?: 'UrlRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<UrlRecord>;
};

/** Block of type Indicazioni di utilizzo (usage_suggestion) */
export type UsageSuggestionRecord = RecordInterface & {
  __typename?: 'UsageSuggestionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  percentage?: Maybe<Scalars['IntType']['output']>;
  usage?: Maybe<Scalars['String']['output']>;
};


/** Block of type Indicazioni di utilizzo (usage_suggestion) */
export type UsageSuggestionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type UsageSuggestionRecordListListNonNullMultiLocaleField = {
  __typename?: 'UsageSuggestionRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<UsageSuggestionRecord>;
};

export type UserModelFavoriteProductsField = AirbagRecord | ArtvaRecord | AxRecord | BindingRecord | BootRecord | CramponRecord | HarnessRecord | HelmetRecord | PoleRecord | ProbeRecord | RopeRecord | ShovelRecord | SkiRecord | SkinRecord | SplitboardBindingRecord | SplitboardBootRecord | SplitboardRecord;

export type UserModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<UserModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UserModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  favoriteProducts?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  idCommercelayer?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  suggestedProducts?: InputMaybe<LinksFilter>;
  surname?: InputMaybe<StringFilter>;
};

export enum UserModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdCommercelayerAsc = 'idCommercelayer_ASC',
  IdCommercelayerDesc = 'idCommercelayer_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SurnameAsc = 'surname_ASC',
  SurnameDesc = 'surname_DESC'
}

export type UserModelSuggestedProductsField = BindingRecord | BootRecord | SkiRecord;

/** Record of type Utente (user) */
export type UserRecord = RecordInterface & {
  __typename?: 'UserRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  favoriteProducts: Array<UserModelFavoriteProductsField>;
  id: Scalars['ItemId']['output'];
  idCommercelayer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  suggestedProducts: Array<UserModelSuggestedProductsField>;
  surname?: Maybe<Scalars['String']['output']>;
};


/** Record of type Utente (user) */
export type UserRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

/** Specifies how to filter Video fields */
export type VideoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Block of type Video (video) */
export type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  cover?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type Video (video) */
export type VideoRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type ResponsiveImageFragment = { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null };

export type ResponsiveImageCardFocalZeroFragment = { __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null };

export type ResponsiveImageCardFocalOneFragment = { __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null };

export type ResponsiveImageCardFocalHalfFragment = { __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null };

export type ArticleCardFragment = { __typename?: 'ArticleRecord', id: string, title?: string | null, slug?: string | null, metadata?: { __typename?: 'SeoField', description?: string | null, title?: string | null } | null, categories: Array<{ __typename?: 'CategoryRecord', id: string, name: string, slug: string }>, topics: Array<{ __typename?: 'TopicRecord', id: string, name?: string | null, color?: string | null, slug?: string | null }>, modules: Array<{ __typename?: 'ComparativeSliderRecord' } | { __typename?: 'ContentRecord' } | { __typename?: 'FeaturedHeadingRecord' } | { __typename?: 'FeaturedTwoColumnTextRecord' } | { __typename?: 'HeadingRecord' } | { __typename: 'HeroRecord', id: string, heroType?: string | null, subheading?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null } | { __typename?: 'ImageRecord' } | { __typename?: 'ImageWithTextRecord' } | { __typename?: 'ProductsSliderRecord' } | { __typename?: 'QuoteRecord' } | { __typename?: 'TwoColumnTextRecord' } | { __typename?: 'VideoRecord' }> };

type TeamProductsSetup_BindingRecord_Fragment = { __typename: 'BindingRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, types: Array<{ __typename?: 'BindingTypeRecord', name: string }> };

type TeamProductsSetup_BootRecord_Fragment = { __typename: 'BootRecord', id: string, name: string, slug?: string | null, testedPreview: string, leverNumber?: number | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type TeamProductsSetup_PoleRecord_Fragment = { __typename: 'PoleRecord', id: string, name: string, slug?: string | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImagePreview?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, types: Array<{ __typename?: 'PoleTypeRecord', name: string }> };

type TeamProductsSetup_SkiRecord_Fragment = { __typename: 'SkiRecord', id: string, name: string, slug?: string | null, testedPreview: string, waistWidthDeclared?: number | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type TeamProductsSetup_SkinRecord_Fragment = { __typename: 'SkinRecord', id: string, name: string, slug?: string | null, weightDryMeasured?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, materials: Array<{ __typename?: 'MaterialRecord', name: string }> };

type TeamProductsSetup_SplitboardBindingRecord_Fragment = { __typename: 'SplitboardBindingRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type TeamProductsSetup_SplitboardBootRecord_Fragment = { __typename: 'SplitboardBootRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type TeamProductsSetup_SplitboardRecord_Fragment = { __typename: 'SplitboardRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type TeamProductsSetupFragment = TeamProductsSetup_BindingRecord_Fragment | TeamProductsSetup_BootRecord_Fragment | TeamProductsSetup_PoleRecord_Fragment | TeamProductsSetup_SkiRecord_Fragment | TeamProductsSetup_SkinRecord_Fragment | TeamProductsSetup_SplitboardBindingRecord_Fragment | TeamProductsSetup_SplitboardBootRecord_Fragment | TeamProductsSetup_SplitboardRecord_Fragment;

type Favorites_AirbagRecord_Fragment = { __typename: 'AirbagRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, inflationType?: { __typename?: 'InflationTypeRecord', name: string } | null };

type Favorites_ArtvaRecord_Fragment = { __typename: 'ArtvaRecord', id: string, name: string, slug?: string | null, autonomy?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_AxRecord_Fragment = { __typename?: 'AxRecord' };

type Favorites_BindingRecord_Fragment = { __typename: 'BindingRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, types: Array<{ __typename?: 'BindingTypeRecord', name: string }> };

type Favorites_BootRecord_Fragment = { __typename: 'BootRecord', id: string, name: string, slug?: string | null, testedPreview: string, leverNumber?: number | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_CramponRecord_Fragment = { __typename: 'CramponRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_HarnessRecord_Fragment = { __typename: 'HarnessRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_HelmetRecord_Fragment = { __typename: 'HelmetRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_PoleRecord_Fragment = { __typename: 'PoleRecord', id: string, name: string, slug?: string | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImagePreview?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, types: Array<{ __typename?: 'PoleTypeRecord', name: string }> };

type Favorites_ProbeRecord_Fragment = { __typename: 'ProbeRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, material?: { __typename?: 'MaterialRecord', name: string } | null };

type Favorites_RopeRecord_Fragment = { __typename?: 'RopeRecord' };

type Favorites_ShovelRecord_Fragment = { __typename: 'ShovelRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_SkiRecord_Fragment = { __typename: 'SkiRecord', id: string, name: string, slug?: string | null, testedPreview: string, waistWidthDeclared?: number | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_SkinRecord_Fragment = { __typename: 'SkinRecord', id: string, name: string, slug?: string | null, weightDryMeasured?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, materials: Array<{ __typename?: 'MaterialRecord', name: string }> };

type Favorites_SplitboardBindingRecord_Fragment = { __typename: 'SplitboardBindingRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_SplitboardBootRecord_Fragment = { __typename: 'SplitboardBootRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

type Favorites_SplitboardRecord_Fragment = { __typename: 'SplitboardRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type FavoritesFragment = Favorites_AirbagRecord_Fragment | Favorites_ArtvaRecord_Fragment | Favorites_AxRecord_Fragment | Favorites_BindingRecord_Fragment | Favorites_BootRecord_Fragment | Favorites_CramponRecord_Fragment | Favorites_HarnessRecord_Fragment | Favorites_HelmetRecord_Fragment | Favorites_PoleRecord_Fragment | Favorites_ProbeRecord_Fragment | Favorites_RopeRecord_Fragment | Favorites_ShovelRecord_Fragment | Favorites_SkiRecord_Fragment | Favorites_SkinRecord_Fragment | Favorites_SplitboardBindingRecord_Fragment | Favorites_SplitboardBootRecord_Fragment | Favorites_SplitboardRecord_Fragment;

export type SkiCardFragment = { __typename: 'SkiRecord', id: string, name: string, slug?: string | null, testedPreview: string, waistWidthDeclared?: number | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type BootCardFragment = { __typename: 'BootRecord', id: string, name: string, slug?: string | null, testedPreview: string, leverNumber?: number | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type BindingCardFragment = { __typename: 'BindingRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, types: Array<{ __typename?: 'BindingTypeRecord', name: string }> };

export type SplitboardCardFragment = { __typename: 'SplitboardRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type SplitboardBootCardFragment = { __typename: 'SplitboardBootRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type SplitboardBindingCardFragment = { __typename: 'SplitboardBindingRecord', id: string, name: string, slug?: string | null, testedPreview: string, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type HelmetCardFragment = { __typename: 'HelmetRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type AirbagCardFragment = { __typename: 'AirbagRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, inflationType?: { __typename?: 'InflationTypeRecord', name: string } | null };

export type ArtvaCardFragment = { __typename: 'ArtvaRecord', id: string, name: string, slug?: string | null, autonomy?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type ShovelCardFragment = { __typename: 'ShovelRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type ProbeCardFragment = { __typename: 'ProbeRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, material?: { __typename?: 'MaterialRecord', name: string } | null };

export type SkinCardFragment = { __typename: 'SkinRecord', id: string, name: string, slug?: string | null, weightDryMeasured?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, materials: Array<{ __typename?: 'MaterialRecord', name: string }> };

export type PoleCardFragment = { __typename: 'PoleRecord', id: string, name: string, slug?: string | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, categories: Array<{ __typename?: 'CategoryRecord', name: string, slug: string }>, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImagePreview?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }>, types: Array<{ __typename?: 'PoleTypeRecord', name: string }> };

export type CramponCardFragment = { __typename: 'CramponRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export type HarnessCardFragment = { __typename: 'HarnessRecord', id: string, name: string, slug?: string | null, weightDeclared?: number | null, brand?: { __typename?: 'BrandRecord', name: string, slug: string } | null, families: Array<{ __typename?: 'ProductFamilyRecord', name: string, slug: string }>, awards: Array<{ __typename?: 'AwardRecord', label: string, name: string, shortName: string, color?: { __typename?: 'ColorField', hex: string } | null }>, media: Array<{ __typename?: 'MediaProductRecord', webImage?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null }> };

export const ResponsiveImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]} as unknown as DocumentNode<ResponsiveImageFragment, unknown>;
export const ArticleCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"articleCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroType"}},{"kind":"Field","name":{"kind":"Name","value":"subheading"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArticleCardFragment, unknown>;
export const ResponsiveImageCardFocalZeroFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalZero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<ResponsiveImageCardFocalZeroFragment, unknown>;
export const SkiCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"skiCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkiRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waistWidthDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalZero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<SkiCardFragment, unknown>;
export const BootCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bootCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leverNumber"}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalZero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<BootCardFragment, unknown>;
export const BindingCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bindingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalZero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<BindingCardFragment, unknown>;
export const ResponsiveImageCardFocalOneFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<ResponsiveImageCardFocalOneFragment, unknown>;
export const PoleCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"poleCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoleRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}},{"kind":"Field","name":{"kind":"Name","value":"webImagePreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<PoleCardFragment, unknown>;
export const ResponsiveImageCardFocalHalfFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"FloatValue","value":"0.5"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<ResponsiveImageCardFocalHalfFragment, unknown>;
export const SkinCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"skinCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkinRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"}}]}},{"kind":"Field","name":{"kind":"Name","value":"materials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDryMeasured"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"FloatValue","value":"0.5"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<SkinCardFragment, unknown>;
export const SplitboardCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<SplitboardCardFragment, unknown>;
export const SplitboardBindingCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardBindingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<SplitboardBindingCardFragment, unknown>;
export const SplitboardBootCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardBootCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<SplitboardBootCardFragment, unknown>;
export const TeamProductsSetupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"teamProductsSetup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PersonModelProductsField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkiRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"skiCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bootCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bindingCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoleRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"poleCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkinRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"skinCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splitboardCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splitboardBindingCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splitboardBootCard"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalZero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"FloatValue","value":"0.5"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"skiCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkiRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waistWidthDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bootCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leverNumber"}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bindingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"poleCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoleRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}},{"kind":"Field","name":{"kind":"Name","value":"webImagePreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"skinCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkinRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"}}]}},{"kind":"Field","name":{"kind":"Name","value":"materials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDryMeasured"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardBindingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardBootCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}}]} as unknown as DocumentNode<TeamProductsSetupFragment, unknown>;
export const HelmetCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"helmetCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelmetRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<HelmetCardFragment, unknown>;
export const AirbagCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"airbagCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AirbagRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"inflationType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<AirbagCardFragment, unknown>;
export const ArtvaCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"artvaCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArtvaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"autonomy"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<ArtvaCardFragment, unknown>;
export const ShovelCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"shovelCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShovelRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<ShovelCardFragment, unknown>;
export const ProbeCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"probeCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProbeRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<ProbeCardFragment, unknown>;
export const CramponCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cramponCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CramponRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<CramponCardFragment, unknown>;
export const HarnessCardFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"harnessCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HarnessRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]} as unknown as DocumentNode<HarnessCardFragment, unknown>;
export const FavoritesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"favorites"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserModelFavoriteProductsField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkiRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"skiCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bootCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bindingCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splitboardCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splitboardBootCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splitboardBindingCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelmetRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"helmetCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AirbagRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"airbagCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArtvaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"artvaCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShovelRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"shovelCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProbeRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"probeCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkinRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"skinCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoleRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"poleCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CramponRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"cramponCard"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HarnessRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"harnessCard"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalZero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"0"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalOne"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"FloatValue","value":"0.5"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"skiCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkiRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"waistWidthDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bootCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leverNumber"}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bindingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalZero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardBootCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBootRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splitboardBindingCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SplitboardBindingRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"testedPreview"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"helmetCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelmetRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"airbagCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AirbagRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"inflationType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"artvaCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArtvaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"autonomy"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"shovelCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShovelRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"probeCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProbeRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}},{"kind":"Field","name":{"kind":"Name","value":"material"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"skinCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SkinRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalHalf"}}]}},{"kind":"Field","name":{"kind":"Name","value":"materials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDryMeasured"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"poleCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PoleRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}},{"kind":"Field","name":{"kind":"Name","value":"webImagePreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fm"},"value":{"kind":"EnumValue","value":"jpg"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"w"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fpY"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"cramponCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CramponRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"harnessCard"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HarnessRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"families"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"awards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"responsiveImageCardFocalOne"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weightDeclared"}}]}}]} as unknown as DocumentNode<FavoritesFragment, unknown>;
export const ResponsiveImageFragmentQuery = gql`
    fragment responsiveImage on ResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  base64
}
    `;
export const ArticleCardFragmentQuery = gql`
    fragment articleCard on ArticleRecord {
  id
  title
  slug
  metadata {
    description
    title
  }
  categories {
    id
    name
    slug
  }
  topics {
    id
    name
    color
    slug
  }
  modules {
    ... on HeroRecord {
      __typename
      id
      heroType
      subheading
      image {
        responsiveImage(imgixParams: {fm: jpg}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
}
    `;
export const ResponsiveImageCardFocalZeroFragmentQuery = gql`
    fragment responsiveImageCardFocalZero on MediaProductRecord {
  webImage {
    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 1000, fpY: 0}) {
      srcSet
      webpSrcSet
      sizes
      src
      width
      height
      aspectRatio
      alt
      title
      base64
    }
  }
}
    `;
export const SkiCardFragmentQuery = gql`
    fragment skiCard on SkiRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  testedPreview
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalZero
  }
  waistWidthDeclared
  weightDeclared
}
    ${ResponsiveImageCardFocalZeroFragmentQuery}`;
export const BootCardFragmentQuery = gql`
    fragment bootCard on BootRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  testedPreview
  media {
    ...responsiveImageCardFocalZero
  }
  leverNumber
  weightDeclared
}
    ${ResponsiveImageCardFocalZeroFragmentQuery}`;
export const BindingCardFragmentQuery = gql`
    fragment bindingCard on BindingRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  testedPreview
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalZero
  }
  types {
    name
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalZeroFragmentQuery}`;
export const ResponsiveImageCardFocalOneFragmentQuery = gql`
    fragment responsiveImageCardFocalOne on MediaProductRecord {
  webImage {
    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 1000, fpY: 1}) {
      srcSet
      webpSrcSet
      sizes
      src
      width
      height
      aspectRatio
      alt
      title
      base64
    }
  }
}
    `;
export const PoleCardFragmentQuery = gql`
    fragment poleCard on PoleRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
    webImagePreview {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 1000, fpY: 1}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
  types {
    name
  }
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const ResponsiveImageCardFocalHalfFragmentQuery = gql`
    fragment responsiveImageCardFocalHalf on MediaProductRecord {
  webImage {
    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 1000, fpY: 0.5}) {
      srcSet
      webpSrcSet
      sizes
      src
      width
      height
      aspectRatio
      alt
      title
      base64
    }
  }
}
    `;
export const SkinCardFragmentQuery = gql`
    fragment skinCard on SkinRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalHalf
  }
  materials {
    name
  }
  weightDryMeasured
}
    ${ResponsiveImageCardFocalHalfFragmentQuery}`;
export const SplitboardCardFragmentQuery = gql`
    fragment splitboardCard on SplitboardRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  testedPreview
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const SplitboardBindingCardFragmentQuery = gql`
    fragment splitboardBindingCard on SplitboardBindingRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  testedPreview
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const SplitboardBootCardFragmentQuery = gql`
    fragment splitboardBootCard on SplitboardBootRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  categories {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  testedPreview
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const TeamProductsSetupFragmentQuery = gql`
    fragment teamProductsSetup on PersonModelProductsField {
  ... on SkiRecord {
    ...skiCard
  }
  ... on BootRecord {
    ...bootCard
  }
  ... on BindingRecord {
    ...bindingCard
  }
  ... on PoleRecord {
    ...poleCard
  }
  ... on SkinRecord {
    ...skinCard
  }
  ... on SplitboardRecord {
    ...splitboardCard
  }
  ... on SplitboardBindingRecord {
    ...splitboardBindingCard
  }
  ... on SplitboardBootRecord {
    ...splitboardBootCard
  }
}
    ${SkiCardFragmentQuery}
${BootCardFragmentQuery}
${BindingCardFragmentQuery}
${PoleCardFragmentQuery}
${SkinCardFragmentQuery}
${SplitboardCardFragmentQuery}
${SplitboardBindingCardFragmentQuery}
${SplitboardBootCardFragmentQuery}`;
export const HelmetCardFragmentQuery = gql`
    fragment helmetCard on HelmetRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  weightDeclared
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const AirbagCardFragmentQuery = gql`
    fragment airbagCard on AirbagRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
  inflationType {
    name
  }
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const ArtvaCardFragmentQuery = gql`
    fragment artvaCard on ArtvaRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
  }
  autonomy
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const ShovelCardFragmentQuery = gql`
    fragment shovelCard on ShovelRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const ProbeCardFragmentQuery = gql`
    fragment probeCard on ProbeRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
  material {
    name
  }
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const CramponCardFragmentQuery = gql`
    fragment cramponCard on CramponRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const HarnessCardFragmentQuery = gql`
    fragment harnessCard on HarnessRecord {
  __typename
  id
  name
  slug
  brand {
    name
    slug
  }
  families {
    name
    slug
  }
  awards {
    label
    name
    shortName
    color {
      hex
    }
  }
  media {
    ...responsiveImageCardFocalOne
  }
  weightDeclared
}
    ${ResponsiveImageCardFocalOneFragmentQuery}`;
export const FavoritesFragmentQuery = gql`
    fragment favorites on UserModelFavoriteProductsField {
  ... on SkiRecord {
    ...skiCard
  }
  ... on BootRecord {
    ...bootCard
  }
  ... on BindingRecord {
    ...bindingCard
  }
  ... on SplitboardRecord {
    ...splitboardCard
  }
  ... on SplitboardBootRecord {
    ...splitboardBootCard
  }
  ... on SplitboardBindingRecord {
    ...splitboardBindingCard
  }
  ... on HelmetRecord {
    ...helmetCard
  }
  ... on AirbagRecord {
    ...airbagCard
  }
  ... on ArtvaRecord {
    ...artvaCard
  }
  ... on ShovelRecord {
    ...shovelCard
  }
  ... on ProbeRecord {
    ...probeCard
  }
  ... on SkinRecord {
    ...skinCard
  }
  ... on PoleRecord {
    ...poleCard
  }
  ... on CramponRecord {
    ...cramponCard
  }
  ... on HarnessRecord {
    ...harnessCard
  }
}
    ${SkiCardFragmentQuery}
${BootCardFragmentQuery}
${BindingCardFragmentQuery}
${SplitboardCardFragmentQuery}
${SplitboardBootCardFragmentQuery}
${SplitboardBindingCardFragmentQuery}
${HelmetCardFragmentQuery}
${AirbagCardFragmentQuery}
${ArtvaCardFragmentQuery}
${ShovelCardFragmentQuery}
${ProbeCardFragmentQuery}
${SkinCardFragmentQuery}
${PoleCardFragmentQuery}
${CramponCardFragmentQuery}
${HarnessCardFragmentQuery}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;