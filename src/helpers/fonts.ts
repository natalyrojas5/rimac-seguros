import localFont from "next/font/local";

export const BRSonoma = localFont({
  src: [
    {
      path: "../assets/fonts/BRSonoma-Thin.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/BRSonoma-Regular.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/BRSonoma-Medium.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/BRSonoma-Bold.woff2",
      weight: "900",
      style: "bold",
    },
  ],
});
