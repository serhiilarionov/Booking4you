module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Question', function (err) {
      if (err) throw err;

      dataSource.models.Question.create([
        {'id': 1, "name": "Услуги", "question": "Вас хорошо обслужили?"},
        {'id': 2, "name": "Отношение цена/качество", "question": "Как вам соотношение цены и качества?"},
        {'id': 3, "name": "Чистота", "question": "Чисто было?"},
        {'id': 4, "name": "Месторасположение", "question": "Местоположение хорошее?"}
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Question.destroyAll({}, next);
  }
};