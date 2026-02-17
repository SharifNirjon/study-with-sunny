# Implementation Plan: Database & Models

This plan outlines the steps to implement the MongoDB schema and integrate it into the existing Node.js/Express backend.

## Phase 1: Setup & Configuration

1.  **Install Mongoose**
    *   Command: `cd backened && npm install mongoose`
    *   Purpose: Object Data Modeling (ODM) library for MongoDB.

2.  **Configure Database Connection**
    *   File: `backened/config/db.js`
    *   Action: Create a function `connectDB` that connects to `process.env.DB_URI`.
    *   Update: `backened/server.js` to call `connectDB()` before starting the server.
    *   Update: `backened/.env` (and `.env.development.local` / `.env.production.local` if applicable) to include `DB_URI`.

## Phase 2: Create Mongoose Models

Create a new directory `backened/models/` and add the following files based on `plans/schema.md`:

1.  **User Model**
    *   File: `backened/models/user.model.js`
    *   Schema: `name`, `email` (unique), `password`, `role` (student/admin), `level`, `interestedSubjects`.

2.  **Course Model**
    *   File: `backened/models/course.model.js`
    *   Schema: `title`, `description`, `level`, `subject`, `price`, `startDate`, `endDate`, `status`.

3.  **Subscription Model**
    *   File: `backened/models/subscription.model.js`
    *   Schema: `user` (ref), `course` (ref), `status` (active/expired), `startDate`, `expiryDate`.

4.  **Resource Model**
    *   File: `backened/models/resource.model.js`
    *   Schema: `title`, `type` (note/video), `fileUrl`, `level`, `subject`, `isFree`.

## Phase 3: Route Integration (Preparation)

*   **Note:** This phase involves updating existing controllers/routes to use the new models instead of mock data.

1.  **Auth Routes** (`backened/routes/auth.routes.js`)
    *   Update `sign-up` to create a new `User` document.
    *   Update `sign-in` to find `User` and verify password (hashing recommended).

2.  **Subscription Routes** (`routes/subscription.routes.js` -> likely needs moving to `backened/routes/`)
    *   *Correction:* It seems there is a `routes/` folder in the root and `backened/routes/`. We should consolidate to `backened/routes/` for the backend logic.
    *   Create/Update `backened/routes/subscription.routes.js` to fetch subscriptions from the DB.

## Phase 4: Data Seeding (Optional but Recommended)

1.  **Seed Script**
    *   File: `backened/seed.js`
    *   Action: Script to populate the DB with initial courses (O-Level Math, Physics) and some sample resources.

## Next Steps for Developer

1.  Switch to **Code Mode**.
2.  Execute Phase 1 (Install & Config).
3.  Execute Phase 2 (Create Models).
