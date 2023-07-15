import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Getting Started",
    icon: "fa-solid fa-rocket",
    children: [
      "/en/10.Getting Started/10.Getting Started/10.Framerate, resolution, bitrate.md",
      "/en/10.Getting Started/10.Getting Started/20.What is VFI.md",
      "/en/10.Getting Started/10.Getting Started/30.What is SR.md",
      "/en/10.Getting Started/10.Getting Started/40.Quick tour of SVFI.md",
    ],
  },
  {
    text: "Related Articles",
    icon: "fa-solid fa-atom",
    children: [
      "/en/10.Getting Started/20.Related Articles/01.Image representation and quality.md",
      "/en/10.Getting Started/20.Related Articles/03.Encodings, Encoders, and Encapsulation Formats.md",
      "/en/10.Getting Started/20.Related Articles/07.what is encoding.md",
    ],
  },
  {
    text: "Manuals",
    icon: "fa-brands fa-readme",
    children: [
      "/en/20.Manuals/10.Quick Start.md",
      "/en/20.Manuals/20.Option Manuals.md",
      "/en/20.Manuals/21.Advanced CLI.md",
    ],
  },
  {
    text: "FAQ",
    icon: "lightbulb",
    children: [
      "/en/30.FAQ/01.Q&A.md",
      "/en/30.FAQ/10.Tips.md",
    ],
  },
  "/en/40.Support/01.Support.md"
]);
