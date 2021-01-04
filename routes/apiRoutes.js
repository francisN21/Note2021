// required const for router and path
const router = require("express").Router();
const fs = require("fs");
// routers that talks to the backend
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{

  })
});
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{

  })
});
router.delete("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{

  })
});



// export so we can use all this data
module.exports = router;