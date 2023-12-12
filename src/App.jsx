import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Flixxit from "./pages/Flixxit";
import Player from "./pages/Player";
import SignUp from "./pages/SignUp";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/flixxit" element={<Flixxit />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
