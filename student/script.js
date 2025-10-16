

    // Initialize sample data
    function initSampleData() {
        if (!localStorage.getItem('currentUser')) {
            const sampleUser = {
                id: '1',
                name: 'Alex Johnson',
                studentId: 'S001',
                email: 'alex@student.edu',
                password: 'password123',
                courses: [
                    { name: 'Mathematics', teacher: 'Ms. Davis', score: 'A', grade: 'A' },
                    { name: 'English Literature', teacher: 'Mr. Smith', score: 'B', grade: 'B' },
                    { name: 'Physics', teacher: 'Ms. Jones', score: 'C', grade: 'C' },
                    { name: 'History', teacher: 'Mr. Brown', score: 'A', grade: 'A' },
                    { name: 'Art', teacher: 'Ms. White', score: 'B', grade: 'B' },
                    { name: 'Physical Education', teacher: 'Mr. Green', score: 'N/A', grade: 'Pass' }
                ]
            };
            localStorage.setItem('currentUser', JSON.stringify(sampleUser));
        }
    }

    initSampleData();

    // Load dashboard on page load
    window.onload = function() {
        showDashboard();
    };

    function showDashboard() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) return;

        // Update user info
        const initial = user.name.charAt(0).toUpperCase();
        document.getElementById('userAvatar').textContent = initial;
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userStudentId').textContent = `Student ID: ${user.studentId}`;
        document.getElementById('welcomeMsg').textContent = `Welcome, ${user.name.split(' ')[0]}!`;

        // Update settings
        document.getElementById('settingsAvatar').textContent = initial;
        document.getElementById('settingsName').textContent = user.name;
        document.getElementById('settingsStudentId').textContent = `Student ID: ${user.studentId}`;
        document.getElementById('settingsNameInput').value = user.name;
        document.getElementById('settingsEmail').value = user.email;

        // Calculate and display grades
        displayGrades(user);
    }

    function displayGrades(user) {
        const courses = user.courses || [];
        document.getElementById('coursesEnrolled').textContent = courses.length;

        // Calculate overall grade
        const numericGrades = courses.filter(c => !isNaN(parseFloat(c.score)));
        let total = 0;
        let count = 0;

        courses.forEach(c => {
            let numeric = 0;
            switch(c.grade) {
                case 'A': numeric = 90; break;
                case 'B': numeric = 80; break;
                case 'C': numeric = 70; break;
                case 'D': numeric = 60; break;
                default: return;
            }
            total += numeric;
            count++;
        });

        const average = count > 0 ? Math.round(total / count) : 0;
        document.getElementById('overallGrade').textContent = average;

        // Display grades table
        const tbody = document.getElementById('gradesTableBody');
        tbody.innerHTML = '';
        
        courses.forEach(course => {
            const row = document.createElement('tr');
            const gradeClass = `grade-${course.grade.toLowerCase()}`;
            row.innerHTML = `
                <td>${course.name}</td>
                <td>${course.teacher}</td>
                <td>${course.score}</td>
                <td><span class="grade-badge ${gradeClass}">${course.grade}</span></td>
                <td><a href="#" class="view-details">View Details</a></td>
            `;
            tbody.appendChild(row);
        });

        // Display courses
        const coursesDiv = document.getElementById('coursesListDetailed');
        coursesDiv.innerHTML = courses.map(c => `
            <div style="padding: 15px; border-bottom: 1px solid #eee;">
                <h3>${c.name}</h3>
                <p>Teacher: ${c.teacher}</p>
                <p>Grade: <span class="grade-badge grade-${c.grade.toLowerCase()}">${c.grade}</span></p>
            </div>
        `).join('');
    }

    function showPage(pageName) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
        
        document.getElementById(pageName).classList.add('active');
        event.target.closest('.menu-item').classList.add('active');
        
        // Close mobile menu on page change
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('active');
        }
    }

    function toggleMobileMenu() {
        document.getElementById('sidebar').classList.toggle('active');
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('active') && 
            !sidebar.contains(event.target) && 
            !toggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Settings form
    document.getElementById('settingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('settingsPassword').value;
        const confirmPassword = document.getElementById('settingsPasswordConfirm').value;
        
        if (password && password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        const user = JSON.parse(localStorage.getItem('currentUser'));
        
        user.name = document.getElementById('settingsNameInput').value;
        user.email = document.getElementById('settingsEmail').value;
        if (password) {
            user.password = password;
        }
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        document.getElementById('successMsg').style.display = 'block';
        setTimeout(() => {
            document.getElementById('successMsg').style.display = 'none';
        }, 3000);
        
        showDashboard();
    });

    function logout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('currentUser');
            location.reload();
        }
    }