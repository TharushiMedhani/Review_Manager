# Product Review Manager Lab Test – 2 Hour Practical

## Lab Test Overview
You are provided with a starter MERN Product Review Manager project containing separate frontend and backend applications.

The starter project already has:
- Backend server setup
- MongoDB connection setup
- GET and POST APIs
- Frontend form
- Frontend list display

Your task is to extend the system by adding a new field called **Rating**.

## Tasks

### Task 01 – Project setup and local verification
Backend:
```bash
cd backend
npm install
npm run dev
```

Create `.env` file in backend:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Open:
```text
http://localhost:5173
```

Verify:
- App loads
- Add Review works
- View Reviews works

### Task 02 – Functional enhancement
Add a new field named **Rating**.

Requirements:
- Add Rating field to the Add Review form
- Update frontend state
- Send Rating to backend
- Update backend model
- Update POST route/API flow
- Display Rating in the review list
- Make sure add and view work correctly

### Task 03 – GitHub publication
- Create a public GitHub repository
- Push the full project

### Task 04 – Deployment
- Deploy backend to Railway / Render
- Deploy frontend to Vercel / Netlify
- Update frontend backend URL
- Verify live system works

### Submission document
Include:
- Student Name
- Student ID
- GitHub Repository Link
- Screenshot of existing Add Review page
- Screenshot of existing Home/List page
- Screenshot of updated Add Review page
- Screenshot of updated Home/List page
- Frontend Live URL
- Backend Live URL
- Deployment notes
