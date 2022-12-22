import { useTranslation } from 'react-i18next';
import { MdArrowForwardIos } from 'react-icons/md';
import Bg from '../../assets/images/bg.jpg';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='sm:h-[643px] md:h-[807px] lg:h-[767.094px] absolute inset-0  border-b-8 border-[#222] b-0'>
        <div className='img-gradient z-10'>
          <img src={Bg} alt='background banner' className='w-full h-full' />
        </div>
      </div>
      <div className='relative z-20 mx-auto max-w-[950px] text-center py-[100px] sm:px-[3%] md:px-[5%] max-h-[563px]'>
        <h1 className='text-5xl text-white font-bold mx-32'>{t('slogan')}</h1>
        <h2 className='py-4 px-10 text-3xl text-white'>{t('subtitle')}</h2>
        <form>
          <h3 className='text-xl text-white mx-16 pb-10'>
            {t('titleAddMail')}
          </h3>
          <div className='flex max-w-[700px] mx-auto'>
            <div className='grow'>
              <input
                type='text'
                className='w-full h-full pl-5'
                placeholder='Email address'
              />
            </div>
            <button className='text-white py-2 px-4 bg-[#e50914] rounded-r text-[1.625rem] flex justify-center items-center'>
              <span>Get Started</span>{' '}
              <MdArrowForwardIos style={{ margin: 0 }} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Banner;
