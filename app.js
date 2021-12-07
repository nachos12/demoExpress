const express = require('express');
//creer l app
const app = express();
const port = 3000;

const userRoute = require('./routes/users.route');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//middleware
app.use(express.json());

//utilisation route
app.use(userRoute);


app.listen(port, () => {
    console.log(`
                Example app listening at http: //localhost:${port}`)
});