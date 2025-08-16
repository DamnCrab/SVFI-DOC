import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {getDirname, path} from '@vuepress/utils'
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'

// @ts-ignore
const __dirname = import.meta.dirname || getDirname(import.meta.url)
const baseUrl:"/" | `/${string}/` = (process.env.BASEURL || "/") as any

export default defineUserConfig({
    base: baseUrl,
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
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    markdown: {
        headers: {
            level: [2, 3, 4]
        }
    }
});
