import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const font = fetch(new URL("../../assets/Blox2.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export default async function handler() {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          fontSize: 120,
          fontFamily: '"Blox"',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#000066",
        }}
      >
        JAROTECHNOLOGIES
      </div>
    ),
    {
      width: 1200,
      height: 500,
      fonts: [
        {
          name: "Blox",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
