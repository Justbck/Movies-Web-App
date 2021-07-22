import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/slices/userSlice';
import '../PlansScreen/PlansScreen.styles.scss';
import { loadStripe } from '@stripe/stripe-js';


function PlansScreen () {

    const [products, setProducts] = useState([]);
    const [subscribtion, setSubscription] = useState(null);
    //pull user from redux store
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                });
            });
        });
    },[user.uid]);
    
    useEffect(() => {
        db.collection('products')
        //select products which are active
        .where('active', '==', true)
        .get()
        .then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ("prices").get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                        
                    }
                })
                setProducts(products);
            });
        });
    },[]);

    const loadCheckout = async (priceId)  => {
        const docRef = await db
        .collection("customers")
        .doc(user.uid).collection("checkout_sessions")
        //add checkout session collection to db
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot(async(snap) => {
            //desturture
            const { error, sessionId } = snap.data();

            //alert user on errors
            if (error) {
                alert(`An error occured: ${error.message}`)
            }

            //redirect user to checkout once there is a new session
            if (sessionId) {
                const stripe = await loadStripe("pk_test_51Gz33eA6exbqwJuMV78XM1ACmRlDdJ4HDIHG5XMKLsbFHE6OTyJm2rKpnHDoyie6ox3OORnfByGSXBF3gLrO9Pz100TAPd8HMp")
            
            stripe.redirectToCheckout({ sessionId });
            }
        })
    };

    return (
        <div className = "plansScreen">
            {/*descructoring*/}
            {Object.entries(products).map(([productId, productData]) => {
                //is user subscribtion on?
                const isCurrentPackage = productData.name
                    ?.toLowerCase()
                    .includes(subscribtion?.role);

                return (
                    <div>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>

                        <button onClick = {() => 
                            !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            { isCurrentPackage ? 'Current Package' : 'Subscribe' }
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default PlansScreen;