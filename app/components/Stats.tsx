"use client";

export default function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Years of Experience",
    },
    {
      number: "250+",
      title: "Projects Completed",
    },
    {
      number: "100+",
      title: "Skilled Professionals",
    },
    {
      number: "98%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-wrapper">
        <div className="stats-grid">
          {stats.map((item) => (
            <article key={item.title} className="stats-item">
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}