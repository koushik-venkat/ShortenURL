# URL Shortener Service

A URL shortening service built with Node.js, Express, and MongoDB that allows users to create short URLs and track their usage analytics.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Analytics Tracking**: Monitor click counts and visit history for each shortened URL
- **MongoDB Integration**: Persistent storage with MongoDB database
- **RESTful API**: Clean and intuitive API endpoints
- **Visit History**: Track timestamps of each visit to shortened URLs
- **Automatic Redirects**: Seamless redirection from short URLs to original URLs

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **URL Generation**: ShortID library for unique short URL generation
- **Development**: Nodemon for auto-restart during development

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or cloud instance)
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ShortenURL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   - Ensure MongoDB is running on your system
   - The application connects to `mongodb://127.0.0.1:27017/url-shortener` by default
   - You can modify the connection string in `index.js` if needed

4. **Start the application**
   ```bash
   npm start
   ```

   The server will start running on `http://localhost:8000`

## 📁 Project Structure

```
ShortenURL/
├── controller/
│   └── url.js          # Business logic for URL operations
├── model/
│   └── url.js          # MongoDB schema and model
├── routes/
│   └── url.js          # API route definitions
├── DBConnect.js        # MongoDB connection utility
├── index.js            # Main application entry point
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## 🔌 API Endpoints

### 1. Create Short URL
- **POST** `/url`
- **Body**: `{ "url": "https://example.com/very-long-url" }`
- **Response**: `{ "id": "generated-short-id" }`

### 2. Redirect to Original URL
- **GET** `/:shortId`
- **Response**: Redirects to the original URL and tracks the visit

### 3. Get URL Analytics
- **GET** `/url/analytics/:id`
- **Response**: `{ "views": 5, "analytics": [visit-history-array] }`

### 4. Get All URLs
- **GET** `/url/all`
- **Response**: `{ "urls": [array-of-all-urls] }`

## 💾 Database Schema

The URL model includes:
- `shortId`: Unique identifier for the shortened URL
- `redirectURL`: The original long URL
- `visitHistory`: Array of visit timestamps
- `timestamps`: Automatic creation and update timestamps

## 🔄 How It Works

1. **URL Shortening**: When a POST request is made to `/url`, the service:
   - Generates a unique short ID using the ShortID library
   - Stores the original URL and short ID in MongoDB
   - Returns the generated short ID

2. **URL Redirection**: When someone visits a short URL:
   - The service looks up the short ID in the database
   - Records the visit timestamp
   - Redirects the user to the original URL

3. **Analytics**: The service tracks:
   - Total number of visits for each shortened URL
   - Timestamp of each visit
   - Complete visit history

## 🔮 Future Enhancements

Potential improvements for this project:
- User authentication and authorization
- Custom short URL aliases
- URL expiration dates
- Click tracking with IP addresses
- Rate limiting
- API key management
- Frontend web interface
- Bulk URL shortening
- URL validation and sanitization
