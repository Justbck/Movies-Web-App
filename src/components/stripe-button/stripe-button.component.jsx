import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = () => {
   
    const key = 'pk_test_51Gz33eA6exbqwJuMV78XM1ACmRlDdJ4HDIHG5XMKLsbFHE6OTyJm2rKpnHDoyie6ox3OORnfByGSXBF3gLrO9Pz100TAPd8HMp'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Netflix'
            billingAddress
            shippingAddress
            token = {onToken}
            stripeKey = {key}
        />
    )
}

export default StripeCheckoutButton;