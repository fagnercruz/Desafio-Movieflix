import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
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

          <PrivateRoute path="/movies">
            <Movies />
          </PrivateRoute>

          <PrivateRoute path="/movie/:movieId">
            <MoviesDetails />
          </PrivateRoute>

        </Switch>
      </Router>
    </>
  );
};

export default Routes;
