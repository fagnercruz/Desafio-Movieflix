import "./App.css";
import "assets/styles/custom.scss";
import Navbar from "components/Navbar";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MoviesDetails";

function App() {
  return (
    <>
      <Navbar />
      <MoviesDetails />
    </>
  );
}

export default App;
