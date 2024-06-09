const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;


// Middleware
app.use(cors())
app.use(express.json());







app.get('/', (req, res) => {
	res.send('This is my portfolio')
});

app.listen(port, () => {
	console.log(`portfolio running on port no: ${port}`)
})