---
title: test-01
date: 2022-12-03 15:57:04
---

{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?aid=586214069&bvid=BV1Az4y1S7jv&cid=284704365&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}
<br/>

``` md
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?aid=943900911&bvid=BV1gW4y1H7Xz&cid=856466770&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}
```
<br/>
``` md
{% iframe '/music/' 100% 300px %}
```
<br/>
``` md
---
title: test# 【必需】文章标题
date: xxxxxxx # 【必需】文章创建日期
updated: # 【可选】文章更新日期
tags: 初始之火 # 【可选】文章标签
categories: # 【可选】文章分类
keywords: # 【可选】文章关键字
description: # 【可选】文章描述
top_img: # 【可选】文章顶部图片
comments: # 【可选】显示文章评论模块(默认 true)
cover: # 【可选】文章缩略图(如果没有设置top_img,文章页顶部将显示缩略图，可设为false/图片地址/留空)
toc: # 【可选】显示文章TOC(默认为设置中toc的enable配置)
toc_number: # 【可选】显示toc_number(默认为设置中toc的number配置)
toc_style_simple: # 【可选】显示 toc 简洁模式
copyright: # 【可选】显示文章版权模块(默认为设置中post_copyright的enable配置)
copyright_author: # 【可选】文章版权模块的文章作者
copyright_author_href: # 【可选】文章版权模块的文章作者链接
copyright_url: # 【可选】文章版权模块的文章连结链接
copyright_info: # 【可选】文章版权模块的版权声明文字
mathjax: # 【可选】显示mathjax(当设置mathjax的per_page: false时，才需要配置，默认 false)
katex: # 【可选】显示katex(当设置katex的per_page: false时，才需要配置，默认 false)
aplayer: # 【可选】在需要的页面加载aplayer的js和css,请参考文章下面的音乐 配置
highlight_shrink: # 【可选】配置代码框是否展开(true/false)(默认为设置中highlight_shrink的配置)
aside: # 【可选】显示侧边栏 (默认 true)
---
# 文章标题
使用本地markdown编辑器尽情写作吧
```

``` md
{% span center logo large, 文章发布统计 %}
{% raw %}
<div id="posts-calendar" class="js-pjax"></div>
<div id="posts-chart" class="js-pjax"></div>
{% endraw %}
<br/>
{% span center logo large, 文章分类统计 %}
{% raw %}
<div id="categories-chart" class="js-pjax"></div>
<div id="categories-radar" class="js-pjax"></div>
{% endraw %}
<br/>
{% span center logo large, Top 10 标签统计 %}
{% raw %}
<!-- "data-length" = how many tags to show, default 10 -->
<div id="tags-chart" data-length="10" class="js-pjax"></div>
{% endraw %}
```

``` md
{% raw %}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<div id="aplayer"></div>
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<div id="aplayer-KLAmtfaD" class="aplayer aplayer-tag-marker aplayer-withlrc" style="margin-bottom:20px;width:60%">
</div>
<script>
const ap = new APlayer({
    container: document.getElementById('aplayer-KLAmtfaD'),
    mini: false,
    autoplay: true,
    theme: '#8EE5EE',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: '稻香',
            artist: '周杰伦',
            url: 'https://tt3.pages.dev/music/dao2.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20200909/20200909135350181905.jpg',
            lrc: 'https://tt3.pages.dev/lrc/稻香_歌词.lrc',
            theme: '#000000'
        }
    ]
});
</script>
<script type="text/javascript">
var me_box = document.querySelector(".aplayer.no-destroy.no-reload.aplayer-withlist.aplayer-fixed.aplayer-narrow");
var me = document.querySelector("div");
me_box.remove();
</script>
{% endraw %}
```

![](https://s3.bmp.ovh/imgs/2022/12/16/ee2efd151f907141.png)
![](https://s3.bmp.ovh/imgs/2022/12/16/ed455deaa530d4aa.png)