import React from "react";

export const AssignmentsPage: React.FC = () => {
  const assignments = [
    {
      id: 1,
      course: "CS 7075",
      title: "Robot Navigation Report",
      due: "2025-11-21",
      status: "In Progress",
      eta: "2h 15m",
    },
    {
      id: 2,
      course: "STAT 7210",
      title: "Regression Diagnostics HW",
      due: "2025-11-22",
      status: "Not Started",
      eta: "1h",
    },
  ];

  return (
    <div className="card">
      <div className="card-title">Assignments</div>
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
          Filter by course, due date, or status.
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>
            Import from syllabus
          </button>
          <button className="btn btn-primary" style={{ fontSize: "0.8rem" }}>
            + New Assignment
          </button>
        </div>
      </div>

      <div
        style={{
          borderRadius: 16,
          border: "1px solid rgba(31,41,55,1)",
          overflow: "hidden",
          background: "rgba(15,23,42,0.9)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 2.2fr 1.2fr 1.3fr",
            padding: "8px 10px",
            fontSize: "0.75rem",
            color: "#9ca3af",
            borderBottom: "1px solid rgba(31,41,55,1)",
          }}
        >
          <span>Course</span>
          <span>Assignment</span>
          <span>Due</span>
          <span>Status / ETA</span>
        </div>

        {assignments.map((a, idx) => (
          <div
            key={a.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 2.2fr 1.2fr 1.3fr",
              padding: "10px 10px",
              fontSize: "0.8rem",
              borderBottom:
                idx === assignments.length - 1
                  ? "none"
                  : "1px solid rgba(31,41,55,1)",
            }}
          >
            <span style={{ color: "#93c5fd" }}>{a.course}</span>
            <span>{a.title}</span>
            <span style={{ color: "#9ca3af" }}>{a.due}</span>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{a.status}</span>
              <span style={{ color: "#9ca3af" }}>{a.eta}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
