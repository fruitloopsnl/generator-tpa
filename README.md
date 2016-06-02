
[![Build Status](https://img.shields.io/travis/TPA-Group/generator-polymer/master.svg)](https://travis-ci.org/yeoman/generator-polymer)

## Yeoman generator for TPA projects

<img src="http://i.imgur.com/JlzrhWu.png">

## Introduction

[Polymer](http://www.polymer-project.org/) is a library of polyfills and sugar which enable the use of Web Components in modern browsers. The project allows developers to build apps using the platform of tomorrow and inform the W3C of places where in-flight specifications can be further improved.

`generator-tpa` provides Polymer scaffolding using [Yeoman](http://yeoman.io) (a scaffolding tool for the web), letting you easily create and customize Polymer (custom) elements via the command-line and import them using HTML Imports. This saves you time writing boilerplate code so you can start writing up the logic to your components straight away.

## Features

* Seed element contains examples such as unit testing, i18n, API mocking for a developer to contribute new functionality into the [TPA Bootstrap](https://github.com/ING-Group/tpa-bootstrap) application 

## Issues

This generator uses the [tpa-seed](https://github.com/ING-Group/tpa-seed) template to create a new web component. 

If you're having issues with the template files generated for this project, please raise them in that repository as they are the canonical source.

## Installation

### Install the generator

    npm install -g generator-tpa

To validate the install, type

    yo --help
    
This will list the available generators, you should see `tpa seed` listed

## Generators

[tpa:seed](#tpa-seed) is the only available generator.

More can be [contributed](#contribute) to over time

**Note: Generator is to be run from the root of your app**

### tpa-seed

Generates a reusable polymer element based off a standard UI template that includes examples of unit testing, API calls, i18n and TPA styling. 

These components are typically consumed in the [tpa bootstrap](https://github.com/ING-Group/tpa-bootstrap) and registered with the [tpa catalog](https://github.com/ING-Group/tpa-catalog) through the the relevant [tpa elements](https://github.com/ING-Group/tpa-elements) repository

To preview the element after generation, it will use the following tools :
* [npm](https://www.npmjs.com/) and [bower](http://bower.io/) for dependency management 
* [polyserve](https://github.com/PolymerLabs/polyserve) and [drakov](https://github.com/Aconex/drakov) for local hosting
* [gulp](http://gulpjs.com/) as the task runner

For example:
```bash
mkdir -p tpa-new-element && cd $_
yo tpa:seed tpa-new-element
npm install && bower install
gulp serve
```

For further explanation of the development tools, see the [tpa-seed](https://github.com/ING-Group/tpa-seed) README

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md) 

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). 

Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

Run `yo doctor` to validate the state of your installation.

### Install the generator from a local folder
First clone this project to a local folder, and from that folder execute the following command:

`npm install -g .\`

### Updating submodules

This generator uses git submodules to generate the component.
To update the submodules use the following command:

`git submodule update --remote`

**Note: Push these updates back into source control**

### Updating generator to npm

When you update the generator to the [npm generator-tpa](https://www.npmjs.com/package/generator-tpa), it will need to be [published to npm](https://docs.npmjs.com/getting-started/publishing-npm-packages)

Ensure you update the `package.json` to a newer version following the [semantic versioning](http://semver.org/) pattern

```sh
npm version [patch|minor|major]
npm publish
```

### Adding a generator

As new patterns emerge, new TPA generators can be added to the solution

1) Create a new folder using the name that you want run. For example, `host` if you want a consumer to run `tpa:host`

2) Add an `index.js` to the root of folder, which you can either reuse from `seed` folder or create a new one following the [yeoman guidelines](http://yeoman.io/authoring/)

3) Add your generator name to the `package.json` under the `"files"` property

4) Install the git submodule using the following convention if we were implementing a `host` generator from `tpa-host.git`

    git submodule add https://github.com/ING-Group/tpa-host.git host/templates/tpa-host

5) Add tests to the `test` folder

6) Update the version number in the `package.json`

7) Update and manually test the generator locally

    npm install -g .\

8) Push to source control after validating behaviour

9) Publish to npm

### Deleting a generator

Just as generators can be added, they can also be removed

1) Delete the git submodule, and using the previous `host` example here

    git rm --cached host/templates/tpa-host
    
2) Delete the relevant section from the `.gitmodules` file

```
[submodule "host/templates/tpa-host"]
	path = host/templates/tpa-host
	url = https://github.com/ING-Group/tpa-host.git
```

3) Update the version number

4) Push to source control

5) Publish to npm

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


