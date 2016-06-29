module.exports = function (app) {

    var GeoPoint = require('loopback').GeoPoint;

    app.dataSources.pgsql.automigrate('Category', function (err) {
        if (err) throw err;

        app.models.Category.create([
            {id: 1, name: 'Auto', slug: 'auto', parent_id: null, icon: 'icon1', position: 1, active: true},
            {id: 2, name: 'Moto', slug: 'moto', parent_id: null, icon: 'icon2', position: 2, active: true}
        ], function (err, model) {
            if (err) throw err;

            //console.log('Models created: \n', model);
        });
    });

    app.dataSources.pgsql.automigrate('Company', function (err) {
        if (err) throw err;

        app.models.Company.create([
            {
                id: 1,
                name: 'Экспресс',
                title: 'Автомойка «Экспресс»',
                category_id: 1,
                desc: 'EXPRESS МОЙКА 25грн. 10мин. Каждая 10 мойка БЕСПЛАТНО ХИМЧИСТКА КОВРОВ 15грн.М2 ПОЛИРОВКА КУЗОВА Комплекс для TAXI 35грн.',
                active: true,
                created_at: '2016-06-26',
                updated_at: '2016-06-26'
            },
            {
                id: 2,
                name: 'Автоцентр «CITIАВТО»',
                title: 'Автоцентр «CITIАВТО»',
                category_id: 2,
                desc: 'Услуги автомойки: бесконтактная мойка кузова, удаление битумных и других пятен любой сложности, широкий выбор автохимии по уходу и защите ЛКП и деталей автомобиля, химчистку салона, бесконтактную мойку моторного отсека специальными средствами.',
                active: true,
                created_at: '2016-06-26',
                updated_at: '2016-06-26'
            }
        ], function (err, model) {
            if (err) throw err;

            //console.log('Models created: \n', model);
        });
    });

    app.dataSources.pgsql.automigrate('CompanyDetail', function (err) {
        if (err) throw err;

        app.models.CompanyDetail.create([
            {
                'company_id': 1,
                'phone': [
                    {
                        'number': '+380671621288',
                        'code': '+380',
                        'operator': '67',
                        'note': 'бронирование',
                        'priority': 1
                    },
                    {
                        'number': '+380992218850',
                        'code': '+380',
                        'operator': '99',
                        'note': 'информация',
                        'priority': 0
                    }
                ],
                'email': ['auto-express@mail.ru'],
                'website': ['auto-express.com.ua'],
                'work_time': [],
                'image_list': [
                    '1/1/1.jpg',
                    '1/1/2.jpg',
                    '1/1/3.jpg',
                    '1/1/4.jpg',
                    '1/1/5.jpg',
                    '1/1/6.jpg'
                ]

            },
            {
                'company_id': 2,
                'phone': [
                    {
                        'number': '+380972204009',
                        'code': '+380',
                        'operator': '97',
                        'note': 'Автомойка',
                        'priority': 1
                    },
                    {
                        'number': '+380675692389',
                        'code': '+380',
                        'operator': '99',
                        'note': 'Автосалон, кредит, страхование',
                        'priority': 0
                    },
                    {
                        'number': '+380970775588',
                        'code': '+380',
                        'operator': '97',
                        'note': 'Мастер СТО, техподдержка ГБО',
                        'priority': 0
                    },
                    {
                        'number': '+380675695095',
                        'code': '+380',
                        'operator': '67',
                        'note': 'Кузовной сервис',
                        'priority': 0
                    }
                ],
                'email': [],
                'website': [],
                'work_time': [],
                'image_list': [
                    '1/2/2.jpg',
                    '1/2/3.jpg',
                    '1/2/4.jpg'
                ]

            }
        ], function (err, model) {
            if (err) throw err;

            //console.log('Models created: \n', model);
        });
    });

    app.dataSources.pgsql.automigrate('CompanyLocation', function (err) {
        if (err) throw err;

        app.models.CompanyLocation.create([
            {
                'company_id': 1,
                'point': new GeoPoint([33.421607, 47.936635]),
                'building_id': 1,
                'street_id': 1,
                'district_id': 5,
                'city_id': 1,
                'room': '',
                'detail': ''
            },
            {
                'company_id': 2,
                'point': new GeoPoint([33.377237, 47.888798]),
                'building_id': 2,
                'street_id': 2,
                'district_id': 1,
                'city_id': 1,
                'room': '',
                'detail': 'район Песочной'
            }
        ], function (err, model) {
            if (err) throw err;

            //console.log('Models created: \n', model);
        });
    });

};