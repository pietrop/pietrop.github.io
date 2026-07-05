const environment = process.env.ELEVENTY_ENV || 'dev';
console.log('environment', environment)
const PROD_ENV = 'prod';
const isProd = environment === PROD_ENV;
// Set by CI for branch preview deploys, e.g. "/preview/my-branch". Empty at the real site root
// and in dev, where a root-relative baseurl (not a hardcoded domain/port) keeps links portable.
const baseurl = process.env.PATH_PREFIX || '';

// const folder = {
//   assets: 'assets',
// };

// const dir = {
//   img: `/${folder.assets}/img/`,
// }


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
    "owner": {
      "name": "Pietro",
      "last_name": "Passarelli",
      "email": "pietro.passarelli@gmail.com",
      "twitter": "pietropassarell",
      "facebook": "pietro.passarelli",
      "github": "pietrop",
      "linkedin": "pietropassarelli",
      "instagram": "pietro.ps",
      "about": "/ubiq/pietro.jpeg",
      "image": "/img/about/fahrul-razi-BR6lrzCPYPk-unsplash.jpeg"
    },
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