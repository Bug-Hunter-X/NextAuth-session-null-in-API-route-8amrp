# NextAuth Session Null in API Route

This repository demonstrates a common issue encountered when using NextAuth.js with API routes: the session object consistently returns null, even when a user is logged in. This is often caused by improper configuration or missing middleware.

## Bug
The `bug.js` file contains an API route that attempts to access the session using `unstable_getServerSession`. Despite successful login, the session remains null.

## Solution
The `bugSolution.js` file presents the correct implementation, showing how to correctly use `unstable_getServerSession` and ensures that the session object is properly available within the API route.

## Setup
1.  Clone this repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`
4.  Test the API route: (replace with your correct API endpoint)
    - `http://localhost:3000/api/your-api-route`

## Key improvements in the solution:
- Correct usage of `unstable_getServerSession`:
- Ensures that the necessary context is passed to `unstable_getServerSession`.
- Includes error handling to gracefully manage cases where the session is not available.