const express = require('express');
const path = require('path');
const app = express();

app.set('port', 9000);
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.use(express.static('./'));


module.exports = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
  console.log('Visit http://localhost:' + app.get('port') + '/example/ to check out the upload example')
})