import React from 'react';
import './stripe-button.component.scss';
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KC5f4FwtUBQUqi3i1YUN1b5qdox5oaIPY1hwv9gjCNHIdHhRznRSvsYy9mAshGwtBSJHbwvdPoebl2C6PqvD3ek00EFLrf8QN';

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image={"https://svgshare.com/i/CUz.svg"}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
