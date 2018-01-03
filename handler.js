const sayHello = require("./src/api")

module.exports.hello = (event, context, callback) => {
  // const message = sayHello()
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message,
  //     input: event,
  //   }),
  // };

  const path = event.path

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `hello ${path}`,
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.hello2 = (event, context, callback) => {
  // const message = sayHello()
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message,
  //     input: event,
  //   }),
  // };

  const path = event.path

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `hello2 ${path}`,
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};