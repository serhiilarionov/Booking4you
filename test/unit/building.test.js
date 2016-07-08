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

describe('Building', function () {
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

  it('should return list of buildings', function (done) {
    db.Building.all()
      .then(function (buildings) {
        buildings.should.be.an('array');
        var building = _.first(buildings).__data;
        should.exist(building);
        building.should.have.keys('id', 'number', 'point', 'streetId');
        building.id.should.be.a('number');
        building.number.should.be.a('string');
        building.streetId.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update building', function (done) {
    var updatedName = 'updated';
    db.Building.update({id: testData.building.id}, {number: updatedName})
      .then(function () {
        return db.Building.findById(testData.building.id)
      })
      .then(function (building) {
        should.exist(building);
        building.number.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
