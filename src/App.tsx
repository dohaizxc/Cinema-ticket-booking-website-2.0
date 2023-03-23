import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Movies } from "./Pages/Movies/Movies";
import { Cinemas } from "./Pages/Cinemas/Cinemas";
import { NotFound } from "./components/NotFound";
import { MovieDetails } from "./Pages/Movies/MovieDetails";
import { Booking } from "./Pages/BookTicket/Booking";
import { LogIn } from "./Pages/Auth/LogIn";
import { SignUp } from "./Pages/Auth/SignUp";
import { Profile } from "./Pages/Auth/Profile";
import { Ticket } from "./Pages/BookTicket/Ticket";
import { Example } from "./Pages/Auth/Example";
import { NewsOffer } from "./Pages/NewsOffer/NewsOffer";
import { NewsOfferDetails } from "./Pages/NewsOffer/NewsOfferDetails";
import { MembershipPage } from "./Pages/NewsOffer/MembershipPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/cinema" element={<Cinemas />} />
        <Route path="/newsoffer" element={<NewsOffer />} />
        <Route path="/newsoffer/membership" element={<MembershipPage />} />
        <Route path="/newsoffer/detail/:id" element={<NewsOfferDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ticket/:id" element={<Ticket />} />
        <Route path="/test" element={<Example />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
