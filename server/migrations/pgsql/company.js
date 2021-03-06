module.exports = {
  up: function(dataSource, next) {
    dataSource.autoupdate('Company', function (err) {
      if (err) throw err;

      dataSource.models.Company.create([
        {
          'id': 1,
          'name': 'Экспресс',
          'title': 'Автомойка «Экспресс»',
          'categoryId': 1,
          'desc': 'EXPRESS МОЙКА 25грн. 10мин. Каждая 10 мойка БЕСПЛАТНО ХИМЧИСТКА КОВРОВ 15грн.М2 ПОЛИРОВКА КУЗОВА Комплекс для TAXI 35грн.',
          'active': true,
          'point': "47.936635, 33.421607",
          'buildingId': 1,
          'streetId': 1,
          'districtId': 5,
          'cityId': 1,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 2,
          'name': 'Автоцентр «CITIАВТО»',
          'title': 'Автоцентр «CITIАВТО»',
          'categoryId': 2,
          'desc': 'Услуги автомойки: бесконтактная мойка кузова, удаление битумных и других пятен любой сложности, широкий выбор автохимии по уходу и защите ЛКП и деталей автомобиля, химчистку салона, бесконтактную мойку моторного отсека специальными средствами.',
          'active': true,
          'point': "47.888798, 33.377237",
          'buildingId': 2,
          'streetId': 2,
          'districtId': 1,
          'cityId': 1,
          'room': '',
          'locationDetail': 'район Песочной'
        },
        {
          'id': 3,
          'name': 'Манго',
          'title': 'Манго',
          'categoryId': 21,
          'desc': 'Мы рады предложить широкий спектр услуг по уходу за Вашим автомобилем: профессиональная мойка авто, химчистка салона, предпродажная подготовка кузова, восстановление цвета кузова, удаление царапин, восстановление резины, полировка фар, стекол, экспресс-мойка 3-4 минуты!',
          'active': true,
          'point': "47.995350, 33.437559",
          'buildingId': 3,
          'streetId': 3,
          'districtId': 3,
          'cityId': 1,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 4,
          'name': 'Автомойка "5555"',
          'title': 'Автомойка "5555"',
          'categoryId': 21,
          'desc': 'Автомойка "5555" в Кривом Роге оказывает полный спектр услуг по мойке и химчистке автомобилей: бесконтактная мойка, химчистка салона, стирка ковров, мойка двигателя, чернение резины, полировка AMWAY. Время роботы: круглосуточно.',
          'active': true,
          'point': "47.885698, 33.286898",
          'buildingId': 4,
          'streetId': 4,
          'districtId': 7,
          'cityId': 1,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 5,
          'name': 'Автомойка "Немо"',
          'title': 'Автомойка "Немо"',
          'categoryId': 21,
          'desc': 'Мойка, химчистка.',
          'active': true,
          'point': "47.907665, 33.321911",
          'buildingId': 5,
          'streetId': 5,
          'districtId': 7,
          'cityId': 1,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 6,
          'name': 'Автомойка-кафе "Elvis"',
          'title': 'Автомойка-кафе "Elvis"',
          'categoryId': 21,
          'desc': 'Автомойка-кафе "Elvis" в Кривом Роге - с радостью,предоставит вам самые качественные услуги: мойка вашего авто,любых видов загрязнения;химчистка салона; полировка кузова и т.д. Так же к вашим услугам работает шинамонтаж и уютное кафе на втором этаже комплекса.',
          'active': true,
          'point': "47.907304, 33.312606",
          'buildingId': 6,
          'streetId': 5,
          'districtId': 7,
          'cityId': 1,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 7,
          'name': 'Автомойка и ремонтные боксы для автомобилей',
          'title': 'Автомойка и ремонтные боксы для автомобилей',
          'categoryId': 21,
          'desc': 'Автомойка и ремонтные боксы для автомобилей. СТО',
          'active': true,
          'point': "47.970498, 33.426990",
          'buildingId': 7,
          'streetId': 6,
          'districtId': 5,
          'cityId': 1,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 8,
          'name': 'Модена Авто',
          'title': 'Модена Авто',
          'categoryId': 21,
          'desc': 'Автомойка, хим чистка.',
          'active': true,
          'point': "48.432023, 35.046775",
          'buildingId': 8,
          'streetId': 7,
          'districtId': 10,
          'cityId': 2,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 9,
          'name': 'Автоцентр «Аэлита». Mitsubishi Motors',
          'title': 'Автоцентр «Аэлита». Mitsubishi Motors',
          'categoryId': 21,
          'desc': 'Здесь представлен полный модельный ряд автомобилей, крупный сервисный центр оборудован по последнему слову техники. Широкий спектр услуг: индивидуальный тест-драйв, продажа в кредит, страхование, трейд-ин (обмен старого автомобиля на новый с доплатой), лизинг. ВРЕМЯ РАБОТЫ: 9:00-18:00',
          'active': true,
          'point': "48.430485, 34.805495",
          'buildingId': 9,
          'streetId': 8,
          'districtId': 12,
          'cityId': 2,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 10,
          'name': 'Алеко-сервис',
          'title': 'Алеко-сервис',
          'categoryId': 21,
          'desc': '-ремонт подвески; ' +
          '-ремонт тормозной системы, включая АВС; ' +
          '-ремонт гидроусилителей руля; ' +
          '-ремонт рулевых реек, реставрация; ' +
          '-регулировка развала схождения и колес; ' +
          '-ремонт механических коробок передач; ' +
          '-ремонт двигателей; ' +
          '-ремонт электрооборудования (стартеры, генераторы); ' +
          '-компьютерная диагностика и ремонт электронных систем, имобилайзеров, блоков управления, щитков приборов; ' +
          '-чистка инжекторов; ' +
          '-чип-тюнинг (увеличение тяговых характеристик); ' +
          '-восстановление кузовов после ДТП на фирменном стенде точностью до 1мм; ' +
          '-окраска кузова и деталей; ' +
          '-антикоррозийная обработка "Тектилом" по голландской технологии; ' +
          '-тонирование стекол пленками производства США с выдачей сертификата; ' +
          '-мойка, химчистка салона; ' +
          '-полировка покрасочных покрытий с нанесением защитной пленки; ' +
          '-установка противоугонных замков MUL-T-LOCK; ' +
          '-установка автосигнализаций; ' +
          '-обесшумливание салона; … и многое другое.',
          'active': true,
          'point': "48.494692, 35.122061",
          'buildingId': 10,
          'streetId': 9,
          'districtId': 15,
          'cityId': 2,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 11,
          'name': 'Мерседес центр',
          'title': 'Мерседес центр',
          'categoryId': 21,
          'desc': 'Официальный дилер Mercedes-Benz. Ремонтные и сервисные работы автомобилей Mercedes-Benz. Любая продукция для автомобилей Mercedes-benz.',
          'active': true,
          'point': "48.459405, 35.016339",
          'buildingId': 11,
          'streetId': 10,
          'districtId': 12,
          'cityId': 2,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 12,
          'name': 'АИС Автоцентр Днепр',
          'title': 'АИС Автоцентр Днепр',
          'categoryId': 21,
          'desc': 'Автоцентр, мойка, СТО.',
          'active': true,
          'point': "48.450705, 35.074855",
          'buildingId': 12,
          'streetId': 11,
          'districtId': 10,
          'cityId': 2,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 13,
          'name': 'Автомойка Акваматик',
          'title': 'Автомойка Акваматик',
          'categoryId': 21,
          'desc': 'Автоматическая автомойка',
          'active': true,
          'point': "48.478605, 35.027667",
          'buildingId': 13,
          'streetId': 12,
          'districtId': 12,
          'cityId': 2,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 14,
          'name': 'ЛУКОЙЛ',
          'title': 'ЛУКОЙЛ',
          'categoryId': 21,
          'desc': 'Замена масел, автомойка',
          'active': true,
          'point': "50.344374, 30.548981",
          'buildingId': 14,
          'streetId': 13,
          'districtId': 16,
          'cityId': 3,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 15,
          'name': 'Автомойка',
          'title': 'Автомойка',
          'categoryId': 21,
          'desc': 'Проф.полировка кузова, полная химчистка салона, расконцервация кузова, передпродажная подготовка автомобиля, мойка двигателя.',
          'active': true,
          'point': "50.49294, 30.336987",
          'buildingId': 15,
          'streetId': 14,
          'districtId': 23,
          'cityId': 3,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 16,
          'name': 'Блеск-авто',
          'title': 'Блеск-авто',
          'categoryId': 21,
          'desc': 'Удаление царапин и других дефектов. Восстановительная и защитная полировка. Профессиональный косметический уход за автомобилем. Полировка фар. Химчистка.',
          'active': true,
          'point': "50.476915, 30.49466",
          'buildingId': 16,
          'streetId': 15,
          'districtId': 22,
          'cityId': 3,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 17,
          'name': 'Пронта',
          'title': 'Пронта',
          'categoryId': 21,
          'desc': 'Автомойка, полировка, химчистка.',
          'active': true,
          'point': "50.528409, 30.508665",
          'buildingId': 17,
          'streetId': 16,
          'districtId': 20,
          'cityId': 3,
          'room': '',
          'locationDetail': ''
        },
        {
          'id': 18,
          'name': 'Паровая автомойка',
          'title': 'Паровая автомойка',
          'categoryId': 21,
          'desc': 'Комплексная очистка салона автомобиля паром - это передовая авто моечная технология. Одна из главных ее преимуществ в том, что чистка паром позволяет быстро и эффективно очистить автомобиль от загрязнений самого разного рода. Комплексное чистки автомобиля паром, это инновационная, безопасная, эффективная технология очистки.',
          'active': true,
          'point': "50.477161, 30.587725",
          'buildingId': 18,
          'streetId': 17,
          'districtId': 19,
          'cityId': 3,
          'room': '',
          'locationDetail': ''
        }
      ], next);
    });
  },
  down: function(dataSource, next) {
    dataSource.models.Company.destroyAll([], next);
  }
};