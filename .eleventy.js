const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");
const embedYouTube = require("eleventy-plugin-youtube-embed");
// const pluginTOC = require('eleventy-plugin-nesting-toc');
// const markdownIt = require("markdown-it");
// const markdownItAnchor = require('markdown-it-anchor');
// const liquidJs = require("liquidjs");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const embedVimeo = require("eleventy-plugin-vimeo-embed");

// const pluginMdCheckboxes = require("./plugin-md-checkboxes.js");

const IMAGES = ["avif", "jpeg", "jpg", "png", "giff", "gif", "webp"];
async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: IMAGES
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

/**
 * Handling ege case where published attribute is not defined on post
 * When published attribute not define we assume we wanted to publish
 */
const publishedPosts = (post) => {
  // return post.data.published=== true || typeof  post.data.published === "undefined" ;
  return !(typeof post.data.published === 'boolean' && post.data.published === false);
};

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(pluginMdCheckboxes);  
  // eleventyConfig.addFilter("markDownCheckBoxes", function(value) {
  //   console.log('value',value)

  //   return `${value.replace('- [ ] ', '<input type="checkbox"></input>').replace('- [x] ', '<input type="checkbox" checked="true"></input>')}`;
  // });

  eleventyConfig.addPassthroughCopy("pdfs");

  eleventyConfig.addPlugin(embedTwitter);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(embedVimeo);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
  eleventyConfig.addLayoutAlias('post-with-toc', 'layouts/post-with-toc.html');


  eleventyConfig.addFilter('jsonify', function (variable) {
    return JSON.stringify(variable);
  });

  eleventyConfig.addFilter('where', function (array, key, value) {
    return array.filter(item => {
      const keys = key.split('.');
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return (reducedKey === value ? item : false);
    });
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: [
      '_includes',
      '_includes/layouts',
      '.'
    ]
  });

  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    ...IMAGES,
    "pdf",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);

  eleventyConfig.addCollection('tech', collection => {
    return collection.getFilteredByGlob('categories/tech/*.md').filter((a) => {
      return a?.data?.categories?.includes('tech');
    }).filter(publishedPosts)
  });

  eleventyConfig.addCollection('video', collection => {
    return collection.getFilteredByGlob('categories/video/*.md').filter((a) => {
      return a?.data?.categories?.includes('video');
    }).filter(publishedPosts)
  });

  eleventyConfig.addCollection('blog', collection => {
    return collection.getFilteredByGlob(['categories/blog/*.md', 'categories/ttqf/*.md']).filter((a) => {
      return a?.data?.categories?.includes('blog');
    }).filter(publishedPosts)
    // .sort((a, b)=>{
    //   return b.data.date < a.data.date;
    // });
  });

  eleventyConfig.addCollection('ttqf', collection => {
    return collection.getFilteredByGlob('categories/ttqf/*.md').filter((a) => {
      return a?.data?.categories?.includes('ttqf');
    }).filter(publishedPosts);;
  });


  eleventyConfig.addCollection('all', collection => {
    return collection.getFilteredByGlob(['categories/blog/*.md', 'categories/ttqf/*.md', 'categories/tech/*.md']).filter((a) => {
      return a;
    }).filter(publishedPosts);;
  });



  // let markdownIt = require("markdown-it");
  // let options = {
  //   html: true,
  //   breaks: true,
  //   linkify: true
  // };
  
  // eleventyConfig.setLibrary("md", markdownIt(options).use(require('./plugin-markdown-it-checkboxes.js')));

  // eleventyConfig.setLibrary(
  //   'md',
  //   markdownIt(options).use(markdownItAnchor)
  // );

  // eleventyConfig.addPlugin(pluginTOC);


 

  return {
    dir: {
      input: "./",      // Equivalent to Jekyll's source property
      output: "./_site", // Equivalent to Jekyll's destination property
      data: "_data",  // ⚠️ This value is relative to your input directory.
    }
  };
};