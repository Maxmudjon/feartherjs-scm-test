const payment = require('./payment/payment.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(payment);
};
