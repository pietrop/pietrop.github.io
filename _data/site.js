const environment = process.env.ELEVENTY_ENV || 'dev';
console.log('environment', environment)
const PROD_ENV = 'prod';
const isProd = environment === PROD_ENV;
// Set by CI for branch preview deploys, e.g. "/preview/my-branch". Empty at the real site root,
// where a root-relative baseurl (not a hardcoded domain) keeps asset/nav links portable.
const pathPrefix = process.env.PATH_PREFIX || '';
const devUrl = 'http://localhost:8080';
const baseurl = environment === 'dev' ? devUrl : pathPrefix;

// const folder = {
//   assets: 'assets',
// };

// const dir = {
//   img: `/${folder.assets}/img/`,
// }

const owner = {
  "name": "Pietro",
  "last_name": "Passarelli",
  "email": "pietro.passarelli@gmail.com",
  "twitter": "pietropassarell",
  "facebook": "pietro.passarelli.5",
  "github": "pietrop",
  "linkedin": "pietropassarelli",
  "instagram": "pietro.ps",
  "youtube": "PietroPassarelli",
  "vimeo": "pietropassarelli",
  "imdb": "nm4761612",
  "opennews": "pietro-passarelli",
  "about": "/ubiq/pietro.jpeg",
  "image": "/img/about/fahrul-razi-BR6lrzCPYPk-unsplash.jpeg"
};

// Single source of truth for profile URLs: the footer renders these as links and
// head.html emits the same set as schema.org sameAs. Building them from one list
// keeps the two in sync, and dropping entries whose handle is unset means a missing
// handle can never render an empty <li> or a bare "https://vimeo.com/" in sameAs.
// `inFooter: false` keeps a profile out of the footer while still claiming it as sameAs.
const profileDefs = [
  { key: 'twitter', label: 'Twitter', icon: 'fab fa-twitter', url: (h) => `https://twitter.com/${h}` },
  { key: 'github', label: 'GitHub', icon: 'fab fa-github', url: (h) => `https://github.com/${h}` },
  { key: 'linkedin', label: 'Linkedin', icon: 'fab fa-linkedin-in', url: (h) => `https://uk.linkedin.com/in/${h}` },
  { key: 'instagram', label: 'Instagram', icon: 'fab fa-instagram', url: (h) => `https://www.instagram.com/${h}` },
  { key: 'facebook', label: 'Facebook', icon: 'fab fa-facebook', url: (h) => `https://www.facebook.com/${h}` },
  { key: 'youtube', label: 'YouTube', icon: 'fab fa-youtube', url: (h) => `https://www.youtube.com/c/${h}` },
  { key: 'vimeo', label: 'Vimeo', icon: 'fab fa-vimeo-v', url: (h) => `https://vimeo.com/${h}` },
  { key: 'imdb', label: 'IMDb', icon: 'fab fa-imdb', url: (h) => `https://www.imdb.com/name/${h}/` },
  { key: 'opennews', label: 'Source', icon: 'fas fa-newspaper', inFooter: false, url: (h) => `https://source.opennews.org/people/${h}/` },
];

const profiles = profileDefs
  .filter((p) => owner[p.key])
  .map(({ key, label, icon, url, inFooter }) => ({
    key,
    label,
    icon,
    url: url(owner[key]),
    inFooter: inFooter !== false,
  }));

module.exports = {
  // site: {
    environment,
    isProd,
    // folder,
    // base: {
    //   site: baseUrl,
    //   img: `${baseUrl}${dir.img}`,
    // },
    tracking: {
      gtag: 'G-R6JQ09CW0P',
    },
    "title": "Pietro",
    "tagline": "Passarelli",
    "name": "Tips Tricks & Quick Fix",
    "description": "Pietro Passarelli's blog",
    "url": "https://www.pietropassarelli.net",
    baseurl,
    "repo": "http://github.com/pietrop/pietrop.github.io",
    "comments": false,
    "author": {
      "name": "Pietro",
      "email": "pietro.passarelli@gmail.com"
    },
    owner,
    profiles,
    // Every profile URL, for schema.org sameAs (includes ones not shown in the footer).
    sameAs: profiles.map((p) => p.url),
    "og_locale": "en_US",
    "categories": [
      "video",
      "tech",
      "ttqf",
      "blog"
    ],
    "placeholder_image": "/img/placeholder/clouds.jpeg",

// 
  // }
};