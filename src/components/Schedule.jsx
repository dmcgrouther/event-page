export default function Schedule() {
  const scheduleItems = [
    { time: "9:00 AM", title: "Registration & Coffee", description: "Check in and grab your morning brew" },
    { time: "10:00 AM", title: "Keynote", description: "Opening remarks and main presentation" },
    { time: "12:00 PM", title: "Lunch", description: "Catered meal and informal networking" },
    { time: "1:30 PM", title: "Workshops", description: "Hands-on sessions and breakout groups" },
    { time: "5:00 PM", title: "Networking", description: "Connect with speakers and attendees" }
  ];

  return (
    <section style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)" }}>
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "2.5rem", 
        fontWeight: "700",
        marginBottom: "3rem",
        color: "#1a1a1a"
      }}>
        Event Schedule
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {scheduleItems.map((item, index) => (
          <div
            key={index}
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
              {item.time}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                margin: "0 0 0.5rem 0", 
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#1a1a1a"
              }}>
                {item.title}
              </h3>
              <p style={{ 
                margin: 0, 
                color: "#6b7280",
                fontSize: "0.95rem",
                lineHeight: "1.5"
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}