import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ list }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {list &&
        list.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}    
    </ul>
  );
};

export default MoviesList;
