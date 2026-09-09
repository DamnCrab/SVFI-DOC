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
            "11-sidebar.md",
            "12-task-basic.md",
            "13-scene-detect.md",
            "14-output-resolution.md",
            "15-encode-decode.md",
            "16-vfi-settings.md",
            "17-preset-bar.md",
            "18-toolbox.md",
            "19-advanced-below.md",
            "20-preferences.md",
            "21-advanced-cli.md",
            "23-other-advanced-settings.md",
        ],
    },
    {
        text: "Model specs",
        icon: "fa-solid fa-cube",
        collapsible: true,
        prefix: "en/25-Model-Spec/",
        children: [
            "10-vfi-models.md",
            "20-sr-models.md",
            "30-restore-models.md",
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
