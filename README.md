# Twitter Clone 🐦

A Twitter clone built with **Next.js** and **Firebase**. This application allows users to sign up with Google, post tweets, like, and comment on posts, offering core Twitter functionalities.

## Features ✨

- **Google Authentication**: Log in using your Google account with Firebase Authentication.
- **Tweet Creation**: Post, edit, and delete tweets.
- **Likes and Comments**: Like and comment on tweets.
- **Real-Time Updates**: Experience live updates on tweets, likes, and comments.

## Tech Stack 🛠️

- **Next.js** - Server-side rendering and seamless routing.
- **Firebase** - Authentication (Google Sign-In), Firestore (for database), and Storage (for media).
- **Tailwind CSS** - For fast and responsive UI design.

## Getting Started 🚀

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- Firebase Project (configured with Firestore and Google Authentication)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/twitter-clone.git
   cd twitter-clone

2. **Install dependencies:**
    ```bash
    npm install

3. **Set up Firebase:**

- Go to the Firebase Console and create a project.
- Enable Firestore and Authentication (Google Sign-In).
- Go to Project Settings and copy your Firebase config.

4. **Configure environment variables:**

- Create a .env.local file in the root directory.
- Add the following environment variables from your Firebase config :
  ```bash
  NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

5. **Run the development server:**
  ```bash
  npm run dev
  ```







