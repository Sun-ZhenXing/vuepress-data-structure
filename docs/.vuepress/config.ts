import process from 'node:process'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { searchProPlugin} from 'vuepress-plugin-search-pro'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'
const ROOT_PATH = path.resolve(__dirname, '../..')
const CURRENT_PATH = path.resolve(__dirname, '.')
const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-data-structure/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '算法和数据结构笔记',
  description: '算法和数据结构笔记',
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10,
    },
    importCode: {
      handleImportPath: str => str
        .replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
        .replace(/^@/, CURRENT_PATH),
    },
  },
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    docsDir: 'docs',
    selectLanguageName: '简体中文',
    selectLanguageText: '选择语言',
    selectLanguageAriaLabel: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    navbar: [
    ],
    sidebar: 'auto',
    themePlugins: {
      git: isProd,
    },
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      vPre: true,
      tabs: true,
      card: true,
      codetabs: true,
      include: {
        resolvePath: file => {
          if (file.startsWith('@'))
            return file.replace('@', CURRENT_PATH)
          if (file.startsWith('/'))
            return file.replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
          return file
        },
      },
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@def',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: '定义'
            }
          }
        },
        {
          matcher: '@TODO',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'danger' },
              content: 'TODO'
            }
          }
        },
        {
          matcher: /@theorem(?:-[0-9]{1,2})?/,
          replacer: ({ tag, content }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'warning' },
              content: content.includes('-') ? `定理 ${content.replace('@theorem-', '')}` : '定理'
            }
          }
        },
        {
          matcher: /@inference(?:-[0-9]{1,2})?/,
          replacer: ({ tag, content }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'warning' },
              content: content.includes('-') ? `推论 ${content.replace('@inference-', '')}` : '推论'
            }
          }
        }
      ]
    }, false),
    searchProPlugin({}),
    autoCatalogPlugin({
      orderGetter: ({ title, routeMeta }) => {
        if (routeMeta.order)
          return routeMeta.order as number
        const prefix = title.match(/^\d+. /)
        if (prefix)
          return parseInt(prefix[0])
        const suffix = title.match(/\d+$/)
        if (suffix)
          return parseInt(suffix[0])
        return 0
      },
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
    shikiPlugin({ theme: 'dark-plus' }),
  ],
  alias: {
    '@': CURRENT_PATH,
  },
})
