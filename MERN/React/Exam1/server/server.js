const express = require('express');
const app = express();
const port = 8000;
var cors = require('cors')
app.use(cors());

require("./config/mongoose.config");    
//app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
//app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
//const cors = require ('cors')
//app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/pirate.routes"); (app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

