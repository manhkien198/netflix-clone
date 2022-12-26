import { Movie } from '../models'

interface RowProps{
movies:Movie[];
title:string
}
export default function Row({title,movies}:RowProps) {
  return (
    <>
    <h3 className='text-white text-xl'>{title}</h3>
    <div className="flex overflow-x-scroll w-full">
        {movies.map(src => (
          <div
            key={src.id}
            className="card"
          >
            <img src={`https://image.tmdb.org/t/p/original${src.poster_path}`} alt="poster" className='w-full h-full' />
          </div>
        ))}
      </div>
    </>
  )
}
