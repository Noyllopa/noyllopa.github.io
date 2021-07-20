---
layout: post
title: jekyll 博客下的内容插入
category: dump
description: 图片、视频、音乐等插入posts内的方法
---

## 视频插入：

B站：
在页面下方“分享”处直接复制嵌入代码，建议使用 **4:3** 的宽高比。

<iframe width="640" height="480" src="//player.bilibili.com/player.html?aid=1067674&cid=1544341&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
代码如下：

```
<iframe width="640" height="480" src="//player.bilibili.com/player.html?aid=1067674&cid=1544341&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`
```


Youtube：在页面下方“分享”处复制嵌入代码，建议使用 **16:9** 的宽高比。

<iframe width="640" height="360" src="https://www.youtube.com/embed/cqj6B7crEOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
代码如下：

```
<iframe width="640" height="360" src="https://www.youtube.com/embed/cqj6B7crEOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```


## 图片插入：

![red and white Game On LED signage](https://raw.githubusercontent.com/Noyllopa/noyllopa.github.io/master/images/photo-1546443046-ed1ce6ffd1ab)

Photo by [鏡飛匙](https://unsplash.com/@sweetheartshi)

~~使用 “新浪微博图床” 扩展生成HTML即可~~

~~2019.09.07更新：新浪微博图床开始防盗链了，故目前改用[聚合图床](https://www.superbed.cn/)。~~

2021.07.20更新：虽然聚合图床的使用体验不错，但好像也没必要为了这点速度放弃 GitHub 本身作为图床，而且使用 Typora 直接上传图片还要更加方便一些。具体操作可百度 “PicGo + GitHub + Typora”




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

<img src="https://raw.githubusercontent.com/Noyllopa/noyllopa.github.io/master/images/Haf72a2b136a34afdb5d3cd0de4036f91g.gif">

~~同样使用[聚合图床](https://www.superbed.cn/)。~~

同样使用 GitHub 作为图床。