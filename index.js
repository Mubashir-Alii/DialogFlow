// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Webhook endpoint to receive requests from Dialogflow
// app.post('/webhook', async (req, res) => {
//   try {
//     const orderId = req.body.queryResult.parameters.orderId;

//     // Make a POST request to fetch the shipment date based on the order ID
//     const response = await axios.post('', {
//       orderId: orderId,
//     });

//     // Extract the shipment date from the response
//     const shipmentDate = response.data.shipmentDate;

//     // Prepare the WebhookResponse
//     const webhookResponse = {
//       fulfillmentMessages: [
//         {
//           text: {
//             text: [`The shipment date for order ${orderId} is ${shipmentDate}.`],
//           },
//         },
//       ],
//     };

//     // Send the WebhookResponse back to Dialogflow
//     res.json(webhookResponse);
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Start the server
// app.listen(8080, () => {
//   console.log('API server listening on port 8080');
// });
