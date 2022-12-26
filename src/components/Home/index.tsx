import { t } from 'i18next';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import Nav from '../SignIn/Nav';
import Row from '../Row';
import { api } from '../../api/api';
export default function Home() {
  return (
    <div>
      <Nav />
      <div className='sm:h-[643px] md:h-[807px] lg:h-[767.094px]'>
        <div className='img-gradient z-10'>
          <img
            src='https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg'
            alt='background banner'
            className='w-full h-full'
          />
        </div>
        <div className='absolute bottom-20 left-10 flex justify-center items-center gap-4'>
          <button className='bg-white text-black py-2 px-6 flex justify-center items-center gap-2 rounded'>
            <FaPlay /> {t('play')}
          </button>
          <button className='bg-slate-600 text-white py-2 px-6 flex justify-center items-center gap-2 rounded'>
            <AiOutlineInfoCircle /> {t('info')}
          </button>
        </div>
      </div>
      <div className='mt-20'>
        <Row api={api.getTrending} title='Trending Now' />
      </div>
      <div className='mt-10'>
        <Row api={api.getTv} title='TV' />
      </div>
      <div className='mt-10'>
        <Row api={api.getTopRated} title='Top Rated' />
      </div>
    </div>
  );
}
