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
      // make sure it shows the created object on db.json
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
    const deleteNotes = (req.body);
    const notes = JSON.parse(data);
      
    for(let i=0; i<notes.length; i++){
      if (notes[i].title === deleteNotes.title){
        notes.splice(i,1);
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err)=>{
          if (err) throw err;
          // make sure it shows the created object on db.json
          fs.readFile("./db/db.json", "utf8", (err,data) => {
            if (err) throw err;
            res.send(JSON.parse(data));
          });
          return;
        });
      }
    };
  })
});



// export so we can use all this data
module.exports = router;
