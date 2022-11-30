import MovieCard from "../../components/moviecard/MovieCard"

export default function MoviePage(props) {
  return (
    props.movies.map(movie => {
      return <MovieCard key={movie.title} movie={movie} />
    })
  )
}