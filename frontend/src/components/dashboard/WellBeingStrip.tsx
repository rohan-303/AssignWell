import React from "react";

export const WellBeingStrip: React.FC = () => {
  const moods = ["🙂", "😐", "😴", "😰", "😤", "⚡"];

  return (
    <div className="card">
      <div className="card-title">Well-Being</div>
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Mood */}
        <div style={{ flex: 1.1 }}>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              marginBottom: 4,
            }}
          >
            How are you feeling?
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {moods.map((m) => (
              <button
                key={m}
                className="btn btn-ghost"
                style={{
                  fontSize: "1rem",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.4)",
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Micro interventions */}
        <div style={{ flex: 1.3 }}>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              marginBottom: 4,
            }}
          >
            Quick reset suggestions
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 8,
            }}
          >
            {[
              "90s breathing reset",
              "5-min stretch break",
              "Pomodoro · 25 + 5",
              "Hydration reminder",
            ].map((item) => (
              <button
                key={item}
                className="btn btn-ghost"
                style={{
                  justifyContent: "flex-start",
                  fontSize: "0.75rem",
                  paddingBlock: 6,
                  borderRadius: 999,
                  border: "1px solid rgba(30,64,175,0.7)",
                  background: "rgba(15,23,42,0.9)",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
