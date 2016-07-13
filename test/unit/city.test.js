"use strict";

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var _ = require('lodash');
var should = require('chai').should();
var help = require('../help');

var loopback = require('../../server/server');
var db = loopback.dataSources.pgsql.models;
var testData;

chai.should();
chai.use(chaiAsPromised);

describe('City model', function () {
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

  it('should return list of cities', function (done) {
    db.City.all()
      .then(function (cities) {
        cities.should.be.an('array');
        var city = _.first(cities).__data;
        should.exist(city);
        city.should.have.keys('id', 'name', 'slug', 'point', 'bound', 'active', 'regionId');
        city.id.should.be.a('number');
        city.name.should.be.a('string');
        city.slug.should.be.a('string');
        city.active.should.be.a('boolean');
        city.regionId.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update city', function (done) {
    var updatedName = 'updated';
    db.City.update({id: testData.city.id}, {name: updatedName})
      .then(function () {
        return db.City.findById(testData.city.id)
      })
      .then(function (city) {
        should.exist(city);
        city.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
