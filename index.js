const express = require('express');
const routerApi = require('./routers/index');

const app = express();
const port = 3000;

app.listen(port, () =>{
  console.log('Used the port 300')
});

routerApi(app);
/*app.get('/products',(req, res) => {
  res.send("hey hi")
})*/
