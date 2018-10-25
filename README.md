# Notes App Back End

This is the back end part for notes managment project using Node.js and express.

The front end project is coded using angular and you could find the front end repository [here](https://github.com/mtaweela/notes-app-web-FE).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To install the project, you need to get [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) and [mongo](https://www.mongodb.com/) runing on your machine.

Also, if you want to run the project inside docker container, you will need to get [docker](https://www.docker.com/) and docker-compose running on your machine.
### Installing
Once you have those tools, you could download the source code and go to the directory containing the source code and run 

```
npm install
```

After installing, you will need to add a configuration file with the name config.json inside the folder /server/config inside the project.

The file content should be something like this:

```
{
  "test": {
    "PORT": 3600,
    "MONGODB_URI": "mongodb://127.0.0.1:27017/TodoAppTest",
    "JWT_SECRET": "kjdi2u3b9238ge9f8gbp8qw398gv18"
  },
  "development": {
    "PORT": 3500,
    "MONGODB_URI": "mongodb://127.0.0.1:27017/TodoApp",
    "JWT_SECRET": "2n3i2932x8m329rx3y270xn2r730cn2"
  }
}

```

Now, you will be able to run the server and call the APIs to get or add new notes.

First of all you have to run the server by the following command:

```
npm start
```

Now you could call the APIs either in the browser or using postman.

You also could try the front end app by accessing it on  http://localhost:3000/ (Note that the user links are not working yet)


#### Runing inside Docker Container

To run the project inside container, You need to get docker and docker compose runing on your machine at first.

After that, you will the following configuration file inside the folder /server/config inside the project.
```
{
  "test": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://mongo:27018/TodoAppTest",
    "JWT_SECRET": "kjdi2u3b9238ge9f8gbp8qw398gv18"
  },
  "development": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://mongo:27018/TodoApp",
    "JWT_SECRET": "2n3i2932x8m329rx3y270xn2r730cn2"
  }
}

```

Then, You could run the following command to get the project up and runing in its container:
```
docker-compose up
```


## Running the tests

To run the tests to make sure that every thing is going Okay, you have to to run the following command 

```
npm run test
```

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [npm](https://www.npmjs.com/) - Package manager for JavaScript and the world’s largest software registry.
* [Express](https://expressjs.com/) - Minimalist web framework for Node.js.
* [mongo](https://www.mongodb.com/) - Free and open-source cross-platform document-oriented database program.
* [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.
* [mocha](https://mochajs.org/) - Feature-rich JavaScript test framework running on Node.js.
* [docker](https://www.docker.com/) - Open platform for developers and sysadmins to build, ship, and run distributed applications.

## Authors

* **Mohamed Taweela** - *Initial work* - [mtaweela](https://github.com/mtaweela)

## Acknowledgments

* Most of the code was obtained from tutorials made by [Andrew Mead](https://www.udemy.com/user/andrewmead/).