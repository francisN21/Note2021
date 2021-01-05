// express
const express = require("express");
const app = express();
// require routes from routes folder
const apiRoutes = require("./routes/apiRoutes");
const clientRoutes = require("./routes/clientRoutes");
// PORT
const PORT = process.env.PORT || 5050;
// to read html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// to use JS and CSS
app.use(express.static("public"));
// allows the useage of routes
app.use("/api", apiRoutes);
app.use("/", clientRoutes);
// localhost!
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));