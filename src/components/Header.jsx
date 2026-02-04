export default function Header({ city }) {
  return (
    <header style={{ padding: "2rem", background: "#111", color: "#fff" }}>
      <h1>React Dev Conference</h1>
      <h3>{city}</h3>
      <p>Build faster. Ship smarter.</p>
    </header>
  );
}