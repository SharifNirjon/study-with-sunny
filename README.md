# 📚 Study With Sunny

A comprehensive online learning platform designed for O-Level, IGCSE, AS-Level, and A2-Level students. This platform offers course subscriptions, educational resources, and an e-commerce store for study materials.

![Study With Sunny](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![MongoDB](https://img.shields.io/badge/database-MongoDB-green.svg)

## 🌟 Features

### For Students
- 📖 **Course Subscriptions** - Access premium courses across multiple education levels
- 📝 **Resource Library** - Notes, videos, past papers, quizzes, and study links
- 🛒 **E-Commerce Store** - Purchase stationery, books, and merchandise
- 👤 **User Profiles** - Personalized learning experience with progress tracking
- 💳 **Secure Payments** - Integrated payment gateway for courses and products

### For Administrators
- 📊 **Course Management** - Create and manage courses for different levels
- 📁 **Resource Management** - Upload and organize educational materials
- 🛍️ **Product Management** - Manage store inventory and orders
- 👥 **User Management** - Monitor user subscriptions and activities

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Frontend
- **React.js** - UI library
- **HTML5/CSS3** - Markup and styling
- **JavaScript (ES6+)** - Programming language

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/SharifNirjon/study-with-sunny.git
cd study-with-sunny
```

### 2. Backend Setup
```bash
cd backened
npm install
```

### 3. Environment Variables
Create a `.env` file in the `backened` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/study-with-sunny

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

# Payment Gateway (if applicable)
PAYMENT_API_KEY=your_payment_api_key
PAYMENT_SECRET=your_payment_secret

# Email Service (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# File Upload
MAX_FILE_SIZE=5000000
FILE_UPLOAD_PATH=./uploads
```

### 4. Frontend Setup
```bash
cd ../frontend
npm install
```

### 5. Start the Application

**Start Backend Server:**
```bash
cd backened
npm start
# or for development with nodemon
npm run dev
```

**Start Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 📁 Project Structure

```
study-with-sunny/
├── backened/
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Mongoose models
│   │   ├── user.model.js
│   │   ├── course.model.js
│   │   ├── resource.model.js
│   │   ├── product.model.js
│   │   ├── order.model.js
│   │   └── subscription.model.js
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   ├── utils/       # Helper functions
│   │   └── App.js       # Main component
│   └── package.json
├── uploads/             # File upload directory
└── README.md
```

## 🗄️ Database Schema

### User
- User authentication and profile management
- Support for students, instructors, and admins
- Level-based subject interests

### Course
- Multi-level course offerings (O-Level, IGCSE, AS-Level, A2-Level)
- Pricing and scheduling
- Course status management

### Resource
- Educational materials (notes, videos, past papers, quizzes)
- Free and premium content
- Subject and level categorization

### Product
- E-commerce inventory
- Categories: Stationery, Books, Merchandise
- Stock management

### Order
- Shopping cart and order processing
- Payment tracking
- Shipping address management

### Subscription
- Course enrollment management
- Payment status tracking
- Subscription lifecycle (pending, active, completed, cancelled, expired)

## 🔐 API Endpoints

### Authentication
```
POST   /api/auth/register     - Register new user
POST   /api/auth/login        - Login user
GET    /api/auth/me           - Get current user
PUT    /api/auth/updateprofile - Update user profile
```

### Courses
```
GET    /api/courses           - Get all courses
GET    /api/courses/:id       - Get course by ID
POST   /api/courses           - Create course (Admin)
PUT    /api/courses/:id       - Update course (Admin)
DELETE /api/courses/:id       - Delete course (Admin)
```

### Resources
```
GET    /api/resources         - Get all resources
GET    /api/resources/:id     - Get resource by ID
POST   /api/resources         - Upload resource (Admin)
DELETE /api/resources/:id     - Delete resource (Admin)
```

### Products
```
GET    /api/products          - Get all products
GET    /api/products/:id      - Get product by ID
POST   /api/products          - Create product (Admin)
PUT    /api/products/:id      - Update product (Admin)
DELETE /api/products/:id      - Delete product (Admin)
```

### Subscriptions
```
GET    /api/subscriptions/my-subscriptions - Get user's subscriptions
POST   /api/subscriptions     - Create subscription
GET    /api/subscriptions/:id - Get subscription by ID
PATCH  /api/subscriptions/:id/cancel - Cancel subscription
```

### Orders
```
GET    /api/orders/my-orders  - Get user's orders
POST   /api/orders            - Create order
GET    /api/orders/:id        - Get order by ID
PUT    /api/orders/:id/status - Update order status (Admin)
```

## 👥 User Roles

### Student (Default)
- Enroll in courses
- Access subscribed resources
- Purchase products
- Manage profile

### Instructor
- Create and manage own courses
- Upload resources
- Track student progress

### Admin
- Full system access
- Manage all users, courses, resources, and products
- View analytics and reports

## 🧪 Testing

```bash
# Run backend tests
cd backened
npm test

# Run frontend tests
cd frontend
npm test
```

## 🚀 Deployment

### Backend Deployment (Heroku Example)
```bash
heroku create study-with-sunny-api
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
git push heroku main
```

### Frontend Deployment (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the build folder to your hosting service
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sharif Nirjon**
- GitHub: [@SharifNirjon](https://github.com/SharifNirjon)
- Repository: [study-with-sunny](https://github.com/SharifNirjon/study-with-sunny)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Inspired by the need for quality online education for O-Level, IGCSE, and A-Level students
- Built with ❤️ for students worldwide

## 📧 Support

For support, email sharifnirjon@example.com or open an issue in the GitHub repository.

## 🔮 Future Enhancements

- [ ] Live video classes
- [ ] Interactive quizzes with instant feedback
- [ ] Progress tracking dashboard
- [ ] Mobile application
- [ ] AI-powered study recommendations
- [ ] Community forum
- [ ] Certificate generation
- [ ] Multi-language support

---

**Happy Learning! 📚✨**
