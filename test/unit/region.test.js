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

describe('Region', function () {
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

  it('should return list of regions', function (done) {
    db.Region.all()
      .then(function (regions) {
        regions.should.be.an('array');
        var region = _.first(regions).__data;
        should.exist(region);
        region.should.have.keys('id', 'slug', 'name', 'active', 'point', 'bound', 'countryId');
        region.id.should.be.a('number');
        region.slug.should.be.a('string');
        region.name.should.be.a('string');
        region.active.should.be.a('boolean');
        region.countryId.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update region', function (done) {
    var updatedName = 'updated';
    db.Region.update({id: testData.region.id}, {name: updatedName})
      .then(function () {
        return db.Region.findById(testData.region.id)
      })
      .then(function (region) {
        should.exist(region);
        region.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
