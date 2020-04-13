'use strict';


const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src')); // html
// app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 3020, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});
