const express = require('express');
const app = express();

app.get('/', (req, res) =>{
	res.send({ hi: 'there'});
});

//injects an environment variable which is set in underlying run time during node 
//if heroku has a defined PORT use it otherwise use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);