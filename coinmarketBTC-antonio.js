var axios = require('axios');


const express = require('express')
const app = express()
const port = 3000


// USAGE: localhost:3000/price/BTC_EUR
app.get(
  '/price/:pair',  
  async (req, res) => {
    try {
      const btcPriceEndpoint = "https://betconix.com/api/v1/all";
      const response = await axios.get(btcPriceEndpoint);
      const data = response.data;
      const trading_pairs = req.params.pair;

      var found = false;
      for (var i = 0; i < data.length; i++) {
        if(data[i].trading_pairs == String(trading_pairs)){
           res.send(
            {
              "success":true,
              "last_price" : data[i].last_price
            });
           found = true;
           break;
       }
      }
      if (!found) {
        res.send(
        {
          "success":false,
          "message" : "unable to find requested pair"
        });
      }
    }
    catch (error) {
      res.send(
      {
        "success":false,
        "message":error
      });
    }
  }
)

app.listen(port, () => {
  console.log("Example app listening on port  " + port)
})