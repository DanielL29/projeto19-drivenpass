<div align="center">
    <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f512.png" alt="drivenpass" width="100">
  </a>

  <h3 align="center">DrivenPass</h3>
  <div align="center">
    19th Project of Driven Education
    <br />
  </div>
  <div align="center">
    An API Project to protect your passwords
    <br />
  </div>
</div>

<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" height="30px" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px" />
  

  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<!-- Table of Contents -->

<div align="center" style="margin-top: 50px">
    <h1> Project Guide</h1>
</div>

## Features

- Register a user
- Login
- Create / Get / GetById / Delete Credentials
- Create / Get / GetById / Delete Notes
- Create / Get / GetById / Delete Cards
- Create / Get / GetById / Delete Wifis
- Create / Get / GetById / Delete Documents

</br>

<div align="center" >
    <h1> API Reference</h1>
</div>

<details style="margin-bottom: 10px">
<summary style="font-size: 20px; color: #7E7E7E">TL;DR</summary>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /sign-up</summary>

Body:
```json
{
    "email": string,
    "password": string
}

```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /sign-in</summary>

Body:
```json
{
    "email": string,
    "password": string
}

```

Response: 
```json
{
  "token": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /credentials</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Body:
```json
{
    "title": string,
    "url": string,
    "name": string,
    "password": string
}

```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /credentials</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
    "title": string,
    "url": string,
    "name": string,
    "password": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /credentials/:credentialId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
    "title": string,
    "url": string,
    "name": string,
    "password": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">DELETE</span> /credentials/:credentialId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```
</details>
  
<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /notes</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Body:
```json
{
    "title": string,
    "note": string
}

```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /notes</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
    "title": string,
    "note": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /notes/:noteId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
    "title": string,
    "note": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">DELETE</span> /notes/:noteId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /cards</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Body:
```json
{
  "title": string,
  "number": "1111111111111111",
  "name": string,
  "securityCode": "111",
  "expirationDate": "09/27",
  "password": "1234",
  "isVirtual": false,
  "type": "BOTH" | "CREDIT" | "DEBIT"
}

```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /cards</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
  "title": string,
  "number": "1111111111111111",
  "name": string,
  "securityCode": "111",
  "expirationDate": "09/27",
  "password": "1234",
  "isVirtual": false,
  "type": "BOTH" | "CREDIT" | "DEBIT"
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /cards/:cardId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
  "title": string,
  "number": "1111111111111111",
  "name": string,
  "securityCode": "111",
  "expirationDate": "09/27",
  "password": "1234",
  "isVirtual": false,
  "type": "BOTH" | "CREDIT" | "DEBIT"
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">DELETE</span> /cards/:cardId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /wifis</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Body:
```json
{
    "title": string,
    "name": string,
    "password": string
}

```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /wifis</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
    "title": string,
    "name": string,
    "password": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /wifis/:wifiId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
    "title": string,
    "name": string,
    "password": string
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">DELETE</span> /wifis/:wifiId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #9FE58A">POST</span> /documents</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Body:
```json
{
  "name": string,
  "issueDate": "DD/MM/YYYY",
  "validity": "DD/MM/YYYY",
  "registrationNumber": string,
  "issuingBody": string,
  "type": "RG" | "CNH"
}

```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /documents</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
  "name": string,
  "issueDate": "DD/MM/YYYY",
  "validity": "DD/MM/YYYY",
  "registrationNumber": string,
  "issuingBody": string,
  "type": "RG" | "CNH"
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">GET</span> /documents/:documentId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```

Response:
```json
{
  "name": string,
  "issueDate": "DD/MM/YYYY",
  "validity": "DD/MM/YYYY",
  "registrationNumber": string,
  "issuingBody": string,
  "type": "RG" | "CNH"
}
```
</details>

<details style="margin: 10px">
<summary style="font-size: 18px"> <span style="font-weight:700; margin-right:10px; color: #76B1F8">DELETE</span> /documents/:documentId</summary>

Header:
```json
{
    "Authorization": Bearer token
}
```
</details>

# 

### Register a user

```http
POST /sign-up
```

#### Request:

| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email`       | `string` | **Required**. valid email       |
| `password`       | `string` | **Required**. password       |

`Password min 10 length`

####

### Login

```http
POST /sign-in
```

#### Request:

| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email`       | `string` | **Required**. valid email       |
| `password`       | `string` | **Required**. password       |

`Password min 10 length`

#### Response:

```json
{
  "token": string
}
```

#

### Create credential

```http
POST /credentials
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`   | `string` | **Required**. credential title             |
| `url`       | `string` | **Required**. valid url        |
| `name`       | `string` | **Required**. credential name        |
| `password`       | `string` | **Required**. credential password        |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

### Get credentials

```http
GET /credentials
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
    "title": string,
    "url": string,
    "name": string,
    "password": string
}
```

#

### Get credential

```http
GET /credentials/:credentialId
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
    "title": string,
    "url": string,
    "name": string,
    "password": string
}
```

### Delete credential

```http
DELETE /credentials/:credentialId
```

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####


### Create note

```http
POST /notes
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`   | `string` | **Required**. note title             |
| `note`       | `string` | **Required**. note description        |

`Title max length 50`
`Note max length 1000`

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

### Get notes

```http
GET /notes
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
    "title": string,
    "note": string
}
```

#

### Get note

```http
GET /notes/:noteId
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
    "title": string,
    "note": string
}
```

### Delete note

```http
DELETE /notes/:noteId
```

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####


### Create card

```http
POST /cards
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`   | `string` | **Required**. card title             |
| `number`       | `string` | **Required**. card number       |
| `name`       | `string` | **Required**. card name        |
| `securityCode`       | `string` | **Required**. card cvv        |
| `expirationDate`       | `string` | **Required**. card expiration date        |
| `password`       | `string` | **Required**. card password        |
| `isVirtual`       | `boolean` | **Required**. boolean to virtual or not card       |
| `type`       | `string` | **Required**. card type       |

`Number min/max length 16`
´SecurityCode max length 3´
`ExpirationDate MM/YY`
`Password min/max length 4`
`Type [BOTH, CREDTI, DEBIT]`

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

### Get cards

```http
GET /cards
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
  "title": string,
  "number": "1111111111111111",
  "name": string,
  "securityCode": "111",
  "expirationDate": "09/27",
  "password": "1234",
  "isVirtual": false,
  "type": "BOTH" | "CREDIT" | "DEBIT"
}
```

#

### Get card

```http
GET /cards/:cardId
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
  "title": string,
  "number": "1111111111111111",
  "name": string,
  "securityCode": "111",
  "expirationDate": "09/27",
  "password": "1234",
  "isVirtual": false,
  "type": "BOTH" | "CREDIT" | "DEBIT"
}
```

### Delete card

```http
DELETE /cards/:cardId
```

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####


### Create wifi

```http
POST /wifis
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`   | `string` | **Required**. wifi title             |
| `name`       | `string` | **Required**. wifi name        |
| `password`       | `string` | **Required**. wifi password        |

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

### Get wifis

```http
GET /wifis
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
    "title": string,
    "name": string,
    "password": string
}
```

#

### Get wifi

```http
GET /wifis/:wifiId
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
    "title": string,
    "name": string,
    "password": string
}
```

### Delete wifi

```http
DELETE /wifis/:wifiId
```

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####


### Create document

```http
POST /documents
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `name`   | `string` | **Required**. name title             |
| `issueDate`       | `string` | **Required**. document issue date     |
| `validity`       | `string` | **Required**. document validity       |
| `registrationNumber`       | `string` | **Required**. document number       |
| `issuingBody`       | `string` | **Required**. state where document was created |
| `type`       | `string` | **Required**.   document type      |

`IssueDate DD/MM/YYYY`
`Validity DD/MM/YYYY`
`IssuingBody min/max length 2`
`Type [RG, CNH]`

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

### Get documents

```http
GET /documents
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
  "name": string,
  "issueDate": "DD/MM/YYYY",
  "validity": "DD/MM/YYYY",
  "registrationNumber": string,
  "issuingBody": "SP",
  "type": "RG" | "CNH"
}
```

#

### Get document

```http
GET /documents/:documentId
```

### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

#### Response:

```json
{
  "name": string,
  "issueDate": "DD/MM/YYYY",
  "validity": "DD/MM/YYYY",
  "registrationNumber": string,
  "issuingBody": "SP",
  "type": "RG" | "CNH"
}
```

### Delete document

```http
DELETE /crdocuments/:documentId
```

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authorization` | `string` | **Required**. Bearer 'token' |

####

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://YOUR-USER-NAME:YOUR-PASSWORD@Hostname:5432/DatabaseName`

`SHADOW_DATABASE_URL = postgres://YOUR-USER-NAME:YOUR-PASSWORD@Hostname:5432/DatabaseName`

`PORT = number `

`CRYPTR_SECRET_KEY = any string`

`SECRET_KEY = any string`


# 

## Run Locally

Clone the project

```bash
  git clone https://github.com/DanielL29/projeto19-drivenpass
```

Go to the project directory

```bash
  cd projeto19-drivenpass/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate dev
```

Start the server

```bash
  npm run dev
```

</br>

# 

## Lessons Learned
- API Architecture
- TypeScript interfaces
- TypeScript types
- Classes
- Constructor
- Object Literals
# 

## Acknowledgements

-   [Badges for Github](https://dev.to/envoy_/150-badges-for-github-pnk)
-   [README inspiration](https://github.com/andrezopo/projeto18-valex#readme)

#

## Authors

-   Daniel Lucas Ederli



