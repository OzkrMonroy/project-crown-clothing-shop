import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51ICBC5FYrunz8MsFoONWHlTHZXl2GpiICqAP3YAUMjFvxMs10acYm4CcTfcmwb8BZcd4kJLNGLwtuvOQ5oIbb1p900FCm2iwAX";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment successful");
    }).catch(error => {
      alert("There was an issue with your payment. Please sure you use the provided credit cart");
      console.log("Payment error: ", JSON.parse(error));
    })
  }

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton