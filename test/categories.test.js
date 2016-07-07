"use strict";

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var _ = require('lodash');
var expect = require('chai').expect;

var loopback = require('../server/server.js');

var db = loopback.dataSources.pgsql.models;

chai.should();
chai.use(chaiAsPromised);

describe('Categories', function () {

  describe('List', function () {



    it('should return list of categories', function (done) {
      db.Category.all()
        .then(function (list) {
          branches.should.be.an('array');
          var branch = _.first(branches);
          expect(branch).to.be.defined;
          /*branch.should.have.keys('id', 'name', 'country', 'address', 'director', 'accountant', 'headOffice', 'timezone');
          branch.id.should.be.a('number');
          branch.name.should.be.a('string');
          branch.country.should.be.a('string');
          branch.address.should.be.a('string');
          branch.headOffice.should.be.a('boolean');
          branch.timezone.should.be.a('string');*/
          done();
        })
        .catch(done);
    });


  });


});
