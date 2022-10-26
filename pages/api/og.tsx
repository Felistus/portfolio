import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const font = fetch(new URL("/Blox2.ttf", import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export default async function handler() {
  const fontData = await font;

  return new ImageResponse(<div className="jaro">Hello world!</div>, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Blox",
        data: fontData,
        style: "normal",
      },
    ],
  });
}
