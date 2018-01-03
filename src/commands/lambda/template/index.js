/**
 * Lambda function is a function, which receive event as condition to trigger it
 *
 * More info:
 *    + Overview
 *      @link https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
 *
 *    + Lambda in nodejs
 *      @link https://docs.aws.amazon.com/lambda/latest/dg/programming-model.html
 *      @link https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 * @type {{}}
 */
module.exports.handler = (event, data, callback) => {
  /**
   * Sample response fot API Gateway trigger
   * @type {{}}
   */
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      message: `Welcome to lambda function`,
      input: event
    })
  }

  // callback();     // Indicates success but no information returned to the caller.
  // callback(null); // Indicates success but no information returned to the caller.
  // callback(null, "success");  // Indicates success with information returned to the caller.
  // callback(error);    //  Indicates error with error information returned to the caller.
  callback(response)
}
