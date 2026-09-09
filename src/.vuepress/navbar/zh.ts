import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    {
        text: "快速入门",
        icon: "fa-solid fa-rocket",
        children: [
            "/zh/10-Getting-Started/10-Getting-Started/10-framerate-resolution-bitrate.md",
            "/zh/10-Getting-Started/10-Getting-Started/20-what-is-vfi.md",
            "/zh/10-Getting-Started/10-Getting-Started/30-what-is-sr.md",
            "/zh/10-Getting-Started/10-Getting-Started/40-svfi-quick-start.md",
            "/zh/10-Getting-Started/10-Getting-Started/50-svfi-quick-start-sr.md",
        ],
    },
    {
        text: "相关文章科普",
        icon: "fa-solid fa-atom",
        children: [
            "/zh/10-Getting-Started/20-Related-Articles/01-image-quality.md",
            "/zh/10-Getting-Started/20-Related-Articles/03-encoder.md",
            "/zh/10-Getting-Started/20-Related-Articles/07-what-is-encode.md",
            "/zh/10-Getting-Started/20-Related-Articles/08-what-is-hdr.md",
        ],
    },
    {
        text: "软件使用指南",
        icon: "fa-brands fa-readme",
        children: [
            "/zh/20-Manual/10-quick-start.md",
            "/zh/20-Manual/20-option-manuals.md",
            "/zh/20-Manual/22-model-spec.md",
            "/zh/20-Manual/21-advanced-cli.md",
            "/zh/20-Manual/23-other-advanced-settings.md",
        ],
    },
    {
        text: "常见问题与预设",
        icon: "lightbulb",
        children: [
            "/zh/30-FAQ/01-qa.md",
            "/zh/30-FAQ/10-tips.md",
            "/zh/30-FAQ/20-presets.md",
        ],
    },
    "/zh/40-Support/01-about-svfi.md",
    "/zh/40-Support/10-support.md",
]);
