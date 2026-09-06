# Unit Testing and Integration Testing in Python

## Description

This project focuses on writing unit and integration tests using Python's `unittest` framework. It covers key testing concepts such as mocking, parametrization, and fixtures.

## Learning Objectives

By the end of this project, you should be able to explain:

- The difference between unit and integration tests.
- Common testing patterns such as mocking, parametrization, and fixtures.

## Requirements

- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using **Python 3.9**.
- Files should follow the **pycodestyle** style guide (version 2.5).
- Each file must end with a **new line**.
- The first line of all scripts must be:
  ```python
  #!/usr/bin/env python3
  ```
- A `README.md` file is mandatory.
- All files must be executable.
- All modules, classes, and functions should have proper **docstrings**.
- All functions and coroutines must be **type-annotated**.

## Required Files

- `utils.py`
- `client.py`
- `fixtures.py`

## Running Tests

To execute the tests, use the following command:

```bash
python -m unittest path/to/test_file.py
```

## Resources

Refer to the following documentation and resources:

- [unittest — Unit testing framework](https://docs.python.org/3/library/unittest.html)
- [unittest.mock — Mock object library](https://docs.python.org/3/library/unittest.mock.html)
- [How to mock a readonly property with mock?](https://stackoverflow.com/questions/51216254/how-to-mock-a-readonly-property-with-mock)
- [parameterized](https://pypi.org/project/parameterized/)
- [Memoization](https://en.wikipedia.org/wiki/Memoization)
