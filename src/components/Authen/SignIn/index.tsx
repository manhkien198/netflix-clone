import Layout from '../../../shared/Layout/index';
import Bg from '../../../assets/images/bg.jpg';
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
      <div className='bg-transparent min-h-full max-w-[450px] mx-auto mb-[-236px] relative'>
        <div className='pb-10 px-16 pt-16 min-h-[660px] bg-black opacity-70 rounded flex flex-col box-border'>
          <div className='grow'>
            <h2 className='text-white text-3xl font-bold'>Sign In</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
