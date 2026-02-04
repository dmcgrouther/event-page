import ScheduleItem from './ScheduleItem';

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
          <ScheduleItem
            key={index}
            time={item.time}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}