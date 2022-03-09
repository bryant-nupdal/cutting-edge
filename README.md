
# Cutting Edge
#### Service to provide employees with a user-friendly way to navigate intensive snow shifts.

## Description 
Duration: 2 Week Sprint

Cutting Edge is a snow removal routing service. It is used to navigate employees through the harshest winters. 
I wanted to build Cutting Edge because of my past experience in working snow removal.
My goal was to create a user-friendly web-app where employees can log-in and utalize the app the document their progress real-time.
In the past I have used pen and paper to physically write down times for arrival and departure for each property.
Although, it is a pretty straight-forward method, I knew there was a better way. 
With Cutting Edge, there will be no more missing or wet timecards, or trying to hold onto that one pen like it is your lifeline. 
I bring to you, Cutting Edge.

## Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## How to manipulate the database
Create a new database called `cutting_edge` and paste the data from the `database.sql` file into the `SQL Query`.
## Database Documentation - ERD
<img width="1680" alt="Screen Shot 2022-03-08 at 6 39 21 PM" src="https://user-images.githubusercontent.com/74881196/157350129-31413fca-07b9-4008-b2d3-68e365d5ce68.png">

## Technologies
- Node
- Express
- React
- Postgresql
- Heroku
- Moment
- Bootstrap

## Setup 
1. Open up your editor of choice and run an npm install
2. Run npm run server in your terminal
3. Run npm run client in your terminal
4. The npm run client command will open up a new browser tab for you!

## UI / UX 
### Registeration Page
The registration page is set up for a new user to create an account with a username and a password.The username is sent directly to the database, whereas the password is encryped and then sent the the database. Doing this provides a security for the logged in user.
### 
<img width="1679" alt="Screen Shot 2022-03-08 at 5 29 09 PM" src="https://user-images.githubusercontent.com/74881196/157343305-7480ac36-e2ec-43d3-904b-11a9811fac80.png">

### Login page
If the user (employee) already has an account, they can bypass the registeration page and login to their existing account.
### 
<img width="1680" alt="Screen Shot 2022-03-08 at 5 27 33 PM" src="https://user-images.githubusercontent.com/74881196/157343184-f8f4f667-b07a-4a53-bdcc-712819439d55.png">

### Work Order Page
Upon logging in, an employee is welcomed and given the option to either continue an already existing work order, or to create a new one. 
- A work order consisits of properties servicable by the company they are employed by.
- Structurely, the properties within a work order are arranged into routes.
### 
<img width="1678" alt="Screen Shot 2022-03-08 at 5 23 16 PM" src="https://user-images.githubusercontent.com/74881196/157342789-b4ef5a6b-3b93-448a-a07b-03d8b6468fc3.png">

### Route List Page
Routes are organized strategically by a property's geologic location.
In testing, we have found routes to be an important part of workflow to efficently break up properties, and effectively send employees to different areas of town which is proven to maximize productivity.
-  After completion of a route, the employee is able to either begin another route or label the work order as complete.
###
<img width="1678" alt="Screen Shot 2022-03-08 at 4 47 51 PM" src="https://user-images.githubusercontent.com/74881196/157342107-ca757e4c-a661-4b84-967a-46d1e873ded1.png">

### Selected Route Page pt.1
As an employee arrives and departs from a property, (selects the clocks-in and clock-out buttons) the app records timestamps to document the progress across all devices.
### 
<img width="1677" alt="Screen Shot 2022-03-08 at 4 48 22 PM" src="https://user-images.githubusercontent.com/74881196/157342128-5d58e68e-1c43-421b-834f-ca376764e7c0.png">

### Selected Route Page pt.2
Below shows how it looks to clock in and out of properties. The properties are first wrapped in a Bootstrap Card, and then at the bottom of the card there is an accordian that expands and clasps to show the date, clock in and clock out time, who completed the timecard, and the duration it took to complete the task. For demo purposes, you can see that the clock in and out times are minutes apart, but as for the duration, it is actually set to minutes as well, even though it reads as hours. This is done to show a more accurate reading and is updated in the file itself.
### 
<img width="1680" alt="Screen Shot 2022-03-08 at 7 22 40 PM" src="https://user-images.githubusercontent.com/74881196/157354039-52d02af8-38cb-4c0d-a5cf-39769d368e55.png">

### About Page 
The about page is open to the public. This page can be accessed before logging in or registering for an account.
The main purpose of this page is to give a brief overview of the app to anyone interested in it without creating ties to it first.
### 
<img width="1678" alt="Screen Shot 2022-03-08 at 4 48 38 PM" src="https://user-images.githubusercontent.com/74881196/157342136-731ae961-5f12-487b-b557-bfa9e8c3fa65.png">

### Acknowledgement
Thanks to Emerging Digital Academy who equipped and helped me to make this application a reality.

### Support
If you have suggestions or issues, please email me at nupdalbryant@icloud.com



