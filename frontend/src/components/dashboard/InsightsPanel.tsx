import React from "react";

export const InsightsPanel: React.FC = () => {
  return (
    <div className="card" style={{ minHeight: 260 }}>
      <div className="card-title">Insights</div>
      <div className="text-muted" style={{ marginBottom: 10 }}>
        Quick patterns from your last 7 days.
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: 12,
        }}
      >
        <div
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 14,
            border: "1px solid rgba(148,163,184,0.4)",
            padding: 10,
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              marginBottom: 4,
            }}
          >
            Productivity Window
          </div>
          <div style={{ fontSize: "0.9rem" }}>
            You finish{" "}
            <span style={{ color: "#38bdf8", fontWeight: 500 }}>
              72% of tasks
            </span>{" "}
            between{" "}
            <span style={{ color: "#e5e7eb", fontWeight: 500 }}>
              10 AM and 1 PM
            </span>
            .
          </div>
        </div>

        <div
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 14,
            border: "1px solid rgba(148,163,184,0.4)",
            padding: 10,
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              marginBottom: 4,
            }}
          >
            Stress Before Deadlines
          </div>
          <div style={{ fontSize: "0.9rem" }}>
            Mood drops slightly{" "}
            <span style={{ color: "#f97316", fontWeight: 500 }}>1–2 days</span>{" "}
            before major deadlines.
          </div>
        </div>

        <div
          style={{
            background: "rgba(15,23,42,0.9)",
            borderRadius: 14,
            border: "1px solid rgba(148,163,184,0.4)",
            padding: 10,
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              marginBottom: 4,
            }}
          >
            Estimation Accuracy
          </div>
          <div style={{ fontSize: "0.9rem" }}>
            You underestimate study time by about{" "}
            <span style={{ color: "#a855f7", fontWeight: 500 }}>23%</span> on
            average.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: 4,
          }}
        >
          <div
            className="text-muted"
            style={{ fontSize: "0.8rem", maxWidth: 180 }}
          >
            View deeper charts, correlations, and mental health trends.
          </div>
          <button className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>
            Open Well-Being →
          </button>
        </div>
      </div>
    </div>
  );
};
