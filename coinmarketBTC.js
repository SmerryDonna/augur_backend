var axios = require('axios');


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var config = {
  method: 'get',
  url: 'https://betconix.com/api/v1/all',
  headers: { }
};

axios(config)
.then(function (dataponse) {
    const data = dataponse.data;
    console.log(data[0]);
    for (var i = 0; i < data.length; i++) {
      if(data[i].trading_pairs == "BTC_EUR"){
         res.send({"btc_price" : data[i].last_price}); // 1
         //.send(String(data[i].last_price)); // 2

         break; 
     }
    }
})
.catch(function (error) {
  console.log(error);
});

  
})

app.listen(port, () => {
  console.log("Example app listening on port  " + port)
})