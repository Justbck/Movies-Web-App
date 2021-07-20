import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import '../PlansScreen/PlansScreen.styles.scss';


function PlansScreen () {

    const [products, setProducts] = useState([]);
    
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

    console.log(products)

    return (
        <div className = "plansScreen">
            {/*descructoring*/}
            {Object.entries(products).map(([productId, productData]) => {
                //is user subscribtion on?
                return (
                    <div>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>

                        <button>
                            Subscribe
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default PlansScreen;