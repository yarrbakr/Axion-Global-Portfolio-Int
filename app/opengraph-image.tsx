import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "AXION GLOBAL — AI Chatbots & 3D Product Experiences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public", "logo-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1730",
          backgroundImage:
            "radial-gradient(50% 45% at 50% 16%, rgba(92,143,240,0.35), transparent 70%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={150} height={150} alt="" />
        <div
          style={{
            marginTop: 28,
            fontSize: 66,
            fontWeight: 700,
            letterSpacing: -1,
            color: "#F5F8FF",
          }}
        >
          AXION GLOBAL
        </div>
        <div style={{ marginTop: 14, fontSize: 30, color: "#9DB0D6" }}>
          AI Chatbots &amp; 3D Product Experiences
        </div>
      </div>
    ),
    size,
  );
}
