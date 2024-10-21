import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import BookSeat from "./BookSeat";
import BookingConfirmation from "./BookingConfirmation";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book-seat" element={<BookSeat />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
