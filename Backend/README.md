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

## User Profile

**Endpoint**

```http
GET /users/profile
```

### Description

Returns the authenticated user's profile. This is a protected route, so a valid JWT token is required. The token is verified before the user details are returned.

### Required Header

```http
Authorization: Bearer JWT_TOKEN
```

### Success Response (200)

```json
{
  "_id": "...",
  "fullname": {
    "firstname": "Ranjeet",
    "lastname": "Kumar"
  },
  "email": "ranjeet@gmail.com"
}
```

### Status Codes

| Code | Description                  |
| :--: | :--------------------------- |
| 200  | Profile fetched successfully |
| 401  | Unauthorized                 |
| 500  | Internal server error        |

---

## Logout User

**Endpoint**

```http
GET /users/logout
```

### Description

Logs out the authenticated user by clearing the authentication cookie and adding the current JWT token to the blacklist. After logout, the same token cannot be used to access protected routes.

### Required Header

```http
Authorization: Bearer JWT_TOKEN
```

### Success Response (200)

```json
{
  "message": "Logged out"
}
```

### Status Codes

| Code | Description           |
| :--: | :-------------------- |
| 200  | Logout successful     |
| 401  | Unauthorized          |
| 500  | Internal server error |

---

//////////////////////////////////////////////////////////////////////////////////

# API Documentation

## Register Captain

**Endpoint**

```http
POST /captains/register
```

### Description

Creates a new captain account. The password is encrypted before storing in MongoDB. On successful registration, the API returns the captain details along with a JWT token.

### Required Data

| Field               | Type   | Required |
| ------------------- | ------ | -------- |
| fullname.firstname  | String | ✅       |
| fullname.lastname   | String | Optional |
| email               | String | ✅       |
| password            | String | ✅       |
| vehicle.color       | String | ✅       |
| vehicle.plate       | String | ✅       |
| vehicle.capacity    | Number | ✅       |
| vehicle.vehicleType | String | ✅       |

### Validation

- Valid email address
- First name ≥ 3 characters
- Password ≥ 6 characters
- Vehicle color ≥ 3 characters
- Vehicle plate ≥ 3 characters
- Vehicle capacity ≥ 1
- Vehicle type must be one of:
  - `car`
  - `motorcycle`
  - `auto`

### Request Example

```json
{
  "fullname": {
    "firstname": "Ranjeet",
    "lastname": "Kumar"
  },
  "email": "ranjeet@gmail.com",
  "password": "12345678",
  "vehicle": {
    "color": "White",
    "plate": "BR32AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Success Response (201)

```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "_id": "...",
    "fullname": {
      "firstname": "Ranjeet",
      "lastname": "Kumar"
    },
    "email": "ranjeet@gmail.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "BR32AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Response

```json
{
  "message": "Captain already exist"
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

|  Code   | Description                                |
| :-----: | :----------------------------------------- |
| **201** | Captain created successfully               |
| **400** | Validation failed / Captain already exists |
| **500** | Internal server error                      |

---

## Login Captain

**Endpoint**

```http
POST /captains/login
```

### Description

Authenticates an existing captain using email and password. If the credentials are valid, the API generates a JWT token, stores it in a cookie, and also returns it in the response.

### Required Data

| Field    |  Type  | Required |
| :------- | :----: | :------: |
| email    | String |    ✅    |
| password | String |    ✅    |

### Request Example

```json
{
  "email": "ranjeet@gmail.com",
  "password": "12345678"
}
```

### Success Response (200)

```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "_id": "...",
    "fullname": {
      "firstname": "Ranjeet",
      "lastname": "Kumar"
    },
    "email": "ranjeet@gmail.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "BR32AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Response (401)

```json
{
  "message": "invalid email or password"
}
```

### Status Codes

| Code | Description               |
| :--: | :------------------------ |
| 200  | Login successful          |
| 400  | Validation failed         |
| 401  | Invalid email or password |
| 500  | Internal server error     |

---

## Captain Profile

**Endpoint**

```http
GET /captains/profile
```

### Description

Returns the authenticated captain's profile. This is a protected route, so a valid JWT token is required. The token is verified before the captain details are returned.

### Required Header

```http
Authorization: Bearer JWT_TOKEN
```

or Cookie

```http
token=JWT_TOKEN
```

### Success Response (200)

```json
{
  "captain": {
    "_id": "...",
    "fullname": {
      "firstname": "Ranjeet",
      "lastname": "Kumar"
    },
    "email": "ranjeet@gmail.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "BR32AB1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": 28.6139,
      "lng": 77.209
    }
  }
}
```

### Status Codes

| Code | Description                  |
| :--: | :--------------------------- |
| 200  | Profile fetched successfully |
| 401  | Unauthorized                 |
| 500  | Internal server error        |

---

## Logout Captain

**Endpoint**

```http
GET /captains/logout
```

### Description

Logs out the authenticated captain by clearing the authentication cookie and adding the current JWT token to the blacklist. After logout, the same token cannot be used to access protected routes.

### Required Header

```http
Authorization: Bearer JWT_TOKEN
```

or Cookie

```http
token=JWT_TOKEN
```

### Success Response (200)

```json
{
  "message": "logout successfully"
}
```

### Status Codes

| Code | Description           |
| :--: | :-------------------- |
| 200  | Logout successful     |
| 401  | Unauthorized          |
| 500  | Internal server error |

---
