## Design Notes

On the homepage, user can either make a new work order or
look at existing work orders.

Creating a new work order issues a POST that assigns tasks
for all properties for all routes

Selecting a work order will set the current work order in redux
so that the time sheet components know which tasks to show

UserPage (home page) - displays work orders, or creates new work order
   WorkOrder page: that allows the user to select a route
      RouteDetails page: that shows all of the properties and associated timesheets

- [x] Set current work order in URL using params
- [x] Set current route in URL using params for digging in
- [x] New endpoint for getting all tasks by work order ID
- [x] Use new endpoint to grab all tasks by work order ID when WO is selected
- [x] Show all property tasks by work order ID, filtered by route from redux
- [x] Load all time cards by work order ID when work order is selected
- [x] Finish TaskItem:
   - [x] Grab the time cards from redux by task id, show them in the taskItem
   - [x] Add a 'Clock In' button that creates a new time card for the task in taskItem
      - [x] Create a new POST that makes the time card record on the backend, sets clock_in to NOW and clock_out to NULL (default), for the current logged in user.
   - [x] On each time card, show the clock in and clock out button (those can now work)
   - [x] Bonus: Conditional render click in / clock out if the time card has clock in or clock out time
   - [x] Bonus: If it has both in and out, then use moment to show duration (clockOut - clockIn)
   - [x] Add a 'delete' button either for the time card or the work order
- [ ] Begin API work for Google Maps:
   - [ ]  research 'places' and 'latitude / longitude' 
   - [ ]  Create a project testing example work
   - [ ]  Git branch, and incorperate routing into the .Cards on the route property page
- [ ] Begin Weather API work to incorperate weather updates throughout a shift
