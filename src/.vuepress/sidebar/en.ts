import type {SidebarOptions} from "vuepress-theme-hope";

/**
 * Manual sidebar for `/en/`: group titles are fixed strings (not `10.Getting Started` folder names).
 */
export const enSidebar: SidebarOptions = [
    "",
    {
        text: "Getting Started",
        icon: "fa-solid fa-rocket",
        collapsible: true,
        prefix: "en/10.Getting Started/10.Getting Started/",
        children: [
            "10.Framerate, resolution, bitrate.md",
            "20.What is VFI.md",
            "30.What is SR.md",
            "40.Quick tour of SVFI.md",
            "50.Quick tour of SVFI SR.md",
        ],
    },
    {
        text: "Manuals",
        icon: "fa-brands fa-readme",
        collapsible: true,
        prefix: "en/20.Manuals/",
        children: [
            "10.Quick Start.md",
            "20.Option Manuals.md",
            "22.Model Spec.md",
            "21.Advanced CLI.md",
            "23.Other Advanced Settings.md",
        ],
    },
    {
        text: "FAQ",
        icon: "lightbulb",
        collapsible: true,
        prefix: "en/30.FAQ/",
        children: ["01.Q&A.md", "10.Tips.md", "20.Presets.md"],
    },
    "/en/40.Support/01.About SVFI.md",
    "/en/40.Support/10.Support.md",
];
