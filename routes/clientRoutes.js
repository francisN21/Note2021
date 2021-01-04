// required const for router and path
const router = require("express").Router();
const path = require("path");

// connecting front end to the backend
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// export
module.exports = router;