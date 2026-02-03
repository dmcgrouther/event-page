import './App.css'

import Header from "./components/Header";
import EventDetails from "./components/EventDetails";
import Schedule from "./components/Schedule";
import Register from "./components/Register";

export default function App() {
  return (
    <div>
      <Header />
      <EventDetails />
      <Schedule />
      <Register />
    </div>
  );
}