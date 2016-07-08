var Chance = require('chance');
var chance = new Chance();

module.exports = {
  country: function() {
    return {
      'name': chance.country({full: true}),
      'code': chance.country(),
      'active': chance.bool()
    }
  },
  region: function(countryId) {
    return {
      'slug': chance.string(),
      'name': chance.sentence({words: 2}),
      'point': chance.coordinates(),
      'active': chance.bool(),
      'countryId': countryId
    }
  },
  city: function(regionId){
    return {
      'name': chance.string(),
      'slug': chance.string(),
      'active': chance.bool(),
      'point': chance.coordinates(),
      'regionId': regionId
    }
  },
  district: function(cityId) {
    return {
      'name': chance.sentence({words: 2}),
      'point': chance.coordinates(),
      'cityId': cityId
    }
  },
  streetType: function() {
    return {
      'name': chance.string()
    }
  },
  street: function(cityId, districtId, streetTypeId) {
    return {
      'name': chance.string(),
      'cityId': cityId,
      'districtId': districtId,
      'streetTypeId': streetTypeId
    }
  },
  building: function(streetId) {
    return {
      'number': chance.string(),
      'point': chance.coordinates(),
      'streetId': streetId
    }
  },
  category: function() {
    return {
      'name': chance.string(),
      'slug': chance.string(),
      'parentId': 0,
      'icon': chance.string(),
      'position': chance.integer({min: 0, max: 10}),
      'active': chance.bool()
    }
  },
  company: function(categoryId) {
    return {
      'name': chance.string(),
      'title': chance.sentence({words: 2}),
      'desc': chance.sentence({words: 10}),
      'active': chance.bool(),
      'categoryId': categoryId
    }
  }
};