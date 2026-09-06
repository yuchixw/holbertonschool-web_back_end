# User Authentication Service

## Master

**By:** Emmanuel Turlay, Staff Software Engineer at Cruise  
**Weight:** 1  
**Your score will be updated as you progress.**

## Description

In the industry, you should not implement your own authentication system. Instead, use a module or framework that handles authentication for you, such as Flask-User in Python-Flask. However, for learning purposes, this project will guide you through building an authentication system step by step.

## Resources

Read or watch:

- [Flask documentation](https://flask.palletsprojects.com/)
- [Requests module](https://docs.python-requests.org/en/latest/)
- [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Learning Objectives

By the end of this project, you will be able to:

- Declare API routes in a Flask app
- Get and set cookies
- Retrieve request form data
- Return various HTTP status codes

## Requirements

- Python 3.x
- Flask
- Requests module

## Installation

```sh
# Create a virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install Flask requests
```

## Running the Application

```sh
python app.py
```

## API Routes

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| POST   | `/register` | Register a new user   |
| POST   | `/login`    | Authenticate a user   |
| GET    | `/profile`  | Retrieve user profile |
| POST   | `/logout`   | Log out the user      |

## Usage

### Register a new user

```sh
curl -X POST http://127.0.0.1:5000/register -d "username=user&password=pass"
```

### Login

```sh
curl -X POST http://127.0.0.1:5000/login -d "username=user&password=pass"
```

### Retrieve user profile

```sh
curl -X GET http://127.0.0.1:5000/profile -b cookies.txt
```

### Logout

```sh
curl -X POST http://127.0.0.1:5000/logout -b cookies.txt
```

## License

This project is for educational purposes at Holberton School.
