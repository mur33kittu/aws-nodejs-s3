const express = require ('express');
const routes = require('./routes')

const app = express ();

app.use('/api', routes);

app.listen (3000, function () {
  console.log ('App listening in port', 3000);
});
