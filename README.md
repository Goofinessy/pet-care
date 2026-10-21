# 毛绒日光 Pet Spa

宠物洗护店展示页面，使用 Next.js、React 和 TypeScript 构建，包含服务介绍、洗护流程、套餐、门店环境和预约表单界面。

## 本地开发

准备好与 Next.js 15 兼容的 Node.js 和 npm，在仓库根目录运行：

```bash
npm ci
npm run dev
```

浏览器打开 <http://localhost:3000>。修改 `app/page.tsx` 或 `app/globals.css` 后可在开发服务器中查看效果。

## 构建与运行

```bash
npm run build
npm run start
```

`npm run start` 启动生产服务器，需要先成功完成构建。安装依赖时使用 `npm ci`，以遵循仓库中的 `package-lock.json`。

## 项目结构

| 路径 | 用途 |
| --- | --- |
| `app/page.tsx` | 首页内容、服务与套餐数据、预约表单界面 |
| `app/globals.css` | 页面样式 |
| `app/layout.tsx` | 全局布局、页面标题与描述 |
| `next.config.ts` | Next.js 配置 |
| `index.html` | 仓库中另存的 HTML 页面；Next.js 首页入口为 `app/page.tsx` |

## 上线前需要完成的配置

- 预约表单目前使用 `action="#"` 和 GET 方法，尚未连接预约后台，点击提交不会创建真实预约。正式接收客户信息前，应接入服务端处理与校验，并避免通过 URL 查询参数传递联系电话等个人信息。
- 电话、地址、营业时间和套餐价格为页面展示内容，上线前请核实并替换为实际信息。
- 页脚的隐私政策与服务条款目前是占位链接，需要补充实际页面。
- 页面图片来自外部 Unsplash 地址，浏览器需要能够访问对应图片服务。
