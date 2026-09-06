export interface ChairmanProfile {
  name: string;
  role: string;
  company: string;
  tagline: string;
  badge: string;
  image: string;
  alt: string;
  yearsOfExcellence: string;
  bioParagraphs: string[];
  keyQuote: string;
  promiseSubtitle: string;
  promiseTitle: string;
  promiseDescription: string;
  promisePillars: string[];
}

export interface ChairmanAwardMilestone {
  year: string;
  title: string;
  desc: string;
}

export interface ChairmanAffiliation {
  title: string;
  organization: string;
}

export interface ChairmanVideo {
  id: string;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  date?: string;
}

export interface ChairmanPhoto {
  id: string;
  title: string;
  alt: string;
  url: string;
  caption?: string;
  category?: string;
  date?: string;
}

export const chairmanProfileData: ChairmanProfile = {
  name: "Dr. Rajesh Kazi Shrestha",
  role: "Chairman / Managing Director",
  company: "Arksh Group",
  tagline: '"Dear Valued Partners, Clients, and Team Members"',
  badge: "A Message From Our Leader",
  image: "/images/rajesh-kazi-shrestha-chairman.jpg",
  alt: "Dr. Rajesh Kazi Shrestha - Chairman & Managing Director, Arksh Group",
  yearsOfExcellence: "47+",
  bioParagraphs: [
    "It is with great pleasure that I welcome you to Arksh Group. As the Chairman and Managing Director, I take immense pride in our organization's journey of growth, innovation, and excellence.",
    "Our success is built on the strong foundation of trust, integrity, and sustainable partnerships. Over the past four decades, we have continuously evolved to meet dynamic market demands while remaining true to our core principles of creating shared value for our stakeholders and the nation.",
    "As we look towards the future, Arksh Group remains dedicated to driving positive change, fostering entrepreneurship, and expanding bilateral trade relationships that propel Nepal's economy onto the global stage.",
  ],
  keyQuote:
    "Since our inception in 1978, we have remained steadfast in our commitment to delivering exceptional value across diverse sectors.",
  promiseSubtitle: "Our Strategic Foundation",
  promiseTitle: "Commitment to Excellence & Nation Building",
  promiseDescription:
    "We believe in creating enduring value through visionary leadership, institutional integrity, and transformative enterprise investments.",
  promisePillars: [
    "We embrace change and adaptability as essential components of our strategy.",
    "We continuously invest in our people and processes to deliver solutions for our stakeholders.",
  ],
};

export const chairmanAwardsData: ChairmanAwardMilestone[] = [
  {
    year: "2025",
    title: "Outstanding Contribution in Business Award",
    desc: "Honored with Outstanding Contribution in Business Award by Rt. Honorable Prime Minister KP Sharma Oli on behalf of Phoenix Inspiration, 2025.",
  },
  {
    year: "2022",
    title: "Letter of Honor by Nepal Tayari Poshak Udhyog Sang",
    desc: "Honored with Letter of Honor by Nepal Tayari Poshak Udhyog Sang - 2022 (Garment Association-Nepal) for his pioneering work towards the development of Nepali garment export.",
  },
  {
    year: "2022",
    title: "Corporate Dynamic Business Leader Award",
    desc: "Corporate Dynamic Business Leader Award - 2022 by Corporate Khabar for his Excellent Contribution in Nepalese Industry.",
  },
  {
    year: "2021",
    title: "Sukritimaya Rastra Deep Third",
    desc: "Decorated with Sukritimaya Rastra Deep Third by Rt. Honorable President of Nepal Bidhya Devi Bhandari, 2021.",
  },
  {
    year: "2021",
    title: "Honored with Excellence Award",
    desc: "Honored with Excellence Award - 2021 in recognition of the Indo-Nepal Friendship Award by the Confederation of West Bengal Trade Association.",
  },
  {
    year: "2019",
    title: "Honored as a Commercially Important Person (CIP)",
    desc: "Honored as a Commercially Important Person (CIP) by Rt. Honorable Prime Minister K.P. Sharma Oli - 2019.",
  },
  {
    year: "2017",
    title: "Decorated with Suprabal Jansewa Shri",
    desc: "Decorated with Suprabal Jansewa Shri by Rt. Honorable President of Nepal Bidhya Devi Bhandari, 2017.",
  },
  {
    year: "2005",
    title: "Decorated with the Bikhyat Trishakti Patta Third",
    desc: "Decorated with the Bikhyat Trishakti Patta Third - 2005 by His Majesty King Gyanendra Bir Bikram Shah Dev on the occasion of His Majesty's 59th Birth Anniversary.",
  },
  {
    year: "2004",
    title: "Honored as a Commercially Important Person (CIP)",
    desc: "Honored as Commercially Important Person (CIP) by Rt. Honorable Prime Minister Surya Bahadur Thapa, 2004.",
  },
  {
    year: "2002",
    title: "Decorated with the Suprabal Gorkha Dakshin Bahu Third",
    desc: "Decorated with the Suprabal Gorkha Dakshin Bahu Third - 2002 by His Majesty King Gyanendra Bir Bikram Shah Dev on the occasion of His Majesty's 56th Birth Anniversary.",
  },
  {
    year: "2001",
    title: "Decorated with the Birendra-Aishwarya Sewa Padak",
    desc: "Decorated with the Birendra-Aishwarya Sewa Padak - 2001 by His Majesty King Gyanendra Bir Bikram Shah Dev.",
  },
  {
    year: "2001",
    title: "Youth Entrepreneur, Industrialist and Social Worker",
    desc: "Honored by the Rt. Honorable Prime Minister Sher Bahadur Deuba as Youth Entrepreneur, Industrialist and Social Worker on behalf of the National Honor and Development Center, 2001.",
  },
  {
    year: "2000",
    title: "Letter of Honor for Service at Executive Committee of NCC",
    desc: "Honored with the Letter of Honor by the Rt. Honorable Prime Minister Girija Prasad Koirala for excellent service at the Executive Committee of Nepal Chamber of Commerce, 2000.",
  },
  {
    year: "1999",
    title: "Decorated with Prakhyat Trishakti Patta",
    desc: "Decorated with Prakhyat Trishakti Patta - 1999 by His Majesty King Birendra Bir Bikram Shah Dev on the auspicious occasion of His Majesty's 55th Birth Anniversary.",
  },
  {
    year: "1999",
    title: "Honored with Udyog Ratna",
    desc: "Honored with Udyog Ratna - 1999 by the Institute of Economic Studies, Delhi, India.",
  },
  {
    year: "1997",
    title: "Decorated with Prabal Gorkha Dakshin Bahu",
    desc: "Decorated with Prabal Gorkha Dakshin Bahu - 1997 by His Majesty King Birendra Bir Bikram Shah Dev on the auspicious occasion of His Majesty's 53rd Birthday Anniversary.",
  },
  {
    year: "1997",
    title: "Honored with the Letter of Honor and Do Shall",
    desc: "Honored with the Letter of Honor and Do Shall by Rt. Honorable Prime Minister Surya Bahadur Thapa on behalf of the World Hindu Federation, 1997.",
  },
  {
    year: "1996",
    title: "Decorated with H M King's Accession Silver Jubilee Medal",
    desc: "Decorated with H M King's Accession to the Throne Silver Jubilee Celebration Medal - 1996 by His Majesty King Birendra Bir Bikram Shah Dev.",
  },
];

export const chairmanAffiliationsData: ChairmanAffiliation[] = [
  {
    title: "Honorary Consul",
    organization: "Socialist Republic of Vietnam to Nepal",
  },
  {
    title: "Chairman",
    organization: "International Chamber of Commerce, Nepal (ICC Nepal)",
  },
  {
    title: "Chairman Advisory Council & Past President",
    organization: "Nepal Chamber of Commerce (NCC)",
  },
  {
    title: "Honorary President",
    organization: "Nepal China Chamber of Commerce & Industry",
  },
  {
    title: "Patron",
    organization: "Nepal Vietnam Chamber of Commerce & Industry",
  },
  {
    title: "Patron",
    organization: "Nepal Italy Chamber of Commerce & Industry",
  },
  {
    title: "Former Vice President",
    organization: "World Association for Small & Medium Enterprises (WASME), India",
  },
  {
    title: "Chairman",
    organization: "Bhanubhakta Memorial Purba Bidhyarthi Samaj (Alumni)",
  },
  {
    title: "Executive Member",
    organization: "Honorary Consular Corps-Nepal (HCC-N)",
  },
  {
    title: "Former Senator",
    organization: "Tribhuvan University",
  },
  {
    title: "Former Senator",
    organization: "Purbanchal University, Biratnagar",
  },
  {
    title: "Former Board Member",
    organization: "Investment Board Nepal (IBN)",
  },
  {
    title: "Former Board Member",
    organization: "Nepal Intermodal Transport Development",
  },
  {
    title: "Former Board Member",
    organization: "Trade & Export Promotion Centre, Ministry of Industry, Commerce & Supplies, Nepal",
  },
  {
    title: "Former Board Member",
    organization: "Board of Trade, Commerce Ministry",
  },
  {
    title: "Former Board Member",
    organization: "Private Sector Development Committee",
  },
  {
    title: "Former Vice President",
    organization: "Silk Road Chamber of International Commerce, China",
  },
  {
    title: "Former Treasurer",
    organization: "Hotel Association of Nepal (HAN)",
  },
  {
    title: "Former Executive Member",
    organization: "Nepal Olympic Committee",
  },
  {
    title: "Former Chairman",
    organization: "8th South Asian Federation Games, Hospitality Committee, Kathmandu",
  },
  {
    title: "Former President",
    organization: "Nepal Weightlifting Association",
  },
];

export const chairmanVideosData: ChairmanVideo[] = [
  {
    id: "cv1",
    title: "National Economic Vision & Chamber Movement in Nepal",
    youtubeId: "VhM8qHRVcto",
    youtubeUrl: "https://www.youtube.com/watch?v=VhM8qHRVcto",
    thumbnailUrl: "https://img.youtube.com/vi/VhM8qHRVcto/hqdefault.jpg",
    date: "2026",
  },
  {
    id: "cv2",
    title: "Private Sector Growth, Bilateral Trade & Foreign Direct Investment",
    youtubeId: "GQLN5GvYVOE",
    youtubeUrl: "https://www.youtube.com/watch?v=GQLN5GvYVOE",
    thumbnailUrl: "https://img.youtube.com/vi/GQLN5GvYVOE/hqdefault.jpg",
    date: "2026",
  },
  {
    id: "cv3",
    title: "Four Decades of Entrepreneurial Excellence at Arksh Group",
    youtubeId: "LKa8wGy7A9o",
    youtubeUrl: "https://www.youtube.com/watch?v=LKa8wGy7A9o",
    thumbnailUrl: "https://img.youtube.com/vi/LKa8wGy7A9o/hqdefault.jpg",
    date: "2026",
  },
  {
    id: "cv4",
    title: "Industrial Transformation, Manufacturing & Trade Diplomacy",
    youtubeId: "yWh2Ah--vwc",
    youtubeUrl: "https://www.youtube.com/watch?v=yWh2Ah--vwc",
    thumbnailUrl: "https://img.youtube.com/vi/yWh2Ah--vwc/hqdefault.jpg",
    date: "2026",
  },
  {
    id: "cv5",
    title: "Cross-Border Investment & Regional Economic Integration",
    youtubeId: "U5W0UwOhfyE",
    youtubeUrl: "https://www.youtube.com/watch?v=U5W0UwOhfyE",
    thumbnailUrl: "https://img.youtube.com/vi/U5W0UwOhfyE/hqdefault.jpg",
    date: "2026",
  },
  {
    id: "cv6",
    title: "Empowering Nepali Enterprises in Global Supply Chains",
    youtubeId: "cGOVGaH-bFw",
    youtubeUrl: "https://www.youtube.com/watch?v=cGOVGaH-bFw",
    thumbnailUrl: "https://img.youtube.com/vi/cGOVGaH-bFw/hqdefault.jpg",
    date: "2026",
  },
];

export const chairmanPhotosData: ChairmanPhoto[] = [
  {
    id: "cp1",
    title: "Decorated with Suprabal Gorkha Dakshin Bahu Third by King Gyanendra",
    alt: "Decorated with Suprabal Gorkha Dakshin Bahu Third",
    category: "State Decoration",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Decorated-with-Suprabal-Gorkha-Dakshin-Bahu-Third-by-His-Majesty-King-Gyanendra-Bir-Bikram-Shah-Dev-1.jpg",
    date: "Royal Investiture",
  },
  {
    id: "cp2",
    title: "Decorated with Prakhyat Trishakti Patta Third by King Gyanendra",
    alt: "Decorated with Prakhyat Trishakti Patta Third",
    category: "State Decoration",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Decorated-with-Prakhyat-Trishakti-Patta-Third-by-His-Majesty-King-Gyanendra-Bir-Bikram-Shah-Dev.jpg",
    date: "Royal Investiture",
  },
  {
    id: "cp3",
    title: "Meeting with Rt. Hon. Prime Minister of Nepal",
    alt: "Meeting with Prime Minister of Nepal",
    category: "National Leadership",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Prime-Minister-of-Nepal.jpg",
    date: "Executive Dialogue",
  },
  {
    id: "cp4",
    title: "Decorated with Rastriyadeep Tritiya by President Bidhya Devi Bhandari",
    alt: "Decorated with Rastriyadeep Tritiya",
    category: "Presidential Decoration",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Decorated-with-Rastriyadeep-Tritiya-1.jpg",
    date: "Presidential Palace",
  },
  {
    id: "cp5",
    title: "Decorated with Prakhyat Trishakti Patta by King Birendra Bir Bikram Shah Dev",
    alt: "Decorated with Prakhyat Trishakti Patta by Late King Birendra",
    category: "State Decoration",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/Decorated-with-Prakhyat-Trishakti-Patta-by-His-Majesty-Late-King-Birendra-Bir-Bikram-Shah-Dev.jpg",
    date: "Royal Investiture",
  },
  {
    id: "cp6",
    title: "Arksh Group Headquarters Lazimpat Strategy Session",
    alt: "Arksh Group Headquarters",
    category: "Corporate Governance",
    url: "https://minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io/arkshgroup/arksh%20roooftop-2.png",
    date: "Lazimpat, Kathmandu",
  },
];

export const chairmanNavItems = [
  { label: "Home", href: "#home" },
  { label: "Chairman Message", href: "#message" },
  { label: "Honors & Awards", href: "#awards" },
  { label: "Leadership Roles", href: "#leadership" },
  { label: "Video Messages", href: "#interviews" },
  { label: "Visual Moments", href: "#gallery" },
  { label: "Involvements", href: "#ventures", isDropdown: true },
  { label: "Contact", href: "#contact" },
];
