# 🧠 AI Real-Time ChatBot (Powered by OpenAI)

🚀 A modern AI chatbot that provides real-time responses using OpenAI's API. This chatbot stores user conversations in a database while allowing users to delete their chat history anytime. The UI supports **code block rendering** for developer-related queries.

---

## 🌟 Features
- **Real-Time AI Responses** using OpenAI's API.
- **Chat Storage**: Saves conversations in MongoDB.
- **Chat Deletion**: Users can delete chat history anytime.
- **Code Blocks Support**: Renders markdown and code snippets.
- **User Authentication**: Secure login via JWT/Auth0.
- **Dark Mode UI**: Toggle between light and dark mode.
- **Streaming Responses**: Uses WebSockets for instant replies.

---

## 🛠 Tech Stack

### **Frontend:**
- React (Next.js/Vite)
- Tailwind CSS for styling
- Markdown & Syntax Highlighting (react-markdown, prismjs)

### **Backend:**
- Node.js & Express.js
- OpenAI API Integration
- WebSockets (Socket.io)

### **Database:**
- MongoDB (MongoDB Atlas for cloud storage)

### **Deployment:**
- **Frontend:** Vercel
- **Backend:** Render/Heroku
- **Database:** MongoDB Atlas

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/birat04/AI-ChatBot.git
cd AI-ChatBot
```

### 2️⃣ Install Dependencies
#### **Backend**
```bash
cd server
npm install
```
#### **Frontend**
```bash
cd client
npm install
```

### 3️⃣ Setup Environment Variables
Create a **.env** file in the backend directory and add:
```env
OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Application
#### **Backend**
```bash
cd server
npm start
```
#### **Frontend**
```bash
cd client
npm run dev
```

---

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|------------|-------------|
| POST | `/chat` | Sends user input and gets AI response |
| GET | `/history` | Fetches user chat history |
| DELETE | `/history/:id` | Deletes a specific chat |

---

## 🖥️ UI Preview
![ChatBot Preview](https://your-image-url.com)

---

## 🤝 Contributing
1. Fork the repository 🍴
2. Create a new branch 🔀 (`git checkout -b feature-name`)
3. Make your changes and commit (`git commit -m 'Added feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Submit a Pull Request! 🚀

---

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Let's build an amazing AI chatbot together!** 🎉

