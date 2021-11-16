import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStribe = price * 100;
  const publishableKey =
    "pk_test_51Gw26oL6t5y3P47AweDaHRiJyBecO8JhmRz1meuIHFpxUpXoeRMwopCxCXYPk0BIoaYtE1peisZ6y5TCTEFktjIH00z7Ev211G";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Food market"
      billingAddress
      shippingAddress
      image="images/tenor(2).gif"
      description={`Your total is $${price}`}
      amount={priceForStribe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
