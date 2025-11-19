import React from "react";

export const SocialPulseCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-title">Social Pulse</div>
      <div className="text-muted" style={{ fontSize: "0.8rem" }}>
        Tiny snapshot of your peer support & group activity.
      </div>

      <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            fontSize: "0.8rem",
            padding: "6px 8px",
            borderRadius: 12,
            background: "rgba(22,163,74,0.18)",
            border: "1px solid rgba(34,197,94,0.6)",
          }}
        >
          Study group <b>CS-7075 · Robotics</b> meets tonight at <b>8:00 PM</b>.
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            padding: "6px 8px",
            borderRadius: 12,
            background: "rgba(59,130,246,0.18)",
            border: "1px solid rgba(96,165,250,0.7)",
          }}
        >
          Workout partner available tomorrow at <b>6:30 PM</b>.
        </div>
        <button className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>
          Open Peer Support →
        </button>
      </div>
    </div>
  );
};
