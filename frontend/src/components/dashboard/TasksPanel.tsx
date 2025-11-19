import React from "react";

const mockTasks = [
  {
    id: 1,
    title: "CS 7075 • Robotics Quiz Prep",
    due: "Today · 11:59 PM",
    progress: 0.6,
    eta: "45 min",
    priority: "High",
  },
  {
    id: 2,
    title: "STAT 7210 • Regression Writeup",
    due: "Tomorrow · 6:00 PM",
    progress: 0.3,
    eta: "1h 30m",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Deep Learning Project • Literature Review",
    due: "Fri · 5:00 PM",
    progress: 0.15,
    eta: "2h",
    priority: "Low",
  },
];

export const TasksPanel: React.FC = () => {
  return (
    <div className="card">
      <div className="card-title">Upcoming Tasks</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span className="text-muted" style={{ fontSize: "0.8rem" }}>
          Today · Tomorrow · Next few days
        </span>
        <button className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>
          + Add Task
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {mockTasks.map((task) => (
          <div
            key={task.id}
            style={{
              padding: "8px 10px",
              borderRadius: 14,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(31,41,55,1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                {task.title}
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#9ca3af",
                  borderRadius: 999,
                  padding: "2px 8px",
                  border: "1px solid rgba(148,163,184,0.5)",
                }}
              >
                {task.priority}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "#9ca3af",
                marginBottom: 6,
              }}
            >
              <span>{task.due}</span>
              <span>Est. {task.eta}</span>
            </div>
            <div
              style={{
                height: 5,
                borderRadius: 999,
                background: "rgba(30,64,175,0.8)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${task.progress * 100}%`,
                  background:
                    "linear-gradient(90deg, #38bdf8, #6366f1, #a855f7)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
