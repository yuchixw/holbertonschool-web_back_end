# Unit Testing in JavaScript with Mocha

## Project Overview

This project focuses on unit testing in JavaScript using Mocha, Chai, and Sinon. You will learn how to write effective test suites, use assertion libraries, implement spies and stubs, and write integration tests for a small Node.js server.

## Learning Objectives

By completing this project, you will be able to:

- Use Mocha to write test suites.
- Utilize different assertion libraries like Node's built-in assertions and Chai.
- Structure and present long test suites.
- Implement spies and stubs using Sinon.
- Understand and use hooks in Mocha.
- Perform unit testing with asynchronous functions.
- Write integration tests for a simple Node.js server.

## Requirements

- All code will be executed on **Ubuntu 20.04** using **Node.js 20.x.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project is mandatory.
- Use the `.js` file extension for all scripts.
- Running tests with `npm run test *.test.js` should pass without warnings or errors.

## Technologies Used

- **Mocha** - Test framework for JavaScript
- **Chai** - Assertion library
- **Sinon** - Test spies, stubs, and mocks
- **Express** - Web framework for Node.js (for integration testing)
- **Request** - HTTP testing utility

## Installation

Ensure you have **Node.js 20.x.x** installed. Then, install the necessary dependencies:

```sh
npm init -y
npm install --save-dev mocha chai sinon express request
```

## Running Tests

To execute all test cases, run:

```sh
npm test
```

Or, for specific test files:

```sh
npm test *.test.js
```

## Project Structure

```
/project-root
│── tests/
│   ├── sample.test.js
│   ├── async.test.js
│   ├── server.test.js
│── src/
│   ├── app.js
│   ├── utils.js
│── package.json
│── README.md
```

## Example Test Case

Here's a simple example of a Mocha test using Chai:

```js
const { expect } = require("chai");

describe("Basic Test", function () {
  it("should return true", function () {
    expect(true).to.be.true;
  });
});
```

## Resources

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai, and SinonJS](https://blog.logrocket.com/testing-node-js-apps-using-mocha-chai-and-sinon/)

## Author

**Khiba Koenane** - Student at Holberton School
