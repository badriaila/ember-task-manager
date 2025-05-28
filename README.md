📝 Task Manager App (Built with Ember.js)

This project is part of my Ember.js learning journey. Built with attention to reusability, routing, and frontend logic using modern Ember practices.

This is a simple Task Manager web application built using Ember.js. It allows users to:

Log in (planned)

View all tasks

View individual task details

Create a new task

Edit an existing task

Delete a task

View the history of changes (coming soon)

🚀 Getting Started

1. Install Ember CLI

npm install -g ember-cli

2. Create the Project

ember new task-manager
cd task-manager

3. Add Ember Mirage for Mock API

ember install ember-cli-mirage

Mirage is used to simulate API calls during development.

📁 Project Structure Overview

app/templates/ – contains route-based templates

app/components/ – reusable UI components

app/routes/ – route logic and data fetching

app/controllers/ – stores local state for forms

mirage/ – fake backend using Mirage

scenarios/ – seed data for development

serializers/ – control how Mirage returns data

✅ Features Completed

1. Routing & Templates

/tasks – view task list

/tasks/:id – view task detail

/tasks/new – create a new task

/tasks/:id/edit – edit a task

2. Reusable Form Component

<TaskForm /> used for both Create and Edit task

Takes title, description, status as arguments

Emits onSubmit, onTitleChange, etc.

3. Mock Backend (Mirage)

GET /api/tasks – get all tasks

GET /api/tasks/:id – get task detail

POST /api/tasks – create new task

PATCH /api/tasks/:id – update task

DELETE /api/tasks/:id – delete task

4. TaskCard Component

Displays individual task nicely in list

🧠 Key Learnings

Difference between routes, templates, and components in Ember

How to reuse form code via components

How query params and refreshModel can re-trigger model hooks

How Mirage helps simulate a real backend

How to handle navigation using @service router

🔜 Next Steps (Planned)

🧩 1. Track Task Change History

Log and display changes (old vs new values)

Show history per task below task detail

👤 2. Add Login Functionality

Use session or token simulation

Only show tasks for logged-in users

🛡️ 3. Add Validation & Error Handling

Prevent empty fields

Show loading & error messages

💾 4. Replace Mirage with Real API

Use Express/FastAPI backend later

🎨 5. Add CSS Styling

Use global CSS for layout and colors

Add responsive styles for mobile


