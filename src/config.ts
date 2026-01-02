

export const SOCIALS = [
  { name: "Github", href: "https://github.com/0xumarkhatab", active: true },
  { name: "Twitter", href: "https://twitter.com/0xumarkhatab", active: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/0xumarkhatab/", active: true },
  { name: "YouTube", href: "https://www.youtube.com/@blockchain-ninja", active: true },
];


export const SITE = {
  website: "https://0xumarkhatab.github.io/",
  author: "0xumarkhatab",
  desc: "Senior Full-stack Blockchain Engineer | 160+ Contracts Deployed | DeFi & Emerging markets Infrastructure",
  title: "Umar's Portfolio Site",
  postPerPage: 4,
  profile: "https://github.com/0xumarkhatab",
  ogImage: "site_preview.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/0xumarkhatab/0xumarkhatab.github.io",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Karachi", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
