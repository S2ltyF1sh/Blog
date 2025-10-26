---
title: 关于Astro博客搭建，vercel部署博客时遇到的一些问题
published: 2025-10-26
description: 可能会有些小坑
image: "./Image_1760948290649.jpg"
tags: [前端,博客]
category: 技术
draft: false
---

# 图片导入

## 场景描述1

需要在静态页面内导入图片时如果导入图片位置不正确可能会出现如下情况：

:::warning[]
Could not find requested image 'src\assets\imageslarknights.png'. Does it exist?
:::

![图片alt](./52516a72c118714d8a20854cf24f40dd.png "")

然后爆红，部署失败

### 推测出现原因

- 在开发环境 (pnpm run dev) 中，Astro 的开发服务器比较宽松
- 在生产构建时，Astro 会严格检查所有静态资源路径
  
### 给出的解决方案

#### 直接在对应位置塞入图片文件，导入时用“./”快速导入![图片alt](./e5015e01-28db-4708-9c51-dc9b329b733c.png "")

```markdown
![图片alt](./52516a72c118714d8a20854cf24f40dd.png "")
```

## 场景描述2

本地测试`pnpm run dev`时没问题，但部署到vercel后资源丢失，显示不出来，如图：

![图片alt](./e20f2295-665c-4f09-8082-db4924da21af.png "")

### 推测出现原因

- 因为在构建时，Astro 不会将 /src/assets/ 路径直接映射到生产环境。在生产环境中，图片路径需要指向构建后的公共资源路径。
  
### 给出的解决方案

#### 使用非src\assets目录存放图片文件![图片alt](./75c02d45-d60a-4032-8095-cd4be4312673.png "")

在引用时只需简单直接的指向public目录，即可同时满足生产环境（部署时）和开发环境（测试时）
```typescript
		logo: "/logos/zheyi.png",
```