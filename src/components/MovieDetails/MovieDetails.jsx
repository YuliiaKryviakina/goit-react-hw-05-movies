import { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import { fetchMovieDetails } from "api/themoviedb";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieDetails.module.css";
import DetailsEl from "components/DetailsEl/DetailsEl";
import GoBack from "components/GoBack/GoBack";

const unknownImage ="https://images.prewarcar.com/pics/r2w-1200x800-products/3240/Paris_movie_2008_503RB.jpg";

const MovieDeatails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(moviesId);
        setMovieDetails(data);
      } catch (error) {
        console.log("error", error);
        setMovieDetails([]);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [moviesId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const genrsEls = (
    <ul className={css.ul}>
      {movieDetails.genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
  const backLinkHref = location.state?.from ?? "/";
  return (
    <div className={css.section}>
      <GoBack className={css.button} to={backLinkHref} />
      <div className={css.container}>
        <img
          className={css.img}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : unknownImage
          }
          alt={`movie's name: ${movieDetails.title}`}
        />
        <div>
          <DetailsEl title={"Overview"} text={movieDetails.overview} />

          <DetailsEl
            title={movieDetails.title}
            text={`User score: ${movieDetails.vote_average * 10} % `}
          />
          <DetailsEl title={"Genres"} text={genrsEls} />
        </div>
      </div>
      <div className={css.add_info}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet moviesId={moviesId} />
    </div>
  );
};

export default MovieDeatails;
