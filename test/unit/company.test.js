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

describe('Company', function () {
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

  it('should return list of companies', function (done) {
    db.Company.all()
      .then(function (companies) {
        companies.should.be.an('array');
        var company = _.first(companies).__data;
        should.exist(company);
        company.should.have.keys('id', 'name', 'title', 'categoryId', 'desc', 'active',
          'createdAt', 'updatedAt', 'deletedAt');
        company.id.should.be.a('number');
        company.name.should.be.a('string');
        company.title.should.be.a('string');
        company.categoryId.should.be.a('number');
        company.desc.should.be.a('string');
        company.active.should.be.a('boolean');
        done();
      })
      .catch(done);
  });

  it('should update company', function (done) {
    var updatedName = 'updated';
    db.Company.update({id: testData.company.id}, {name: updatedName})
      .then(function () {
        return db.Company.findById(testData.company.id)
      })
      .then(function (company) {
        should.exist(company);
        company.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
