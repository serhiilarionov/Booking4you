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

describe('StreetType model', function () {
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

  it('should return list of streetTypes', function (done) {
    db.StreetType.all()
      .then(function (streetTypes) {
        streetTypes.should.be.an('array');
        var streetType = _.first(streetTypes).__data;
        should.exist(streetType);
        streetType.should.have.keys('id', 'name');
        streetType.id.should.be.a('number');
        done();
      })
      .catch(done);
  });

  it('should update streetType', function (done) {
    var updatedName = 'updated';
    db.StreetType.update({id: testData.streetType.id}, {name: updatedName})
      .then(function () {
        return db.StreetType.findById(testData.streetType.id)
      })
      .then(function (streetType) {
        should.exist(streetType);
        streetType.name.should.be.equal(updatedName);
        done();
      })
      .catch(done);
  });
});
