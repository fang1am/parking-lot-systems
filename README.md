Parking lot systems API

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#build & run docker
$ docker-compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Rest API

Endpoints

```bash
/v1/parking-lot/create-parking, POST
/v1/parking-lot/park-the-car, POST
/v1/parking-lot/leave-the-slot, POST
/v1/parking-lot/status-parking-lot, GET
/v1/parking-lot/plate-list-by-car-size, GET
/v1/parking-lot/zone-list-by-car-size, GET
```

## Examples

Api to create parking lot

- URL
  `/v1/parking-lot/create-parking`

- Method
  `POST`

- Data params

  - Required:
    `size_name=[string] size=[number] amount=[number] IsEmpty=[boolean] zone=[string]`
  - Examples:
    `{"size_name": "large", "size": 3, "amount": 8, "IsEmpty": true, "zone": "C"}`

- Success Response
  - HTTP status code
    `201 created`
- Content
  `{ "size_name": "large", "size": 3, "amount": 8, "IsEmpty": true, "zone": "C", "\_id": "61e5bf33f7e87e5b8fb019b7", "\_\_v": 0 }`

Api to park the car

- URL
  `/v1/parking-lot/park-the-car`

- Method
  `POST`

- Data params

  - Required:
    `plate=[string] car_size=[number]`
  - Examples:
    `{ "plate":"PP-2121", "car_size":"1" }`

- Success Response

  - HTTP status code
    `201 created`

- Content
  `{ "plate": "PP-2121", "car_size_name": "medium", "size": 2, "parking_slot": "B", "entry_time": "2022-01-17T19:15:53.247Z", "left": false, "\_id": "61e5c069f7e87e5b8fb019ba", "\_\_v": 0 }`

Api to leave the slot

- URL
  `/v1/parking-lot/leave-the-slot`

- Method
  `POST`

- Data params

  - Required:
    `\_id=[string] car_size=[number]`
  - Examples:
    `{ "\_id":"61e5c069f7e87e5b8fb019ba", "car_size":2 }`

- Success Response
  - HTTP status code
    `201 created`
- Content
  `{ "message": "Ok, you can leave. Thanks and we hope to see you again." }`

Api to get status of parking lot

- URL
  `/v1/parking-lot/status-parking-lot`

- Method
  `GET`

- Data params
  `None`

- Success Response
  - HTTP status code
    `200 OK`
- Content
  `[ { "size_name": "small", "status": "full parking" }, { "size_name": "medium", "status": "empty parking" }, { "size_name": "large", "status": "empty parking" } ]`

Api to get registration plate number list by car size

- URL
  `/v1/parking-lot/plate-list-by-car-size`

- Method
  `GET`

- Data params
  `None`

- Success Response

  - HTTP status code
    `200 OK`

- Content
  `{ "large": [ { "_id": "61e474d7ef8732a6827b9e04", "plate": "AA-1111", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T19:41:11.806Z", "__v": 0, "left": true, "left_time": "2022-01-16T20:15:17.549Z" }, { "_id": "61e47790ef8732a6827b9e08", "plate": "AA-1112", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T19:52:48.971Z", "__v": 0, "left": false }, { "_id": "61e47efd46897f8c5f1ba1bb", "plate": "AA-1113", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T20:24:29.688Z", "left": false, "__v": 0 }, { "_id": "61e47f0246897f8c5f1ba1bf", "plate": "AA-1114", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T20:24:34.458Z", "left": false, "__v": 0 }, { "_id": "61e47f0d46897f8c5f1ba1c3", "plate": "AA-1115", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T20:24:45.340Z", "left": false, "__v": 0 } ], "medium": [ { "_id": "61e515bf74241d36fea28811", "plate": "BB-6666", "car_size_name": "medium", "size": 2, "parking_slot": "B", "entry_time": "2022-01-17T07:07:43.761Z", "left": false, "__v": 0 }, { "_id": "61e5c069f7e87e5b8fb019ba", "plate": "PP-2121", "car_size_name": "medium", "size": 2, "parking_slot": "B", "entry_time": "2022-01-17T19:15:53.247Z", "left": true, "__v": 0, "left_time": "2022-01-17T19:19:54.066Z" } ], "small": [ { "_id": "61e515d374241d36fea28815", "plate": "PP-9876", "car_size_name": "small", "size": 1, "parking_slot": "A", "entry_time": "2022-01-17T07:08:03.552Z", "left": false, "__v": 0 } ] }`

Api to get registration allocated slot number list by car size

- URL
  `/v1/parking-lot/zone-list-by-car-size`

- Method
  `GET`

- sData params
  `None`

- Success Response

  - HTTP status code
    `200 OK`

- Content
  `{ "C": [ { "_id": "61e474d7ef8732a6827b9e04", "plate": "AA-1111", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T19:41:11.806Z", "__v": 0, "left": true, "left_time": "2022-01-16T20:15:17.549Z" }, { "_id": "61e47790ef8732a6827b9e08", "plate": "AA-1112", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T19:52:48.971Z", "__v": 0, "left": false }, { "_id": "61e47efd46897f8c5f1ba1bb", "plate": "AA-1113", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T20:24:29.688Z", "left": false, "__v": 0 }, { "_id": "61e47f0246897f8c5f1ba1bf", "plate": "AA-1114", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T20:24:34.458Z", "left": false, "__v": 0 }, { "_id": "61e47f0d46897f8c5f1ba1c3", "plate": "AA-1115", "car_size_name": "large", "size": 3, "parking_slot": "C", "entry_time": "2022-01-16T20:24:45.340Z", "left": false, "__v": 0 } ], "B": [ { "_id": "61e515bf74241d36fea28811", "plate": "BB-6666", "car_size_name": "medium", "size": 2, "parking_slot": "B", "entry_time": "2022-01-17T07:07:43.761Z", "left": false, "__v": 0 }, { "_id": "61e5c069f7e87e5b8fb019ba", "plate": "PP-2121", "car_size_name": "medium", "size": 2, "parking_slot": "B", "entry_time": "2022-01-17T19:15:53.247Z", "left": true, "__v": 0, "left_time": "2022-01-17T19:19:54.066Z" } ], "A": [ { "_id": "61e515d374241d36fea28815", "plate": "PP-9876", "car_size_name": "small", "size": 1, "parking_slot": "A", "entry_time": "2022-01-17T07:08:03.552Z", "left": false, "__v": 0 } ] }`
