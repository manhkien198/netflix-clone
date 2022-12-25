import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';
import Tv from '../../assets/images/tv.png';
export default function Media() {
  const { t } = useTranslation();
  const Section = tw.section`py-[70px] px-[45px] border-b-8 border-[#222] bg-black relative md:mt-[156px] lg:mt-[122.094px]`;
  return (
    <Section>
      <div className='flex sm:flex-wrap md:flex-nowrap  sm:justify-center md:justify-between items-center max-w-[1100px] mx-auto gap-10'>
        <div className='w-[52%]'>
          <h2 className='text-white text-[3.125rem]'>
            {t('titleFirstSection')}
          </h2>
          <p className='text-[1.625rem] text-white'>{t('descFirstSection')}</p>
        </div>
        <div className='w-[48%] h-full relative z-10'>
          <img
            src={Tv}
            alt='Tv'
            className='img z-10'
          />
          <div className='absolute inset-0 max-h-[54%] max-w-[73%] top-[48%] left-[50%] video w-full h-full z-0'>
            <video autoPlay playsInline muted loop>
              <source src='/video-tv.m4v' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </Section>
  );
}
