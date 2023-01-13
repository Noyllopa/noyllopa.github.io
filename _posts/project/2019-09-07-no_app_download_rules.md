---

layout: post
title: NoAppDownload 规则
category: project
description: 一个自用的去 App 下载提示规则

---

## 简介

这是一个自用的去 App 下载提示的规则，目前还在完善中。

主要目的即去掉各种网站上的 App 下载提示，我都用你的网页了还要下 App 干什么...

## 举例：

使用前：

![68747470733a2f2f616530312e616c6963646e2e636f6d2f6b662f486233356136343666303361383434393438643730366239643432326333386230302e706e67](https://raw.githubusercontent.com/Noyllopa/noyllopa.github.io/master/images/68747470733a2f2f616530312e616c6963646e2e636f6d2f6b662f486233356136343666303361383434393438643730366239643432326333386230302e706e67.jpg)

使用后：

![68747470733a2f2f616530312e616c6963646e2e636f6d2f6b662f4863326135383464346264356334666530623831393538623534326639363137307a2e706e67](https://raw.githubusercontent.com/Noyllopa/noyllopa.github.io/master/images/68747470733a2f2f616530312e616c6963646e2e636f6d2f6b662f4863326135383464346264356334666530623831393538623534326639363137307a2e706e67.webp)

但一些对界面影响不大的 App 下载链接不会被去除，比如：

![Had8c0c3f6bf74ce89b509df8010a2b0ea](https://raw.githubusercontent.com/Noyllopa/noyllopa.github.io/master/images/Had8c0c3f6bf74ce89b509df8010a2b0ea.png)

## 使用方法

1. 首先在浏览器中安装一个支持第三方规则的广告屏蔽插件，如 uBlockOrigin （[Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)、[Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)）

2. 在规则列表中的第三方规则处添加这个地址
   
   ```
   https://raw.githubusercontent.com/Noyllopa/NoAppDownload/master/NoAppDownload.txt
   ```
   
   GitHub无法使用的同学请用这个地址
   
   ```
   https://cdn.jsdelivr.net/gh/Noyllopa/NoAppDownload@master/NoAppDownload.txt
   ```

3. 同步即可

## 其他

由于本规则只是 Noyllopa 一时兴起做的，很有可能出现以下情况：

- 去广告不够全
- 去广告过度影响页面正常使用
- 长时间不更新
- 短时间频繁更新
- 规则更改地址
- 规则被删除

另外，本规则欢迎进行反馈，项目地址为 [https://github.com/Noyllopa/NoAppDownload](https://github.com/Noyllopa/NoAppDownload)
