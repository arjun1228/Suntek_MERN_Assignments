# Week 2 - JavaScript Advanced Concepts & Projects

This directory contains advanced JavaScript assignments, projects, and notes focusing on array methods, immutability, ES6 modules, and data processing.

## 📂 Directory Structure

### 1. Master_Project_Collection
This project simulates the data engine of an online learning platform (like Udemy or Coursera). It demonstrates how to handle and process complex data structures using modern JavaScript array methods (`filter`, `map`, `find`, `reduce`) while maintaining immutability.

**Key Modules:**
* **User Processing Engine:** Filtering active users, extracting user data, and immutably updating user status.
* **Course Catalog Engine:** Filtering published courses, sorting by price, and calculating total catalog value.
* **Shopping Cart Engine:** Merging cart items with course details, calculating total cart value, and immutably managing quantities.
* **Role & Permission Engine:** Managing role-based access, checking permissions, and adding new roles immutably using the spread operator and `Set`.

### 2. TodoApp
A task management application built to practice ES6 module syntax (`import`/`export`) and logical structure separation.

**Features:**
* **`task.js`**: Core task logic containing functions to add, complete, and fetch tasks.
* **`app.js`**: Main entry point importing task modules to execute operations like adding tasks with priorities and deadlines, and marking them as complete.
* **`validator.js`**: Utilities for validating task input data.
* Also includes Date processing and Library Book Management scripts.

### 3. Notes
A collection of small scripts and notes covering advanced JavaScript topics:
* **`chaining.js`**: Demonstrates the use of Optional Chaining (`?.`) and Nullish Coalescing (`??`) operators to safely access nested object properties.
* **`copies.js` / `shallowDeep-Copy.js`**: Explores the differences between shallow and deep copying of objects.
* **`date.js` / `date_operations.js`**: Working with JavaScript `Date` objects.
* **Module Examples**: Basic examples of module exports and imports (`module1.js`, `module2.js`).
