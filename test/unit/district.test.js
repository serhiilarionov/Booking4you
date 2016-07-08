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

describe('District', function () {
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

  it('should return list of districts', function (done) {
    db.District.all()
      .then(function (districts) {
        districts.should.be.an('array');
        var district = _.first(districts).__data;
        should.exist(district);
        district.should.have.keys('id', 'name', 'point', 'bound', 'cityId');
        district.id.should.be.a('number');
        district.name.should.be.a('string');
        district.cityId.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update district', function (done) {
    var updatedName = 'updated';
    db.District.update({id: testData.district.id}, {name: updatedName})
      .then(function () {
        return db.District.findById(testData.district.id)
      })
      .then(function (district) {
        should.exist(district);
        district.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
