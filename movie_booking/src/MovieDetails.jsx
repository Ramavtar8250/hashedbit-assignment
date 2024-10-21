import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // For Vite projects
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e96b3fb2d85e2e077e0ebd30d5fe6572&language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching the movie details", error);
      }
    };

    fetchMovieDetails();
  }, [id, API_URL]);

  if (!movie) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row p-5 md:p-10 bg-black text-white">
      <div className="flex-1 md:mr-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 md:mt-0 mt-5">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="mt-4 text-gray-300">{movie.overview}</p>
        <button
          onClick={() => navigate(`/book-seat`)}
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Book Seat
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
