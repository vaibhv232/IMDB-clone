import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import MovieList from "./components/movieList/index"
import Movie from './pages/movieDetail';
import Error from './pages/error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
