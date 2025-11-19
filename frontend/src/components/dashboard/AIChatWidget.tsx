import React, { useState } from "react";
import { useUi } from "../../context/UiContext";

export const AIChatWidget: React.FC = () => {
  const { aiChatOpen, setAiChatOpen } = useUi();
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Floating button */}
      {!aiChatOpen && (
        <button
          className="btn btn-primary"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            gap: 8,
            zIndex: 40,
          }}
          onClick={() => setAiChatOpen(true)}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background:
                "conic-gradient(from 160deg, #22c55e, #38bdf8, #a855f7, #22c55e)",
            }}
          />
          <span style={{ fontSize: "0.85rem" }}>Ask AssignWell</span>
        </button>
      )}

      {/* Chat drawer */}
      {aiChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 320,
            maxHeight: 420,
            background:
              "radial-gradient(circle at top, #111827, #020617 70%)",
            borderRadius: 20,
            boxShadow: "0 22px 50px rgba(15,23,42,0.95)",
            border: "1px solid rgba(148,163,184,0.5)",
            display: "flex",
            flexDirection: "column",
            zIndex: 40,
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              borderBottom: "1px solid rgba(31,41,55,1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                AssignWell Assistant
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#9ca3af",
                }}
              >
                Ask about tasks, schedule, or stress.
              </div>
            </div>
            <button
              className="btn btn-ghost"
              style={{ fontSize: "0.8rem" }}
              onClick={() => setAiChatOpen(false)}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px 12px",
              fontSize: "0.8rem",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                marginBottom: 10,
                padding: "8px 10px",
                borderRadius: 12,
                background: "rgba(37,99,235,0.18)",
                border: "1px solid rgba(96,165,250,0.7)",
              }}
            >
              I’ve noticed three deadlines in the next 3 days. Want me to
              soften tonight’s workload and move one assignment to the weekend?
            </div>
            {/* Later you’ll render actual chat history from backend */}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!message.trim()) return;
              // later: send to backend
              setMessage("");
            }}
            style={{
              padding: "8px 10px",
              borderTop: "1px solid rgba(31,41,55,1)",
              display: "flex",
              gap: 6,
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything about your plan..."
              style={{
                flex: 1,
                background: "#020617",
                borderRadius: 999,
                border: "1px solid rgba(55,65,81,1)",
                padding: "6px 10px",
                fontSize: "0.8rem",
                color: "#e5e7eb",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ paddingInline: 10, fontSize: "0.8rem" }}
            >
              ↩
            </button>
          </form>
        </div>
      )}
    </>
  );
};
