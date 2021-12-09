Simple CRUD application with NodeJS, Express and MongoDB for managing employees.

Run populateDB.js to populate database with data for testing: </br>
node populateDB.js

Run app: </br>
node app.js </br>
Visit link: http://localhost:3000/api/employees/

Routes: </br>
- GET all employees: </br>
 http://localhost:3000/api/employees </br>
*Pagination setting: define query in request. </br>
example http://localhost:3000/api/employees/?pageSize=2&pageNumber=4 </br>

- GET employee by ID(provide valid ID):</br>
 http://localhost:3000/api/employees/61b1dc035ed03c92ef1a5d13</br>
 
 - POST empoyee(provide valid request body) </br>
   http://localhost:3000/api/employees </br>
   
 - PUT employee(provide valid request body and valid ID) </br>
   http://localhost:3000/api/employees/61b1dc035ed03c92ef1a5d13 </br>
   
 - DELETE employee(provide valid ID)</br>
  http://localhost:3000/api/employees/61b1dc035ed03c92ef1a5d13
  
  </br></br>
  Request body:
  
