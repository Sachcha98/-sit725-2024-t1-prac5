let express = require('express');
let app = express();

let port = 3000;

app.use(express.static(__dirname +'/'));
app.get('/', (req, res)=>{
    res.render('index.html');
})

app.get('/addTwoNumbers', (req, res)=>{

    let value1 = req.query.num1;
    let value2 = req.query.num2;

    // let result = Number(value1) + Number(value2);
    let result = parseInt(value1) + parseInt(value2);

    let response = {
        data:result,
        statusCode:200,
        message:'Success'
    };

    res.json(response);
})

app.listen(port, ()=>{
    console.log("App listening to: "+port)
});