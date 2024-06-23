Yodlr Front End Engineer Code/Design Challenge
=======================

## Start The Servers

For each directory, follow these steps:

* Navigate to the Directory:

```
cd backend
```

* Install dependencies:

```
npm install
```

* Run the application:

```
npm start
```

Once the servers are running, you can access the app by opening your browser to [http://localhost:3000](http://localhost:3000).

To stop the servers, press CTRL-C.


## REST API

The Users JSON REST API is exposed at [http://localhost:3001/users](http://localhost:3001).


#### API Endpoints

* **/users**  
HTTP GET: returns array of all users  
HTTP POST: creates a new user, returns the created user data
* **/users/:id**  
HTTP GET: returns the user with given id (numeric, auto-incrementing).  HTTP 404 if user not found  
HTTP PUT: updates the user with given id and returns updated record. HTTP 404 if user not fund.  
HTTP DELETE: removes the users with given id, returns nothing (HTTP 204)

Here is an example of results returned from HTTP GET on http://localhost:3001/users:
```
[{"id":1,"email":"kyle@getyodlr.com","firstName":"Kyle","lastName":"White","state":"active"},  
{"id":2,"email":"jane@getyodlr.com","firstName":"Jane","lastName":"Stone","state":"active"},  
{"id":3,"email":"lilly@getyodlr.com","firstName":"Lilly","lastName":"Smith","state":"pending"},  
{"id":4,"email":"fred@getyodlr.com","firstName":"Fred","lastName":"Miles","state":"pending"},  
{"id":5,"email":"alex@getyodlr.com","firstName":"Alexandra","lastName":"Betts","state":"pending"}]
```


#### App
The app can perform the same Create, Read, Update, and Delete (CRUD) operations by interfacing with the REST API.


## License

We have licensed this project under the MIT license so that you may use this for a portfolio piece (or anything else!).
