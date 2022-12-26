import { toast } from 'react-toastify';
import { Movie } from '../models';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { animated, useSpring } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import { useNavigate } from 'react-router-dom';

interface RowProps {
  title: string;
  api: () => Promise<AxiosResponse<any, any>>;
}
const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};
export default function Row({ title, api }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>();
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
    try {
      const res = await api();
      setMovies(res.data.results);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <h3 className='text-white text-2xl font-bold pl-5'>{title}</h3>
      <div className='container' {...bind}>
        {movies?.map((src) => (
          <animated.div
            onClick={() => navigate(`/movies/${src.id}`)}
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
