const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ankitkumar:root@ankit.yvp13zf.mongodb.net/student-api",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("connection is successfully");

    }).catch((e) => {
        console.log(e);
    });
