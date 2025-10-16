function loginPage() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;



    userName = userName.trim();
    password = password.trim();


    //General validation
    if (userName === "" || password === "") {
        // popup  
        const invalid = document.getElementById("invalidDetails");

        invalid.textContent = "Please fill in both username and password";
        invalid.style.backgroundColor = "white"
        invalid.style.textAlign = "center"
        invalid.style.color = "red";
        return;
    }
    // Checking teacher mode or student mode
    let isStudentMode = document.querySelector('h2').textContent === "Student Login";
    if (isStudentMode) {
        // Student login validation
        if (userName === "alice123@gmail.com" && password === "student123") {
            console.log("Student login successful!");

            // save to local storage 
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userName", userName);
            localStorage.setItem("userRole", "student");

            // popup  
            const invalid = document.getElementById("invalidDetails");

            invalid.textContent = "Student login Successful";
            invalid.style.backgroundColor = "white"
            invalid.style.color = "green";

            setTimeout(() => {
                // link the login page to dashboard 
                window.location.href = "student-dashboard.html";

            }, 2000)

        } else {
            const invalid = document.getElementById("invalidDetails");
            invalid.textContent = "Wrong email or password. Please try again!";
            invalid.style.backgroundColor = "white"
            invalid.style.color = "red"
            invalid.style.border = "none"
            invalid.style.borderRadius = "5px"

            document.getElementById('password').value = "";
        }
    } else {
        // Teacher login validation
        if (userName === "admin" && password === "admin123") {
            console.log("Login successful!");

            // save to local storage  
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userName", userName);
            localStorage.setItem("userRole", "teacher");
            // popup  
            const invalid = document.getElementById("invalidDetails");

            invalid.textContent = "Teacher login Successful";
            invalid.style.backgroundColor = "white"
            invalid.style.color = "green"
            invalid.style.border = "none"
            invalid.style.borderRadius = "5px"


            setTimeout(() => {
                // link the login page to dashboard 
                window.location.href = "dashboard.html";

            }, 2000)

        } else {
            const invalid = document.getElementById("invalidDetails");
            invalid.textContent = "Wrong username or password. Please try again!";
            invalid.style.backgroundColor = "white"
            invalid.style.color = "red"
            invalid.style.border = "none"
            invalid.style.borderRadius = "5px"

            // alert("Wrong username or password. Please try again!");
            document.getElementById('password').value = "";
        }
    }
}
function switchLoginTab() {
    let button = document.getElementById('button-loginTwo');
    let title = document.querySelector('h2');
    let description = document.querySelector('p');
    let usernameLabel = document.querySelector('.username-details label');
    let usernameInput = document.getElementById('username');
    let loginButton = document.getElementById('button-login');




    // Check current mode and switch
    if (title.textContent === "Teacher Login") {
        // Switch to Student mode
        button.textContent = "Login as Teacher";
        button.style.backgroundColor = 'white';
        title.textContent = "Student Login";
        description.textContent = "Access your student portal.";
        usernameLabel.textContent = "Email";
        usernameInput.placeholder = "Enter your email";
        loginButton.textContent = "Student Login";
        console.log("Switched to student login mode");
    } else {
        // Switch to Teacher mode
        button.textContent = "Login as Student";
        button.style.backgroundColor = 'white';
        title.textContent = "Teacher Login";
        description.textContent = "Access your student grade management portal.";
        usernameLabel.textContent = "Username";
        usernameInput.placeholder = "Enter your username";
        loginButton.textContent = "Login";
        console.log("Switched to teacher login mode");
    }
    // Clear form fields when switching
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    // eye icon and password input
    let eyeIcon = document.querySelector('.fa-eye');
    let passwordInput = document.getElementById('password');

    // show/hide password when eye is clicked
    eyeIcon.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    });
    //  Enter key to login
    passwordInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            loginPage();
        }
    });

});