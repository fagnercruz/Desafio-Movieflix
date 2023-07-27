import Navbar from "components/Navbar";
import Login from "pages/Login";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MoviesDetails";
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";

const Routes = () => {
  return (
    <>
      <Router history={history}>
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
      </Router>
    </>
  );
};

export default Routes;
