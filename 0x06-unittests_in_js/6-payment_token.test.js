const assert = require('assert');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response from the API', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
