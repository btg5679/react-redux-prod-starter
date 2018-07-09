# React Redux Starter Kit

[![Build Status](https://travis-ci.org/btg5679/react-redux-prod-starter.svg?branch=master)](https://travis-ci.org/btg5679/react-redux-prod-starter?branch=master)
[![dependencies](https://david-dm.org/btg5679/react-redux-prod-starter.svg)](https://david-dm.org/btg5679/react-redux-prod-starter)
[![devDependency Status](https://david-dm.org/btg5679/react-redux-prod-starter/dev-status.svg)](https://david-dm.org/btg5679/react-redux-prod-starter#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This project is designed to get you up and running with the latest front end frameworks.
#### TAGS
|TAG    |Source|
|-------------------|-----------|
|`build`            |Monitored by Travis CI|
|`dependencies`     |Monitored by [david-dm.org](https://david-dm.org/)|
|`devDependencies`  |Monitored by [david-dm.org](https://david-dm.org/)|
|`code style`       |Monitored by [shields.io](https://shields.io/)|



The main objective of this project is to provide a solid foundation for you to build production ready applications using(but not limited to) ReactJS and Redux.  It should be flexible enough for you to customize to your own needs, it also is intentionally brief in examples and assumptions. The more opinionated the starter project is, the more difficult it becomes to extend.

If you notice anything that could be improved with this project, please submit a PR.  The intention is to provide the greatest benefit to the ever-changing and expanding JS ecosystem.

## Getting Started
Clone the react-redux-prod-starter project
```bash
$ https://github.com/btg5679/react-redux-prod-starter.git <my-project-name>
$ cd <my-project-name>
```
Install the dependencies
```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project
```bash
$ yarn start  # Start the development server (or `npm start`)
```
Yarn Start fires up a webpack-dev-server instance, there is a lot going on here that is covered below in detail.  This will be your most used command during development.  There are other scripts offered out of the box:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:8080`|
|`build`            |Webpacks the application for Production to ./dist|
|`test`             |Runs unit tests with Jest. See [testing](#testing)|
|`test:watch`       |Runs `test` in watch mode to re-run tests when changed|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`         |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## Libraries
* [React](#react)
* [Redux](#redux)
* [Webpack 4](#webpack-4)
* [Connected-React-Router](#connected-react-router)
* [Babel](#babel)
* [ESlint](#eslint)
* [Aphrodite](#aphrodite)

## React
[ReactJs](https://reactjs.org/) is a declarative, component-based library for building UI's.
## Redux
[Redux](https://redux.js.org/) is a predictable state container for Javascript apps. Tt helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).  In addition to redux-devtools, this project also comes loaded with the following redux related libraries:
* [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store)  A mock-store that aids in testing, there is an example in App.spec.js
* [redux-thunk](https://github.com/reduxjs/redux-thunk) Thunk middleware for Redux. What is a Thunk?  Check [here](https://stackoverflow.com/a/35415559/5714933) for an answer from Dan Abramov himself.
* [react-redux](https://github.com/reduxjs/react-redux) Official React bindings for Redux.  `mapStateToProps`, `Provider`, `connect`, `etc..`
## Webpack 4
At its core, [webpack](https://webpack.js.org/concepts/) is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

This project contains 2 webpack config files, `webpack.config.js` which is used during Development and `webpack.production.config.js` which is used when creating a Production bundle.

Our webpack development config utilizes a number of plugins that make our dev lives a bit easier including [webpack-dev-server](https://github.com/webpack/webpack-dev-server), [react-hot-loader](https://github.com/gaearon/react-hot-loader), [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

You will also want to make not of the loaders contained in `modules.rules`, that tell webpack how to handle specific types of files(css, jsx, ts, etc..).  More about loaders [here](https://webpack.js.org/concepts/loaders/).

## Connected React Router
We use [Connected React Router](https://github.com/supasate/connected-react-router) for routing, it's a package discributed under the  [React Router](https://github.com/ReactTraining/react-router) monorepo.  In addition, [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) for router DOM bindings via `Route` and `Link` modules.
## Babel
We could have included [Babel](https://babeljs.io/) under the [webpack](#webpack) header, but there is a lot to Babel and so it gets its own header.  Babel is a compiler that works with webpack to allow us to use next generation(ECMAScript 2015+) Javascript today.  There are a number of Babel libraries included in this project, most notably [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) and [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
## ESlint
[eslint](https://eslint.org/) is the industry standard Javascript/JSX Linter.  This project extends the standards set forth by [AirBnB](https://github.com/airbnb/javascript).
## Aphrodite
[Aphoridite](https://github.com/Khan/aphrodite) is one of the common solutions to the CSS in Javascript problem.  It supports server-side rendering, browser prefixing, and minimum CSS generation.




