# API Documentation

## Register User

**Endpoint**

```http
POST /users/register
```

### Description

Creates a new user account. The password is encrypted before storing in MongoDB. On successful registration, the API returns user details and a JWT token.

### Required Data

| Field              | Type   | Required |
| ------------------ | ------ | -------- |
| fullname.firstname | String | ✅       |
| fullname.lastname  | String | Optional |
| email              | String | ✅       |
| password           | String | ✅       |

### Validation

- Valid email address
- First name ≥ 3 characters
- Password ≥ 6 characters

### Request Example

```json
{
  "fullname": {
    "firstname": "Ranjeet",
    "lastname": "Kumar"
  },
  "email": "ranjeet@gmail.com",
  "password": "12345678"
}
```

### Success Response (201)

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "...",
    "fullname": {
      "firstname": "Ranjeet",
      "lastname": "Kumar"
    },
    "email": "ranjeet@gmail.com"
  }
}
```

### Error Response

```json
{
  "message": "User already exist"
}
```

or

```json
{
  "errors": [
    {
      "msg": "Invalid Email"
    }
  ]
}
```

### Status Codes

| Code    | Description                             |
| ------- | --------------------------------------- |
| **201** | User created successfully               |
| **400** | Validation failed / User already exists |
| **500** | Internal server error                   |

---

## Login User

**Endpoint**

```http
POST /users/login
```

### Description

Authenticates an existing user using email and password. If the credentials are valid, the API generates a JWT token, stores it in a cookie, and also returns it in the response.

### Required Data

| Field      |  Type  | Required |
| :--------- | :----: | :------: |
| `email`    | String |    ✅    |
| `password` | String |    ✅    |

### Request Example

```json
{
  "email": "ranjeet@gmail.com",
  "password": "123456"
}
```

### Success Response (200)

```json
{
  "token": "JWT_TOKEN",
  "user": {}
}
```

### Error Response (401)

```json
{
  "message": "Invalid email or password"
}
```

### Status Codes

| Code | Description               |
| :--: | :------------------------ |
| 200  | Login successful          |
| 400  | Validation failed         |
| 401  | Invalid email or password |
| 500  | Internal server error     |
