# 李墨飞扬的个人主页

这是一个基于 **Next.js** 和 **Tailwind CSS** 构建的现代化个人简历网站，采用流行的**毛玻璃拟态 (Glassmorphism)** 设计风格，展示了我的个人信息、教育背景、技能特长和工作经历。

## 🌟 项目特点

- **💎 拟态设计**: 全站采用 Glassmorphism 风格，配合动态渐变背景，视觉效果现代且高级。
- **📱 响应式布局**: 完美适配桌面端、平板和移动端设备。
- **✨ 交互动画**: 丝滑的页面过渡和微交互动画 (Fade-in, slide-up, hover effects)。
- **🛠️ 易于配置**: 所有个人数据与代码分离，仅需修改 JSON/TS 配置即可更新内容。
- **📝 博客集成**: 直接读取 GitHub Issues 作为博客文章展示。

## 🛠 技术栈

- **核心框架**: [Next.js 14](https://nextjs.org/) (React Framework)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
- **开发语言**: TypeScript
- **部署平台**: GitHub Pages
- **图标库**: Heroicons / SVGs

## 📋 功能模块

1. **个人概览**: 动态头像、基本信息卡片。
2. **主修课程**: 课程展示卡片。
3. **技能特长**: 技能标签与分类。
4. **经历时间轴**: 垂直时间轴展示教育与工作经历。
5. **动态博客**: 集成 GitHub Issues API，自动同步文章。

## 🚀 本地开发

1. **克隆项目**
   ```bash
   git clone https://github.com/yihangyang666/yihangyang666.github.io.git
   cd yihangyang666.github.io
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```
   访问 `http://localhost:3000` 预览。

## 📦 部署

本项目预设了自动化部署脚本，支持一键部署到 GitHub Pages。

**注意**: 部署脚本已配置自动处理 `.nojekyll` 文件以解决样式丢失问题。

```bash
npm run deploy
```

> 首次运行可能需要进行 GitHub 身份验证。

## 🔧 内容定制

### 1. 更新个人数据
核心数据位于 `data/profile.ts`。修改该文件即可更新网站内容：
- `personalInfo`: 姓名、学校、联系方式等。
- `courses`: 课程列表。
- `skills`: 技能清单。
- `experiences`: 经历时间轴。
- `selfEvaluation`: 自我评价文本。

### 2. 更换资源
- **头像**: 替换 `public/image/picture.png`
- **默认背景**: 替换 `public/image/background.png` (如果使用了图片背景)
- **简历**: 替换 `public/resume.pdf`

## 📝 许可证

MIT License.

## 👤 作者

- **李墨飞扬**
- GitHub: [@yihangyang666](https://github.com/yihangyang666)