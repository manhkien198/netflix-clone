import Layout from '../../../shared/Layout/index';
import Bg from '../../../assets/images/bg.jpg';
import { Link } from 'react-router-dom';
export default function SignIn() {
  return (
    <Layout>
      <div className='img-gradient'>
        <img
          src={Bg}
          alt='background'
          className='w-full h-full absolute inset-0'
        />
      </div>
      <div className='bg-transparent max-w-[450px] mx-auto mb-auto'>
        <div className='pb-10 px-16 pt-16 min-h-[660px] bg-black opacity-70 rounded flex flex-col box-border'>
          <div className='grow'>
            <h2 className='text-white text-3xl font-bold mb-10'>Sign In</h2>
            <input type="text" className='rounded mb-4' placeholder='Email or phone number'/>
            <input type="text" className='rounded mb-14' placeholder='Password'/>
            <button className='bg-red-500 w-full py-3 rounded'>Sign In</button>
            <div className='text-right mt-4 hover:underline text-sm mb-10 text-[#b3b3b3]'>
            <Link to='/loginhelp'>Need help?</Link>
            </div>
            <p className='text-[#737373] text-base'>New to Netflix?  <span>
            <Link to='/' className='hover:underline text-white'>Sign Up now.</Link></span></p>
            <p className='mt-4 hover:underline text-sm mb-10 text-[#b3b3b3]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
