import React from 'react';
import './stripe-button.component.scss';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KC5f4FwtUBQUqi3i1YUN1b5qdox5oaIPY1hwv9gjCNHIdHhRznRSvsYy9mAshGwtBSJHbwvdPoebl2C6PqvD3ek00EFLrf8QN';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token,
            }
        })
            .then(res => {
                alert('Payment successful')
            }).catch(err => {
            console.log("Payment error: ", JSON.parse(err));
            alert("There was an issue with your payment. Please sure that you was use the provided credit cardheroku.")
        });
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
