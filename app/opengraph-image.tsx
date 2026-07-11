import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic Open Graph image — served at `/opengraph-image`.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090909",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #3B9EFF 0%, #7DD3FC 100%)",
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              maxWidth: 920,
            }}
          >
            Empowering development, building a better future.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a3a3a3",
              lineHeight: 1.4,
              maxWidth: 780,
            }}
          >
            Formwork · Crane · Rigging · Reinforcing · Development · Training
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 22, color: "#737373" }}>{SITE_TAGLINE}</div>
          <div
            style={{
              width: 120,
              height: 4,
              borderRadius: 2,
              background: "#3B9EFF",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
