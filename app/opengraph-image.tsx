/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "STA Exotic, Legacy to Legal, Licensed in New York";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0808",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* mesh accents */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(233,79,111,0.35) 0%, rgba(233,79,111,0) 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,140,60,0.2) 0%, rgba(217,140,60,0) 60%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#9a9290",
            fontSize: "18px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#e94f6f",
            }}
          />
          OCM-PROC-24-000010
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "128px",
              fontFamily: "serif",
              fontStyle: "italic",
              color: "#f5f2ee",
              lineHeight: 0.95,
              letterSpacing: "-3px",
            }}
          >
            Legacy,
          </div>
          <div
            style={{
              fontSize: "128px",
              fontFamily: "serif",
              color: "#e94f6f",
              fontStyle: "italic",
              lineHeight: 0.95,
              letterSpacing: "-3px",
            }}
          >
            licensed,
          </div>
          <div
            style={{
              fontSize: "128px",
              fontFamily: "serif",
              color: "#f5f2ee",
              lineHeight: 0.95,
              letterSpacing: "-3px",
            }}
          >
            stocked.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#9a9290",
            fontSize: "20px",
          }}
        >
          <div style={{ fontFamily: "serif", fontSize: "32px", color: "#f5f2ee" }}>
            STA Exotic
          </div>
          <div
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "16px",
            }}
          >
            84K strong · 80+ retailers · NY + CA
          </div>
        </div>
      </div>
    ),
    size
  );
}
