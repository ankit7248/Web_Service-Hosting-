const express = require("express");
// const { Collection, default: mongoose } = require("mongoose"); 

const Student = require("./models/students"); // define the models 
require("./db/conn");  // call the mongoose in express framework 

const studentRouter = require("./routers/student");

const app = express();  // use the real method of express


const port = process.env.PORT || 8000; // make the port no.

app.use(express.json()); // call the method inbuilt to recognize request object as json Object.

app.use(studentRouter);


//Promoise Method Used:---------

// app.post("/students", (req, res) => { // create the http request
//     console.log(req.body);
//     const user = new Student(req.body);  // All the data in User by Student(req.body)

//     user.save().then(() => {   // if the the data is stored in  database (mongoose) Use promise to check data is stored in dastabase or not
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })


app.listen(port, () => {  // call the port no. 
    console.log(`connection is setup at ${port}`);  // check our connection is successful or not
})

//express/json() is a method inbuit in express to recognize the incoming
// request Object as a Json Object. this method is called as middleware
// inh your application using the code: app.use(express.json());

