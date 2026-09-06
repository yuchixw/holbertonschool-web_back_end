const fs = require('fs');

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.trim().split('\n').filter(line => line !== '');
      if (lines.length === 0) {
        return resolve({});
      }

      const fields = lines.slice(1); // Exclude the header
      const studentData = {};

      fields.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!studentData[field]) {
          studentData[field] = [];
        }
        studentData[field].push(firstname);
      });

      resolve(studentData);
    });
  });
}

export default readDatabase
