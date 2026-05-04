# Task Counter App

Simple full-stack app built for a technical task.

The app has one backend endpoint that returns the number of tasks for a given user and status, and a small UI to trigger the request and display the result.

---

## Tech stack

Backend:
- Node.js (Express)
- TypeScript
- Jest

Frontend:
- React
- TypeScript
- Vite
- Vitest

---

## API

GET `/api/tasks/count?userId=1&status=done`

Returns:

{
  "userId": 1,
  "status": "done",
  "count": 2
}

---

## How to run

Backend:

cd backend  
npm install  
npm run dev  

Frontend:

cd frontend  
npm install  
npm run dev  

---

## Tests

Backend:

cd backend
npm run test

Frontend:

cd frontend
npm run test

---

## Notes

- Used in-memory data for simplicity (as allowed in the task)
- Added basic validation and error handling
- Implemented one happy-path test and one error case

---

## What I would improve

- improve project structure by separating routes, controllers, and services
- replace in-memory data with a real database (e.g. PostgreSQL)
- add indexing for fields used in filtering (userId, status) to improve performance
- introduce structured validation (e.g. Zod or Joi)
- add middleware for validation, logging, and centralized error handling
- improve test coverage (edge cases, integration tests)
- add pagination and possibly caching for larger datasets
- prepare the app for scaling (stateless services, horizontal scaling)
- containerize the app (Docker) and add CI/CD pipeline