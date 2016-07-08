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

describe('Country', function () {
  before(function (done) {
    help.createBuilding()
      .then(function(data) {
        testData = data;
        done();
      })
      .catch(done);
  });

  after(function (done) {
    var meta = [];
    help.destroyAddMeta(meta, 'Building', testData.building.id);
    help.destroyAddMeta(meta, 'Street', testData.street.id);
    help.destroyAddMeta(meta, 'StreetType', testData.streetType.id);
    help.destroyAddMeta(meta, 'District', testData.district.id);
    help.destroyAddMeta(meta, 'City', testData.city.id);
    help.destroyAddMeta(meta, 'Region', testData.region.id);
    help.destroyAddMeta(meta, 'Country', testData.country.id);
    help.destroyModelsTest(meta).then(function(){done()}).catch(done);
  });

  it('should return list of countries', function (done) {
    db.Country.all()
      .then(function (countries) {
        countries.should.be.an('array');
        var country = _.first(countries).__data;
        should.exist(country);
        country.should.have.keys('id', 'code', 'name', 'active', 'point', 'bound');
        country.id.should.be.a('number');
        country.code.should.be.a('string');
        country.name.should.be.a('string');
        country.active.should.be.a('boolean');
        done();
      })
      .catch(done);
  });

  it('should update country', function (done) {
    var updatedName = 'updated';
    db.Country.update({id: testData.country.id}, {name: updatedName})
      .then(function () {
        return db.Country.findById(testData.country.id)
      })
      .then(function (country) {
        should.exist(country);
        country.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
