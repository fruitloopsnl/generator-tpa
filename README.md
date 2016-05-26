
[![Build Status](https://img.shields.io/travis/TPA-Group/generator-polymer/master.svg)](https://travis-ci.org/yeoman/generator-polymer)

## Yeoman generator for TPA projects

<img src="http://i.imgur.com/JlzrhWu.png">

## Introduction

[Polymer](http://www.polymer-project.org/) is a library of polyfills and sugar which enable the use of Web Components in modern browsers. The project allows developers to build apps using the platform of tomorrow and inform the W3C of places where in-flight specifications can be further improved.

`generator-tpa` provides Polymer scaffolding using [Yeoman](http://yeoman.io) (a scaffolding tool for the web), letting you easily create and customize Polymer (custom) elements via the command-line and import them using HTML Imports. This saves you time writing boilerplate code so you can start writing up the logic to your components straight away.

## Features

* A TPA Polymer element [tpa-component](https://github.com/ING-Group/tpa-component) based off the goodness of Polymer's [seed-element](https://github.com/polymerelements/seed-element)

## Issues

This generator clones [tpa-component](https://github.com/ING-Group/tpa-component). If you're having issues with the template files generated for those projects, please raise them on those repos as they are the canonical source.

## Installation

### Install the generator
`npm install -g generator-tpa`

## Generators

Available generators:

- [tpa:component](#tpa)

**Note: Generators are to be run from the root of your app**

### TPA
Generates a reusable polymer element based on the [tpa-component workflow](https://github.com/ING-Group/tpa-component).

To preview your new element you'll want to use the [polyserve](https://github.com/PolymerLabs/polyserve) tool that's executed via [gulp](http://gulpjs.com/)

Example:
```bash
mkdir -p my-foo && cd $_
yo tpa:component tpa-account-balance
gulp
```

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

### Install the generator from a local folder
First clone this project to a local folder, and from that folder execute the following command:

`npm install -g generator-tpa`

[npm documentation](https://www.npmjs.com/package/generator-tpa)

### Updating submodules

This generator uses git submodules to generate the component.
To update the submodules use the following command:

`git submodule update --remote`

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


