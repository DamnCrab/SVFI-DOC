import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import theme from "./theme.js";
import { getDirname, path } from '@vuepress/utils'
// @ts-ignore
const __dirname = getDirname(import.meta.url)

import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import { gitPlugin } from "@vuepress/plugin-git";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "SVFI Doc",
            description: "SVFI用户使用文档",
        },
        "/en/": {
            lang: "en-US",
            title: "SVFI Doc",
            description: "SVFI User Documentation",
        },
    },
    theme,
    plugins: [
        searchProPlugin({
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
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
            components: {
                'card-list': path.resolve(__dirname, './components/cardList.vue')
            }
        }),
        gitPlugin({
            // 配置项
        }),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4]
        }
    }
    // Enable it with pwa
    // shouldPrefetch: false,
});
