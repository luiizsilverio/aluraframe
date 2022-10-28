var http = require('http');
const app = require('./config/express');
// app = require('./config/express');

const cors = require('cors');

app.use(cors());

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando a porta: ' + this.address().port);
});

