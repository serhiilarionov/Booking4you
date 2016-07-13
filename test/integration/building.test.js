var assert = require('chai').assert;
var superagent = require('superagent');
var app = require('../../server/server');
var db = app.dataSources.pgsql.models;

var testDataCreator = require('../testDataCreator');
var help = require('../help');

var _ = require('lodash');
var should = require('chai').should();

var server;
var testData;
var testBuilding;

describe('Building controller', function () {
  before(function (done) {
    new Promise(function (resolve, reject) {
      server = app.listen();
      resolve();
    })
      .then(function () {
        return help.createBuilding()
      })
      .then(function (data) {
        testData = data;
        return help.login()
      })
      .then(function (user) {
        testData.user = user;
        done();
      })
      .catch(done);
  });

  after(function (done) {
    var meta = [];
    help.destroyAddMeta(meta, 'User', testData.user.userId);
    help.destroyAddMeta(meta, 'Building', testData.building.id);
    help.destroyAddMeta(meta, 'Street', testData.street.id);
    help.destroyAddMeta(meta, 'StreetType', testData.streetType.id);
    help.destroyAddMeta(meta, 'District', testData.district.id);
    help.destroyAddMeta(meta, 'City', testData.city.id);
    help.destroyAddMeta(meta, 'Region', testData.region.id);
    help.destroyAddMeta(meta, 'Country', testData.country.id);
    help.destroyModelsTest(meta)
      .then(function () {
        server.close(done);
      })
      .catch(done);
  });

  it('should return list of buildings', function (done) {
    superagent
      .get(testDataCreator.apiUrl + '/buildings?access_token=' + testData.user.accessToken)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function (err, buildingRes) {
        if (err) {
          return done(err);
        }

        assert.equal(buildingRes.status, 200);
        var buildings = buildingRes.body;
        buildings.should.be.an('array');
        var building = _.first(buildings);
        should.exist(building);
        building.should.have.keys('id', 'number', 'point', 'streetId');
        building.id.should.be.a('number');
        building.number.should.be.a('string');
        building.point.should.be.a('object');
        building.streetId.should.be.a('number');
        done();
      })
  });

  it('should add new building', function (done) {
    superagent
      .post(testDataCreator.apiUrl + '/buildings?access_token=' + testData.user.accessToken)
      .send(testDataCreator.building(1))
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function (err, buildingRes) {
        if (err) {
          return done(err);
        }

        testBuilding = buildingRes.body;
        assert.equal(buildingRes.status, 200);
        should.exist(testBuilding);
        testBuilding.should.have.keys('id', 'number', 'point', 'streetId');
        testBuilding.id.should.be.a('number');
        testBuilding.number.should.be.a('string');
        testBuilding.point.should.be.a('object');
        testBuilding.streetId.should.be.a('number');
        done();
      })
  });

  it('should update building', function (done) {
    var where = {
      "id": testBuilding.id
    };
    var updatedName = testDataCreator.updatedName();
    superagent
      .post(testDataCreator.apiUrl + '/buildings/update?where=' + JSON.stringify(where) +
        '&access_token=' + testData.user.accessToken)
      .send({"number": updatedName})
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function (err, buildingRes) {
        if (err) {
          return done(err);
        }

        assert.equal(buildingRes.status, 200);
        db.Building.findById(testBuilding.id)
          .then(function (building) {
            building.__data.number.should.be.equal(updatedName);
            done();
          })
      })
  });

  it('should delete building', function (done) {
    superagent
      .delete(testDataCreator.apiUrl + '/buildings/' + testBuilding.id +
        '?access_token=' + testData.user.accessToken)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function (err, buildingRes) {
        if (err) {
          return done(err);
        }

        assert.equal(buildingRes.status, 200);
        db.Building.findById(testBuilding.id)
          .then(function (building) {
            should.not.exist(building);
            done();
          })
      })
  });
});
