
# Cutting Edge
Cutting Edge is a service to provide employees with a user-friendly way to navigate intensive snow shifts.
Upon logging in, an employee is welcomed and given the option to either continue an existing work order, or create a new one. 
- A work order consisits of properties to service.
    - Structurely, the properties within a work order are arranged into routes.
    - Routes are organized strategically by a property's geologic location. In testing, we have found routes to be an important part of workflow to efficently break up properties, and effectively send employees over different areas of town to improve productivity. 
    - As an employee arrives and departs from a property, (selects the clocks-in and clock-out buttons) the app records timestamps to document the progress across all devices.
-  After completion of a route, the employee is able to either begin another route or label the work order as complete.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database
Create a new database called `cutting_edge` and paste the data from the `database.sql` file.
## 


