---
title: GitHub Page页面使用
date: 2022-01-23 01:51:31
categories: Github
tags:
---

## 关于GitHub Page和Gitee Pages
> GitHub Pages 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。 
所以，我们可以通过github page免费搭建自己的个人网站。同理`Gitee Pages`使用也是类似的。[请看链接](https://gitee.com/help/articles/4136#article-header3)

## 如何使用
更详细说明，请看[官网：](https://docs.github.com/en/pages/quickstart)介绍

### 新建仓库
- 仓库的名字**必须**为`<user>.github.io`，user是自己的GitHub账号

### 创建站点
- 进入自己创建的仓库，选择`setting-pages-Branch-选择默认分值`，我这里用了`gh-pages`是我之前创建的
![](../images/artcle/github%20page1.jpg)
- 然后在选择的分支下，默认是`master或者main(主分支)`放自己的index.html页面，css,js等文件，通过访问`https://<user>.github.io`就可以看到自己的页面啦

## 配置GitHub Actions
通过配置action，可以自动生成和部署的静态页面。可以使用官方的`Jekyll`或者使用 `Hugo`、`Hexo`工具按照既定的目录生成和部署。

## page的一些使用限制
[**摘自官网**](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#usage-limits) GitHub Pages 站点受到以下使用限制的约束：
- GitHub Pages 源存储库的建议限制为 1 GB。 有关详细信息，请参阅“关于 GitHub 上的大文件”
- 发布的 GitHub Pages 站点不得超过 1 GB。
- GitHub Pages 站点的软带宽限制为每月 100 GB。
- GitHub Pages 站点的软限制为每小时 10 次生成。 如果使用自定义 GitHub Actions 工作流生成和发布站点，则此限制不适用
- 为了为所有 GitHub Pages 站点提供一致的服务质量，可能会实施速率限制。 这些速率限制无意干扰 GitHub Pages 的合法使用。 如果你的请求触发了速率限制，你将收到相应响应，其中包含 HTTP 状态代码 429 以及信息性 HTML 正文。