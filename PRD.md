# Product Requirement Document (PRD)

# 1. Project Information

**Project Name:** Personal Developer Portfolio Website
**Prepared By:** Saurabh Singh
**Email:** [issr69280@gmail.com](mailto:issr69280@gmail.com)
**Phone:** 6388629570
**Location:** Lucknow, India
**Date:** March 2026

---

# 2. Introduction

This document describes the requirements for developing a **Personal Portfolio Website** for Saurabh Singh.

The purpose of this website is to showcase:

* Professional profile
* Technical skills
* Projects
* Education
* Contact details

The website will help recruiters, companies, and clients understand the developer’s abilities and contact him for opportunities.

---

# 3. Project Objective

The main objectives of the portfolio website are:

* Create a strong **personal developer brand**
* Showcase technical skills
* Display completed projects
* Provide an easy way for recruiters to contact
* Demonstrate full-stack development capability

---

# 4. Target Audience

The portfolio website is designed for:

* IT recruiters
* Startup founders
* Hiring managers
* Freelance clients
* Software companies

---

# 5. Technology Stack

## Frontend

* HTML
* CSS
* JavaScript
* React.js

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## Tools

* GitHub
* VS Code
* Antigravity
* Postman

---

# 6. System Architecture

Frontend → React Application
Backend → Node.js + Express API
Database → MongoDB

Data Flow:

User Browser
↓
React Frontend
↓
Node.js Backend API
↓
MongoDB Database

---

# 7. Website Structure

The portfolio website will contain the following sections:

1. Home
2. About
3. Skills
4. Projects
5. Resume
6. Contact
7. Footer

---

# 8. Functional Requirements

## 8.1 Home Section

The Home page should display:

* Developer name: **Saurabh Singh**
* Professional headline
* Short introduction
* Profile photo
* Navigation menu
* Buttons:

  * View Projects
  * Contact Me

Example headline:

"Python Developer | Data Analyst | Full Stack Web Developer"

---

# 8.2 About Section

This section will introduce the developer.

Content includes:

* Educational background
* Career objective
* Professional summary

Example:

Saurabh Singh is a B.Tech graduate from BBD University, Lucknow with experience in data analysis and web development.

---

# 8.3 Skills Section

This section will display technical skills.

### Programming

* Python
* SQL
* JavaScript
* PHP

### Data Analysis

* Pandas
* NumPy
* Matplotlib
* Excel
* Tableau

### Web Development

* HTML
* CSS
* React
* Node.js

### Database

* MongoDB

### Tools

* GitHub
* VS Code
* Antigravity

### AI

* Prompt Engineering

---

# 8.4 Projects Section

Projects will be displayed as **cards** with:

* Project title
* Description
* Technologies used
* GitHub link
* Live demo link (optional)

### Project 1

**Emotion Recognition System**

Description:
A machine learning project that detects human emotions using facial expressions.

Technologies: Python, Machine Learning

---

### Project 2

**Diwali Sales Analysis**

Description:
Exploratory Data Analysis performed on Diwali sales dataset to understand customer purchasing behaviour.

Technologies: Python, Pandas, NumPy, Matplotlib

---

### Project 3

**Gym Website Clone**

Description:
A responsive website developed for a gym client to display services, membership plans, and contact details.

Technologies: HTML, CSS, JavaScript

---

# 8.5 Resume Section

This section will allow users to:

* View resume
* Download resume in PDF format

---

# 8.6 Contact Section

This section will include:

Contact Details

Email: [issr69280@gmail.com](mailto:issr69280@gmail.com)
Phone: 6388629570

Contact Form Fields:

* Name
* Email
* Message
* Submit Button

The form data will be stored in **MongoDB database** through the **Node.js backend API**.

---

# 9. Backend Functional Requirements

Node.js backend will provide APIs:

### API 1 – Contact Form

POST /api/contact

Stores user message in MongoDB.

Fields:

* name
* email
* message
* date

---

### API 2 – Project Data

GET /api/projects

Fetch project information for the frontend.

---

# 10. Database Design

MongoDB Collections

### Collection: contacts

Fields:

* name
* email
* message
* date

---

### Collection: projects

Fields:

* title
* description
* technologies
* github_link
* demo_link

---

# 11. Non-Functional Requirements

The website must be:

* Mobile responsive
* Fast loading
* SEO optimized
* Secure API
* User friendly
* Clean UI

---

# 12. Future Enhancements

Possible future features:

* Blog section
* Dark mode
* Project filtering
* GitHub API integration
* Admin dashboard to update projects

---

# 13. Success Metrics

The website will be considered successful if:

* Recruiters can easily view projects
* Contact messages are received successfully
* Portfolio loads quickly
* Mobile responsiveness works properly

---

# 14. Conclusion

The Personal Portfolio Website will showcase **Saurabh Singh's skills, projects, and experience** in a professional way. It will also demonstrate full-stack development capability using **React, Node.js, and MongoDB**, making it valuable for recruiters and clients.

---
