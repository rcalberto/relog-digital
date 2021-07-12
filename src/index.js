const express = require('express');
const path = require('path');

const http = require ('http');

const app = express();
const server= http.createServer(app);




app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});