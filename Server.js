const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => {
    res.send('Augur Application listening on port:    ' + port);
});

app.listen(port, () => console.log(`Augur Application listening on port ${port}!`))