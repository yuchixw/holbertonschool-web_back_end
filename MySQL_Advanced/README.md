# MySQL Advanced

## Description
This project focuses on advanced MySQL concepts, including database optimization, stored procedures, views, and triggers. By completing this project, you will gain expertise in optimizing queries, managing constraints, and implementing advanced database functionalities.

## Concepts Covered
- Creating tables with constraints
- Optimizing queries using indexes
- Implementing stored procedures and functions in MySQL
- Creating and using views
- Setting up triggers in MySQL

## Resources
Read or watch:
- [MySQL Cheatsheet](https://devhints.io/mysql)
- [MySQL Performance: How To Leverage MySQL Database Indexing](https://www.percona.com/blog/2021/04/08/mysql-performance-how-to-leverage-mysql-database-indexing/)
- [Stored Procedures](https://dev.mysql.com/doc/refman/8.0/en/stored-programs-stored-procedures.html)
- [Triggers](https://dev.mysql.com/doc/refman/8.0/en/triggers.html)
- [Views](https://dev.mysql.com/doc/refman/8.0/en/create-view.html)
- [Functions and Operators](https://dev.mysql.com/doc/refman/8.0/en/functions.html)
- [Trigger Syntax and Examples](https://dev.mysql.com/doc/refman/8.0/en/trigger-syntax.html)
- [CREATE TABLE Statement](https://dev.mysql.com/doc/refman/8.0/en/create-table.html)
- [CREATE PROCEDURE and CREATE FUNCTION Statements](https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html)
- [CREATE INDEX Statement](https://dev.mysql.com/doc/refman/8.0/en/create-index.html)
- [CREATE VIEW Statement](https://dev.mysql.com/doc/refman/8.0/en/create-view.html)

## Learning Objectives
By the end of this project, you should be able to:
- Create tables with constraints.
- Optimize queries by adding indexes.
- Implement stored procedures and functions.
- Create and manage views.
- Implement triggers to automate database tasks.

## Requirements
- All queries must be tested on **Ubuntu 20.04 LTS** using **MySQL 8.0**.
- Each SQL file must end with a new line.
- Each query must have a comment describing its purpose.
- SQL keywords (e.g., `SELECT`, `WHERE`) must be in uppercase.
- A `README.md` file at the project root is mandatory.
- The length of your files will be tested using `wc`.

## SQL Comments Format
Example of a properly commented SQL file:
```sql
-- Retrieve the first three students from Batch ID 3
SELECT id, name FROM students WHERE batch_id = 3 ORDER BY created_at DESC LIMIT 3;
```

## Importing a SQL Dump
To create a database and import a SQL dump:
```sh
echo "CREATE DATABASE hbtn_0d_tvshows;" | mysql -uroot -p
curl "https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql" -s | mysql -uroot -p hbtn_0d_tvshows
echo "SELECT * FROM tv_genres;" | mysql -uroot -p hbtn_0d_tvshows
```
Example output:
```
id  name
1   Drama
2   Mystery
3   Adventure
4   Fantasy
5   Comedy
6   Crime
7   Suspense
8   Thriller
```

## Author
- **Guillaume Plessis**, Senior Cloud & System Engineer at WeWork
- **Guillaume**, CTO at Holberton School
