# Library Management System API

This document provides the Swagger/OpenAPI documentation for the Library Management System API.

## API Specification

### Overview
- **API Version**: 1.0
- **Base URL**: `https://api.example.com/v1`

### Paths

#### GET /books
- **Description**: Retrieve a list of books in the library.
- **Responses**:
  - **200**: A list of books.
  - **500**: Internal server error.

#### POST /books
- **Description**: Add a new book to the library.
- **Request Body**:
  - **Content-Type**: application/json
  - **Schema**:
    ```json
    {
      "title": "string",
      "author": "string",
      "publishedYear": "integer"
    }
    ```
- **Responses**:
  - **201**: Book created successfully.
  - **400**: Bad Request.

#### GET /books/{id}
- **Description**: Retrieve a specific book by ID.
- **Parameters**:
  - **id** (path): ID of the book to retrieve.
- **Responses**:
  - **200**: Book details.
  - **404**: Book not found.

#### PUT /books/{id}
- **Description**: Update a specific book by ID.
- **Request Body**:
  - **Content-Type**: application/json
  - **Schema**:
    ```json
    {
      "title": "string",
      "author": "string",
      "publishedYear": "integer"
    }
    ```
- **Responses**:
  - **200**: Book updated successfully.
  - **404**: Book not found.

#### DELETE /books/{id}
- **Description**: Delete a specific book by ID.
- **Responses**:
  - **204**: Book deleted successfully.
  - **404**: Book not found.

## Authentication
This API uses Bearer Token authentication. Use the following header:
- **Authorization**: Bearer {token}

## Contact
For any questions, please contact support@example.com
