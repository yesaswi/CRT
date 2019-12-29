const fetch = require("node-fetch");

fetch("http://localhost:3000/api/students/list")
  .then(result => {
    return result.json();
  })
  .then(data => {
    const students = data.Students;
    console.log(students);
  });
