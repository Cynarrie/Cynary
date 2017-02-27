var port = (process.env.PORT || process.env.VMC_APP_PORT);
var host = (process.env.IP || process.env.VCAP_APP_HOST);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('./web'));
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/jark', function(req, res){
        
}
);

app.post('/jarkmanager', function(req, res){
        switch (req.body.q0) {
            case "Insert_Interface":
              res.send(req.body.q0);
            break;

        }
    }
);

app.listen(port);
