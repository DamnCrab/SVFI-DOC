import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Getting Started",
    icon: "fa-solid fa-rocket",
    children: [
      "/en/10-Getting-Started/10-Getting-Started/10-framerate-resolution-bitrate.md",
      "/en/10-Getting-Started/10-Getting-Started/20-what-is-vfi.md",
      "/en/10-Getting-Started/10-Getting-Started/30-what-is-sr.md",
      "/en/10-Getting-Started/10-Getting-Started/40-svfi-quick-start.md",
      "/en/10-Getting-Started/10-Getting-Started/50-svfi-quick-start-sr.md",
    ],
  },
  {
    text: "Related Articles",
    icon: "fa-solid fa-atom",
    children: [
      "/en/10-Getting-Started/20-Related-Articles/01-image-quality.md",
      "/en/10-Getting-Started/20-Related-Articles/03-encoder.md",
      "/en/10-Getting-Started/20-Related-Articles/07-what-is-encode.md",
      "/en/10-Getting-Started/20-Related-Articles/08-what-is-hdr.md",
    ],
  },
  {
    text: "Manuals",
    icon: "fa-brands fa-readme",
    children: [
      "/en/20-Manual/10-quick-start.md",
      "/en/20-Manual/11-sidebar.md",
      "/en/20-Manual/111-player.md",
      "/en/20-Manual/12-task-basic.md",
      "/en/20-Manual/13-scene-detect.md",
      "/en/20-Manual/14-output-resolution.md",
      "/en/20-Manual/15-encode-decode.md",
      "/en/20-Manual/16-vfi-settings.md",
      "/en/20-Manual/17-preset-bar.md",
      "/en/20-Manual/18-toolbox.md",
      "/en/20-Manual/19-advanced-below.md",
      "/en/20-Manual/191-realtime-window.md",
      "/en/20-Manual/20-preferences.md",
      "/en/20-Manual/21-advanced-cli.md",
      "/en/20-Manual/23-other-advanced-settings.md",
    ],
  },
  {
    text: "Model specs",
    icon: "fa-solid fa-cube",
    children: [
      "/en/25-Model-Spec/10-vfi-models.md",
      "/en/25-Model-Spec/20-sr-models.md",
      "/en/25-Model-Spec/30-restore-models.md",
      "/en/25-Model-Spec/40-realtime-models.md",
    ],
  },
  {
    text: "FAQ",
    icon: "lightbulb",
    children: [
      "/en/30-FAQ/01-qa.md",
      "/en/30-FAQ/10-tips.md",
      "/en/30-FAQ/20-presets.md",
    ],
  },
  "/en/40-Support/01-about-svfi.md",
  "/en/40-Support/10-support.md",
]);
