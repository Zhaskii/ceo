import {
  CeoProfile,
  VideoInterview,
  GalleryPhoto,
  NavigationItem,
  BusinessSector,
  SocialChannel,
} from "@/types";

export const ceoProfileData: CeoProfile = {
  name: "Rajul Shrestha",
  role: "Chief Executive Officer",
  company: "Arksh Group",
  tagline: '"A Journey of Learning, Vision & Purpose"',
  badge: "About Me & Executive Vision",
  image: "/images/rajul-shrestha-ceo.jpg",
  alt: "Rajul Shrestha - Official Executive Portfolio",
  masterDegreeNote:
    "Master's degree with distinction from England, United Kingdom",
  bioParagraphs: [
    "I am in no misconception about what an enormous privilege it is to be sharing a few words on this page as the CEO of Arksh Group. Life for me, so far, has been a journey filled with unexpected interactions and results.",
    "These experiences have been the determinants of my characteristics — that of an individual with a keen interest in learning and gaining new information and continuously building my knowledge.",
    "Completing my Master's degree with distinction from England, United Kingdom felt like a huge accomplishment at the time but now, I face bigger challenges. As I commence my journey as the CEO, I am very well aware of the huge responsibility I carry towards the company, our partners, our customers and the society we live in.",
  ],
  keyQuote:
    "Having spent nearly half my life abroad for studies, I have had vast exposure of foreign customs, institutions and systems — leading me to envision a modern future for Arksh Group.",
  promiseSubtitle: "Core Philosophy",
  promiseTitle: "Commitment to Society & Human Potential",
  promiseDescription:
    "As I look ahead at the long road in front of me, I am determined to lead with purpose, accountability, and compassion. Creating lasting value means advancing both our business ecosystem and the communities we serve.",
  promisePillars: [
    "It is my belief that every part of the society we live in must advance with the economy of the nation. We should give back to the society that we live and work in by helping the needed.",
    "We must instill upon every single individual that they are proficient, no matter what their capabilities, everyone is capable of achieving their goals.",
  ],
  affiliations: [
    {
      title: "Executive Member",
      organization: "Nepal Chamber Of Commerce",
      period: "Present",
      description:
        "Actively participating in national trade policy deliberations, business community development, and bilateral international commerce initiatives.",
    },
    {
      title: "Executive Member",
      organization: "Nepal - Singapore Chamber Of Commerce & Industry",
      period: "Present",
      description:
        "Promoting bilateral investments, cross-border business opportunities, and fostering modern economic relations between Nepal and Singapore.",
    },
  ],
};

export const videoInterviewsData: VideoInterview[] = [
  {
    id: "v1",
    title: "Mastering the Global Mindset & Enterprise Vision",
    description:
      "Rajul Shrestha delves into global education, cross-cultural leadership, and charting an aggressive transformation strategy for modern conglomerates in Nepal.",
    youtubeId: "0np0T71HsUs",
    youtubeUrl: "https://www.youtube.com/watch?v=0np0T71HsUs",
    duration: "18:42",
    date: "2026",
    thumbnailUrl: "https://img.youtube.com/vi/0np0T71HsUs/hqdefault.jpg",
  },
  {
    id: "v2",
    title: "UK to Nepal Journey: Driving Industrial Innovation",
    description:
      "An in-depth dialogue detailing academic achievements in the United Kingdom and returning with high-impact modern corporate governance systems.",
    youtubeId: "3YGAL58U33U",
    youtubeUrl: "https://www.youtube.com/watch?v=3YGAL58U33U",
    duration: "24:15",
    date: "2026",
    thumbnailUrl: "https://img.youtube.com/vi/3YGAL58U33U/hqdefault.jpg",
  },
  {
    id: "v3",
    title: "Youth Leadership, Society & Sustainable Economic Progress",
    description:
      "Sharing key insights on empowering youth, advancing community welfare, and expanding diversified market verticals across the nation.",
    youtubeId: "qAG4O8ZY0Sw",
    youtubeUrl: "https://www.youtube.com/watch?v=qAG4O8ZY0Sw",
    duration: "15:30",
    date: "2026",
    thumbnailUrl: "https://img.youtube.com/vi/qAG4O8ZY0Sw/hqdefault.jpg",
  },
];

export const galleryPhotosData: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Arksh Group Headquarters Rooftop Session",
    alt: "Arksh Rooftop Strategy Session",
    category: "Corporate & Strategy",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/arksh%20roooftop-2.png",
    location: "Lazimpat, Kathmandu",
    date: "2026",
  },
  {
    id: "g2",
    title: "Presiding at Madhyapur Mahotsav",
    alt: "Madhyapur Mahotsav Keynote Address",
    category: "Community & Cultural",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/at%20madhyapur%20mahotsav.png",
    location: "Bhaktapur, Nepal",
    date: "2026",
  },
  {
    id: "g3",
    title: "High-Level Delegation with Rt. Hon. Prime Minister",
    alt: "Meeting with Prime Minister of Nepal",
    category: "Government & National Policy",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/met%20with%20prime%20minister-4.png",
    location: "Baluwatar, Kathmandu",
    date: "2026",
  },
  {
    id: "g4",
    title: "Nepal Chamber of Commerce Executive Forum",
    alt: "NCC Executive Member Rajul Shrestha",
    category: "Trade & Commerce",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/ncc_Rajul_Shrestha.png",
    location: "Kathmandu, Nepal",
    date: "2026",
  },
  {
    id: "g5",
    title: "Dignitary Meeting with Rt. Hon. Vice President",
    alt: "Meeting with Vice President of Nepal",
    category: "Government & Diplomacy",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/vice%20president%20of%20nepal.png",
    location: "Lainchaur, Kathmandu",
    date: "2026",
  },
  {
    id: "g6",
    title: "UK to Nepal: Global Leadership Journey",
    alt: "Global Leadership Journey",
    category: "Keynote & Thought Leadership",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/uk-to-nepal-journey-1.png",
    location: "London - Kathmandu",
    date: "2026",
  },
  {
    id: "g7",
    title: "ACE Youth Leadership & Academic Summit",
    alt: "Rajul Shrestha at ACE Institute of Management",
    category: "Education & Youth",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Rajul-Shrestha-ACE-1.png",
    location: "Sinamangal, Kathmandu",
    date: "2026",
  },
  {
    id: "g8",
    title: "Arksh Future Vision & Enterprise Roadmap",
    alt: "Arksh Vision Presentation",
    category: "Corporate & Strategy",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/rajul-shrestha-vision-1.png",
    location: "Kathmandu, Nepal",
    date: "2026",
  },
  {
    id: "g9",
    title: "National Broadcast & Radio Interview",
    alt: "Radio Interview with CEO",
    category: "Media & Press",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/rajul-shrestha-radio-interview-1.png",
    location: "Kathmandu Studio",
    date: "2026",
  },
  {
    id: "g10",
    title: "Economic Discussion with Hon. KP Sharma Oli",
    alt: "High-Level Economic Discussion",
    category: "National Policy",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/rajul-shrestha-met-with-kp-oli-1.png",
    location: "Kathmandu, Nepal",
    date: "2026",
  },
  {
    id: "g11",
    title: "Nepal Investment & Private Sector Summit",
    alt: "Nepal Investment Summit",
    category: "Investment & Trade",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/rajul-shrestha-investment-1.png",
    location: "Soaltee Hotel, Kathmandu",
    date: "2026",
  },
  {
    id: "g12",
    title: "Mastering the Global Mindset Masterclass",
    alt: "Mastering Global Mindset",
    category: "Executive Development",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/mastering-the-global-mindset-1.png",
    location: "Kathmandu, Nepal",
    date: "2026",
  },
  {
    id: "g13",
    title: "BIMSTEC Youth Leaders Delegation",
    alt: "BIMSTEC Youth Leaders",
    category: "International Diplomacy",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Bimestec-Youth-Leaders-1.png",
    location: "Regional Summit",
    date: "2026",
  },
  {
    id: "g14",
    title: "Arksh Conglomerate Brand Embarkment Collage",
    alt: "Arksh Embarkment Collage",
    category: "Corporate Brand",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Embarkl-Collage-1.png",
    location: "Arksh Group HQ",
    date: "2026",
  },
];

export const businessSectorsData: BusinessSector[] = [
  {
    name: "Automobiles",
    subBrands: [
      {
        name: "Higer",
        href: "https://motors.arkshgroup.com/vehicles/higer-bus",
      },
      {
        name: "Golden Dragon",
        href: "https://motors.arkshgroup.com/vehicles/golden-dragon",
      },
      { name: "Jubao", href: "https://motors.arkshgroup.com/" },
    ],
  },
  {
    name: "Food",
    subBrands: [
      {
        name: "दामी (Dami)",
        href: "https://www.arkshfood.com/products?brandNames=Dami",
      },
      {
        name: "Didan",
        href: "https://www.arkshfood.com/products?brandNames=Didian",
      },
      { name: "Tafeli", href: "https://www.arkshfood.com/" },
      { name: "Paldo", href: "https://www.arkshfood.com/" },
      { name: "Tastee", href: "https://www.arkshfood.com/" },
      { name: "Glacier", href: "https://www.arkshfood.com/" },
      { name: "Richy", href: "https://www.arkshfood.com/" },
      { name: "Chizzpa", href: "https://www.arkshfood.com/" },
      { name: "Monarko", href: "https://www.arkshfood.com/" },
      { name: "Hwa Tai", href: "https://www.arkshfood.com/" },
    ],
  },
  {
    name: "Health & Wellness",
    subBrands: [
      {
        name: "Nirvana Physiotherapy & Wellness Centre",
        href: "https://www.npwc.com.np/",
      },
    ],
  },
  {
    name: "Luxury Watches & Eyewear",
    subBrands: [
      { name: "Sulux Centre", href: "https://www.suluxcentre.com" },
      { name: "Sulux Hour", href: "https://www.suluxhour.com" },
    ],
  },
  {
    name: "Beverages",
    subBrands: [
      {
        name: "MacCoffee",
        href: "https://www.arkshfood.com/products?brandNames=MacCoffee",
      },
      { name: "MacTea", href: "https://www.arkshfood.com/" },
      { name: "MacCereal", href: "https://www.arkshfood.com/" },
      {
        name: "Luxury Creamer",
        href: "https://www.arkshfood.com/products?categoryNames=Creamer",
      },
      { name: "Barley Chhang", href: "https://www.arkshfood.com/" },
      { name: "Nutirite", href: "https://www.arkshfood.com/" },
      { name: "Klassno", href: "https://www.arkshfood.com/" },
      { name: "Creme", href: "https://www.arkshfood.com/" },
    ],
  },
  {
    name: "Tours & Travels",
    subBrands: [
      { name: "Lifestyle Holidays", href: "https://lifestyleholidays.com.np/" },
      { name: "Book My Ticket", href: "#" },
      { name: "Stream Travels", href: "https://streamtravel.services/" },
    ],
  },
  {
    name: "Hotels & Restaurants",
    subBrands: [
      { name: "Hotel Peaceland Lumbini", href: "https://hotelpeaceland.com/" },
      { name: "Hotel Rara", href: "#" },
    ],
  },
  {
    name: "Bed & Mattress",
    subBrands: [
      { name: "Darling Mattress", href: "https://urbanearthgroup.com/" },
    ],
  },
  {
    name: "Beauty & Cosmetics",
    subBrands: [
      { name: "Dream Skin Nepal", href: "https://www.dreamskinnepal.com/" },
      {
        name: "The Fragrance Room",
        href: "https://www.dreamskinnepal.com/shop/fragrance?all=1",
      },
    ],
  },
  {
    name: "Biotechnology",
    subBrands: [{ name: "Arksh Agro", href: "https://agro.arkshgroup.com/" }],
  },
  {
    name: "Carpet and Flooring",
    subBrands: [
      { name: "Urban Earth", href: "https://urbanearthgroup.com/" },
      { name: "Gem Flooring", href: "https://urbanearthgroup.com/" },
      {
        name: "Abu Dhabi National Carpet",
        href: "https://urbanearthgroup.com/",
      },
      { name: "Hanwha", href: "https://urbanearthgroup.com/" },
      { name: "Swiss Krono", href: "https://urbanearthgroup.com/" },
    ],
  },
  {
    name: "Fashion & Accessories",
    subBrands: [
      { name: "Fynaza", href: "https://www.fynaza.com/" },
      { name: "Clovia", href: "#" },
      { name: "Suoyue", href: "#" },
    ],
  },
  {
    name: "Industry",
    subBrands: [
      { name: "Arksh Food Industry", href: "https://www.arkshfood.com/" },
    ],
  },
  {
    name: "Marketing Agency",
    subBrands: [{ name: "Arksh Digital", href: "#" }],
  },
  {
    name: "Construction Materials",
    subBrands: [{ name: "Huaxia", href: "#" }],
  },
  {
    name: "Electronics & Technology",
    subBrands: [{ name: "PQI", href: "#" }],
  },
];

export const portfolioNavItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "CEO Message", href: "#message" },
  { label: "Leadership Roles", href: "#leadership" },
  { label: "Vision & Impact", href: "#vision" },
  { label: "Video Messages", href: "#interviews" },
  { label: "Visual Moments", href: "#gallery" },
  { label: "Involvements", href: "#ventures", isDropdown: true },
  { label: "Contact", href: "#contact" },
];

export const navigationMenuData: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "CEO Message", href: "#message" },
  { label: "About CEO", href: "#about-ceo" },
  { label: "Involvements", href: "#ventures", isDropdown: true },
  { label: "Interviews", href: "#interviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const socialChannelsData: SocialChannel[] = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/arksh-group/",
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/Arksh.Group",
    brands: [
      { name: "Arksh Group", href: "https://www.facebook.com/Arksh.Group" },
      { name: "Arksh Store", href: "https://www.facebook.com/arksh.store" },
      {
        name: "Dream Skin Nepal",
        href: "https://www.facebook.com/Dream.Skin.Nepal/",
      },
      { name: "Arksh Food", href: "https://www.facebook.com/Arksh.Food/" },
      {
        name: "Hotel Peaceland",
        href: "https://www.facebook.com/Hotel.Peaceland/",
      },
      { name: "Arksh Motors", href: "https://www.facebook.com/Arksh.Motors/" },
      {
        name: "Nirvana Physiotherapy",
        href: "https://www.facebook.com/Nirvana.Physio.Wellness/",
      },
      { name: "Arksh Agro", href: "https://www.facebook.com/Arksh.Agro/" },
      {
        name: "Lifestyle Holidays",
        href: "https://www.facebook.com/Lifestyle.Holidays.Nepal/",
      },
      {
        name: "Urban Earth",
        href: "https://www.facebook.com/urban.earth.arksh#",
      },
      {
        name: "The Fragrance Room",
        href: "https://www.facebook.com/the.fragranceroom.nepal",
      },
      {
        name: "Sulux Centre",
        href: "https://www.facebook.com/sulux.centre.watch",
      },
    ],
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/arksh.group",
    brands: [
      { name: "Arksh Group", href: "https://www.instagram.com/arksh.group" },
      { name: "Arksh Store", href: "https://www.instagram.com/Arksh.Store" },
      {
        name: "Dream Skin Nepal",
        href: "https://www.instagram.com/dream.skin.nepal",
      },
      { name: "Arksh Food", href: "https://www.instagram.com/arksh.food" },
      {
        name: "Sulux Centre",
        href: "https://www.instagram.com/sulux.centre.watch/",
      },
      { name: "Sulux Hour", href: "https://www.instagram.com/sulux.hour/" },
    ],
  },
  {
    platform: "TikTok",
    href: "https://www.tiktok.com/@arksh.group",
  },
  {
    platform: "YouTube",
    href: "https://www.youtube.com/@arkshgroup",
  },
];
