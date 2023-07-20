import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Header = lazy(() => import("./Header/Header"));
const Cast = lazy(() => import("./Cast/Cast"));
const ReviewComp = lazy(() => import("./ReviewComp/ReviewComp"));
// const NotFound = lazy(() => import("pages/NotFound/NotFound"));

export const App = () => {
  return (
    <div
      // style={{
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   fontSize: 40,
      //   color: "#010101",
      // }}
    >
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<ReviewComp />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};
