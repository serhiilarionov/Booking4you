module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Question', function (err) {
      if (err) throw err;

      dataSource.models.Question.create([
        {'id': 1, "name": "Вас хорошо обслужили?"},
        {'id': 2, "name": "Как вам соотношение цены и качества?"},
        {'id': 3, "name": "Чисто было?"},
        {'id': 4, "name": "Местоположение хорошее?"}
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Question.destroyAll({}, next);
  }
};