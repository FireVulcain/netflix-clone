import Image from 'next/image'
import { Movie } from '../typings'

interface Propos {
  movie: Movie
}
function Thumbnail({ movie }: Propos) {
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 lg:h-56 lg:min-w-[400px]`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
