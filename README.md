# Moving Local Prototype App

A progressive webapp based on the [webkid react-starterkit](https://github.com/wbkd/react-starter).

## Prerequisites

In order to run the app you need the latest version of [node.js](https://nodejs.org/en/download/). It is recommended to install it with the help of [nvm](https://github.com/creationix/nvm). After installing, you can use the `node` and `npm` commands.

## Download

To get the code, you need to clone the repository to your local machine:

```sh
$ git clone git@github.com:movinglocal/movinglocal-app.git
```

This will create a new directory called `movinglocal-app` in your current directory.

## Installation

```sh
$ cd movinglocal-app
```

To install all dependencies from the `package.json`, you need to run the following command:

```sh
$ npm install
```

## Development

To start the application locally, you can use the following command:

```sh
$ npm run start
```

After that, open your browser and go to [localhost:8080](http://localhost:8080/).

## Build

Builds a minified version of the application in the build directory. This directory can be deployed on a static server, for example.

```sh
$ npm run build
```
