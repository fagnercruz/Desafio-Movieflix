import { Movie } from 'utils/typesUtils'
import './styles.css'

type Props = {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="moviecard-container">
      <img
        src={ movie.imgUrl }
        alt={ movie.title }
        className="movie-image"
        data-testid="movie-image"
      />

      <div className="movie-info-container">
        <h3 className="movie-title">
          { movie.title }
        </h3>
        <span className="movie-year">{ movie.year }</span>
        <h4 className="movie-subtitle">{ movie.subTitle }</h4>
      </div>
    </div>
  )
}

export default MovieCard