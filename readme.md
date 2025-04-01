Список всех эндпоинтов

GET api/products <-- возвращает список товаров
POST api/products <-- добавить товар
PUT api/products/:id <-- изменить товар
GET api/products/:id <-- возвращает один товар
DELETE api/products/:id <-- удалить товар

GET api/auctions <-- возвращает список аукционов
POST api/auctions <-- добавить аукцион
PUT api/auctions/:id <-- изменить аукцион
GET api/auctions/:id <-- возвращает один аукцион
POST api/auctions/place-bet/:id <-- поставить ставку
DELETE api/auctions/:id <-- удалить аукцион

WS api/auctions <-- подключиться к аукциону для отслеживания ставок на него

POST api/users/register <-- зарегестрировать пользователя
POST api/users/login <-- залогинить пользователя
GET api/users/refresh <-- обновить access token 
PUT api/users/:id <-- возвращает пользователя по id
GET apu/users/secure <-- проверить годность accessToken, присылать в заголовке "Authorization":"Bearer вставьТутAccessToken"



Пример тела запроса для создания аукциона по эндпоинту POST api/auctions
{
    "title":"testAuc",
    "startPrice":10,
    "startTime":"2024-12-11",
    "endTime":"2024-12-12"
}

Пример ответа по эндпоинту POST api/auctions
[
    {
      "title": "testAuc",
      "startPrice": 10,
      "currentPrice": 0,
      "startTime": "2024-12-11T00:00:00.000Z",
      "endTime": "2024-12-12T00:00:00.000Z",
      "status": "active",
      "_id": "6759d6254079431d70195efa",
      "bids": [],
      "__v": 0
    }
]

Пример тела в запросе по эндпоинту POST api/products
поле file здесь имеет кодировку base64
{
  "name":"test",
  "price":0,
  "file":"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"
}

Пример ответа в запросе по эндпоинту POST api/products
[
  {
    "_id": "6759d0c6b1d92266c62e22a9",
    "name": "test",
    "price": 0,
    "image": "https://i.ibb.co/n6HKv9L/8c2c36d30b30.jpg",
    "createdAt": "2024-12-11T17:49:58.796Z",
    "__v": 0
  }
]

Пример тела в запросе по эндпоинту POST api/auctions
{
    "amount":10,
    "userId":"6759d0c6b1d92266c62e22a9"
}

Пример ответа в запросе по эндпоинту POST api/auctions
{
    "_id": "6759d6254079431d70195efa",
    "title": "changedTestAuc",
    "startPrice": 10,
    "currentPrice": 0,
    "startTime": "2024-12-11T00:00:00.000Z",
    "endTime": "2024-12-12T00:00:00.000Z",
    "status": "active",
    "bids": [
        {
            "amount": 10,
            "time": "2024-12-11T18:21:23.022Z",
            "userId":"6759d0c6b1d92266c62e22a9",
            "_id": "6759d82390262e6f75dee896"
        }
    ],
    "__v": 0
}

Пример тела в запросе по эндпоинту POST api/users/register
{
  "email": "newus1er@example.com",
  "password": "1122", 
  "name": "New User"
}

Пример ответа в запросе по эндпоинту POST api/users/register
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzMWVyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMTIyIiwibmFtZSI6Ik5ldyBVc2VyIiwiaWF0IjoxNzMzOTQzODUyLCJleHAiOjE3MzM5NDQ3NTJ9.1oLNb9ntmVynpkpEvyr98NB7IvOcc5V5HbHipiSBjmM",
    "user": {
      "email": "newus1er@example.com",
      "isActivated": false,
      "password": "$2b$04$VlKDTyJ4fDyeIEjSCYUYE.aphc6h2Bwlc0xWJvaQQwz3Pww1727aq",
      "name": "New User",
      "isAdmin": false,
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzMWVyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMTIyIiwibmFtZSI6Ik5ldyBVc2VyIiwiaWF0IjoxNzMzOTQzODUyLCJleHAiOjE3MzM5NDU2NTJ9.sbst4ESmqU44Q7mSsWMX2xoLGIO_pJ8k7t5UFOFyXOY",
      "_id": "6759e22c9be1f5c6e4ad9877",
      "__v": 0
    }
}

Пример тела в запросе по эндпоинту POST api/users/login
ОБЯЗАТЕЛЬНО ОТПРАВЛЯТЬ ВСЮ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЕ
  {
    "_id": "6759e22c9be1f5c6e4ad9877",
    "email": "newus1er@example.com",
    "isActivated": false,
    "password": "$2b$04$VlKDTyJ4fDyeIEjSCYUYE.aphc6h2Bwlc0xWJvaQQwz3Pww1727aq",
    "name": "New User",
    "isAdmin": false,
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzMWVyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMTIyIiwiaWF0IjoxNzMzOTQ3ODI4LCJleHAiOjE3MzM5NDk2Mjh9.FmfejfAWGwBvcb0kfcerjMrtY9o0x1ZHugY7cghfOBA",
    "__v": 0
  }

Пример ответа в запросе по эндпоинту POST api/users/register
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzMWVyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMTIyIiwibmFtZSI6Ik5ldyBVc2VyIiwiaWF0IjoxNzMzOTQ3NzI1LCJleHAiOjE3MzM5NDg2MjV9.Or1nK6e-st8fpdSZ-bdyliiMwpW0q61VOYvGmtv9iyE",
  "user": {
    "_id": "6759e22c9be1f5c6e4ad9877",
    "email": "newus1er@example.com",
    "isActivated": false,
    "password": "$2b$04$VlKDTyJ4fDyeIEjSCYUYE.aphc6h2Bwlc0xWJvaQQwz3Pww1727aq",
    "name": "New User",
    "isAdmin": false,
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3VzMWVyQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiIxMTIyIiwibmFtZSI6Ik5ldyBVc2VyIiwiaWF0IjoxNzMzOTQ3NzI1LCJleHAiOjE3MzM5NDk1MjV9.u56hzg1KATBu-4z3GtJMadtaU28uAKgDNUL9rupG33I",
    "__v": 0
  }
}

Пример запроса по эндпоинту GET api/users/refresh
для этого запроса необходимо в заголовки написать
"Set-Cookie:":"refreshToken=сюдаВставьРефрешТокен"

Пример ответа в запросе по эндпоину GET api/users/refresh

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsibmFtZSI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJpc0FjdGl2YXRlZCI6ImluaXQiLCJpc0FkbWluIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJyZWZyZXNoVG9rZW4iOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsicmVxdWlyZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwiZW1haWwiOnRydWUsImlzQWN0aXZhdGVkIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwicmVmcmVzaFRva2VuIjp0cnVlLCJfX3YiOnRydWV9fX0sInNraXBJZCI6dHJ1ZX0sIiRpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX2lkIjoiNjc1OWUyMmM5YmUxZjVjNmU0YWQ5ODc3IiwiZW1haWwiOiJuZXd1czFlckBleGFtcGxlLmNvbSIsImlzQWN0aXZhdGVkIjpmYWxzZSwicGFzc3dvcmQiOiIkMmIkMDQkVmxLRFR5SjRmRHllSUVqU0NZVVlFLmFwaGM2aDJCd2xjMHhXSnZhUVF3ejNQd3cxNzI3YXEiLCJuYW1lIjoiTmV3IFVzZXIiLCJpc0FkbWluIjpmYWxzZSwicmVmcmVzaFRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmZhV1FpT2lJMk56VTVaVEl5WXpsaVpURm1OV00yWlRSaFpEazROemNpTENKbGJXRnBiQ0k2SW01bGQzVnpNV1Z5UUdWNFlXMXdiR1V1WTI5dElpd2lhWE5CWTNScGRtRjBaV1FpT21aaGJITmxMQ0p3WVhOemQyOXlaQ0k2SWpFeE1qSWlMQ0p1WVcxbElqb2lUbVYzSUZWelpYSWlMQ0pwYzBGa2JXbHVJanBtWVd4elpTd2ljbVZtY21WemFGUnZhMlZ1SWpvaVpYbEthR0pIWTJsUGFVcEpWWHBKTVU1cFNYTkpibEkxWTBOSk5rbHJjRmhXUTBvNUxtVjVTbXhpVjBad1lrTkpOa2x0Tld4a00xWjZUVmRXZVZGSFZqUlpWekYzWWtkVmRWa3lPWFJKYVhkcFkwZEdlbU16WkhaamJWRnBUMmxKZUUxVVNYbEphWGRwWVZkR01FbHFiM2hPZWsxNlQxUlJNMDlFU1RSTVEwcHNaVWhCYVU5cVJUTk5lazAxVGtSck1rMXFhRGt1Um0xbVpXcG1RVmRIZDBKMlkySXdhMlpqWlhKcVRYSjBXVGx2TUhneFdraDFaMWszWTJkb1prOUNRU0lzSWw5ZmRpSTZNQ3dpYVdGMElqb3hOek16T1RRNU5UZ3lMQ0psZUhBaU9qRTNNek01TlRFek9ESjkuXzBLZktma0RFZ0pCNjBCQUtUUzdLMV83d3p1eHpVRXZSRHNXMGpSMWxEcyIsIl9fdiI6MH0sImlhdCI6MTczMzk0OTYxNCwiZXhwIjoxNzMzOTUwNTE0fQ.N78jIadmYq87JvAgAq0jleVkT64gu1XOv9GTJjGDtRA",
  "user": {
    "_id": "6759e22c9be1f5c6e4ad9877",
    "email": "newus1er@example.com",
    "isActivated": false,
    "password": "$2b$04$VlKDTyJ4fDyeIEjSCYUYE.aphc6h2Bwlc0xWJvaQQwz3Pww1727aq",
    "name": "New User",
    "isAdmin": false,
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsibmFtZSI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJpc0FjdGl2YXRlZCI6ImluaXQiLCJpc0FkbWluIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJyZWZyZXNoVG9rZW4iOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsicmVxdWlyZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwiZW1haWwiOnRydWUsImlzQWN0aXZhdGVkIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiaXNBZG1pbiI6dHJ1ZSwicmVmcmVzaFRva2VuIjp0cnVlLCJfX3YiOnRydWV9fX0sInNraXBJZCI6dHJ1ZX0sIiRpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX2lkIjoiNjc1OWUyMmM5YmUxZjVjNmU0YWQ5ODc3IiwiZW1haWwiOiJuZXd1czFlckBleGFtcGxlLmNvbSIsImlzQWN0aXZhdGVkIjpmYWxzZSwicGFzc3dvcmQiOiIkMmIkMDQkVmxLRFR5SjRmRHllSUVqU0NZVVlFLmFwaGM2aDJCd2xjMHhXSnZhUVF3ejNQd3cxNzI3YXEiLCJuYW1lIjoiTmV3IFVzZXIiLCJpc0FkbWluIjpmYWxzZSwicmVmcmVzaFRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmZhV1FpT2lJMk56VTVaVEl5WXpsaVpURm1OV00yWlRSaFpEazROemNpTENKbGJXRnBiQ0k2SW01bGQzVnpNV1Z5UUdWNFlXMXdiR1V1WTI5dElpd2lhWE5CWTNScGRtRjBaV1FpT21aaGJITmxMQ0p3WVhOemQyOXlaQ0k2SWpFeE1qSWlMQ0p1WVcxbElqb2lUbVYzSUZWelpYSWlMQ0pwYzBGa2JXbHVJanBtWVd4elpTd2ljbVZtY21WemFGUnZhMlZ1SWpvaVpYbEthR0pIWTJsUGFVcEpWWHBKTVU1cFNYTkpibEkxWTBOSk5rbHJjRmhXUTBvNUxtVjVTbXhpVjBad1lrTkpOa2x0Tld4a00xWjZUVmRXZVZGSFZqUlpWekYzWWtkVmRWa3lPWFJKYVhkcFkwZEdlbU16WkhaamJWRnBUMmxKZUUxVVNYbEphWGRwWVZkR01FbHFiM2hPZWsxNlQxUlJNMDlFU1RSTVEwcHNaVWhCYVU5cVJUTk5lazAxVGtSck1rMXFhRGt1Um0xbVpXcG1RVmRIZDBKMlkySXdhMlpqWlhKcVRYSjBXVGx2TUhneFdraDFaMWszWTJkb1prOUNRU0lzSWw5ZmRpSTZNQ3dpYVdGMElqb3hOek16T1RRNU5UZ3lMQ0psZUhBaU9qRTNNek01TlRFek9ESjkuXzBLZktma0RFZ0pCNjBCQUtUUzdLMV83d3p1eHpVRXZSRHNXMGpSMWxEcyIsIl9fdiI6MH0sImlhdCI6MTczMzk0OTYxNCwiZXhwIjoxNzMzOTUxNDE0fQ.BZXvtCSSWujAgG_islXd8BIGZzxBjSAD_7cqARKIcak",
    "__v": 0
  }
}

Как работает WS api/auctions/:id

после подключения к вебсокету каждый раз, когда кто-то будет делать ставку (эндпоинт POST api/auctions/place-bet/:id), сервер будет присылать всем подключённым вебсокетам ставку, которую сделал пользователь