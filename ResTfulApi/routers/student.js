const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/students", async (req, res) => {
    console.log(req.body);
    const user = new Student(req.body); // get the req from postman json file in Student
    try {
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }

})

router.get("/students", async (req, res) => {  // Read the Https Request

    try {
        const studentsData = await Student.find();
        res.send(studentsData);

    } catch (e) {
        res.send(e)
    }
})

// get the individual student data using id

router.get("/students/:id", async (req, res) => {
    try {

        const _id = req.params.id;
        const studentData = await Student.findById(_id);  // await -> it's till wait when the data will come 
        console.log(studentData);
        if (!studentData) {  // if data is not in students Data
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e); //500 internal server error
    }
})

router.get("/students/:phone", async (req, res) => {
    try {
        const _phone = req.params.phone;
        const studentData = await Student.findById(_phone);
        console.log(studentData);
        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})

// delete the students by id

router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deleteStudent) {
            return res.status(404).send();
        }
        else {
            res.send(deleteS2tudent);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})

// Update the students by id

router.patch("/students/:id", async (req, res) => {
    try {
        const updateStudents = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true  // new true -> give the updataed item in Https response
        });
        res.send(updateStudents);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.patch("/students/:id", async (req, res) => {
    try {
        const updateStudents = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true  // new true -> give the updataed item in Https response
        });
        res.send(updateStudents);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;