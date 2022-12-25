import { useTranslation } from 'react-i18next';
import { MdArrowForwardIos } from 'react-icons/md';
import Bg from '../../assets/images/bg.jpg';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

const Banner = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <div className='sm:h-[643px] md:h-[807px] lg:h-[767.094px] absolute inset-0  border-b-8 border-[#222] b-0'>
        <div className='img-gradient z-10'>
          <img src={Bg} alt='background banner' className='w-full h-full' />
        </div>
      </div>
      <div className='relative z-20 mx-auto max-w-[950px] text-center sm:py-[20px] md:py-[100px] sm:px-[3%] md:px-[5%] max-h-[563px]'>
        <h1 className='text-5xl text-white font-bold mx-32'>{t('slogan')}</h1>
        <h2 className='py-4 px-10 text-3xl text-white'>{t('subtitle')}</h2>
        <div>
          <h3 className='text-xl text-white mx-16 pb-10'>
            {t('titleAddMail')}
          </h3>
          <div className='flex max-w-[700px] md:flex-row md:gap-0 md:items-stretch sm:items-center sm:flex-col sm:gap-5 mx-auto'>
            <div className='grow  sm:w-[500px]'>
              <input
                type='text'
                className='w-full h-full pl-5'
                placeholder='Email address'
                onChange={handleChangeEmail}
              />
            </div>
            <Link to='/signin' state={{ email }}>
              <button className='px-2 py-[11px] bg-[#e50914] border-l border-solid border-black rounded-r-[2px] flex justify-center items-center'>
                <span className='text-white text-[1.625rem] leading-none'>
                  Get Started
                </span>{' '}
                <MdArrowForwardIos />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
