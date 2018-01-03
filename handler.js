const sayHello = require("./src/api")

module.exports.hello = (event, context, callback) => {
  const message = sayHello()
  const path = event.path

  const response = {
    statusCode: 200,
    headers: {
      // Required for CORS support to work
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify({
      message: `hello ${path}: ${message}`,
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.hello2 = (event, context, callback) => {
  const path = event.path

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `hello2 ${path}`,
      input: event,
    }),
  };

  callback(null, response);
};