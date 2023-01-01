import { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../api/api';
import { UNAVAILABLE_IMG } from '../../constant/index';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  movieSelect,
  setInfo,
  setLoading,
} from '../../store/slices/movieSlice';
export default function MovieDetail() {
  const { id } = useParams();
  const { info, loading } = useAppSelector(movieSelect);
  const dispatch = useAppDispatch();
  const fetchMovieDetail = async () => {
    dispatch(setLoading(true));
    try {
      const res = await api.getInfo(id as string);
      dispatch(setInfo(res.data));
      dispatch(setLoading(false));
    } catch (error: any) {
      toast.error(error.message);
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchMovieDetail();
  }, []);
  if (loading) {
    return (
      <SkeletonTheme baseColor='#fff' highlightColor='#ccc'>
        <article className='flex flex-row flex-wrap lg:flex-nowrap items-center px-20 mt-20 m-auto gap-20'>
          <Skeleton width={400} height={500} />
          <div className='gap-10 flex flex-col items-start'>
            <h4 className='text-3xl text-left w-full'>
              <Skeleton width={300} height={40} />
            </h4>
            <p className='leading-10 text-left w-full'>
              <Skeleton count={3} width={`100%`} />
            </p>
            <p className='text-left w-full'>
              <Skeleton width={`100%`} />
            </p>
            <p className='text-left w-full'>
              <Skeleton width={`100%`} />
            </p>
            <p className='text-left w-full'>
              <Skeleton width={`100%`} />
            </p>
          </div>
        </article>
        <div className='flex justify-center items-center my-5'>
          <Skeleton width={150} height={40} />
        </div>
      </SkeletonTheme>
    );
  }
  return (
    <div className='mt-10'>
      <article className='flex flex-row md:flex-wrap lg:flex-nowrap gap-20 items-center px-20 mt-20 m-auto justify-between'>
        <img
          className='aspect-[1/1.2]	'
          src={
            info?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${info?.poster_path}`
              : UNAVAILABLE_IMG
          }
          alt={info?.title}
        />
        <div className=' flex flex-col items-center'>
          <h4 className='text-3xl mb-10 text-left w-full'>{info?.title}</h4>
          <p className='leading-10 text-left w-full'>{info?.overview}</p>
          <p className='mt-5 text-left w-full'>
            Releases : {info?.release_date}
          </p>
          <p className='mt-5 text-left w-full'>
            Vote count : {info?.vote_count}
          </p>
          <p className='mt-5 text-left w-full'>
            Vote average : {info?.vote_average}
          </p>
        </div>
      </article>
      <div className='flex justify-center items-center my-5'>
        <button className='rounded bg-sky-500 p-2'>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </div>
  );
}
