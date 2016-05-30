/*global describe, beforeEach, before, it*/

var path    = require('path');
var helpers = require('yeoman-test');
var assert  = require('yeoman-assert');

describe('yo polymer:seed', function() {

  describe('yo polymer:seed with WCT test', function () {

    before(function (done) {
      helpers.run(path.join(__dirname, '../seed'))
        .inDir(path.join(__dirname, './tmp'))
        .withArguments(['seed-el'])
        .withPrompts({
          ghUser: 'test-user',
          description: 'test description',
          version: '0.0.1',
          elementName: 'seed-el',
          includeWCT: true
        })
        .on('end', done);
    });

    it('creates expected files', function () {
      var expected = [
        'bower.json',
        '.gitignore',
        'index.html',
        'README.md',
        'seed-el.html',
        'seed-el-i18n.html',
        'demo/index.html',
        'test/index.html',
        'test/basic-test.html'
      ];

      assert.file(expected);
    });

    it('does not create ignored files', function () {
      var unwanted = [
        'seed-element.html',
        '.npmignore',
        '.git'
      ];

      assert.noFile(unwanted);
    });

    it('creates the correct bower.json content', function () {
      assert.fileContent('bower.json', /"name": "seed-el"/);
      assert.fileContent('bower.json', /"main": "seed-el.html"/);
      assert.fileContent('bower.json', /"description": "test desc seed"/);
      assert.fileContent('bower.json', /"version": "0.0.1"/);
    });

    it('creates the correct package.json content', function () {
      assert.fileContent('package.json', /"name": "seed-el"/);
      assert.fileContent('package.json', /"version": "0.0.1"/);
      assert.fileContent('package.json', /"description": "test desc seed"/);
      assert.fileContent('package.json', /"main": "seed-el.html"/);
    });

    it('sets the correct description in the component', function () {
      assert.fileContent('seed-el.html', /test description/);
    });

    it('sets the correct link to the i18n file in the component', function () {
      assert.fileContent('seed-el.html', /seed-el-i18n.html/);
    });

    it('includes WCT', function() {
      assert.fileContent('bower.json', /web-component-tester/gm);
    });

  });

  describe('yo polymer:seed without WCT test', function () {

    before(function (done) {
      helpers.run(path.join(__dirname, '../seed'))
        .inDir(path.join(__dirname, './tmp'))
        .withArguments(['seed-el'])
        .withPrompts({
          ghUser: 'test-user',
          elementName: 'seed-el',
          includeWCT: false
        })
        .on('end', done);
    });

    it('does include WCT', function() {
      assert.fileContent('bower.json', /web-component-tester/gm);
    });

  });

});
