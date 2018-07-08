# React Redux Starter Kit

[![Build Status](https://travis-ci.org/btg5679/react-redux-prod-starter.svg?branch=master)](https://travis-ci.org/btg5679/react-redux-prod-starter?branch=master)
[![dependencies](https://david-dm.org/btg5679/react-redux-prod-starter.svg)](https://david-dm.org/btg5679/react-redux-prod-starter)
[![devDependency Status](https://david-dm.org/btg5679/react-redux-prod-starter/dev-status.svg)](https://david-dm.org/btg5679/react-redux-prod-starter#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This project is designed to get you up and running with the latest front end frameworks.

The main objective of this project is to provide a solid foundation for you to build production ready applications using(but not limited to) ReactJS and Redux.  It should be flexible enough for you to customize to your own needs, it also is intentionally brief in examples and assumptions.

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
* [Webpack 4](#webpack)
* [Aphrodite](#aphrodite)
* [Babel](#babel)
* [ESlint](#eslint)
* [ESlint](#eslint)


