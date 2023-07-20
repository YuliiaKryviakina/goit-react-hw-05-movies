import { Link } from "react-router-dom";
import css from "./Trending.module.css";
import PropTypes from "prop-types";

const Trending = ({ movies }) => {
  return (
    <ul className={css.trendingList}>
      {movies.map(({ id, title }) => (
        <li className={css.trendingEl} key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Trending;

Trending.propTypes = {
  list: PropTypes.string,
};
