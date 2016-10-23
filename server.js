var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./index.html'));
});
// Soon be moved to isomorphic react
app.use(express.static('dist'));

/**
 * Error Handlers
 */
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000!`);
});