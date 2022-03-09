
# Cutting Edge
Cutting Edge is a service to provide employees with a user-friendly way to navigate intensive snow shifts.

## Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## How to manipulate the database
Create a new database called `cutting_edge` and paste the data from the `database.sql` file.
## Database Documentation - ERD
<img width="1680" alt="Screen Shot 2022-03-08 at 6 39 21 PM" src="https://user-images.githubusercontent.com/74881196/157350129-31413fca-07b9-4008-b2d3-68e365d5ce68.png">

## Diving In 
The register page is set up for a new user to create an account with a username and a password. The username is sent directly to the database, whereas the password is encryped and then sent the the database. Doing this provides a security for the logged in user.
<img width="1678" alt="Screen Shot 2022-03-08 at 4 48 38 PM" src="https://user-images.githubusercontent.com/74881196/157342136-731ae961-5f12-487b-b557-bfa9e8c3fa65.png">
If the user (employee) already has an account, they can bypass the register page and login and continue to the next few pages explained below.
<img width="1679" alt="Screen Shot 2022-03-08 at 5 29 09 PM" src="https://user-images.githubusercontent.com/74881196/157343305-7480ac36-e2ec-43d3-904b-11a9811fac80.png">

Upon logging in, an employee is welcomed and given the option to either continue an existing work order, or create a new one. 

<img width="1680" alt="Screen Shot 2022-03-08 at 5 27 33 PM" src="https://user-images.githubusercontent.com/74881196/157343184-f8f4f667-b07a-4a53-bdcc-712819439d55.png">

- A work order consisits of properties to service.
    - Structurely, the properties within a work order are arranged into routes.
    - Routes are organized strategically by a property's geologic location. In testing, we have found routes to be an important part of workflow to efficently break up properties, and effectively send employees over different areas of town to improve productivity.

<img width="1678" alt="Screen Shot 2022-03-08 at 5 23 16 PM" src="https://user-images.githubusercontent.com/74881196/157342789-b4ef5a6b-3b93-448a-a07b-03d8b6468fc3.png">
-  After completion of a route, the employee is able to either begin another route or label the work order as complete.

<img width="1678" alt="Screen Shot 2022-03-08 at 4 47 51 PM" src="https://user-images.githubusercontent.com/74881196/157342107-ca757e4c-a661-4b84-967a-46d1e873ded1.png">

As an employee arrives and departs from a property, (selects the clocks-in and clock-out buttons) the app records timestamps to document the progress across all devices.

<img width="1677" alt="Screen Shot 2022-03-08 at 4 48 22 PM" src="https://user-images.githubusercontent.com/74881196/157342128-5d58e68e-1c43-421b-834f-ca376764e7c0.png">


