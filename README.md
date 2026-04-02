# Library Management System

## Submission Requirements

- GitHub repository
- README file with:
  - Setup steps
  - API documentation (Postman or Swagger)
- Well-structured code (MVC pattern)

## Submit Assignment Here
[https://forms.gle/J3wqYC7rSSuTnfnc8](https://forms.gle/J3wqYC7rSSuTnfnc8)

**Date:** Saturday 4TH April

## Setup Steps

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/somidotun/library-management-system.git
cd library-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the application:
```bash
npm start
```

## API Documentation

This project includes API documentation. You can access it using:
- **Postman:** Import the collection from `./postman-collection.json`
- **Swagger:** API documentation available at `http://localhost:3000/api-docs` (when server is running)

## Project Structure

```
library-management-system/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.ts
├── tests/
├── .env.example
├── package.json
└── README.md
```

## Technologies Used

- **Language:** TypeScript
- **Framework:** (Node.js/Express or your chosen framework)
- **Pattern:** MVC (Model-View-Controller)

## License

This project is licensed under the MIT License.