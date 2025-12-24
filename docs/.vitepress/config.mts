import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/style.css' }]
  ],
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    server: {
      host: true
    }
  },
  
  // 全局国际化配置
  themeConfig: {
    // 社交链接等共享配置可以放在这里
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/your-repo' }
    // ],
     logo: '/icons/favicon.ico',
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
  },
  
  // 语言配置
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      title: "My Awesome Project",
      description: "A VitePress Site",
      
      // ✅ 英文主题配置
      themeConfig: {
            
        nav: [
          { text: 'Home', link: '/' },
          // { text: 'Examples', link: '/markdown-examples' },
        ],
        
        // 英文侧边栏文本
        sidebar: {
          '/': [
            {
              text: 'Examples',
              items: [
                { text: 'KKBOX', link: '/kkbox' },
                { text: 'TIDAL', link: '/tidal' },
                { text: 'Qobuz', link: '/qobuz' },
                { text: 'Apple Music', link: '/appleMusic' },
                { text: 'HIGHRESAUDIO', link: '/highResAudio' },
                { text: 'Amazon Music', link: '/amazonMusic' },
                { text: 'Deezer', link: '/deezer' },
                { text: 'IDAGIO', link: '/idagio' },
                { text: 'Presto Music', link: '/prestoMusic' },
                { text: 'SoundCloud', link: '/soundCloud' },
              ]
            }
          ]
        },
        
        // 英文 UI 文本
        outline: {
          label: 'On this page',
          level: [2, 3]
        },
        
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        
        // 移动端菜单按钮文本
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        
        // 语言菜单文本
        langMenuLabel: 'Languages',
        
        // 编辑链接文本
        editLink: {
          pattern: 'https://github.com/your-repo/edit/main/docs/:path',
          text: 'Edit this page'
        },
        
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
      }
    },
    
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: "流媒体使用指南",
      description: "这是一个 VitePress 中文站点",
      
      // ✅ 中文主题配置
      themeConfig: {
        
        nav: [
          { text: '首页', link: '/zh/' },
          // { text: '示例', link: '/zh/markdown-examples' },
        ],
        
        // 中文侧边栏文本
        sidebar: {
          '/zh/': [
            {
              // text: '示例',
              items: [
                { text: 'QQ音乐', link: '/zh/qqMusic' },
                { text: 'KUGOU HIFI', link: '/zh/kugou' },
                { text: '网易云音乐', link: '/zh/neteasecloud' },
                { text: '索尼精选 Hi-Res 音乐', link: '/zh/sonyMusic' },
                { text: 'KKBOX', link: '/zh/kkbox' },
                { text: 'TIDAL', link: '/zh/tidal' },
                { text: 'Qobuz', link: '/zh/qobuz' },
                { text: 'Apple Music', link: '/zh/appleMusic' },
                { text: 'HIGHRESAUDIO', link: '/zh/highResAudio' },
                { text: 'Amazon Music', link: '/zh/amazonMusic' },
                { text: 'Deezer', link: '/zh/deezer' },
                { text: 'IDAGIO', link: '/zh/idagio' },
                { text: 'Presto Music', link: '/zh/prestoMusic' },
                { text: 'SoundCloud', link: '/zh/soundcloud' },
              ]
            }
          ]
        },
        
        // 中文 UI 文本
        outline: {
          label: '本页内容',
          level: [2, 3]
        },
        
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到深色主题',
        
        // 移动端菜单按钮文本
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        
        // 语言菜单文本
        langMenuLabel: '语言',
        
        // 编辑链接文本
        editLink: {
          pattern: 'https://github.com/your-repo/edit/main/docs/zh/:path',
          text: '编辑此页'
        },
        
        lastUpdated: {
          text: '最后更新',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
      }
    }
  }
})