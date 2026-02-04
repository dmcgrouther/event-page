export default function Register() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem", fontWeight: "600" }}>
        Register Now
      </h2>
      <button
        style={{
          padding: "1rem 2.5rem",
          fontSize: "1.125rem",
          fontWeight: "600",
          color: "#ffffff",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(0.98)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1)";
        }}
      >
        Get Tickets
      </button>
    </section>
  );
}