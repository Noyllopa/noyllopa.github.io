---
layout: post
title: jekyll博客下的内容插入
category: dump
description: 图片、视频、音乐等插入posts内的方法
---

## 视频插入：

B站：
在页面下方“分享”处直接复制嵌入代码。
<iframe width="540" height="480" src="//player.bilibili.com/player.html?aid=1067674&cid=1544341&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

Youtube：
<iframe width="540" height="480" src="https://www.youtube.com/embed/cSojYMzTl_c?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen> </iframe>
插入 youtube 可以正常显示



## 图片插入：

<img src="https://ae01.alicdn.com/kf/H59902fe00e904617a8510167fa401089y.png">

图片 pixiv id=61829883

~~使用 “新浪微博图床” 扩展生成HTML即可~~

2019.09.07更新：新浪微博图床开始防盗链了，故目前改用[聚合图床](https://www.superbed.cn/)。

## 音乐插入：

普通插入示例：

<iframe width="330" height="86" src="//music.163.com/outchain/player?type=2&amp;id=529824966&amp;auto=0&amp;height=66" frameborder="0" > </iframe>
添加以下代码，之后只要更改歌曲id即可

```
<iframe width="330" height="86" src="//music.163.com/outchain/player?type=2&amp;id=529824966&amp;auto=0&amp;height=66" frameborder="0" > </iframe>
```

若要居中显示，则插入如下代码

居中显示示例：

<iframe src="//music.163.com/outchain/player?type=2&amp;id=529824966&amp;auto=0&amp;height=66" width="330" height="86" frameborder="no" marginwidth="0" marginheight="0" style="margin:0 auto;"></iframe>
代码：

```
<iframe src="//music.163.com/outchain/player?type=2&amp;id=529824966&amp;auto=0&amp;height=66" width="330" height="86" frameborder="no" marginwidth="0" marginheight="0" style="margin:0 auto;"></iframe>
```



## Gif插入：

<img src="https://ae01.alicdn.com/kf/Haf72a2b136a34afdb5d3cd0de4036f91g.gif">

同样使用[聚合图床](https://www.superbed.cn/)。