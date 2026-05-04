# 🚆 Rail DSS - Railway Station Controller Dashboard

![Rail DSS Banner](https://img.shields.io/badge/Rail%20DSS-Railway%20Dashboard-003366?style=for-the-badge&logo=train)
![Django](https://img.shields.io/badge/Backend-Django-092E20?style=for-the-badge&logo=django)
![React](https://img.shields.io/badge/Frontend-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**Rail DSS** is a comprehensive, production-ready dashboard designed specifically for Railway Station Controllers. It provides a real-time overview of station operations, empowering controllers to make rapid, informed decisions regarding platform allocations, delays, and emergencies.

---

## 🌟 Key Features

* **Live Train Monitoring:** Real-time tracking of incoming and outgoing trains, complete with status updates and delay predictions.
* **AI-Powered Platform Allocation:** Intelligent suggestions for platform assignments to optimize station flow and minimize conflicts.
* **Manual Overrides:** Full control for station masters to override AI suggestions when necessary.
* **Alerts & Notifications:** Instant alerts for delays, platform changes, and critical incidents.
* **Impact Metrics & Analytics:** Visualizations of station performance, delay impacts, and resource utilization.
* **Modern Interface:** A sleek, responsive dark-mode UI customized with a professional blue/white railway aesthetic.

---

## 🛠️ Tech Stack

### Backend
* **Framework:** Django (Python)
* **Database:** SQLite (default)
* **Features:** RESTful APIs, data management, AI allocation logic, real-time simulation

### Frontend
* **Framework:** React 18 (Vite)
* **Routing:** React Router v6
* **Data Fetching:** Axios
* **Data Visualization:** Recharts, Leaflet
* **Styling:** Custom CSS (Dark mode optimized)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

* [Python 3.8+](https://www.python.org/downloads/)
* [Node.js 18+](https://nodejs.org/)
* Git

### 1. Clone the repository

```bash
git clone https://github.com/Gauravsingh0714/Rail-DSS.git
cd Rail-DSS
```

### 2. Backend Setup (Django)

Open a terminal in the project root and run:

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv env

# Activate the virtual environment
# On Windows:
env\Scripts\activate
# On macOS/Linux:
source env/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver
```
*The backend will run on `http://127.0.0.1:8000/`*

### 3. Frontend Setup (React)

Open a **new** terminal in the project root and run:

```bash
# Navigate to the frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Create a .env file based on the example (if applicable)
# Add your specific API keys or backend URLs to frontend/.env

# Start the React development server
npm run dev
```
*The frontend will run on `http://localhost:5173/` (or the port specified by Vite)*

---

## 📁 Project Structure

```text
Rail-DSS/
├── backend/               # Django REST API
│   ├── api/               # API endpoints, views, and models
│   ├── core/              # Django project settings
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
├── frontend/              # React (Vite) Frontend
│   ├── public/            # Static assets
│   ├── src/               # React components, pages, and services
│   ├── package.json       # Node dependencies
│   └── vite.config.js     # Vite configuration
├── Documentations/        # Presentations, reports, and demo videos
├── .gitignore             # Root git ignore rules
└── README.md              # Project documentation
```

---

## 🔒 Security Note

This repository is configured to keep your API keys and local environment variables secure.
* The `.env` files in both the frontend and backend are deliberately ignored by `.gitignore`. 
* Do **not** commit any sensitive information (API keys, database passwords, secret keys) directly into the source code.

---

## 👥 Meet the Team

This project was collaboratively built by:

* **[Gaurav Singh](https://github.com/Gauravsingh0714)** 
* **[Abhinav Sahoo](https://github.com/Abhinav-Sahoo-04)** 

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Gauravsingh0714/Rail-DSS/issues) if you want to contribute.

---

Built with ❤️ 
