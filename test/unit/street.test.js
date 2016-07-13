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

describe('Street model', function () {
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

  it('should return list of streets', function (done) {
    db.Street.all()
      .then(function (streets) {
        streets.should.be.an('array');
        var street = _.first(streets).__data;
        should.exist(street);
        street.should.have.keys('id', 'name', 'point', 'bound', 'streetTypeId', 'cityId', 'districtId');
        street.id.should.be.a('number');
        street.name.should.be.a('string');
        street.streetTypeId.should.be.a('number');
        street.cityId.should.be.a('number');
        street.districtId.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update street', function (done) {
    var updatedName = 'updated';
    db.Street.update({id: testData.street.id}, {name: updatedName})
      .then(function () {
        return db.Street.findById(testData.street.id)
      })
      .then(function (street) {
        should.exist(street);
        street.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
