const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Emial id already present"],
        validate(value) {  // we take the email in value by user 

            if (!validator.isEmail(value)) {  // its not a valid email we throw error
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

// we will create a new Collection
// We define the models

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;