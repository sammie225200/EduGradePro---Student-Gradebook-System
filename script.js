
const students = [
{
id: 'S001',
name: 'Alice Smith',
class: 'SS1',
password: 'alice123',
grades: [
{ course: 'Mathematics', teacher: 'Ms. Mariam', score: 'A', grade: 'A', term: 1 },
{ course: 'English Literature', teacher: 'Mr. Lukman', score: 'B', grade: 'B', term: 1 },
{ course: 'Physics', teacher: 'Ms. marejay', score: 'C', grade: 'C', term: 1 },
{ course: 'History', teacher: 'Mr. Sam', score: 'A', grade: 'A', term: 1 },
{ course: 'Art', teacher: 'Ms. John', score: 'B', grade: 'B', term: 2 },
{ course: 'Physical Education', teacher: 'Mr. Olamide', score: 'N/A', grade: 'Pass', term: 2 }
],
overallGrade: 75
},
];

let currentStudent = null;

function Login() {
const studentId = document.getElementById('studentId').value;
const password = document.getElementById('password').value;
const errorMsg = document.getElementById('errorMsg');

const student = students.find(s => s.id === studentId && s.password === password);

if (student) {
currentStudent = student;
document.getElementById('loginContainer').style.display = 'none';
document.getElementById('dashboard').classList.add('active');
displayStudentInfo();
errorMsg.classList.remove('show');
} else {
errorMsg.classList.add('show');
}
}
// function Logout() {
// currentStudent = null;
// currentFilter = 'all';
// document.getElementById('loginContainer').style.display = 'flex';
// document.getElementById('dashboard').classList.remove('active');
// document.getElementById('studentId').value = '';
// document.getElementById('password').value = '';

// const tabs = document.querySelectorAll('.tab-btn');
// tabs.forEach((tab, idx) => {
// tab.classList.remove('active');
// if (idx === 0) tab.classList.add('active');
// });
// }
function displayStudentInfo() {
document.getElementById('welcomeText').textContent = `Welcome, ${currentStudent.name}!`;
document.getElementById('studentName').textContent = currentStudent.name;
document.getElementById('studentIdDisplay').textContent = `Student ID: ${currentStudent.id}`;
document.getElementById('overallGrade').textContent = currentStudent.overallGrade;
document.getElementById('coursesCount').textContent = currentStudent.grades.length;
displayGrades();
}
consol