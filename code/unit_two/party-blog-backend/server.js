const express = require('express');
const app = express();
const port = 3000;

//set us a handler to respond to requests to the root path

app.get('/', function(request, response){
    response.send('Hello World, you are on the homepage');
});


app.listen(port, function(){
    console.log(`Express is listenting on port: ${port}!`)
})