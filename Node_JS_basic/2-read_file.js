const fs = require('fs');

function countStudents(database) {
  try {
    const data = fs.readFileSync(database, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim().length > 0);

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const fields = {};
    const header = lines[0].split(',');

    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');

      if (student.length === header.length) {
        const firstname = student[0].trim();
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      }
    }

    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
