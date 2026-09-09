import type {SidebarOptions} from "vuepress-theme-hope";

/**
 * Manual sidebar for `/en/`: group titles are fixed strings (not folder names).
 */
export const enSidebar: SidebarOptions = [
    "",
    {
        text: "Getting Started",
        icon: "fa-solid fa-rocket",
        collapsible: true,
        prefix: "en/10-Getting-Started/10-Getting-Started/",
        children: [
            "10-framerate-resolution-bitrate.md",
            "20-what-is-vfi.md",
            "30-what-is-sr.md",
            "40-svfi-quick-start.md",
            "50-svfi-quick-start-sr.md",
        ],
    },
    {
        text: "Related Articles",
        icon: "fa-solid fa-atom",
        collapsible: true,
        prefix: "en/10-Getting-Started/20-Related-Articles/",
        children: [
            "01-image-quality.md",
            "03-encoder.md",
            "07-what-is-encode.md",
            "08-what-is-hdr.md",
        ],
    },
    {
        text: "Manuals",
        icon: "fa-brands fa-readme",
        collapsible: true,
        prefix: "en/20-Manual/",
        children: [
            "10-quick-start.md",
            "20-option-manuals.md",
            "22-model-spec.md",
            "21-advanced-cli.md",
            "23-other-advanced-settings.md",
        ],
    },
    {
        text: "FAQ",
        icon: "lightbulb",
        collapsible: true,
        prefix: "en/30-FAQ/",
        children: ["01-qa.md", "10-tips.md", "20-presets.md"],
    },
    "/en/40-Support/01-about-svfi.md",
    "/en/40-Support/10-support.md",
];
