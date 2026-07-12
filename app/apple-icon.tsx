import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — `/apple-icon` — bold R mark */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090909",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 148,
            height: 148,
            borderRadius: 32,
            border: "2px solid rgba(255,255,255,0.1)",
            background: "#151515",
            fontSize: 108,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          R
        </div>
      </div>
    ),
    { ...size },
  );
}
