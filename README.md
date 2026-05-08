# Project ID : BCS -851
# Prakriti Chatbot  🌿
Group Id- PCS26-42


This AI-based chatbot (AyurBuddy) determines a user's Ayurvedic Prakriti (Vata, Pitta, Kapha) using a set of questions. It provides personalized health tips based on Ayurvedic principles.

## Features
- Prakriti detection
- Personalized recommendations
- Admin panel for data control

## Tech Stack
- Windows
- Python
- HTML5
- NodeJS
- JavaScript
- CSS
- React
- Tailwind
- SQLite
- TensorFlow
- FastAPI
- VSCode
- Pandas
- Numpy

## Usage
1. Clone the repo
2. Run the server
3. Chat to discover your Prakriti!

## About
An AI-powered Ayurvedic chatbot that predicts the user's Prakriti (Vata, Pitta, or Kapha) using the Naive Bayes algorithm. It offers personalized health, diet, and lifestyle recommendations based on user input.

## 🧠 ChatBot Installation & Setup Guide

### 🔧 Prerequisites
- **Python ≥ 3.10**  
- **Node.js** (for frontend)  
- **GTK Runtime** (required for `weasyprint` PDF generation) → [Download for Windows](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer)

---

### 🐍 Backend Setup

```bash
# Navigate to bot folder
cd bot

# Create Models folder
mkdir Models

# Create and activate virtual environment
pip install virtualenv
virtualenv project
# Windows
project\Scripts\activate
# Ubuntu
source project/bin/activate

# Install dependencies
pip install tensorflow pandas nltk scikit-learn sqlalchemy fastapi uvicorn websockets weasyprint
```

#### 🧩 Train Models
```bash
# Chatbot model
python Training/botmodel.py

# Prakriti model
python Training/prakritimodel.py
```

#### 🚀 Run API
```bash
python app.py
```
Server runs at → `http://127.0.0.1:8000`

---

### 🖼️ Frontend Setup

```bash
cd frontend
npm i
```

Edit `.env` in the frontend folder:
```
VITE_API=ws://127.0.0.1:8000
```

Run the frontend:
```bash
npm run dev
```

---

🎉 **Project Setup Complete!**  
Backend and frontend are now running successfully.  


