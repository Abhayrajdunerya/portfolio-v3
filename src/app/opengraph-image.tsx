import { ImageResponse } from "next/og";
export const alt =
  "Abhay Raj Dunerya — Software Engineer. Frontend architecture. Full-stack perspective.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#131413",
        color: "#f0f0e9",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 72,
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 28 }}>
        abhay<span style={{ color: "#ed9b63" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 72,
          letterSpacing: -3,
        }}
      >
        <span>Building the web.</span>
        <span style={{ color: "#a1a39a" }}>Thinking beyond the interface.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#a1a39a",
        }}
      >
        <span>Abhay Raj Dunerya</span>
        <span>Software Engineer · Indore, India</span>
      </div>
    </div>,
    size
  );
}
