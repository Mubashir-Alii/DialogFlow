const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  try {
    const orderID = req.body.queryResult.parameters.orderID;
    let fulfillmentText = '';

    if (orderID === '31313') {
      // Simulating the API response for testing purposes
      const shipmentDateISO = '2023-06-29T21:31:25.565Z';

      // Convert shipmentDate from ISO 8601 to human-readable format
      const shipmentDate = moment(shipmentDateISO).format('dddd, DD MMM YYYY');

      // Prepare the fulfillment message for a valid order ID
      fulfillmentText = `The shipment date for order ${orderID} is ${shipmentDate}.`;
    } else {
      // Prepare the fulfillment message for an invalid order ID
      fulfillmentText = `Invalid order ID. Please Try again`;
    }

    // Prepare the webhook response
    const webhookResponse = {
      fulfillmentMessages: [
        {
          text: {
            text: [fulfillmentText],
          },
        },
      ],
    };

    // Send the webhook response
    res.json(webhookResponse);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(8080, () => {
  console.log('Webhook server listening on port 8080');
});
