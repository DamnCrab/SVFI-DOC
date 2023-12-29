import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "Justin62628",
    url: "https://github.com/Justin62628",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/img/logo.webp",

  repo: "Justin62628/Squirrel-RIFE",

  docsDir: "src",

  // 是否展示编辑此页链接
  editLink: false,

  // i18n
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      sidebar:"heading",
      // 检测md结构深度
      headerDepth: 4,

      footer: "",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/en/": {
      navbar: enNavbar,
      sidebar:"heading",
      // headerDepth: 4,
      footer: "",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },


  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {

    // Enable some components
    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        // "VidStack",  // need some additional dependencies
        "XiGua",
      ],
    },

    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "DamnCrab/SVFI-DOC-Discussion",
      repoId: "R_kgDOKZcVbw",
      category: "Announcements",
      categoryId: "DIC_kwDOKZcVb84CZsl2",
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      component: true,
      container: true,
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
      mathjax: {
        output: "chtml",
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        themes: [
          "auto",
          "beige",
          "black",
          "blood",
          "league",
          "moon",
          "night",
          "serif",
          "simple",
          "sky",
          "solarized",
          "white",
        ],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
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
      checkLinks: {
        // 仅在开发模式下检查链接
        status: "dev",
        ignore: [
          // 忽略以 `/api/` 开头的链接
          /^\/api\//,
          // 忽略 `/playground.html`
          "/playground.html",
        ],
      },
    },

  },
});
