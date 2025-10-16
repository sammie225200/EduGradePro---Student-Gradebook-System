# 🎓 EduGrade Pro - Student Gradebook System

## 📋 Project Overview

EduGrade Pro is a comprehensive web-based gradebook system designed for educational institutions. The system provides two distinct dashboards:

- Teacher Dashboard - Manage students, classes, and grades with full CRUD operations
- Student Dashboard- View courses, grades, and academic progress

Built With: HTML, CSS, JavaScript (localStorage for data persistence)


## ✨ Features

### 🔐 Login Features (Authentication & Security)
- Dual Login System - Separate login portals for teachers and students
- Secure Session Management - Maintains user sessions across pages
- Role-based Access Control - Different interfaces and permissions for teachers vs students
- Form Validation - Secure input validation for all login forms



### Teacher Features
- 📊 Dashboard with key statistics (Total Students, Active Classes, Average Grade, Assignments Due)
- 👥 Complete student management (Add, View, Edit, Delete)
- 📝 Grade assignment and updates
- 📈 Reports and analytics
- 🔍 Search and filter capabilities
- ⚙️ Settings and profile management

### Student Features
- 📚 Course overview and enrollment status
- 📊 Grade visualization with color-coded performance indicators
- 📱 Responsive design for all devices
- 🔒 Secure login system
- 📋 Detailed grade breakdown per course


## 🎨 Design Implementation

### Provided Designs (Fully Implemented)
- Teacher & Student Login Pages - Secure authentication interface
- Teacher Dashboard - Complete replication of provided design with dark sidebar navigation
- Student Dashboard - Exact implementation of simplified student interface

### Custom Designed Pages (Matching Style)
Teacher Side:
- Students Management Page with full CRUD operations
- Gradebook and Grade Entry Interface
- Reports and Analytics Page
- Settings and Configuration Page

Student Side:
- My Courses Detailed View
- Individual Grade Details Page
- Personal Settings Page



### Test Credentials

Teacher Access:
Username: admin
Password: admin123


Student Access:
Email: alice@example.com
Password: student123



## 🛠️ Technical Details

### Data Storage
- Uses browser localStorage for data persistence
- Sample data automatically initialized on first load
- Data structure includes: courses, students, grades, admins

### Key Functionalities
- ✅ User authentication and session management
- ✅ Student CRUD operations (Create, Read, Update, Delete)
- ✅ Grade assignment and calculation
- ✅ Average grade computation
- ✅ Search and filter capabilities
- ✅ Responsive design for mobile devices

### Design System
- Colors: Extracted from provided Figma designs
- Typography: Consistent font families and sizing
- Components: Reusable UI elements (cards, tables, buttons)
- Layout: Consistent sidebar navigation across all pages


## 🎯 Design References

**Figma Design Link:** [View Complete Designs Here](https://www.figma.com/design/UjX996gfrE4goihVdlyhoW/EduGrade-Pro?node-id=0-1&p=f&t=Y6YsIFISUyVZPAcf-0)

The project includes two complete dashboard designs that guided the implementation:
- Teacher Dashboard: Dark sidebar with comprehensive navigation
- Student Dashboard: Simplified interface with focused functionality

## 📊 Sample Data Structure

The system comes pre-loaded with sample data including:
- 5 sample courses (Mathematics, English, Science, History, PE)
- 5 sample students with enrolled courses
- Comprehensive grade records
- Admin and student test accounts


## 🎨 Design Implementation Tips

1. Color Consistency: Used color picker to extract exact colors from provided designs
2. Component Reusability**: Built modular CSS classes for consistent styling
3. Mobile First**: Responsive design that works on all device sizes
4. User Experience: Intuitive navigation and clear visual hierarchy
5. Performance: Optimized JavaScript for smooth interactions


## 🔧 Development Notes

- All pages maintain consistent sidebar navigation
- Data persists across browser sessions using localStorage
- Grade calculations update in real-time
- Form validation ensures data integrity
- Error handling for improved user experience


## 👥 Team Roles
- Login Developer (Build authentication system) - Mariam Adesina
- Teacher Dashboard Developer (Student management & grade entry features) - Lukman Ibrahim
- Student Interface Developer (Student dashboard & course viewing system) - Samuel Oyedoyin
- Designer (Styling, layout, and user experience) - Olamide Olabodee
