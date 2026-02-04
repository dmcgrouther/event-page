import { useState, useEffect } from "react";
import TorontoEvent from "./pages/TorontoEvent";
import SanFranciscoEvent from "./pages/SanFranciscoEvent";

export default function App() {
  const [page, setPage] = useState("home");

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "toronto" || hash === "san-francisco") {
        setPage(hash);
      } else {
        setPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Run once on mount
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigation styles
  const navStyle = { padding: "1rem", background: "#eee", marginBottom: "1rem" };
  const linkStyle = { marginRight: "1rem", textDecoration: "none", color: "#0077cc" };

  const NavBar = () => (
    <nav style={navStyle}>
      <a href="#toronto" style={linkStyle}>Toronto</a>
      <a href="#san-francisco" style={linkStyle}>San Francisco</a>
      <a href="#" style={linkStyle}>Home</a>
    </nav>
  );

  const LandingPage = () => (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to React Dev Conference</h1>
      <p>Select a city to see event details:</p>
      <a href="#toronto" style={linkStyle}>Toronto</a>
      <a href="#san-francisco" style={linkStyle}>San Francisco</a>
    </div>
  );

  return (
    <div>
      <NavBar />

      {page === "home" && <LandingPage />}
      {page === "toronto" && <TorontoEvent />}
      {page === "san-francisco" && <SanFranciscoEvent />}
    </div>
  );
}
