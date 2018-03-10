---
layout: post
title: jekyll博客下的内容插入
category: dump
description: 图片、视频、音乐等插入posts内的方法
---

## 视频插入：

<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=19594429&amp;page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"> </embed>

B站这里虽然成功加载出了播放器，然而视频无法正常播放，显示code:31x错误，而且还多了一个 “ </embed> ”标签，还在找原因

据说无法播放的错误和ISP有关



<iframe width="560" height="315" src="https://www.youtube.com/embed/cSojYMzTl_c?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen> </iframe>

插入 youtube 可以正常显示



## 图片插入（id=61829883）：

<img src="https://ws1.sinaimg.cn/large/92c79279ly1fp7g3h7vzxj21ee0rsb2a.jpg"/>

使用 “新浪微博图床” 扩展生成HTML即可



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

<img src="https://ws1.sinaimg.cn/large/92c79279ly1fp7g6emjmjg20cs07c7wn.gif"/>

同样使用 “新浪微博图床” 扩展