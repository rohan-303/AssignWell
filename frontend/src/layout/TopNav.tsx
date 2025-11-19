import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AvatarMenu } from "./AvatarMenu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Assignments", path: "/assignments" },
  { label: "Well-Being", path: "/wellbeing" },
];

export const TopNav: React.FC = () => {
  const location = useLocation();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 24px",
        borderBottom: "1px solid rgba(148, 163, 184, 0.3)",
        backdropFilter: "blur(20px)",
        background:
          "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.75))",
      }}
    >
      {/* Left: Logo / product name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "12px",
            background:
              "conic-gradient(from 180deg, #22c55e, #06b6d4, #6366f1, #a855f7, #22c55e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(59,130,246,0.7)",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "8px",
              background: "#020617",
            }}
          />
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: "1.05rem" }}>
            AssignWell
          </div>
          <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            Calmer planning, smarter work.
          </div>
        </div>
      </div>

      {/* Center: Nav links */}
      <nav style={{ marginLeft: 40, display: "flex", gap: 10 }}>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
              }}
            >
              <button
                className="btn"
                style={{
                  background: active
                    ? "rgba(56,189,248,0.12)"
                    : "transparent",
                  color: active ? "#e5e7eb" : "#9ca3af",
                  borderRadius: 999,
                  paddingInline: 14,
                  paddingBlock: 6,
                  border: active
                    ? "1px solid rgba(56,189,248,0.8)"
                    : "1px solid transparent",
                  fontSize: "0.8rem",
                }}
              >
                {item.label}
              </button>
            </NavLink>
          );
        })}
      </nav>

      {/* Right: Avatar */}
      <div style={{ marginLeft: "auto" }}>
        <AvatarMenu />
      </div>
    </header>
  );
};
