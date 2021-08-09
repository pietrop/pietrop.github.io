# Blog
<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->
Personal blog using [11ty](https://www.11ty.dev/).

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.14.13`
- [Node 14](https://nodejs.org/docs/latest-v14.x/api/)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/pietrop.github.io.git
```

```
npm install
```

## Usage 

For local development 
```
npm start
```

## System Architecture
<!-- _High level overview of system architecture_ -->

Static blog in markdown using [11ty](https://www.11ty.dev/).

- `_data/site.json` is  where site wide info goes.
- `_includes` is where you can find the layout and other partials for templating.
- `_site` is the output of build (excluded from git)
- `categories` is where the markdown blogposts go, organized in folders.
- `public` public folder for static assets
- `images` where image assets are stored

## Documentation
<!-- 
There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->


- [11ty](https://www.11ty.dev/)
- [Turn Jekyll up to Eleventy](https://24ways.org/2018/turn-jekyll-up-to-eleventy/)
- [syntaxhighlight](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
- [global data](https://www.11ty.dev/docs/data-global/)
- [Directory for global data files](https://www.11ty.dev/docs/config/#directory-for-global-data-files)
- [Liquid shopify cheat sheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- [How to create drafts in Eleventy](https://giustino.blog/how-to-drafts-eleventy/)
- [collections and glob syntax](https://www.11ty.dev/docs/collections/)
- [liquid tag, formatting dates](https://shopify.github.io/liquid/filters/date/)
- [`addPassthroughCopy` eg for pdfs and other static files](https://www.11ty.dev/docs/copy/)
- [Add edit on github links to all pages](https://www.11ty.dev/docs/quicktips/edit-on-github-links/)
- [How to Deploy Eleventy to GitHub Pages With GitHub Actions](https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/)
- [ Add CNAME file cname](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-add-cname-file-cname)
- [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)
- [Getting Started with Eleventy](https://www.sitepoint.com/getting-started-with-eleventy/)
- [twitter card validator](https://cards-dev.twitter.com/validator)
- [How to Make All External Links Open in a New Tab in 11ty with MarkdownIt](https://franknoirot.co/posts/external-links-markdown-plugin/)
- [Adding DuckDuckGo Search to Your Website](https://jonbeebe.net/2017/07/duckduckgo-site-search/)
- [deploy to a subdirectory with a path prefix ](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix)
- [How to Make All External Links Open in a New Tab in 11ty with MarkdownIt](https://franknoirot.co/posts/external-links-markdown-plugin/)
- [Deploy to a subdirectory with a path prefix](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix)
  
Images
- [How to optimize and lazy-loading images on eleventy (11ty)](https://mahmoudashraf.dev/blog/how-to-optimize-and-lazyloading-images-on-eleventy/)
- [images](https://www.11ty.dev/docs/plugins/image/)
- [Improving upon my image processing with Eleventy](https://obsolete29.com/posts/improving-image-processing-eleventy/)
  
Dark mode
- [dark mode](https://jec.fyi/blog/supporting-dark-mode)
- [detect darkmode system change](https://flaviocopes.com/javascript-detect-dark-mode/)
- [How to detect if the OS is in dark mode in browsers?](https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers)

Experimental 
- [eleventy-plugin-jsx](https://www.npmjs.com/package/eleventy-plugin-jsx) ❌

Visual code extension
- [`:emojisense:`](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense)


<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->
```
npm run build
```

## Tests
<!-- _How to carry out tests_ -->

_NA_

## Deployment
<!-- _How to deploy the code/app into test/staging/production_ -->
### Github actions
There's a github action configured to build and deploy automatically when pushing to master.

### "manual deploy"

```
npm run build:deploy
```
<!-- ```
npm run deploy
``` -->
Deployment, deploys to github pages.




<!-- 
cross post under blog posts 
https://source.opennews.org/articles/how-we-made-crossing-divides/
https://source.opennews.org/articles/video-editing-made-better-introducing-autoedit/
 -->