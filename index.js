const PORT = process.env.PORT || "8080";
const api = require('./server');

api.listen(PORT, () => {
  console.log('Listening into ${PORT}')
});
