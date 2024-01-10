// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };
  
  // Aarray named studentsList containing the two variables
  const studentsList: Student[] = [student1, student2];
  
  // Render the table using Vanilla JavaScript
  document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('studentsTable');
  
    if (table) {
      // Create table headers
      const headers = document.createElement('tr');
      headers.innerHTML = '<th>First Name</th><th>Location</th>';
      table.appendChild(headers);
  
      // Loop through the studentsList and append a new row for each student
      studentsList.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
        table.appendChild(row);
      });
    }
  });
  