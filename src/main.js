var app = angular.module("angularBlackbox", []);

app.controller("MyController", function ($scope, dataService) {
    $scope.users = dataService.getUsers();
});

app.factory('dataService', function () {
    return {
        getUsers: function () {
            return [
                {
                    "_id": "599c8ebfb3145c06005a4e1e",
                    "index": 0,
                    "guid": "6b75e8d9-f4d2-4ca5-a08f-07f2d7ac24cf",
                    "isActive": false,
                    "balance": "$2,723.58",
                    "picture": "http://placehold.it/32x32",
                    "age": 38,
                    "eyeColor": "blue",
                    "name": "Buck Schroeder",
                    "gender": "male",
                    "company": "SYBIXTEX",
                    "email": "buckschroeder@sybixtex.com",
                    "phone": "+1 (819) 424-2995",
                    "address": "981 Stockholm Street, Shepardsville, California, 9372",
                    "about": "Nostrud reprehenderit ea cillum deserunt. Laborum deserunt ex dolor duis culpa dolore id exercitation. Veniam voluptate cillum aute mollit non.\r\n",
                    "registered": "2014-09-24T07:24:44 -03:00",
                    "latitude": 67.033932,
                    "longitude": 82.582779,
                    "tags": [
                        "ea",
                        "id",
                        "laboris",
                        "tempor",
                        "esse",
                        "magna",
                        "eiusmod"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Benton Patrick"
                        },
                        {
                            "id": 1,
                            "name": "Rodriquez Hill"
                        },
                        {
                            "id": 2,
                            "name": "Velazquez Battle"
                        }
                    ],
                    "greeting": "Hello, Buck Schroeder! You have 3 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "599c8ebf9c29271ca5c1e415",
                    "index": 1,
                    "guid": "5428cee6-0c8f-4a11-9472-929578396f04",
                    "isActive": false,
                    "balance": "$2,458.71",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "brown",
                    "name": "House Mccarthy",
                    "gender": "male",
                    "company": "MANGELICA",
                    "email": "housemccarthy@mangelica.com",
                    "phone": "+1 (984) 521-3461",
                    "address": "697 Locust Street, Lynn, Nevada, 2366",
                    "about": "Tempor reprehenderit cupidatat labore sit sint qui consequat in commodo eiusmod do esse. Incididunt dolor enim dolor id minim ullamco velit voluptate occaecat laboris consectetur. Ipsum adipisicing exercitation veniam qui ullamco velit velit consequat cupidatat. Pariatur pariatur est elit Lorem elit do dolore cillum ea nisi nisi. Voluptate ea veniam Lorem ipsum eu quis labore deserunt nulla. Nostrud minim exercitation ex ipsum dolor dolor irure reprehenderit pariatur pariatur adipisicing. Sint reprehenderit dolor officia minim ex sunt consequat.\r\n",
                    "registered": "2015-10-10T04:44:28 -03:00",
                    "latitude": -25.685134,
                    "longitude": 62.94753,
                    "tags": [
                        "excepteur",
                        "elit",
                        "id",
                        "deserunt",
                        "dolore",
                        "duis",
                        "qui"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Mathews Kramer"
                        },
                        {
                            "id": 1,
                            "name": "Curry Compton"
                        },
                        {
                            "id": 2,
                            "name": "Roy Summers"
                        }
                    ],
                    "greeting": "Hello, House Mccarthy! You have 3 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "_id": "599c8ebfb85a1b9968958518",
                    "index": 2,
                    "guid": "42e77194-0f21-4450-86e4-7e29558e541c",
                    "isActive": true,
                    "balance": "$3,857.25",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "brown",
                    "name": "Clarissa Garcia",
                    "gender": "female",
                    "company": "ZILODYNE",
                    "email": "clarissagarcia@zilodyne.com",
                    "phone": "+1 (812) 469-3979",
                    "address": "298 Pershing Loop, Rowe, Minnesota, 5022",
                    "about": "Nostrud dolor officia labore tempor. Labore velit quis nostrud Lorem. Cupidatat mollit esse officia fugiat esse. Pariatur et aliquip ex enim sint.\r\n",
                    "registered": "2016-04-30T03:51:49 -03:00",
                    "latitude": -68.998011,
                    "longitude": 179.621113,
                    "tags": [
                        "fugiat",
                        "fugiat",
                        "est",
                        "commodo",
                        "labore",
                        "cillum",
                        "et"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Alford Guy"
                        },
                        {
                            "id": 1,
                            "name": "Keisha Reed"
                        },
                        {
                            "id": 2,
                            "name": "Edith Gomez"
                        }
                    ],
                    "greeting": "Hello, Clarissa Garcia! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "_id": "599c8ebf06fbef7d981b368b",
                    "index": 3,
                    "guid": "559b56cb-9cc9-4cbc-a9e4-d2082b437cdd",
                    "isActive": false,
                    "balance": "$2,341.20",
                    "picture": "http://placehold.it/32x32",
                    "age": 36,
                    "eyeColor": "green",
                    "name": "Lena Mcdonald",
                    "gender": "female",
                    "company": "KIGGLE",
                    "email": "lenamcdonald@kiggle.com",
                    "phone": "+1 (949) 533-2492",
                    "address": "257 Battery Avenue, Curtice, Oklahoma, 4643",
                    "about": "Laborum deserunt pariatur ex voluptate ex ea ea et sint culpa aliquip. Exercitation nostrud cupidatat tempor aute sit voluptate ad veniam veniam consequat esse nulla nisi aute. Ex tempor in sunt aliquip nulla voluptate cillum. Culpa ex magna laborum elit. Eiusmod dolore incididunt magna aliqua Lorem dolore mollit elit adipisicing adipisicing amet non amet occaecat. Nisi in sint aute exercitation minim. Laboris labore anim pariatur deserunt mollit et pariatur incididunt dolore.\r\n",
                    "registered": "2017-06-09T03:20:34 -03:00",
                    "latitude": -84.741911,
                    "longitude": 63.608711,
                    "tags": [
                        "anim",
                        "officia",
                        "mollit",
                        "ut",
                        "consequat",
                        "sunt",
                        "labore"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Shaffer Bond"
                        },
                        {
                            "id": 1,
                            "name": "Pope Burgess"
                        },
                        {
                            "id": 2,
                            "name": "Bertha Charles"
                        }
                    ],
                    "greeting": "Hello, Lena Mcdonald! You have 6 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "_id": "599c8ebf2f1d836b77f54c47",
                    "index": 4,
                    "guid": "dc00a50e-d6ed-4b75-8afa-dfb3d210ccc3",
                    "isActive": false,
                    "balance": "$1,870.93",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "green",
                    "name": "Dudley Bartlett",
                    "gender": "male",
                    "company": "SUSTENZA",
                    "email": "dudleybartlett@sustenza.com",
                    "phone": "+1 (864) 433-2652",
                    "address": "117 Gain Court, Norvelt, Alabama, 5694",
                    "about": "Sit proident cupidatat veniam esse voluptate id exercitation veniam. Eu dolore irure dolor exercitation ut. Ea ut sint est duis esse aliquip anim aliqua proident ad. Veniam dolor ea ea minim eiusmod laborum id. Magna dolore deserunt proident consequat ea consectetur magna.\r\n",
                    "registered": "2016-04-08T05:47:38 -03:00",
                    "latitude": 54.328233,
                    "longitude": -86.146083,
                    "tags": [
                        "duis",
                        "minim",
                        "officia",
                        "in",
                        "laboris",
                        "irure",
                        "fugiat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Irene Middleton"
                        },
                        {
                            "id": 1,
                            "name": "Grant Potter"
                        },
                        {
                            "id": 2,
                            "name": "Sallie Reyes"
                        }
                    ],
                    "greeting": "Hello, Dudley Bartlett! You have 5 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "599c8ebf44d5b280053cc507",
                    "index": 5,
                    "guid": "04efaa98-0462-40f8-9de8-4ad5ca3e3625",
                    "isActive": false,
                    "balance": "$3,104.24",
                    "picture": "http://placehold.it/32x32",
                    "age": 36,
                    "eyeColor": "brown",
                    "name": "Maryellen Carlson",
                    "gender": "female",
                    "company": "LUXURIA",
                    "email": "maryellencarlson@luxuria.com",
                    "phone": "+1 (812) 558-3196",
                    "address": "840 Mermaid Avenue, Crucible, Ohio, 4548",
                    "about": "Voluptate eiusmod consectetur eu labore aute reprehenderit mollit ea culpa sint elit adipisicing laborum ea. Dolor ex cupidatat fugiat deserunt et cupidatat nostrud aliqua sunt enim pariatur minim velit. Irure non cupidatat sit aute voluptate nulla. Aute nisi magna ad aliqua. Velit aliqua irure ex culpa mollit do id proident proident dolore ipsum minim culpa. Officia eu duis commodo proident eiusmod irure ut labore cupidatat mollit ullamco in aliqua.\r\n",
                    "registered": "2016-11-14T02:33:36 -02:00",
                    "latitude": -59.301139,
                    "longitude": -88.631264,
                    "tags": [
                        "enim",
                        "eu",
                        "id",
                        "laborum",
                        "culpa",
                        "magna",
                        "nisi"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Gardner Wiley"
                        },
                        {
                            "id": 1,
                            "name": "Mai Gould"
                        },
                        {
                            "id": 2,
                            "name": "Ramsey Golden"
                        }
                    ],
                    "greeting": "Hello, Maryellen Carlson! You have 4 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "_id": "599c8ebf0d3c1dd478740c2f",
                    "index": 6,
                    "guid": "8fc4eb8b-b80a-44db-94cc-c861ea98dbb4",
                    "isActive": true,
                    "balance": "$3,183.30",
                    "picture": "http://placehold.it/32x32",
                    "age": 30,
                    "eyeColor": "brown",
                    "name": "Raymond Pennington",
                    "gender": "male",
                    "company": "SULTRAX",
                    "email": "raymondpennington@sultrax.com",
                    "phone": "+1 (909) 556-2869",
                    "address": "831 Lefferts Place, Hondah, Hawaii, 4623",
                    "about": "Minim nisi deserunt cupidatat ex anim consequat. Enim occaecat aute proident commodo tempor mollit sit sint fugiat. Fugiat quis qui Lorem nostrud quis tempor culpa irure qui tempor qui laboris occaecat laboris. Magna cillum elit laboris sunt veniam nisi laborum anim ipsum.\r\n",
                    "registered": "2014-01-14T04:44:21 -02:00",
                    "latitude": 58.714277,
                    "longitude": 90.590491,
                    "tags": [
                        "ad",
                        "consectetur",
                        "excepteur",
                        "ipsum",
                        "velit",
                        "et",
                        "dolor"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Roseann Phillips"
                        },
                        {
                            "id": 1,
                            "name": "Anthony Berger"
                        },
                        {
                            "id": 2,
                            "name": "Gina Armstrong"
                        }
                    ],
                    "greeting": "Hello, Raymond Pennington! You have 2 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "599c8ebf6a88c60d6eefe201",
                    "index": 7,
                    "guid": "114b9843-26f6-48c8-a9bb-a0236ab56fd1",
                    "isActive": false,
                    "balance": "$3,625.72",
                    "picture": "http://placehold.it/32x32",
                    "age": 22,
                    "eyeColor": "green",
                    "name": "Lorena Joyce",
                    "gender": "female",
                    "company": "ORBIN",
                    "email": "lorenajoyce@orbin.com",
                    "phone": "+1 (897) 597-3622",
                    "address": "523 Dover Street, Manila, Illinois, 6205",
                    "about": "Dolore Lorem tempor non qui aute cupidatat. Pariatur irure eu incididunt dolor ex reprehenderit ea officia in nisi fugiat. Cupidatat culpa sit reprehenderit cillum quis anim esse est culpa aliquip qui Lorem magna labore. Officia id dolore labore ipsum id eiusmod nisi consectetur sit. Velit laborum irure in non dolor nostrud id quis nisi cupidatat. Magna labore ad nulla in irure. Anim nostrud officia quis ipsum aliqua amet non et officia fugiat enim nulla sint excepteur.\r\n",
                    "registered": "2014-01-24T11:57:25 -02:00",
                    "latitude": 75.635584,
                    "longitude": 2.796389,
                    "tags": [
                        "tempor",
                        "consectetur",
                        "mollit",
                        "adipisicing",
                        "ad",
                        "labore",
                        "ea"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Dillon Mueller"
                        },
                        {
                            "id": 1,
                            "name": "Hurley Harrell"
                        },
                        {
                            "id": 2,
                            "name": "Corrine Delacruz"
                        }
                    ],
                    "greeting": "Hello, Lorena Joyce! You have 4 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "599c8ebf0d3dd6f8e7914685",
                    "index": 8,
                    "guid": "e7e0bd0c-94a4-4541-9d8c-80e614dc6305",
                    "isActive": false,
                    "balance": "$2,042.74",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "green",
                    "name": "Rachael Mullins",
                    "gender": "female",
                    "company": "COMTRAK",
                    "email": "rachaelmullins@comtrak.com",
                    "phone": "+1 (965) 577-3690",
                    "address": "487 Jardine Place, Rosedale, New Mexico, 9456",
                    "about": "Quis do labore cupidatat do deserunt. Ut officia do qui magna magna labore ut. Adipisicing cupidatat esse ea aute tempor laboris. Ea quis excepteur fugiat voluptate aliqua anim ex aute nulla minim exercitation aliquip.\r\n",
                    "registered": "2014-12-28T08:25:43 -02:00",
                    "latitude": 18.186646,
                    "longitude": 40.295826,
                    "tags": [
                        "culpa",
                        "aliquip",
                        "laboris",
                        "laborum",
                        "ea",
                        "sunt",
                        "non"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Samantha Rowe"
                        },
                        {
                            "id": 1,
                            "name": "Geneva Wilson"
                        },
                        {
                            "id": 2,
                            "name": "Elba Lowe"
                        }
                    ],
                    "greeting": "Hello, Rachael Mullins! You have 4 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "_id": "599c8ebfd9bfa8b64be7fa00",
                    "index": 9,
                    "guid": "7a884e21-a20f-498c-b977-fe64120d149f",
                    "isActive": false,
                    "balance": "$1,052.73",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "green",
                    "name": "Zelma Stephenson",
                    "gender": "female",
                    "company": "XYLAR",
                    "email": "zelmastephenson@xylar.com",
                    "phone": "+1 (973) 472-2504",
                    "address": "245 Lincoln Avenue, Berlin, Michigan, 7697",
                    "about": "Do incididunt ullamco id excepteur aute laborum fugiat. Esse ut incididunt dolore dolor aliqua anim qui ullamco non elit commodo consequat esse voluptate. Duis culpa nulla Lorem excepteur aliqua commodo est. Veniam veniam laboris velit officia non aute veniam magna elit cillum consequat. Excepteur nulla dolor et ut. Qui magna deserunt quis dolor Lorem aute quis elit.\r\n",
                    "registered": "2014-04-30T12:59:56 -03:00",
                    "latitude": -85.576659,
                    "longitude": 168.82695,
                    "tags": [
                        "ex",
                        "aliquip",
                        "occaecat",
                        "veniam",
                        "voluptate",
                        "tempor",
                        "eu"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Wilder Cruz"
                        },
                        {
                            "id": 1,
                            "name": "Mclaughlin Weaver"
                        },
                        {
                            "id": 2,
                            "name": "Mosley Barr"
                        }
                    ],
                    "greeting": "Hello, Zelma Stephenson! You have 10 unread messages.",
                    "favoriteFruit": "apple"
                }
            ];
        }
    };
});