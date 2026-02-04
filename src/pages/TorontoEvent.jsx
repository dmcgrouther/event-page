import Header from "../components/Header";
import EventDetails from "../components/EventDetails";
import Schedule from "../components/Schedule";
import Register from "../components/Register";

export default function TorontoEvent() {
  const event = {
    name: "React Dev Conference",
    city: "Toronto",
    date: "May 20, 2026",
    location: "Toronto Convention Centre"
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