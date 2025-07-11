interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Eyobed",
  lastName: "Kebede",
  age: 22,
  location: "Addis Ababa"
};

const student2: Student = {
  firstName: "Liya",
  lastName: "Tadesse",
  age: 21,
  location: "Bahir Dar"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
const locationHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
