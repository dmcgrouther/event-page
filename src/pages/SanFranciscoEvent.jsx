import Header from "../components/Header";
import EventDetails from "../components/EventDetails";
import Schedule from "../components/Schedule";
import Register from "../components/Register";

export default function SanFranciscoEvent() {
  const event = {
    name: "React Dev Conference",
    city: "San Francisco",
    date: "April 15, 2026",
    location: "Moscone Center"
  };

  return (
    <>
      <Header city={event.city} />
      <EventDetails event={event} />
      <Schedule />
      <Register />
    </>
  );
}
