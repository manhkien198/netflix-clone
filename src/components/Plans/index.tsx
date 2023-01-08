import { loadStripe } from '@stripe/stripe-js';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Entry, ProductsProps } from '../../models';
import db from '../../services/firebase';
import { useAppSelector } from '../../store/hooks';
import { authSelect } from '../../store/slices/authSlice';
import { selectCommon } from '../../store/slices/common';

export default function Plans() {
  const [products, setProducts] = useState<ProductsProps>();
  const { user } = useAppSelector(authSelect);
  const { subscription } = useAppSelector(selectCommon);
  const { t } = useTranslation();

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
    const checkoutSessionsRef = collection(
      doc(db, 'customers', user.uid),
      'checkout_sessions'
    );
    const docRef = await addDoc(checkoutSessionsRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
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
          ([productKey, productData]: Entry<ProductsProps>) => {
            const isCurrentPackage = productData.name
              ?.toLowerCase()
              .includes(subscription?.role as string);
            return (
              <div className='flex justify-between mt-5' key={productKey}>
                <div>
                  <h5 className='text-xl'>{productData.name}</h5>
                  <h6>{productData.description}</h6>
                </div>
                <button
                  className={
                    isCurrentPackage
                      ? 'text-black bg-slate-400 rounded px-5'
                      : 'text-white bg-red-500 px-5 rounded'
                  }
                  onClick={() =>
                    !isCurrentPackage &&
                    loadCheckout(productData.prices.priceId)
                  }
                >
                  {!isCurrentPackage ? t('subscribe') : t('subscribed')}
                </button>
              </div>
            );
          }
        )}
    </>
  );
}
