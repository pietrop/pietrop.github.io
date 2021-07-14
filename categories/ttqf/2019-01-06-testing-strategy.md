---
layout: post
title: "Testing Strategy  - Draft"
description: "Some notes and considerations for a testing strategy for React web apps, I've gathered over time from various BBC News Labs projects"
permalink: "/testing-strategy.html"
date: "2019-01-06"
published: true
link:
image: /img/testing-strategy/browser-stack.png
image2: /img/testing-strategy/browser-stack-crossing-divides.png
github:
gitbook: 
youtube: 
vimeo: 
tech: 
categories:
- ttqf
# - blog
tags:
- react
---


## Type of tests - high level 

- Unit test - a single function or service (Jest)
- Component test - a single component - functionality (jest/Enzyme)
- Snapshot Test - a single component - regression, eg changes against previous versions (Jest)
- End to End Test - Interaction between multiple components, usually from point of view ouser (Cypress) 
- Performance test - How the app performs in difference environment  
- Coverage tests - how much of your application of the app is covered by tests 

## Initial setup 
### IDE

#### **Visual studio code**
suggested plugin 

- [Code spe](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)[l](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)[l checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), A basic spell checker that works well with camelCase code, to make sure you are using real names for variables, and keeping typos to a minimum. 
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ← 
- [CSS linting](https://maximgatilin.github.io/stylelint-config/)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) ← 

Optional

- [Prettier](https://prettier.io/)  - auto code formatting, can be combined with ESLint.
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
- [React Jest Snippets](https://marketplace.visualstudio.com/items?itemName=jalisimo.react-jest-vscode-snippets)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) - “colorizing matching brackets” in VsCode
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)  [](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)- is a visual code plugin, that allows you to see the size of our imports in context.

### create-react-app

[`create-react-app`](https://github.com/facebook/create-react-app) comes with some setup for testing with jest.

→ [See more and a great overview of what’s available out of the box here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests). ← 
Type of tests available 


- “smoke test” verifying that a component renders without throwing
- shallow rendering
- testing some of the output
- full rendering
- testing component lifecycle
-  state changes.
- Snapshot testing 
> Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html)
> - from [create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#snapshot-testing)

#### **Coverage reporting**
Cool feature is [coverage reporting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#coverage-reporting), if you run  `npm test -- --coverage` as gives you a nice table in terminal.

#### **Runni****ng** **tests**

> By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

For continuous integration/deployment, can use `npm run test-ci` by adding this to your `package.json` npm scripts.


    "test-ci": "CI=true react-scripts test --env=jsdom --verbose",

[see crea](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#continuous-integration)[te](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#continuous-integration)[-react-app docs for more on this](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#continuous-integration).

#### **Tests components in isolation**

> Create React App doesn’t include any tools for this by default, but you can easily add [Storybook for React](https://storybook.js.org) ([source](https://github.com/storybooks/storybook)) or [React Styleguidist](https://react-styleguidist.js.org/) ([source](https://github.com/styleguidist/react-styleguidist)) to your project. *These are third-party tools that let you develop components and see all their states in isolation from your app*.
> - [from create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#developing-components-in-isolation)

also see [storybook docs](https://storybook.js.org/basics/introduction/)

*Note: If building React compone**n**ts in isolation consider checking out* [*nwb docs*](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)**

<!-- TODO: 

[ ] add what each of these tests mean  -->

### Linting 

#### **ESLint**
[ESLint](https://eslint.org/) is installed by default in [create-react-app](https://github.com/facebook/create-react-app#philosophy).


> ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code [linting](https://en.wikipedia.org/wiki/Lint_(software)) is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.
> 
> JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.
> 
> The primary reason ESLint was created was to allow developers to create their own linting rules. ESLint is designed to have all rules completely pluggable. The default rules are written just like any plugin rules would be. They can all follow the same pattern, both for the rules themselves as well as tests. While ESLint will ship with some built-in rules to make it useful from the start, you’ll be able to dynamically load rules at any point in time.
> - [from ESLint docs](https://eslint.org/docs/about/)

[Linting standards](https://standardjs.comn)


### Prettier

[Prettier](https://prettier.io) is an Opinionated code formatter. 
[Can be combined with ESLint](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a) with [Airbnb Js and React style guide](https://github.com/airbnb/javascript/tree/master/react)

Key selling point: 

> No need to discuss style in code review


### Git hooks

Setup pre-commit and pre-push hooks,  these can be used to keep the code clean over time. The hooks can check against linting rules and/or whether test are passing or not.

#### [**Husky**](https://github.com/typicode/husky)

> Husky can prevent bad `git commit`, `git push` and more 🐶 ❤️ woof!



Seems like to set it up, based on [their README](https://github.com/typicode/husky)  as of version `0.14` it might be enough to  install it as dev dependency and add these two npm scripts `precommit` and `prepush` to `package.json`.


```json
"precommit": "npm install && npm run-script lint && npm run-script test-ci",
"prepush": "npm install && npm run-script lint && npm run-script test-ci",
```

Note, if you use `git commit --no-verify`  flag it will skip the commit hooks, however this practice is highly discouraged. 

## Typechecking 

### PropTypes
[`react-proptypes-generate`](https://www.npmjs.com/package/react-proptypes-generate)

>This is the VS Code's extension that automatically generates PropTypes code for React components, like `ReactPropTypes` in the Jetbrains's Platform

> ##### VS Code
> Search react-proptypes-generate in Marketplace and install it

## Unit tests
### [Jest](https://jestjs.io)
> Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases.


Docs: 
- [getting started](https://jestjs.io/docs/en/getting-started)
- [expect](https://jestjs.io/docs/en/expect.html)
- [Jest matchers docs](https://jestjs.io/docs/en/expect.html) 

There is a [Jest extension for Visual code](https://github.com/jest-community/vscode-jest), if that is your editor of choice.

> If you use [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.
> - [From create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#editor-integration)


### [`react-testing-library`](https://github.com/kentcdodds/react-testing-library )

> Simple and complete React DOM testing utilities that encourage good testing practices.


> As an alternative or companion to `enzyme`, you may consider using `react-testing-library`. [`react-testing-library`](https://github.com/kentcdodds/react-testing-library) is a library for testing React components in a way that resembles the way the components are used by end users. It is well suited for unit, integration, and end-to-end testing of React components and applications. It works more directly with DOM nodes, and therefore it's recommended to use with [`jest-dom`](https://github.com/gnapse/jest-dom) for improved assertions.
> - [from create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#use-react-testing-library)

### [Enzyme](https://github.com/airbnb/enzyme )

> Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.


Docs: 
- [enzyme](https://airbnb.io/enzyme)


> Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.


> If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()`rendering API](https://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](https://airbnb.io/enzyme/). 
> - [from create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)


> Enzyme supports [full rendering with `mount()`](https://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.
> - [from create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)


### [Sinon](https://sinonjs.org)

> Standalone test spies, stubs and mocks for JavaScript.
> Works with any unit testing framework.

The idea is that you can mock a function and test it’s receiving the right arguments, and return some sample output. 
<!-- (?) -->

Might be similar to [Jest mocking function](https://jestjs.io/docs/en/mock-functions).


> Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with `new`, and allowing test-time configuration of return values.
> There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a [`manual mock`](https://jestjs.io/docs/en/manual-mocks) to override a module dependency.
>  - [From Jest Mock functions docs](https://jestjs.io/docs/en/mock-functions)

<!-- 
TODO: 

[ ] check if sinonin is similar to Ject mocking function  -->


## End to end browser testing 

### [Cypress](https://www.cypress.io)
> Fast, easy and reliable testing for anything that runs in a browser.


Docs:
- [cypress.io](https://docs.cypress.io) 
- [writing your first test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-1-Visit-a-page)

Possible replacement for selenium if you were familiar with that.


## Visual regression testing

### [BackstopJS](https://github.com/garris/BackstopJS)
>  automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.



it installs PhantomJS and chromium as dependencies


<!-- ![](https://d2mxuefqeaa7sj.cloudfront.net/s_3762A27843DD60D309BCC5F105C7E58752446F993923F4BA188D37CFE4FFE630_1551974126450_Screen+Shot+2019-03-07+at+15.54.53.png) -->

<div class="image-wrapper">
    <img src="{{ page.image }}" alt="{{ page.description }}" />
</div>

## Browser stack 

[Browser stack screenshots](https://www.browserstack.com/screenshots)


> capture screenshots of a particular web application/URL across a wide range of mobile devices and browsers


<!-- example 
https://www.browserstack.com/screenshots/7c8f5351f86964ab9052fcf1f423d6889e41133e -->

<!-- 
![](https://d2mxuefqeaa7sj.cloudfront.net/s_3762A27843DD60D309BCC5F105C7E58752446F993923F4BA188D37CFE4FFE630_1551974359512_Screen+Shot+2019-03-07+at+15.58.22.png) -->

<div class="image-wrapper">
    <img src="{{ page.image2 }}" alt="{{ page.description }}" />
</div>

You might generally go for the latest browser, and latest device, but it's good to compile an explicit list of devices.
You can also look at existing analytics to see what are the most common devices and browser combinations for your site/app.

There is also a [browserstack screenshots API](https://www.browserstack.com/screenshots/api)


## Testing API end points

[Nock](https://www.npmjs.com/package/nock)


## Learning resources

#### **intro** 

- [But really, what is a JavaScript test?](https://blog.kentcdodds.com/but-really-what-is-a-javascript-test-46fe5f3fad77)
- [How To Use Technical Debt In Your Favor](https://levelup.gitconnected.com/how-to-use-technical-debt-in-your-favor-98bae475ba68)

#### **Testing strategy**

- [What We Can Learn About Testing From The Wheel - Kent C. Dodds (Ignite Fluent 2016) - 5min video](https://youtu.be/Da9wfQ0frGA)
- [Write tests. Not too many. Mostly integration.](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c)
- “[Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)” - Google testing blog

#### **Test pyramid**

- [Pra](https://martinfowler.com/articles/practical-test-pyramid.html)[c](https://martinfowler.com/articles/practical-test-pyramid.html)[tical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Testing pyramid](https://martinfowler.com/bliki/TestPyramid.html)

#### **Cypres**

- [ReactiveConf 2016 - Brian Mann: Testing the way it should be - (video 36min)](https://youtu.be/lK_ihqnQQEM)

#### **Tutorials**

- [Test-driven Development Using React - pluralsight](https://app.pluralsight.com/library/courses/test-driven-development-react/table-of-contents) 
- [Testing React Applications with Jest - pluralsight](https://app.pluralsight.com/library/courses/testing-react-applications-jest/table-of-contents) 
- [Testing JavaScript Applications (feat. React and Redux) - payed](https://frontendmasters.com/courses/testing-javascript/)
- [Cucumber.js BDD guides](https://docs.cucumber.io/guides/)

####  **Unsorted**

- [10 years of Doing Behaviour-Driven Development All Wrong (part 1) by Liz Keogh - (41 min)](https://youtu.be/2EM4itu7j7I)
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)

