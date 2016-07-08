var testData = require('./testData');
var Promise = require('bluebird');

var loopback = require('../server/server.js');
var db = loopback.dataSources.pgsql.models;

/**
 * function for create test building
 * @param done
 */
function createBuilding(done) {
  var data = {};
  return db.Country.create(testData.country())
    .then(function (country) {
      data.country = country;
      return db.Region.create(testData.region(country.id));
    })
    .then(function (region) {
      data.region = region;
      return db.City.create(testData.city(region.id));
    })
    .then(function (city) {
      data.city = city;
      return db.District.create(testData.district(city.id));
    })
    .then(function (district) {
      data.district = district;
      return db.StreetType.create(testData.streetType());
    })
    .then(function (streetType) {
      data.streetType = streetType;
      return db.Street.create(testData.street(data.city.id, data.district.id, streetType.id));
    })
    .then(function (street) {
      data.street = street;
      return db.Building.create(testData.building(street.id));
    })
    .then(function (building) {
      data.building = building;
      return data;
    })
}

/**
 * function for create test company
 * @param done
 */
function createCompany(done) {
  var data = {};
  return db.Category.create(testData.category())
    .then(function (category) {
      data.category = category;
      return db.Company.create(testData.company(category.id))
    })
    .then(function (company) {
      data.company = company;
      return data;
    })
}

/**
 * Function will remove row
 * @param modelName - String name
 * @param id - primary key
 * @param hash - search keys
 * @returns {Promise.<Integer>}
 */
function destroyModel(modelName, id, hash) {
  var where = {};
  if (id) {
    Object.assign(where, {id: id});
  }
  if (hash) {
    Object.assign(where, hash);
  }
  return db[modelName].destroyAll(where);
}

/**
 * Function will destroy models by specified meta
 * @param meta
 * @returns {Promise.<Instance>}
 */
function destroyModelsTest(meta) {
  return Promise.each(meta, function (model) {
    return destroyModel(
      model.modelName,
      model.id ? model.id : null,
      model.hash ? model.hash : null);
  });
}

/**
 * Function will add meta data for destroy
 * @param array
 * @param modelName
 * @param id
 * @param hash - search hash
 * @returns {Array}
 */
function destroyAddMeta(array, modelName, id, hash) {
  return array.push({modelName: modelName, id: id, hash: hash});
}


module.exports = {
  createBuilding: createBuilding,
  createCompany: createCompany,
  destroyModel: destroyModel,
  destroyModelsTest: destroyModelsTest,
  destroyAddMeta: destroyAddMeta
};