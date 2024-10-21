import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=e96b3fb2d85e2e077e0ebd30d5fe6572&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results); // Update state with movie results
      } catch (error) {
        console.error("Error fetching the movie data", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-gray-800"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Use TMDb image URL
            alt={movie.title}
            className="w-full h-72 object-cover transition-opacity duration-300 hover:opacity-80"
            style={{ objectPosition: 'center' }} // Center the image within the container
          />
          <div className="p-4 text-center">
            <h2 className="mt-2 text-lg font-semibold text-white">{movie.title}</h2>
            <button
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded transition duration-200 hover:bg-green-600 transform hover:translate-y-1"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
