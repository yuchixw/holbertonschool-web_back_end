import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    readDatabase(databaseFile)
      .then((students) => {
        let responseText = 'This is the list of our students\n';
        const sortedFields = Object.keys(students).sort();

        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((students) => {
        if (!students[major]) {
          res.status(200).send('List:');
        } else {
          res.status(200).send(`List: ${students[major].join(', ')}`);
        }
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
