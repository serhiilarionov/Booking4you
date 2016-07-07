module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('CompanyDetail', function (err) {
      if (err) throw err;

      dataSource.models.CompanyDetail.create([
        {
          'companyId': 1,
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
          'workTime': [],
          'imageList': [
            '1/1/1.jpg',
            '1/1/2.jpg',
            '1/1/3.jpg',
            '1/1/4.jpg',
            '1/1/5.jpg',
            '1/1/6.jpg'
          ]
        },
        {
          'companyId': 2,
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
          'workTime': [],
          'imageList': [
            '1/2/2.jpg',
            '1/2/3.jpg',
            '1/2/4.jpg'
          ]

        },
        {
          'companyId': 3,
          'phone': [
            {
              'number': '+380965297790',
              'code': '+380',
              'operator': '96',
              'note': 'кафе',
              'priority': 0
            },
            {
              'number': '+380976077742',
              'code': '+380',
              'operator': '97',
              'note': 'кафе',
              'priority': 0
            },
            {
              'number': '+380982092332',
              'code': '+380',
              'operator': '98',
              'note': 'автомойка',
              'priority': 1
            }
          ],
          'email': [],
          'website': [],
          'workTime': [],
          'imageList': ['1/3/6.jpg']
        },
        {
          'companyId': 4,
          'phone': [
            {
              'number': '+380974555599',
              'code': '+380',
              'operator': '97',
              'note': 'справки',
              'priority': 0
            },
            {
              'number': '+380983435862',
              'code': '+380',
              'operator': '98',
              'note': 'телефон для записи',
              'priority': 1
            }
          ],
          'email': ['5555@gmail.com'],
          'website': [''],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 5,
          'phone': [
            {
              'number': '+380960444037',
              'code': '+380',
              'operator': '96',
              'note': 'бронирование',
              'priority': 1
            }
          ],
          'email': [''],
          'website': ['nemo.com'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 6,
          'phone': [
            {
              'number': '123123123123',
              'code': '+380',
              'operator': '123',
              'note': '',
              'priority': 0
            },
            {
              'number': '123123123123',
              'code': '+380',
              'operator': '123',
              'note': '',
              'priority': 1
            }
          ],
          'email': ['asdfasdf@gmail.com'],
          'website': ['elvis.com'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 7,
          'phone': [
            {
              'number': '+380984313871',
              'code': '+380',
              'operator': '98',
              'note': 'заказ',
              'priority': 1
            }
          ],
          'email': ['dimadollar@mai.ru'],
          'website': [],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 8,
          'phone': [
            {
              'number': '+380563713007',
              'code': '+380',
              'operator': '563',
              'note': '',
              'priority': 1
            }
          ],
          'email': [],
          'website': [],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 9,
          'phone': [
            {
              'number': '+380562323002',
              'code': '+380',
              'operator': '562',
              'note': '',
              'priority': 1
            }
          ],
          'email': [],
          'website': ['mitsubishi-aelita.dp.ua'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 10,
          'phone': [
            {
              'number': '+380663386742',
              'code': '+380',
              'operator': '66',
              'note': '',
              'priority': 1
            }
          ],
          'email': [],
          'website': ['www.alekoservis.dp.ua'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 11,
          'phone': [
            {
              'number': '+380567703384',
              'code': '+380',
              'operator': '56',
              'note': '',
              'priority': 1
            }
          ],
          'email': [],
          'website': ['www.mercedes-benz.dp.ua'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 12,
          'phone': [
            {
              'number': '+380567569409',
              'code': '+380',
              'operator': '56',
              'note': 'СТО, мойка',
              'priority': 1
            },
            {
              'number': '+380567569412',
              'code': '+380',
              'operator': '56',
              'note': 'СТО, мойка',
              'priority': 0
            }
          ],
          'email': [],
          'website': ['http://dnepr.ais.ua/'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 13,
          'phone': [
            {
              'number': '+380563740438',
              'code': '+380',
              'operator': '56',
              'note': 'бронирование',
              'priority': 1
            }
          ],
          'email': [],
          'website': [],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 14,
          'phone': [
            {
              'number': '+380445939300',
              'code': '+380',
              'operator': '44',
              'note': 'бронирование автомойки',
              'priority': 1
            }
          ],
          'email': [],
          'website': ['www.lukoil.com.ua/rus/auto'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 15,
          'phone': [
            {
              'number': '+380501352030',
              'code': '+380',
              'operator': '50',
              'note': '',
              'priority': 1
            }
          ],
          'email': [],
          'website': [],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 16,
          'phone': [
            {
              'number': '+380445929196',
              'code': '+380',
              'operator': '98',
              'note': 'автомойка',
              'priority': 1
            }
          ],
          'email': [],
          'website': ['polirovka.kiev.ua/'],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 17,
          'phone': [
            {
              'number': '+380675011410',
              'code': '+380',
              'operator': '67',
              'note': 'бронирование автомойки',
              'priority': 1
            }
          ],
          'email': [],
          'website': [],
          'workTime': [],
          'imageList': []
        },
        {
          'companyId': 18,
          'phone': [
            {
              'number': '+380445928791',
              'code': '+380',
              'operator': '44',
              'note': 'запись на автомойку',
              'priority': 1
            }
          ],
          'email': [],
          'website': ['http://www.avtosunsky.com/'],
          'workTime': [],
          'imageList': []
        }
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.CompanyDetail.destroyAll([], next);
  }
};