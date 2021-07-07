import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = () => {

    const key = 'pk_test_51Gz33eA6exbqwJuMV78XM1ACmRlDdJ4HDIHG5XMKLsbFHE6OTyJm2rKpnHDoyie6ox3OORnfByGSXBF3gLrO9Pz100TAPd8HMp';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label = 'Pay now'
            name = 'NETFLIX'
            stripeKey = {key}
            token = {onToken}
            billingAddress
            shippingAddress
        />
    );
}

export default StripeButton;
