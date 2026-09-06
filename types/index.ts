export interface NavigationItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
  name: string;
  href?: string;
  nestedItems?: NestedItem[];
}

export interface NestedItem {
  name: string;
  href: string;
}

export interface BusinessSector {
  name: string;
  subBrands: {
    name: string;
    href: string;
  }[];
}

export interface BrandSocialLink {
  name: string;
  logo?: string;
  href: string;
}

export interface SocialChannel {
  platform: string;
  href?: string;
  brands?: BrandSocialLink[];
}

export interface Affiliation {
  title: string;
  organization: string;
  period?: string;
  description?: string;
}

export interface VideoInterview {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  duration?: string;
  date?: string;
  thumbnailUrl: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  alt: string;
  category?: string;
  url: string;
  thumbnailUrl?: string;
  date?: string;
  location?: string;
  width?: number;
  height?: number;
}

export interface CeoProfile {
  name: string;
  role: string;
  company: string;
  tagline: string;
  badge: string;
  image: string;
  alt: string;
  masterDegreeNote: string;
  bioParagraphs: string[];
  keyQuote: string;
  promiseSubtitle: string;
  promiseTitle: string;
  promiseDescription: string;
  promisePillars: string[];
  affiliations: Affiliation[];
}
