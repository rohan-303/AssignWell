import React, { useState, useRef, useEffect } from "react";

export const AvatarMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          borderRadius: 999,
          border: "1px solid rgba(148,163,184,0.6)",
          background:
            "radial-gradient(circle at top left, #1f2937, #020617 70%)",
          padding: "3px 6px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, #22c55e, #06b6d4, #6366f1, #a855f7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#020617",
            fontWeight: 700,
            fontSize: "0.8rem",
          }}
        >
          R
        </div>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>Rohan</div>
          <div
            style={{
              fontSize: "0.7rem",
              color: "#9ca3af",
            }}
          >
            Focus: Light • Today
          </div>
        </div>
        <span
          style={{
            fontSize: "0.7rem",
            color: "#9ca3af",
            paddingRight: 2,
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: 8,
            width: 230,
            background:
              "radial-gradient(circle at top, #111827, #020617 70%)",
            borderRadius: 16,
            border: "1px solid rgba(148,163,184,0.4)",
            boxShadow: "0 18px 40px rgba(15,23,42,0.9)",
            padding: 8,
            zIndex: 20,
          }}
        >
          <div
            style={{
              padding: "6px 10px",
              fontSize: "0.75rem",
              color: "#9ca3af",
            }}
          >
            Account & Spaces
          </div>

          {[
            "Account Details",
            "Goals",
            "Peer Support",
            "Settings",
          ].map((item) => (
            <button
              key={item}
              className="btn"
              style={{
                width: "100%",
                justifyContent: "flex-start",
                background: "transparent",
                paddingBlock: 8,
                color: "#e5e7eb",
              }}
            >
              {item}
            </button>
          ))}

          <div
            style={{
              borderTop: "1px solid rgba(148,163,184,0.35)",
              marginBlock: 6,
            }}
          />

          <button
            className="btn"
            style={{
              width: "100%",
              justifyContent: "flex-start",
              background: "transparent",
              paddingBlock: 8,
              color: "#f97373",
              fontWeight: 500,
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
