import type {SidebarOptions} from "vuepress-theme-hope";

/**
 * Manual sidebar: group `text` is what appears in vp-sidebar-links (not folder names like 10.快速入门).
 * Leaf labels come from each page’s frontmatter `title` / `shortTitle`.
 */
export const zhSidebar: SidebarOptions = [
    "",
    {
        text: "快速入门",
        icon: "fa-solid fa-rocket",
        collapsible: true,
        prefix: "10.快速入门/10.快速入门/",
        children: [
            "10.什么是帧率、分辨率和码率.md",
            "20.什么是补帧.md",
            "30.什么是超分.md",
            "40.快速上手SVFI.md",
            "50.快速上手SVFI超分.md",
        ],
    },
    {
        text: "相关文章科普",
        icon: "fa-solid fa-atom",
        collapsible: true,
        prefix: "10.快速入门/20.相关文章（科普）/",
        children: [
            "01.图像表示与画质.md",
            "03.编码、编码器与封装格式.md",
            "07.什么是压制.md",
            "08.什么是HDR.md",
        ],
    },
    {
        text: "软件使用指南",
        icon: "fa-brands fa-readme",
        collapsible: true,
        prefix: "20.指南/",
        children: [
            "10.必读导引.md",
            "20.高级内容详解.md",
            "22.模型选择说明.md",
            "21.命令行进阶讲解.md",
            "23.其他进阶说明.md",
        ],
    },
    {
        text: "常见问题与预设",
        icon: "lightbulb",
        collapsible: true,
        prefix: "30.常见问题解答/",
        children: ["01.Q&A.md", "05.使用技巧.md", "10.预设.md"],
    },
    "/40.支持/01.关于SVFI.md",
    "/40.支持/10.支持.md",
];
