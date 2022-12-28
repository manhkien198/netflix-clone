import Layout from '../../../shared/Layout/index';
import Bg from '../../../assets/images/bg.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import db, { auth } from '../../../services/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
export default function SignInForm() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const register = (e: any) => {
    e.preventDefault();
    if (emailRef.current != null && passwordRef.current != null) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authUser) => {
          if (authUser) {
            // (async () => {
            //   await addDoc(collection(db, "customers"), {
            //     id: authUser.user.uid,
            //     email: authUser.user.email,
            //   });

            // })();
            toast.success('Sign up sucessfully');
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  const signin = (e: any) => {
    e.preventDefault();
    if (emailRef.current != null && passwordRef.current != null) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authUser) => {
          if (authUser) {
            localStorage.setItem(
              'user',
              JSON.stringify({
                uid: authUser.user.uid,
                email: authUser.user.email,
              })
            );
            navigate('/');
          }
        })
        .catch((error) => toast.error(error.message));
    }
  };
  return (
    <Layout>
      <div className='img-gradient'>
        <img src={Bg} alt='background' className='w-full h-full opacity-50' />
      </div>
      <div className='bg-transparent max-w-[450px] mx-auto relative z-10'>
        <div className='pb-10 px-16 pt-16 min-h-[660px] bg-black opacity-70 rounded flex flex-col box-border'>
          <form className='grow'>
            <h2 className='text-white text-3xl font-bold mb-10'>Sign In</h2>
            <input
              type='text'
              ref={emailRef}
              className='rounded mb-4'
              placeholder='Email or phone number'
              defaultValue={state?.email ? state.email : ''}
            />
            <input
              ref={passwordRef}
              type='password'
              className='rounded mb-14'
              placeholder='Password'
            />
            <button className='bg-red-500 w-full py-3 rounded' onClick={signin}>
              Sign In
            </button>
            <div className='text-right mt-4 hover:underline text-sm mb-10 text-[#b3b3b3]'>
              <Link to='/loginhelp'>Need help?</Link>
            </div>
            <p className='text-[#737373] text-base'>
              New to Netflix?{' '}
              <span>
                <button
                  onClick={register}
                  className='hover:underline text-white'
                >
                  Sign Up now.
                </button>
              </span>
            </p>
            <p className='mt-4 hover:underline text-sm mb-10 text-[#b3b3b3]'>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
