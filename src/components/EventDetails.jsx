export default function EventDetails({ event }) {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Event Details</h2>
      <p><strong>City:</strong> {event.city}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </section>
  );
}