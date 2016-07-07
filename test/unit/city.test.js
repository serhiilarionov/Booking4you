"use strict";

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var _ = require('lodash');
var should = require('chai').should();
var testData = require('../testData');

var loopback = require('../../server/server.js');
var db = loopback.dataSources.pgsql.models;

chai.should();
chai.use(chaiAsPromised);

describe('City', function () {
  before(function (done) {
    db.City.create(testData.city)
      .then(function (city) {
        testData.city.id = city.id;
        done();
      })
      .catch(done);
  });

  after(function (done) {
    db.City.destroyById(testData.city.id)
      .then(function () {
        done();
      })
      .catch(done);
  });

  describe('List', function () {
    it('should return list of categories', function (done) {
      db.City.all()
        .then(function (categories) {
          categories.should.be.an('array');
          var city = _.first(categories).__data;
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
});
