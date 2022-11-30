import "./App.css";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import ActorsListPage from "../actorlistpage/ActorListPage";
import LoginPage from "../loginpage/LoginPage";
import MovieDetailpage from "../moviedetailpage/MovieDetailPage";
import MoviesListPage from "../movieslistpage/MoviesListPage";
import { Routes, Route } from "react-router-dom";
import {movies} from '../../data.js'

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailpage movies={movies} />} />
            <Route path="/actors" element={<ActorsListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}
