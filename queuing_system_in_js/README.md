# Queuing System in JS

## Description

This project demonstrates how to use Redis and Kue as a queuing system in a Node.js application. It involves setting up a Redis server, interacting with it via a Redis client in Node.js, and using Kue for managing job queues. The project also includes a basic Express app that interacts with both Redis and Kue.

## Learning Objectives

By the end of this project, you should be able to:

- Run a Redis server on your machine
- Perform simple operations with the Redis client
- Use a Redis client with Node.js for basic operations
- Store hash values in Redis
- Deal with asynchronous operations using Redis
- Use Kue as a queue system
- Build a basic Express app interacting with a Redis server
- Build a basic Express app interacting with both a Redis server and queue

## Requirements

- Ubuntu 18.04
- Node.js 12.x
- Redis 5.0.7

## Setup

1.  **Install Dependencies**  
    Run the following command to install the required dependencies:

        ```bash
        npm install
        ```

2.  **Start Redis Server**  
    Make sure you have Redis installed on your machine. You can start the Redis server with:

        ```bash
        redis-server
        ```

3.  **Start the Application**  
    After setting up Redis and installing dependencies, you can start the Express app by running:

        ```bash
        npm start
        ```

## Project Structure

- `package.json` - Project dependencies and scripts
- `.babelrc` - Babel configuration for JavaScript compilation
- `server.js` - Entry point for the Express server and Redis/Kue integration
- `README.md` - Project documentation (this file)

## Author

This repo belongs to **Khiba Koenane**, Full Stack Developer at Holberton.

## License

This project is open-source and available under the [MIT License](LICENSE).
