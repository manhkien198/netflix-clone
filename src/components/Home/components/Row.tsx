import { toast } from 'react-toastify';
import { Movie } from '../../../models';
import { useEffect, useState, ReactNode } from 'react';
import { AxiosResponse } from 'axios';
import { animated, useSpring } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import { useNavigate } from 'react-router-dom';
import { SKELETON_COUNTS } from '../../../constant';
import Skeleton from 'react-loading-skeleton';

interface RowProps {
  title: string;
  api: () => Promise<AxiosResponse<any, any>>;
  type: string;
}
const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};
export default function Row({ title, api, type }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>();
  const [loading, setLoading] = useState(false);
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });
  const navigate = useNavigate();
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await api();
      setMovies(res.data.results);
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  if (loading) {
    const skeletons = [];
    for (let i = 0; i <= SKELETON_COUNTS; i++) {
      skeletons.push(
        <div key={i} className='ml-5'>
          <Skeleton width={300} height={200} borderRadius={10} />
        </div>
      );
    }
    return (
      <div>
        <h3 className='ml-5'>
          <Skeleton width={150} />
        </h3>
        <div className='flex flex-row py-[20px]'>{skeletons}</div>
      </div>
    );
  }
  return (
    <>
      <h3 className='text-white text-2xl font-bold pl-5'>{title}</h3>
      <div className='container' {...bind}>
        {movies?.map((src) => (
          <animated.div
            onClick={() => type === 'movie' && navigate(`/movies/${src.id}`)}
            key={src.id}
            className='card'
            style={{
              ...style,
              backgroundImage: `url(https://image.tmdb.org/t/p/original${src.poster_path})`,
            }}
          />
        ))}
      </div>
    </>
  );
}
