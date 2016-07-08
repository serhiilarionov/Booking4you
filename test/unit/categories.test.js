"use strict";

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var _ = require('lodash');
var should = require('chai').should();
var help = require('../help');

var loopback = require('../../server/server.js');
var db = loopback.dataSources.pgsql.models;
var testData;

chai.should();
chai.use(chaiAsPromised);

describe('Categories', function () {
  before(function (done) {
    help.createCompany()
      .then(function(data) {
        testData = data;
        done();
      })
      .catch(done);
  });
  
  after(function (done) {
    var meta = [];
    help.destroyAddMeta(meta, 'Company', testData.company.id);
    help.destroyAddMeta(meta, 'Category', testData.category.id);
    help.destroyModelsTest(meta).then(function(){done()}).catch(done);
  });

  it('should return list of categories', function (done) {
    db.Category.all()
      .then(function (categories) {
        categories.should.be.an('array');
        var category = _.first(categories).__data;
        should.exist(category);
        category.should.have.keys('id', 'name', 'slug', 'icon', 'position', 'active', 'parentId', 'deletedAt');
        category.id.should.be.a('number');
        category.name.should.be.a('string');
        category.slug.should.be.a('string');
        category.icon.should.be.a('string');
        category.position.should.be.a('number');
        category.active.should.be.a('boolean');
        category.parentId.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update category', function (done) {
    var updatedName = 'updated';
    db.Category.update({id: testData.category.id}, {name: updatedName})
      .then(function () {
        return db.Category.findById(testData.category.id)
      })
      .then(function (category) {
        should.exist(category);
        category.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
