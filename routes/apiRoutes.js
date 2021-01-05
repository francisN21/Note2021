// required const for router and path
const router = require("express").Router();
const { notStrictEqual } = require("assert");
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
    const notesData = JSON.parse(data);

    notesData.push({
        title: req.body.title,
        text: req.body.text,
    });
    // add another input on the db
    fs.writeFile("./db/db.json", JSON.stringify(notesData), (err)=>{
      if (err) throw err;
      fs.readFile("./db/db.json", "utf8", (err,data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
      });
      return;
    });
  });
});
router.delete("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err,data)=>{
    if (err) throw err;
  })
});



// export so we can use all this data
module.exports = router;