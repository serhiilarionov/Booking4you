# Booking4you based on LoopBack Node.js framework

**Install Node.js**

```sh
sudo apt-get update
sudo apt-get install nodejs

sudo apt-get install npm
```


**Install PostgreSQL**

```sh
sudo apt-get install postgresql postgresql-contrib
```

Login to the DB and create new database with user

```sh
sudo -u postgres psql

create database booking4you;

create user booking4you with password 'qwerty';

grant all privileges on database booking4you to booking4you;
```

**Install the project**

Clone the project to a path.

Install packages:

```sh
npm install
```

Create a configuration file from an example and configurate it

```sh
cp server/datasources.example.json server/datasources.json
nano server/datasources.json
```

Migrate database

```sh
node_modules/loopback-db-migrate/loopback-db-migrate.js up --datasource pgsql
```

Now you can run the application

```sh
node .
```

Browse your REST API at http://localhost:3000/explorer
Web server listening at: http://localhost:3000/


**Using Explorer**

Go to http://localhost:3000/explorer

Select User, then find /Users/login

Put credentials and make a request:

```json
    {
      "email": "admin@admin.com",
      "password": "admin"
    }
```

Copy token (ID in response) and put it to the header field 'accessToken' 

Now you can use API as authorized user
