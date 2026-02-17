# Database Schema Design for StudyWithSunny

Based on the project requirements and analysis of the frontend (enrollment forms, resource pages) and backend routes, here is the proposed MongoDB schema design using Mongoose.

## 1. User Schema (`User`)
Handles authentication and user profile information.

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    minLength: 6,
  },
  role: {
      type: String,
      enum: ['student', 'admin', 'instructor'],
      default: 'student'
  },
  phone: { 
      type: String, 
      required: false // Optional for basic sign-up, but likely needed for enrollment
  },
  address: {
      street: String,
      city: String,
      country: String,
      zipCode: String
  },
  // Educational Context
  level: {
      type: String,
      enum: ['O-Level', 'IGCSE', 'AS-Level', 'A2-Level', 'Other'],
  },
  interestedSubjects: [{
      type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });
```

## 2. Course Schema (`Course`)
Represents the educational products (Crash Courses, Subjects) available for enrollment.

```javascript
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
      type: String,
      unique: true,
      lowercase: true
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['O-Level', 'IGCSE', 'AS-Level', 'A2-Level'],
    required: true,
  },
  subject: {
      type: String,
      required: true // e.g., 'Mathematics', 'Physics'
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
      type: String,
      default: 'BDT' // or USD based on requirement
  },
  startDate: Date,
  endDate: Date,
  status: {
      type: String,
      enum: ['active', 'upcoming', 'archived'],
      default: 'active'
  },
  features: [String], // e.g., "Live Classes", "Notes Included"
  thumbnailUrl: String,
}, { timestamps: true });
```

## 3. Enrollment/Subscription Schema (`Subscription`)
Links a User to a Course. This handles the business logic of who has access to what.

```javascript
const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled', 'expired'],
    default: 'pending',
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
      type: Date,
      required: true // Calculated based on course duration
  },
  paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending'
  },
  transactionId: String, // To link with payment gateway if integrated later
  amountPaid: Number,
}, { timestamps: true });
```

## 4. Resource Schema (`Resource`)
Manages the files (PDFs, Notes) seen on the `resources.html` page.

```javascript
const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['note', 'video', 'past_paper', 'quiz', 'link'],
    required: true,
  },
  level: {
    type: String,
    enum: ['O-Level', 'IGCSE', 'AS-Level', 'A2-Level'],
    required: true,
  },
  subject: {
      type: String,
      required: true
  },
  fileUrl: {
      type: String, // URL to S3, Cloudinary, or local static file
      required: true
  },
  isFree: {
      type: Boolean,
      default: false
  },
  course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course', // Optional: if a resource belongs to a specific course
  },
  description: String,
}, { timestamps: true });
```

## Implementation Plan

1.  **Install Dependencies**: `npm install mongoose` in `backened/`.
2.  **Database Connection**: Create `backened/config/db.js` to handle MongoDB connection.
3.  **Create Models**: Create a `models/` directory in `backened/` and add `user.model.js`, `course.model.js`, `subscription.model.js`, and `resource.model.js`.
4.  **Update Routes**: Refactor `auth.routes.js`, `subscription.routes.js` to use these real models instead of placeholder responses.
