# File-Based Task Manager App

This is a simple **Task Manager** built using **Node.js**, **Express.js**, and the **File System (fs)** module. It allows you to create, read, and edit tasks directly in a file without using a database.

## 🚀 Features

- ✅ Create Task (with Title and Description)      ![Create Task](https://github.com/lakhanpal70/-Note-File-Renamer-App/blob/ea8fdfe7dbdac36d899dbb78f1c8e34d662198d7/note%20file%20App.jpg)
- 📖 Read Task (View  tasks)                        ![Read Task](https://github.com/lakhanpal70/-Note-File-Renamer-App/blob/ea8fdfe7dbdac36d899dbb78f1c8e34d662198d7/readmore%20.jpg)
- ✏️ Edit Task (Update file name)                   ![Edit Task](https://github.com/lakhanpal70/-Note-File-Renamer-App/blob/ea8fdfe7dbdac36d899dbb78f1c8e34d662198d7/edit%20file%20name%20.jpg)
- 💾 Uses a local `.json` file for storing task data    ![Files storage](https://github.com/lakhanpal70/-Note-File-Renamer-App/blob/ea8fdfe7dbdac36d899dbb78f1c8e34d662198d7/data%20storage%20.jpg)

## 🛠 Tech Stack

- Node.js
- Express.js
- File System (`fs` module)
- EJS (Embedded JavaScript Templates)
- Tailwind CSS (for UI styling)

## 📁 Project Structure
task-app/
├── data/
│ └── tasks.json # Stores tasks as an array of objects
├── views/
│ ├── create.ejs # Form to create a new task
│ ├── read.ejs # Displays all tasks
│ └── edit.ejs # Form to edit a task
├── public/
│ └── stylesheets/
│ └── style.css # Custom styles (optional)
├── app.js # Main server file
└── README.md # Project documentation



🧑‍💻 How to Use
1. Clone the repository

git clone https://github.com/your-username/task-app.git
cd task-app
2. Install dependencies

npm install
3. Run the server

node app.js
4. Open in your browser
arduino

http://localhost:3000
📌 Notes
All tasks are saved in the data/tasks.json file.

There is no database required. All operations (create, read, edit) are done using the local file system.

📃 License
This project is licensed under the MIT License.

Made with 🧠 by [Lakhan Pal]

i deploy on the render.com the link is https://note-file-renamer-app.onrender.com/

Would you like sample routes (`create`, `read`, `edit`) or sample JSON to go with this too?


## 📦 Task Object Structure


```json
{
  "id": "unique-task-id",
  "title": "Sample Task Title",
  "description": "Details about the task"
}




