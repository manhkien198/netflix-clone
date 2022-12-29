import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Entry, ProductsProps } from '../../models';
import db from '../../services/firebase';
import { useAppSelector } from '../../store/hooks';
import { authSelect } from '../../store/slices/authSlice';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';

export default function Plans() {
  const [products, setProducts] = useState<ProductsProps>();
  const { user } = useAppSelector(authSelect);
  const [subscription, setSubscription] = useState<{ [key: string]: string }>();
  console.log('subscription :', subscription);
  useEffect(() => {
    if (user?.id) {
      getDocs(
        collection(collection(db, 'customers'), user.id, 'subscription')
      ).then((querySnapshot) => {
        console.log('querySnapshot :', querySnapshot);
        querySnapshot.forEach(async (sub) => {
          setSubscription({
            role: sub.data().role,
            current_period_end: sub.data().current_period_end.second,
            current_period_start: sub.data().current_period_start.second,
          });
        });
      });
    }
  }, [user?.id]);

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
  const loadCheckout = async (priceId: string) => {
    const docRef = await addDoc(
      collection(doc(db, 'customers', user.id), 'checkout_sessions'),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    onSnapshot(docRef, async (doc) => {
      const { error, sessionId } = doc.data() as any;
      if (error) {
        toast.error(error.message);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          process.env.REACT_APP_API_KEY_STRIPE as string
        );
        stripe?.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <>
      {products &&
        Object.entries(products as ProductsProps)?.map(
          ([productKey, productData]: Entry<ProductsProps>) => (
            <div className='flex justify-between mt-5' key={productKey}>
              <div>
                <h5 className='text-xl'>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              <button
                className='text-white bg-red-500 px-5 rounded '
                onClick={() => loadCheckout(productData.prices.priceId)}
              >
                Subscribe
              </button>
            </div>
          )
        )}
    </>
  );
}
