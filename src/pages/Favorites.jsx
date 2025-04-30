import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const {favorites} = useMovieContext();

  if ( favorites){
    return (
      <div className="favorites">
          <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie ={movie} key={movie.id}/>
          ))}
        </div>
        </div>
  );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite movie Yet</h2>
      <p>Start adding your Favorite movie here and they will appear here .This is the favorite page.</p>
    </div>
  );
}
export default Favorite;