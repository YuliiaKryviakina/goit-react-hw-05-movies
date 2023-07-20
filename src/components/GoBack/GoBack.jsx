import { Link } from "react-router-dom";
import css from "./GoBack.module.css";

const GoBack = ({ to }) => {
  return (
    <Link className={css.button} to={to}>
      ← Go back
    </Link>
  );
};

export default GoBack;
