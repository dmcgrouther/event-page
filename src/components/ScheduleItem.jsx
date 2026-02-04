export default function ScheduleItem({ time, title, description }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "1.75rem",
        marginBottom: "1rem",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(8px)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(102, 126, 234, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
      }}
    >
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "4px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }} />
      <div style={{
        minWidth: "120px",
        fontWeight: "700",
        fontSize: "1.25rem",
        color: "#667eea",
        paddingLeft: "1rem"
      }}>
        {time}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ 
          margin: "0 0 0.5rem 0", 
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#1a1a1a"
        }}>
          {title}
        </h3>
        <p style={{ 
          margin: 0, 
          color: "#6b7280",
          fontSize: "0.95rem",
          lineHeight: "1.5"
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}