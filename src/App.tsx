import React from 'react';
import './App.css';
import {Cards} from './components/Cards';

function App() {

    const leads = {
        leads: [
            {
                "id": 28120259,
                "name": "Запрос тарифов",
                "price": 14000,
                "responsible_user_id": 991717,
                "group_id": 130804,
                "status_id": 37798864,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612859145,
                "updated_at": 1612884961,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28120259"
                    }
                },
                "_embedded": {
                    "tags": [
                        {
                            "id": 502135,
                            "name": "Приоритетный"
                        }
                    ],
                    "companies": [],
                    "contacts": [
                        {
                            "id": 44442679,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44442679"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 44442679,
                        "name": "Карина Игнатова",
                        "first_name": "Карина",
                        "last_name": "Игнатова",
                        "responsible_user_id": 991717,
                        "group_id": 130804,
                        "created_by": 991717,
                        "updated_by": 991717,
                        "created_at": 1612859145,
                        "updated_at": 1612859145,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18257,
                                "field_name": "Телефон",
                                "field_code": "PHONE",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "+79528401280",
                                        "enum_id": 39819,
                                        "enum_code": "WORK"
                                    }
                                ]
                            },
                            {
                                "field_id": 18259,
                                "field_name": "Email",
                                "field_code": "EMAIL",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "ignativa.k@gmail.com",
                                        "enum_id": 39831,
                                        "enum_code": "WORK"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44442679"
                            }
                        },
                        "_embedded": {
                            "tags": [],
                            "companies": []
                        }
                    }
                ]
            },
            {
                "id": 28123985,
                "name": "Рекламная продукция",
                "price": 11000,
                "responsible_user_id": 6215145,
                "group_id": 0,
                "status_id": 37798864,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612885293,
                "updated_at": 1612885990,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28123985"
                    }
                },
                "_embedded": {
                    "tags": [],
                    "companies": [],
                    "contacts": [
                        {
                            "id": 44445933,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445933"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 44445933,
                        "name": "Тимофей Петрин",
                        "first_name": "Тимофей",
                        "last_name": "Петрин",
                        "responsible_user_id": 991717,
                        "group_id": 130804,
                        "created_by": 991717,
                        "updated_by": 991717,
                        "created_at": 1612885293,
                        "updated_at": 1612885293,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18257,
                                "field_name": "Телефон",
                                "field_code": "PHONE",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "+79007642509",
                                        "enum_id": 39819,
                                        "enum_code": "WORK"
                                    }
                                ]
                            },
                            {
                                "field_id": 18259,
                                "field_name": "Email",
                                "field_code": "EMAIL",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "petrin.t@mail.ru",
                                        "enum_id": 39831,
                                        "enum_code": "WORK"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445933"
                            }
                        },
                        "_embedded": {
                            "tags": [],
                            "companies": []
                        }
                    }
                ]
            },
            {
                "id": 28123989,
                "name": "Настройка аккаунта",
                "price": 350000,
                "responsible_user_id": 6003447,
                "group_id": 0,
                "status_id": 37798864,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612885397,
                "updated_at": 1612886028,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28123989"
                    }
                },
                "_embedded": {
                    "tags": [],
                    "companies": [],
                    "contacts": [
                        {
                            "id": 44445941,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445941"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 44445941,
                        "name": "Николая Соколов",
                        "first_name": "",
                        "last_name": "",
                        "responsible_user_id": 991717,
                        "group_id": 130804,
                        "created_by": 991717,
                        "updated_by": 991717,
                        "created_at": 1612885397,
                        "updated_at": 1612885397,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18259,
                                "field_name": "Email",
                                "field_code": "EMAIL",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "sokolov.n@mail.ru",
                                        "enum_id": 39831,
                                        "enum_code": "WORK"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445941"
                            }
                        },
                        "_embedded": {
                            "tags": [],
                            "companies": []
                        }
                    }
                ]
            },
            {
                "id": 28123993,
                "name": "Запрос тарифов",
                "price": 80000,
                "responsible_user_id": 6222939,
                "group_id": 0,
                "status_id": 37798864,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612885476,
                "updated_at": 1612885952,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28123993"
                    }
                },
                "_embedded": {
                    "tags": [],
                    "companies": [],
                    "contacts": [
                        {
                            "id": 44445949,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445949"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 44445949,
                        "name": "Дмитрий Романов",
                        "first_name": "Дмитрий",
                        "last_name": "Романов",
                        "responsible_user_id": 991717,
                        "group_id": 130804,
                        "created_by": 991717,
                        "updated_by": 991717,
                        "created_at": 1612885476,
                        "updated_at": 1612885476,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18257,
                                "field_name": "Телефон",
                                "field_code": "PHONE",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "+79508361799",
                                        "enum_id": 39819,
                                        "enum_code": "WORK"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445949"
                            }
                        },
                        "_embedded": {
                            "tags": [],
                            "companies": []
                        }
                    }
                ]
            },
            {
                "id": 28124003,
                "name": "Продвижение",
                "price": 100000,
                "responsible_user_id": 707652,
                "group_id": 0,
                "status_id": 37798864,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612885578,
                "updated_at": 1612885925,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28124003"
                    }
                },
                "_embedded": {
                    "tags": [
                        {
                            "id": 502135,
                            "name": "Приоритетный"
                        },
                        {
                            "id": 502137,
                            "name": "Пропал"
                        }
                    ],
                    "companies": [],
                    "contacts": [
                        {
                            "id": 44445963,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445963"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 44445963,
                        "name": "Юлиана Фёдоровна",
                        "first_name": "Юлиана",
                        "last_name": "Фёдоровна",
                        "responsible_user_id": 991717,
                        "group_id": 130804,
                        "created_by": 991717,
                        "updated_by": 991717,
                        "created_at": 1612885578,
                        "updated_at": 1612885578,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18257,
                                "field_name": "Телефон",
                                "field_code": "PHONE",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "+79519530900",
                                        "enum_id": 39819,
                                        "enum_code": "WORK"
                                    }
                                ]
                            },
                            {
                                "field_id": 18259,
                                "field_name": "Email",
                                "field_code": "EMAIL",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "uliuli@gmail.com",
                                        "enum_id": 39831,
                                        "enum_code": "WORK"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/44445963"
                            }
                        },
                        "_embedded": {
                            "tags": [],
                            "companies": []
                        }
                    }
                ]
            },
            {
                "id": 28124021,
                "name": "Подключение сервиса",
                "price": 22000,
                "responsible_user_id": 616617,
                "group_id": 0,
                "status_id": 37798867,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612885685,
                "updated_at": 1635768125,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28124021"
                    }
                },
                "_embedded": {
                    "tags": [],
                    "companies": [],
                    "contacts": [
                        {
                            "id": 36213535,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/36213535"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 36213535,
                        "name": "Иван Фокин",
                        "first_name": null,
                        "last_name": null,
                        "responsible_user_id": 991717,
                        "group_id": 130804,
                        "created_by": 991717,
                        "updated_by": 991717,
                        "created_at": 1549017018,
                        "updated_at": 1612885685,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18259,
                                "field_name": "Email",
                                "field_code": "EMAIL",
                                "field_type": "multitext",
                                "values": [
                                    {
                                        "value": "fokin.i@rocketsales.ru",
                                        "enum_id": 39831,
                                        "enum_code": "WORK"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/36213535"
                            }
                        },
                        "_embedded": {
                            "tags": [],
                            "companies": []
                        }
                    }
                ]
            },
            {
                "id": 28124027,
                "name": "Продвижение",
                "price": 87000,
                "responsible_user_id": 991717,
                "group_id": 130804,
                "status_id": 37798870,
                "pipeline_id": 3963712,
                "loss_reason_id": null,
                "created_by": 991717,
                "updated_by": 991717,
                "created_at": 1612885785,
                "updated_at": 1612885788,
                "closed_at": null,
                "closest_task_at": null,
                "is_deleted": false,
                "custom_fields_values": null,
                "score": null,
                "account_id": 15950992,
                "_links": {
                    "self": {
                        "href": "https://rocketdemo.amocrm.ru/api/v4/leads/28124027"
                    }
                },
                "_embedded": {
                    "tags": [],
                    "companies": [
                        {
                            "id": 1966267,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/companies/1966267"
                                }
                            }
                        }
                    ],
                    "contacts": [
                        {
                            "id": 1966457,
                            "is_main": true,
                            "_links": {
                                "self": {
                                    "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/1966457"
                                }
                            }
                        }
                    ]
                },
                "contacts": [
                    {
                        "id": 1966457,
                        "name": "Москалев Сергей Иванович",
                        "first_name": null,
                        "last_name": null,
                        "responsible_user_id": 2348887,
                        "group_id": 0,
                        "created_by": 1518975,
                        "updated_by": 991717,
                        "created_at": 1502974417,
                        "updated_at": 1612885785,
                        "closest_task_at": null,
                        "is_deleted": false,
                        "is_unsorted": false,
                        "custom_fields_values": [
                            {
                                "field_id": 18255,
                                "field_name": "Должность",
                                "field_code": "POSITION",
                                "field_type": "text",
                                "values": [
                                    {
                                        "value": "генеральный директор"
                                    }
                                ]
                            }
                        ],
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/contacts/1966457"
                            }
                        },
                        "_embedded": {
                            "tags": [
                                {
                                    "id": 20341,
                                    "name": "импорт_17082017_1553"
                                }
                            ],
                            "companies": [
                                {
                                    "id": 1966267,
                                    "_links": {
                                        "self": {
                                            "href": "https://rocketdemo.amocrm.ru/api/v4/companies/1966267"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ],
        users: [
            {
                "id": 200094,
                "name": "Денис Воронцов"
            },
            {
                "id": 552228,
                "name": "Александр Саранцев"
            },
            {
                "id": 567942,
                "name": "Константин Кузнецов"
            },
            {
                "id": 572409,
                "name": "Rocket.Bot"
            },
            {
                "id": 616617,
                "name": "Иван"
            },
            {
                "id": 707652,
                "name": "Ярослав Шеломенцев"
            },
            {
                "id": 859134,
                "name": "Елена Булай"
            },
            {
                "id": 878149,
                "name": "Валерий Казанцев"
            },
            {
                "id": 991717,
                "name": "Иван Фокин"
            },
            {
                "id": 1177890,
                "name": "Георгий Кичев"
            },
            {
                "id": 1418238,
                "name": "Дмитрий Королев"
            },
            {
                "id": 1548079,
                "name": "Шульга Василий"
            },
            {
                "id": 1570530,
                "name": "Валерий Теребий"
            },
            {
                "id": 1574937,
                "name": "Григорьева Дарья"
            },
            {
                "id": 1701663,
                "name": "Илья Харитонов"
            },
            {
                "id": 1761628,
                "name": "Famaga"
            },
            {
                "id": 1801197,
                "name": "Алена Миронова"
            },
            {
                "id": 2051376,
                "name": "Яна Исаенкова"
            },
            {
                "id": 2130213,
                "name": "Владимир Ли"
            },
            {
                "id": 2240838,
                "name": "Денис Киселев"
            },
            {
                "id": 2348887,
                "name": "demoRobot"
            },
            {
                "id": 2721579,
                "name": "Дмитрий Лавренов"
            },
            {
                "id": 3006556,
                "name": "Денис"
            },
            {
                "id": 3062193,
                "name": "Дмитрий Кузин"
            },
            {
                "id": 3072597,
                "name": "Артем Казаков"
            },
            {
                "id": 3078357,
                "name": "Андрей Пономарев"
            },
            {
                "id": 3276309,
                "name": "Андрей Михейченко"
            },
            {
                "id": 3296574,
                "name": "Кирилл Лебедев"
            },
            {
                "id": 3386334,
                "name": "Алина Демина"
            },
            {
                "id": 3512487,
                "name": "Татьяна Кролевец"
            },
            {
                "id": 3524439,
                "name": "Кирилл Сахаров"
            },
            {
                "id": 3569698,
                "name": "Александр Соколов"
            },
            {
                "id": 3588291,
                "name": "Бутенец Сергей"
            },
            {
                "id": 3734052,
                "name": "Елизавета Борунова"
            },
            {
                "id": 3801045,
                "name": "Ким Сигачев"
            },
            {
                "id": 3996717,
                "name": "Максим Чистов"
            },
            {
                "id": 5792406,
                "name": "Дарья Кугакова"
            },
            {
                "id": 5812698,
                "name": "Денис Опарин"
            },
            {
                "id": 5914107,
                "name": "Владимир Храбрый"
            },
            {
                "id": 5948497,
                "name": "Владимир Вербовиков"
            },
            {
                "id": 6003447,
                "name": "Елизавета Самойлова"
            },
            {
                "id": 6041121,
                "name": "Александр Смирнов"
            },
            {
                "id": 6169681,
                "name": "Ян Австрейх"
            },
            {
                "id": 6185244,
                "name": "Шиндин Павел"
            },
            {
                "id": 6185268,
                "name": "Филиппенков Артем"
            },
            {
                "id": 6215145,
                "name": "Метелина Анастасия"
            },
            {
                "id": 6222939,
                "name": "Сергей Кузнецов"
            },
            {
                "id": 6337854,
                "name": "Денис Мерляк"
            },
            {
                "id": 6406680,
                "name": "Козлов Никита"
            },
            {
                "id": 6707790,
                "name": "Андрей Седойкин"
            }
        ],
        pipeline: {
            "id": 3963712,
            "name": "Для отдела разработки",
            "sort": 38,
            "is_main": false,
            "is_unsorted_on": true,
            "is_archive": false,
            "account_id": 15950992,
            "_links": {
                "self": {
                    "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712"
                }
            },
            "_embedded": {
                "statuses": [
                    {
                        "id": 37798861,
                        "name": "Неразобранное",
                        "sort": 10,
                        "is_editable": false,
                        "pipeline_id": 3963712,
                        "color": "#c1c1c1",
                        "type": 1,
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712/statuses/37798861"
                            }
                        }
                    },
                    {
                        "id": 37798864,
                        "name": "Первичный контакт",
                        "sort": 20,
                        "is_editable": true,
                        "pipeline_id": 3963712,
                        "color": "#99ccff",
                        "type": 0,
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712/statuses/37798864"
                            }
                        }
                    },
                    {
                        "id": 37798867,
                        "name": "Переговоры",
                        "sort": 30,
                        "is_editable": true,
                        "pipeline_id": 3963712,
                        "color": "#ffff99",
                        "type": 0,
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712/statuses/37798867"
                            }
                        }
                    },
                    {
                        "id": 37798870,
                        "name": "Принимают решение",
                        "sort": 40,
                        "is_editable": true,
                        "pipeline_id": 3963712,
                        "color": "#ffcc66",
                        "type": 0,
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712/statuses/37798870"
                            }
                        }
                    },
                    {
                        "id": 142,
                        "name": "Успешно реализовано",
                        "sort": 10000,
                        "is_editable": false,
                        "pipeline_id": 3963712,
                        "color": "#CCFF66",
                        "type": 0,
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712/statuses/142"
                            }
                        }
                    },
                    {
                        "id": 143,
                        "name": "Закрыто и не реализовано",
                        "sort": 11000,
                        "is_editable": false,
                        "pipeline_id": 3963712,
                        "color": "#D5D8DB",
                        "type": 0,
                        "account_id": 15950992,
                        "_links": {
                            "self": {
                                "href": "https://rocketdemo.amocrm.ru/api/v4/leads/pipelines/3963712/statuses/143"
                            }
                        }
                    }
                ]
            }
        }
    }

    const status = (id: number): { name: string, color: string } => {

        const status = leads.pipeline._embedded.statuses.find(status => status.id === id)

        if (status)
            return status
        return {name: 'string', color: 'string'}
    }

    const userName = (id: number): { id: number, name: string } => {

        const userName = leads.users.find(users => users.id === id)
        if (userName) {
            return userName
        }
        return { id: 999, name: "string" }
    }

    // useEffect(() =>  {
    //     leadsAPI.getLeads()
    //         .then(res => {
    //             debugger
    //             console.log(res.data)
    //         })
    // })


    return (
        <div className="App">

            {leads.leads.map((el) =>
                <Cards

                    name={el.name}
                    status={status(el.status_id)}
                    created_at={el.created_at}
                    responsibleUser={userName(el.responsible_user_id).name}
                    price={el.price}
                />
            )}

        </div>
    );
}

export default App;
