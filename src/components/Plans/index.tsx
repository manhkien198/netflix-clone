import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ProductsProps } from '../../models';
import db from '../../services/firebase';

export default function Plans() {
  const [products, setProducts] = useState<ProductsProps>();
  useEffect(() => {
    getDocs(
      query(collection(db, 'products'), where('active', '==', true))
    ).then((querySnapshot) => {
      const products = {};
      querySnapshot.forEach((productDoc) => {
        const data = productDoc.data();
        // @ts-ignore
        products[productDoc.id] = data;
        getDocs(collection(productDoc.ref, 'prices')).then((docs) => {
          docs.forEach((doc) => {
            const priceData = doc.data();
            // @ts-ignore
            products[productDoc.id].prices = {
              priceId: doc.id,
              priceData: priceData,
            };
          });
        });
      });
      setProducts(products);
    });
  }, []);
  return (
    <div>
      {/* {
       Object.keys(products)?.length&&Object.keys(products)?.map((item:keyof ProductsProps )=>(
         <div>
           <h5>{products[`${item}`].productData.name}</h5>
         </div>
       ))
      } */}
    </div>
  );
}
