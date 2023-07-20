import { useEffect } from "react";
import { useCallback } from "react";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleSearchSubmit = useCallback(
    async (query) => {
      try {
        setIsLoading(true);
        const results = await fetchMovieByQuery(query);
        setSearchQuery(results);
        searchParams.set("query", query);
        navigate(`/movies?${searchParams.toString()}`);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setSearchQuery([]);
      }
    },
    [navigate, searchParams]
  );

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieId) return;
      try {
        const results = await fetchMovieByQuery(movieId);
        setSearchQuery(results);
      } catch (error) {
        console.log("error", error);
        setSearchQuery([]);
      }
    };
    fetchMovies();
  }, [movieId]);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearchSubmit(query);
    }
  }, [searchParams, handleSearchSubmit]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Searcbar onSubmit={handleSearchSubmit} />
      <MoviesList list={searchQuery}></MoviesList>
    </>
  );
};

export default Movies;
