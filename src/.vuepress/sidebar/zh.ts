import type {SidebarOptions} from "vuepress-theme-hope";

/**
 * Manual sidebar: group `text` is what appears in vp-sidebar-links (not folder names like 10-Getting-Started).
 * Leaf labels come from each page’s frontmatter `title` / `shortTitle`.
 */
export const zhSidebar: SidebarOptions = [
    "",
    {
        text: "快速入门",
        icon: "fa-solid fa-rocket",
        collapsible: true,
        prefix: "zh/10-Getting-Started/10-Getting-Started/",
        children: [
            "10-framerate-resolution-bitrate.md",
            "20-what-is-vfi.md",
            "30-what-is-sr.md",
            "40-svfi-quick-start.md",
            "50-svfi-quick-start-sr.md",
        ],
    },
    {
        text: "相关文章科普",
        icon: "fa-solid fa-atom",
        collapsible: true,
        prefix: "zh/10-Getting-Started/20-Related-Articles/",
        children: [
            "01-image-quality.md",
            "03-encoder.md",
            "07-what-is-encode.md",
            "08-what-is-hdr.md",
        ],
    },
    {
        text: "软件使用指南",
        icon: "fa-brands fa-readme",
        collapsible: true,
        prefix: "zh/20-Manual/",
        children: [
            "10-quick-start.md",
            "20-option-manuals.md",
            "22-model-spec.md",
            "21-advanced-cli.md",
            "23-other-advanced-settings.md",
        ],
    },
    {
        text: "常见问题与预设",
        icon: "lightbulb",
        collapsible: true,
        prefix: "zh/30-FAQ/",
        children: ["01-qa.md", "10-tips.md", "20-presets.md"],
    },
    "/zh/40-Support/01-about-svfi.md",
    "/zh/40-Support/10-support.md",
];
