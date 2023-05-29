const app = require("./app");
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000;
app.listen(PORT,(req, res) => {
    console.log(`server started  on port ${PORT}/`);
});