module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Building', function (err) {
      if (err) throw err;

      dataSource.models.Building.create([
        {'id': 1, 'streetId': 1, 'number': '5a', 'point': '33.421607, 47.936635'},
        {'id': 2, 'streetId': 2, 'number': '27б', 'point': '33.377237, 47.888798'},
        {'id': 3, 'streetId': 3, 'number': '19', 'point': '33.437559, 47.995350'},
        {'id': 4, 'streetId': 4, 'number': '5', 'point': '33.286898, 47.885698'},
        {'id': 5, 'streetId': 5, 'number': '1', 'point': '33.321911, 47.907665'},
        {'id': 6, 'streetId': 5, 'number': '95', 'point': '33.312606, 47.907304'},
        {'id': 7, 'streetId': 6, 'number': '78', 'point': '33.426990, 47.970498'},
        {'id': 8, 'streetId': 7, 'number': '3', 'point': '35.046775, 48.432023'},
        {'id': 9, 'streetId': 8, 'number': '12', 'point': '34.805495, 48.430485'},
        {'id': 10, 'streetId': 9, 'number': '26', 'point': '35.122061, 48.494692'},
        {'id': 11, 'streetId': 10, 'number': '42a', 'point': '35.016339, 48.459405'},
        {'id': 12, 'streetId': 11, 'number': '20', 'point': '35.074855, 48.450705'},
        {'id': 13, 'streetId': 12, 'number': '22', 'point': '35.027667, 48.478605'},
        {'id': 14, 'streetId': 13, 'number': '99к', 'point': '30.548981, 50.344374'},
        {'id': 15, 'streetId': 14, 'number': '2д', 'point': '30.336987, 50.49294'},
        {'id': 16, 'streetId': 15, 'number': '1в', 'point': '30.49466, 50.476915'},
        {'id': 17, 'streetId': 16, 'number': '3', 'point': '30.508665, 50.528409'},
        {'id': 18, 'streetId': 17, 'number': '2', 'point': '30.587725, 50.477161'}
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Building.destroyAll({}, next);
  }
};