import React from "react";

export const WellBeingPage: React.FC = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-title">Well-Being Overview</div>
        <div className="text-muted" style={{ marginBottom: 10 }}>
          Mood history, stress predictions, and correlations.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 16,
          }}
        >
          <div
            style={{
              borderRadius: 16,
              border: "1px solid rgba(31,41,55,1)",
              padding: 12,
              background: "rgba(15,23,42,0.9)",
              minHeight: 180,
            }}
          >
            <div
              style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: 4 }}
            >
              Mood over time
            </div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              (Later: actual chart here with mood vs energy per day.)
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              border: "1px solid rgba(31,41,55,1)",
              padding: 12,
              background: "rgba(15,23,42,0.9)",
              minHeight: 180,
            }}
          >
            <div
              style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: 4 }}
            >
              Stress predictors
            </div>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: 18,
                fontSize: "0.8rem",
                color: "#e5e7eb",
              }}
            >
              <li>Stress tends to spike 1–2 days before big deadlines.</li>
              <li>Late-night study blocks correlate with lower next-day mood.</li>
              <li>Consistent breaks improve task completion stability.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Journaling & Notes</div>
        <div className="text-muted" style={{ marginBottom: 8 }}>
          Free-form reflections, triggers, and coping strategies.
        </div>
        <textarea
          placeholder="Write a quick note about how this week feels, what’s working, and what’s burning you out..."
          style={{
            width: "100%",
            minHeight: 120,
            borderRadius: 14,
            border: "1px solid rgba(31,41,55,1)",
            background: "#020617",
            padding: 10,
            fontSize: "0.85rem",
            color: "#e5e7eb",
            resize: "vertical",
          }}
        />
        <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
          <button className="btn btn-primary" style={{ fontSize: "0.8rem" }}>
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};
