// required const for router and path
const router = require("express").Router();
const fs = require("fs");
// routers that talks to the backend
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{
    if (err) throw err;
    
  })
});
router.delete("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{
    if (err) throw err;
  })
});



// export so we can use all this data
module.exports = router;