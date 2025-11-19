import React from "react";

export const CalendarPanel: React.FC = () => {
  return (
    <div className="card" style={{ minHeight: 260 }}>
      <div className="card-title">Calendar</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div style={{ fontWeight: 500 }}>This Week</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost" style={{ fontSize: "0.75rem" }}>
            Week
          </button>
          <button className="btn btn-ghost" style={{ fontSize: "0.75rem" }}>
            Month
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 6,
          fontSize: "0.75rem",
        }}
      >
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              color: "#9ca3af",
              marginBottom: 4,
            }}
          >
            {d}
          </div>
        ))}
        {[...Array(7)].map((_, idx) => {
          const isToday = idx === 1;
          return (
            <div
              key={idx}
              style={{
                borderRadius: 12,
                padding: "8px 4px",
                border: isToday
                  ? "1px solid rgba(56,189,248,0.9)"
                  : "1px solid rgba(31,41,55,1)",
                background: isToday
                  ? "radial-gradient(circle at top, rgba(56,189,248,0.22), #020617)"
                  : "rgba(15,23,42,0.9)",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  marginBottom: 4,
                  color: isToday ? "#e5e7eb" : "#9ca3af",
                }}
              >
                {idx + 11}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  alignItems: "flex-start",
                }}
              >
                {idx === 1 && (
                  <>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        padding: "2px 6px",
                        borderRadius: 999,
                        background: "rgba(52,211,153,0.18)",
                        color: "#6ee7b7",
                      }}
                    >
                      ML Homework · 8pm
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        padding: "2px 6px",
                        borderRadius: 999,
                        background: "rgba(96,165,250,0.18)",
                        color: "#93c5fd",
                      }}
                    >
                      Study Block · 1h
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
