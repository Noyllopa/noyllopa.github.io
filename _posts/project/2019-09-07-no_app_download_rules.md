---
layout: post
title: NoAppDownload 规则（19/09/07更新）
category: project
description: 一个自用的去 App 下载提示规则
---
## 简介

这是一个自用的去 App 下载提示的规则，目前还在完善中。

主要目的即去掉各种网站上的 App 下载提示，我都用你的网页了还要下 App 干什么...



## 举例：

使用前：

<img src="https://ae01.alicdn.com/kf/Hb35a646f03a844948d706b9d422c38b00.png">



使用后：

<img src="https://ae01.alicdn.com/kf/Hc2a584d4bd5c4fe0b81958b542f96170z.png">



但一些对界面影响不大的 App 下载链接不会被去除，比如：

<img src="https://ae01.alicdn.com/kf/Had8c0c3f6bf74ce89b509df8010a2b0ea.png">



## 使用方法

1. 首先在浏览器中安装一个支持第三方规则的广告屏蔽插件，如 uBlockOrigin （[Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)、[Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)）

2. 在规则列表中的第三方规则处添加

 https://raw.githubusercontent.com/Noyllopa/NoAppDownload/master/NoAppDownload.txt 

3. 同步即可



## 其他

由于本规则只是 Noyllopa 一时兴起做的，很有可能出现以下情况：

- 去广告不够全
- 去广告过度影响页面正常使用
- 长时间不更新
- 短时间频繁更新
- 规则更改地址
- 规则被删除

另外，本规则欢迎进行反馈，项目地址为 https://github.com/Noyllopa/NoAppDownload.

