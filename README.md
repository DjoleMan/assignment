Simple CRUD application with NodeJS, Express and MongoDB for managing employees.</br>
Make sure you have installed all required npm packages. Look for dependencies in package.json file.

Run populateDB.js to populate database with data for testing:
<pre>node populateDB.js </pre></br>
 
Install dependencies:
<pre>npm install</pre></br>

Run app: 
<pre>node app.js</pre>

</br>
Routes: </br>
 
- GET all employees:</br>
 http://localhost:3000/api/employees </br>
*Pagination setting: define query in request. </br>
example: http://localhost:3000/api/employees/?pageSize=2&pageNumber=4 </br>
- GET employee by ID(provide valid ID):</br>
 http://localhost:3000/api/employees/61b1dc035ed03c92ef1a5d13</br>
 
 - POST empoyee(provide valid request body) </br>
   http://localhost:3000/api/employees </br>
   
 - PUT employee(provide valid request body and valid ID) </br>
   http://localhost:3000/api/employees/61b1dc035ed03c92ef1a5d13 </br>
   
 - DELETE employee(provide valid ID)</br>
  http://localhost:3000/api/employees/61b1dc035ed03c92ef1a5d13
  
  </br></br>
  Example of valid request body: </br>
  </br>
  <pre>
  {
    "name": "Marko",
    "email_address": "marko@gmail.com",
    "phone_number": "1234567",
    "home_address": {
       "city": "Beograd",
       "zip_code": "11000",
       "address_1": "Bulevar Nikole Tesle 50"
    },
    "date_of_birth": "1991/02/25"
}
</pre>
