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
    <section
      style={{
        background: "#ffffff",
        padding: "20px 24px 90px",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#071d2b",
            borderRadius: "12px",
            padding: "42px 50px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,.15)",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                borderRight:
                  index !== stats.length - 1
                    ? "1px solid rgba(255,255,255,.15)"
                    : "none",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#0fbdcf",
                  fontSize: "56px",
                  fontWeight: 900,
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  marginTop: "12px",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}