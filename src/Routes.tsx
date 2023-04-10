import Navbar from "components/Navbar";
import Login from "pages/Login";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MoviesDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>

          <Route path="/movies" exact>
            <Movies />
          </Route>

          <Route path="/movies/:movieId">
            <MoviesDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
