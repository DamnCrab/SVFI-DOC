import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    author: {
        name: "Justin62628",
        url: "https://github.com/Justin62628",
    },



    favicon: "/img/logo.png",

    logo: "/img/logo.png",

    repo: "Justin62628/Squirrel-RIFE",

    docsDir: "src",

    // 是否展示编辑此页链接
    editLink: false,

    toc: {
        // Number = single level only; use [min, max] for a range (here h1–h4).
        levels: [1, 3],
    },

    locales: {
        "/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
            footer: "",
            displayFooter: true,
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
        "/en/": {
            navbar: enNavbar,
            sidebar: enSidebar,
            footer: "",
            displayFooter: true,
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
    },

    markdown: {
        align: true,
        attrs: true,
        chartjs: true,
        codeTabs: true,
        component: true,
        hint: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: true,
        mark: true,
        mermaid: true,
        playground: {
            presets: ["ts", "vue"],
        },
        math: {
            type: "katex", // 或 'mathjax'
        },
        revealjs: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
        // checkLinks: {
        //     // 仅在开发模式下检查链接
        //     status: "dev",
        //     ignore: [
        //         // 忽略以 `/api/` 开头的链接
        //         /^\/api\//,
        //         // 忽略 `/playground.html`
        //         "/playground.html",
        //     ],
        // },
    },

    plugins: {
        icon:{
            assets: "fontawesome-with-brands",
        },
        components: {
            components: [
                "ArtPlayer",
                "VidStack",
                "Badge",
                "BiliBili",
                "CodePen",
                "PDF",
                "Share",
                "StackBlitz",
                "SiteInfo",
                "VPBanner",
                "VPCard"
            ],
        },

        comment: {
            provider: "Giscus",
            repo: "DamnCrab/SVFI-DOC-Discussion",
            repoId: "R_kgDOKZcVbw",
            category: "Announcements",
            categoryId: "DIC_kwDOKZcVb84CZsl2",
        },

        slimsearch:{
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            customFields: [
                {
                    getter: (page: any) => page.frontmatter.category,
                    formatter: "分类：$content",
                },
                {
                    getter: (page: any) => page.frontmatter.tag,
                    formatter: "标签：$content",
                },
            ],
        },

        git:{

        },
    },
});
