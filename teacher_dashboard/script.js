

// Sample student data
let students = [
{ id: 'S001', name: 'Alice Smith', class: 'SS1', email: 'alice@school.com', gpa: 3.8 },
{ id: 'S002', name: 'John Doe', class: 'SS1', email: 'john@school.com', gpa: 3.5 },
{ id: 'S003', name: 'Emma Wilson', class: 'SS2', email: 'emma@school.com', gpa: 3.9 },
{ id: 'S004', name: 'Michael Brown', class: 'SS2', email: 'michael@school.com', gpa: 3.6 },
{ id: 'S005', name: 'Sarah Davis', class: 'SS3', email: 'sarah@school.com', gpa: 3.7 },
{ id: 'S006', name: 'James Miller', class: 'SS3', email: 'james@school.com', gpa: 3.4 }
];
// User settings
let userSettings = {
name: 'Ms. Johnson',
email: 'msjohnson@school.com',
password: 'password123'
};
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
renderStudents(students);
setupEventListeners();
});
// Setup all event listeners
function setupEventListeners() {
// Search functionality
const searchInput = document.getElementById('search');
if (searchInput) {
searchInput.addEventListener('input', handleSearch);
}

// Class filter buttons
const filterButtons = document.querySelectorAll('.rosterNav button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterByClass(this.textContent);
    });
});
// Add new student button
const addButton = document.getElementById('addbutton');
if (addButton) {
    addButton.addEventListener('click', function(e) {
        e.preventDefault();
        showAddStudentAdmin();
    });
}
}
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
renderStudents(students);
setupEventListeners();
});
// Setup all event listeners
function setupEventListeners() {
// Search functionality
const searchInput = document.getElementById('search');
if (searchInput) {
searchInput.addEventListener('input', handleSearch);
}

// Class filter buttons
const filterButtons = document.querySelectorAll('.rosterNav button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterByClass(this.textContent);
    });
});
// Add new student button
const addButton = document.getElementById('addbutton');
if (addButton) {
    addButton.addEventListener('click', function(e) {
        e.preventDefault();
        showAddStudentAdmin();
    });
}
// Settings navigation
const settingsNav = document.querySelector('.navitems a[href="#"]:has(.fa-cog)');
if (settingsNav) {
    settingsNav.parentElement.addEventListener('click', function(e) {
        e.preventDefault();
        showSettingsAdmin();
    });
}

}
// Render students in table
function renderStudents(studentList) {
const tbody = document.querySelector('table tbody');
if (!tbody) return;

tbody.innerHTML = '';
studentList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.class}</td>
        <td class="action-icons">
            <i class="fas fa-eye" onclick="viewStudent('${student.id}')" title="View"></i>
            <i class="fas fa-edit" onclick="editStudent('${student.id}')" title="Edit"></i>
            <i class="fas fa-trash" onclick="deleteStudent('${student.id}')" title="Delete"></i>
        </td>
    `;
    tbody.appendChild(row);
});

}
// Search functionality
function handleSearch(e) {
const searchTerm = e.target.value.toLowerCase();
const filteredStudents = students.filter(student =>
student.name.toLowerCase().includes(searchTerm) ||
student.id.toLowerCase().includes(searchTerm) ||
student.class.toLowerCase().includes(searchTerm)
);
renderStudents(filteredStudents);
}
// Filter by class
function filterByClass(className) {
if (className === 'All') {
renderStudents(students);
} else {
const filteredStudents = students.filter(student => student.class === className);
renderStudents(filteredStudents);
}
}
// View student details
function viewStudent(studentId) {
const student = students.find(s => s.id === studentId);
if (!student) return;

showAdmin(`
    <h2>Student Details</h2>
    <div class="Admin-content">
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Student ID:</strong> ${student.id}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>GPA:</strong> ${student.gpa}</p>
    </div>
    <button onclick="closeAdmin()">Close</button>
`);

}
// Edit student
function editStudent(studentId) {
const student = students.find(s => s.id === studentId);
if (!student) return;

showAdmin(`
    <h2>Edit Student</h2>
    <form id="editStudentForm" class="Admin-form">
        <label>Name:</label>
        <input type="text" id="editName" value="${student.name}" required>
        <label>Email:</label>
        <input type="email" id="editEmail" value="${student.email}" required>
        <label>Class:</label>
        <select id="editClass">
            <option value="SS1" ${student.class === 'SS1' ? 'selected' : ''}>SS1</option>
            <option value="SS2" ${student.class === 'SS2' ? 'selected' : ''}>SS2</option>
            <option value="SS3" ${student.class === 'SS3' ? 'selected' : ''}>SS3</option>
        </select>
        <label>GPA:</label>
        <input type="number" id="editGPA" value="${student.gpa}" step="0.1" min="0" max="4" required>
        <div class="Admin-buttons">
            <button type="submit">Save Changes</button>
            <button type="button" onclick="closeAdmin()">Cancel</button>
        </div>
    </form>
`);
document.getElementById('editStudentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    student.name = document.getElementById('editName').value;
    student.email = document.getElementById('editEmail').value;
    student.class = document.getElementById('editClass').value;
    student.gpa = parseFloat(document.getElementById('editGPA').value);
    renderStudents(students);
    closeAdmin();
    showNotification('Student updated successfully!');
});

}

// Delete student
function deleteStudent(studentId) {
if (confirm('Are you sure you want to delete this student?')) {
students = students.filter(s => s.id !== studentId);
renderStudents(students);
showNotification('Student deleted successfully!');
}
}
// Add new student
function showAddStudentAdmin() {
showAdmin(`
<h2>Add New Student</h2>
<form id="addStudentForm" class="Admin-form">
<label>Student ID:</label>
<input type="text" id="newId" required>

        <label>Name:</label>
        <input type="text" id="newName" required>
        <label>Email:</label>
        <input type="email" id="newEmail" required>
        <label>Class:</label>
        <select id="newClass">
            <option value="SS1">SS1</option>
            <option value="SS2">SS2</option>
            <option value="SS3">SS3</option>
        </select>
        <label>GPA:</label>
        <input type="number" id="newGPA" step="0.1" min="0" max="4" value="0.0" required>
        <div class="Admin-buttons">
            <button type="submit">Add Student</button>
            <button type="button" onclick="closeAdmin()">Cancel</button>
        </div>
    </form>
`);
document.getElementById('addStudentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newStudent = {
        id: document.getElementById('newId').value,
        name: document.getElementById('newName').value,
        email: document.getElementById('newEmail').value,
        class: document.getElementById('newClass').value,
        gpa: parseFloat(document.getElementById('newGPA').value)
    };
    students.push(newStudent);
    renderStudents(students);
    closeAdmin();
    showNotification('Student added successfully!');
});

}
// Settings Admin
function showSettingsAdmin() {
showAdmin(`
<h2>Settings</h2>
<div class="settings-tabs">
<button class="tab-btn active" onclick="showTab('profile')">Profile</button>
<button class="tab-btn" onclick="showTab('password')">Change Password</button>
</div>

    <div id="profileTab" class="tab-content active">
        <form id="profileForm" class="Admin-form">
            <label>Name:</label>
            <input type="text" id="settingsName" value="${userSettings.name}" required>
            <label>Email:</label>
            <input type="email" id="settingsEmail" value="${userSettings.email}" required>
            <div class="Admin-buttons">
                <button type="submit">Save Changes</button>
                <button type="button" onclick="closeAdmin()">Cancel</button>
            </div>
        </form>
    </div>
    <div id="passwordTab" class="tab-content">
        <form id="passwordForm" class="Admin-form">
            <label>Current Password:</label>
            <input type="password" id="currentPassword" required>
            <label>New Password:</label>
            <input type="password" id="newPassword" required>
            <label>Confirm New Password:</label>
            <input type="password" id="confirmPassword" required>
            <div class="Admin-buttons">
                <button type="submit">Change Password</button>
                <button type="button" onclick="closeAdmin()">Cancel</button>
            </div>
        </form>
    </div>
`);
// Profile form handler
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    userSettings.name = document.getElementById('settingsName').value;
    userSettings.email = document.getElementById('settingsEmail').value;
    document.querySelector('.welcome h2').textContent = `Welcome, ${userSettings.name}`;
    closeAdmin();
    showNotification('Profile updated successfully!');
});
// Password form handler
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    if (current !== userSettings.password) {
        showNotification('Current password is incorrect!', 'error');
        return;
    }
    if (newPass !== confirm) {
        showNotification('New passwords do not match!', 'error');
        return;
    }
    if (newPass.length < 6) {
        showNotification('Password must be at least 6 characters!', 'error');
        return;
    }
    userSettings.password = newPass;
    closeAdmin();
    showNotification('Password changed successfully!');
});

}
// Tab switching in settings
function showTab(tabName) {
const tabs = document.querySelectorAll('.tab-content');
const buttons = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.classList.remove('active'));
buttons.forEach(btn => btn.classList.remove('active'));
if (tabName === 'profile') {
    document.getElementById('profileTab').classList.add('active');
    buttons[0].classList.add('active');
} else {
    document.getElementById('passwordTab').classList.add('active');
    buttons[1].classList.add('active');
}

}
// Generic Admin display
function showAdmin(content) {
// Remove existing Admin if any
const existingAdmin = document.querySelector('.Admin-overlay');
if (existingAdmin) {
existingAdmin.remove();
}

const AdminOverlay = document.createElement('div');
AdminOverlay.className = 'Admin-overlay';
AdminOverlay.innerHTML = `
    <div class="Admin-container">
        <span class="Admin-close" onclick="closeAdmin()">&times;</span>
        ${content}
    </div>
`;
document.body.appendChild(AdminOverlay);
// Close on overlay click
AdminOverlay.addEventListener('click', function(e) {
    if (e.target === AdminOverlay) {
        closeAdmin();
    }
});

}
// Close Admin
function closeAdmin() {
const Admin = document.querySelector('.Admin-overlay');
if (Admin) {
Admin.remove();
}
}
// Show notification
function showNotification(message, type = 'success') {
const notification = document.createElement('div');
notification.className = `notification ${type}`;
notification.textContent = message;

document.body.appendChild(notification);
setTimeout(() => {
    notification.classList.add('show');
}, 10);
setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
        notification.remove();
    }, 300);
}, 3000);

}
const gbslength = students.length;
document.getElementById("gsb").textContent =gbslength;