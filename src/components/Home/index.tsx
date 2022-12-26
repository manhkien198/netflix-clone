import Nav from '../SignIn/Nav';
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { t } from 'i18next';
export default function Home() {
  return (
    <div>
      <Nav />
      <div className='sm:h-[643px] md:h-[807px] lg:h-[767.094px] absolute inset-0  border-b-8 border-[#222] b-0'>
        <div className='img-gradient z-10'>
          <img src='https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg' alt='background banner' className='w-full h-full' />
        </div>
          <div className='absolute bottom-20 left-10 flex justify-center items-center gap-4'>
            <button className="bg-white text-black py-2 px-6 flex justify-center items-center gap-2 rounded">
              <FaPlay/> {t('play')}
            </button>
            <button className="bg-slate-600 text-white py-2 px-6 flex justify-center items-center gap-2 rounded">
              <AiOutlineInfoCircle/> {t('info')}
            </button>
          </div>
      </div>
    </div>
  );
}
