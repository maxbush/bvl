import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Bevalex — системный интегратор с 1996 года";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f2ee",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "3px solid #00b2d5",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 600, color: "#0d1014" }}>Bevalex</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0d1014",
              maxWidth: 900,
            }}
          >
            Системный интегратор для предприятий, которым нельзя останавливаться
          </div>
          <div style={{ display: "flex", gap: 64, color: "#353a42", fontSize: 30 }}>
            <span>с 1996 года</span>
            <span>1210+ проектов</span>
            <span>
              SLA <span style={{ color: "#00b2d5" }}>99.9%</span>
            </span>
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#5c6169" }}>bevalex.by</div>
      </div>
    ),
    size,
  );
}
