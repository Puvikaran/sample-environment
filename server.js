const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3010, function(){
    console.log('Server Started on Port 3010');
})