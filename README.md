Simple CRUD application with NodeJS, Express and MongoDB for managing employees.

Run populateDB.js to populate database with data for testing:
node populateDB.js

Run app:
node app.js
http://localhost:3000/api/employees/

Pagination setting: define query in request.
Example: http://localhost:3000/api/employees/?pageSize=2&pageNumber=4
