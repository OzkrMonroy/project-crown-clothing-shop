import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51ICBC5FYrunz8MsFoONWHlTHZXl2GpiICqAP3YAUMjFvxMs10acYm4CcTfcmwb8BZcd4kJLNGLwtuvOQ5oIbb1p900FCm2iwAX";

  const onToken = token => {
    console.log(token);
    alert("Payment Success");
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