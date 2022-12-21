---
title: butterfly加入彩色动态图标
tags:
  - hexo
  - butterfly
categories: 
- 教程
- butterfly
description: 把butterfly原来的默认图标改为自己定义的，且为彩色的。并且加入动态效果
cover: https://tt3.pages.dev/img/de/de_5.jpg
abbrlink: d1fb
date: 2022-12-14 16:22:35
updated: 2022-12-14 16:22:35
---
{% note red 'fas fa-circle-exclamation faa-tada faa-reverse animated' flat %}
魔改有风险，请提前做好备份
{% endnote %}

# 效果
{% folding 点击查看效果 %}
## 导航栏图标：
![](https://s3.bmp.ovh/imgs/2022/12/14/be869b04c2f44290.gif)
## 社交卡片图标：
![](https://s3.bmp.ovh/imgs/2022/12/14/b2d4dca3066eb581.gif)
{% endfolding %}

# 教程
转载自[糖果屋微调合集](https://akilar.top/posts/23fdf850/#%E8%8F%9C%E5%8D%95%E6%A0%8F%E5%A4%9A%E8%89%B2%E5%9B%BE%E6%A0%87%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B)
参考：[博客魔改教程总结(二)](https://www.fomal.cc/posts/5389e93f.html/#%E5%BC%95%E5%85%A5iconfont%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87%EF%BC%88%E5%BA%97%E9%95%BF%EF%BC%89)

## 菜单栏彩色动态图标
{% folding 点击查看教程 %}
### 引入iconfont自定义图标

转载自[Iconfont Inject](https://akilar.top/posts/d2ebecef/)
#### 新建图标项目
1.  访问[阿里巴巴矢量图标库](https://www.iconfont.cn/),注册登录。
2.  搜索自己心仪的图标，然后选择**添加入库**，加到购物车。
3.  选择完毕后点击右上角的购物车图标，打开侧栏，选择添加到项目，如果没有项目就新建一个。
![p4](https://s1.vika.cn/space/2022/10/29/91ec7f6432274b42b50698ef554a2b91)
4.  可以通过上方顶栏菜单->资源管理->我的项目，找到之前添加的图标项目。(现在的iconfont可以在图标库的项目设置里直接打开彩色设置，然后采用fontclass的引用方式即可使用多彩图标。但是**单一项目彩色图标上限是40个图标**，酌情采用。)
![](https://s1.vika.cn/space/2022/10/29/ed3f516f1162418faec46808103d3840)]
![](https://s1.vika.cn/space/2022/10/29/a1984c415cb7442ba088e7a489cb2d8a)

#### 引入图标
线上引入方案，我最开始使用的是`font-class`引用。但我使用此方法引用后虽然可以引入彩色图标，但无法加入动态效果还出现了[bug](https://89d9060d.ttie.pages.dev/)，所以选择了symbol引入(效果最好)，所以我就说symbol引入了
1.  复制项目下面生成的symbol代码
![](https://npm.elemecdn.com/akilar-candyassets/image/a11217c7.png)
例如：
``` yml
//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js
```

2.  在`[Blogroot]\themes\butterfly\source\css\`目录(没有就创建)下新建`icon.css`：
``` css
svg.icon {
  width: 1.15em; height: 1.15em;
  /* width和height定义图标的默认宽度和高度*/
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
```
3.  引入上面两个文件
``` yml
inject:
  head:
    - <link rel="stylesheet" href="/css/self/icon.css"> #自定义图标
  bottom:
    - <script async src="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"></script> # 改成你自己的图标库
```
### 添加动态效果
确保做完上述操作后
1. 把`[BlogRoot]\themes\butterfly\layout\includes\header\menu_item.pug`替换为：
``` pug
if theme.menu
  //- for mobile sidebar
  - let sidebarChildHide = theme.hide_sidebar_menu_child ? 'hide' : ''

  .menus_items
    each value, label in theme.menu
      if typeof value !== 'object'
        .menus_item
          a.site-page.faa-parent.animated-hover(href=url_for(trim(value.split('||')[0])))
            if value.split('||')[1]
              - var icon_value = trim(value.split('||')[1])
              - var anima_value = value.split('||')[2] ? trim(value.split('||')[2]) : 'faa-tada'
              if icon_value.substring(0,2)=="fa"      
                i.fa-fw(class=icon_value + ' ' + anima_value)
              else if icon_value.substring(0,4)=="icon"          
                svg.icon(aria-hidden="true" class=anima_value)
                  use(xlink:href=`#`+ icon_value)
            span=' '+label
      else
        .menus_item
          a.site-page.faa-parent.animated-hover(href='javascript:void(0);')
            if label.split('||')[1]
              - var icon_label = trim(label.split('||')[1])
              - var anima_label = label.split('||')[2] ? trim(label.split('||')[2]) : 'faa-tada'
              if icon_label.substring(0,2)=="fa"      
                i.fa-fw(class=icon_label + ' ' + anima_label)
              else if icon_label.substring(0,4)=="icon"    
                svg.icon(aria-hidden="true" class=anima_label)
                  use(xlink:href=`#`+ icon_label)
            span=' '+ trim(label.split('||')[0])
            i.fas.fa-chevron-down.expand(class=sidebarChildHide)
          ul.menus_item_child
            each val,lab in value
              li
                a.site-page.child.faa-parent.animated-hover(href=url_for(trim(val.split('||')[0])))
                  if val.split('||')[1]
                    - var icon_val = trim(val.split('||')[1])
                    - var anima_val = val.split('||')[2] ? trim(val.split('||')[2]) : 'faa-tada'
                    if icon_val.substring(0,2)=="fa"      
                      i.fa-fw(class=icon_val + ' ' + anima_val)
                    else if icon_val.substring(0,4)=="icon"
                      svg.icon(aria-hidden="true" class=anima_val)
                        use(xlink:href=`#`+ icon_val)
                  span=' '+ lab
```
这里为了防止出bug，我记录下`menu_item.pug`原本的内容（如果butterfly版本和我的版本4.5.1相差太大，内容不一样了就不要直接替换了，自己做好备份）：
{% folding 点击查看 %}
``` pug
if theme.menu
  .menus_items
    each value, label in theme.menu
      if typeof value !== 'object'
        .menus_item
          - const valueArray = value.split('||')
          a.site-page(href=url_for(trim(valueArray[0])))
            if valueArray[1]
              i.fa-fw(class=trim(valueArray[1]))
            span=' '+label
      else
        .menus_item
          - const labelArray = label.split('||')
          - const hideClass = labelArray[2] && trim(labelArray[2]) === 'hide' ? 'hide' : ''
          a.site-page.group(class=`${hideClass}` href='javascript:void(0);')
            if labelArray[1]
              i.fa-fw(class=trim(labelArray[1]))
            span=' '+ trim(labelArray[0])
            i.fas.fa-chevron-down
          ul.menus_item_child
            each val,lab in value 
              - const valArray = val.split('||')
              li
                a.site-page.child(href=url_for(trim(valArray[0])))
                  if valArray[1]
                    i.fa-fw(class=trim(valArray[1]))
                  span=' '+ lab
```
{% endfolding %}
2. 最后就可以修改`[Blogroot]\_config.butterfly.yml`配置了，把原来的fas fa-xxxx就可以修改为你的icon图标名，后面在跟上动态效果名
例如我的是：
``` yml
menu:
  首页: / || icon-zhuye- || faa-tada
  文章 || icon-tubiaozhizuomoban- || faa-tada || hide:
    时间轴: /archives/ || icon-ruzhishijian || faa-tada
    标签: /tags/ || icon-biaoqian || faa-tada
    分类: /categories/ || icon-wenjianjia || faa-tada
    统计: /charts/ || fas fa-chart-simple
    随便逛逛: /random/ || icon-suiji || faa-tada
  娱乐 || icon-yule1 || faa-tada || hide:
    音乐: /music/ || icon-yinle || faa-tada
    看星星: /meteor/ || icon-shouhuixingxing || faa-tada
    测试页面: /test/ || icon-shiguan || faa-tada
  #   Movie: /movies/ || fas fa-video
  其他 || icon-List || faa-tada || hide:
    说说: /artitalk/ || icon-icon-test || faa-tada
    友链: /link/ || icon-lianjie || faa-tada
    留言板: /comments/ || icon-liuyan || faa-tada
  关于: /about/ || icon-aixin || faa-tada
```
其中hide是默认不展开折叠

3. 配置完后可以重启项目查看：
``` bash
hexo cl; hexo s
```
{% endfolding %}
## social社交卡片彩色动态图标
**注：需要先完成`菜单栏彩色动态图标`**
{% folding 点击查看教程 %}
1. `[Blogroot]\themes\butterfly\layout\includes\header\social.pug`替换为以下代码:
``` pug
each value, title in theme.social
  a.social-icon.faa-parent.animated-hover(href=url_for(trim(value.split('||')[0])) target="_blank" title=title === undefined ? '' : trim(title))
    if value.split('||')[1]
      - var icon_value = trim(value.split('||')[1])
      - var anima_value = value.split('||')[2] ? trim(value.split('||')[2]) : 'faa-tada'
      if icon_value.substring(0,2)=="fa"      
        i.fa-fw(class=icon_value + ' ' + anima_value)
      else if icon_value.substring(0,4)=="icon"          
        svg.icon(aria-hidden="true" class=anima_value)
          use(xlink:href=`#`+ icon_value)
```
还是为了防止出bug，记录下`social.pug`的原本内容：
{% folding 点击查看 %}
``` pug
each url, icon in theme.social
  a.social-icon(href=url_for(trim(url.split('||')[0])) target="_blank" 
  title=url.split('||')[1] === undefined ? '' : trim(url.split('||')[1]))
    i(class=icon)
```
{% endfolding %}

2. 修改`[Blogroot]\_config.butterfly.yml`的social配置项。
``` yml
social:
  # iconfont彩色图标
  Github: https://github.com/python3student || icon-rat || faa-tada
  # fontawesome单色图标
  Email: mailto:469784630@qq.com || fas fa-envelope || faa-tada
  # iconfont单色图标
  Bilibili: https://space.bilibili.com/1840039653 || icon-ox || faa-tada
```
**注：写法和原来不一样了**
原来：图标: 跳转链接 || 注释
现在: 注释: 跳转链接 || 图标名 || 动态效果名

3. 配置完后可以重启项目查看：
``` bash
hexo cl; hexo s
```
{% endfolding %}

## 修改搜索图标
**注：需要先完成`菜单栏彩色动态图标`**
{% folding 点击查看教程 %}

{% tabs 教程, 2 %}
<!-- tab 查看效果 -->
### 直接添加动态效果（使用fas fa-xxxx的方式）
![](https://s3.bmp.ovh/imgs/2022/12/14/cbdc0b1e1c82df17.gif)
### 换为自己的图标添加动态效果（使用阿里巴巴图标库）
![](https://s3.bmp.ovh/imgs/2022/12/14/1f49e987f6d483e3.gif)
<!-- endtab -->
<!-- tab 教程 -->

### 直接添加动态效果（使用fas fa-xxxx的方式）

{% folding 点击查看教程 %}
1. 确保`inject`配置项引入了这两个依赖
``` yml
inject:
  head:
     #动画标签anima的依赖
     - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css"  media="defer" onload="this.media='all'">
  bottom:
    # 阿里矢量图标,这串是我的图标库，你的链接会有所不同。
    - <script async src="//at.alicdn.com/t/c/font_3805964_cz3h2lzj9m.js"></script>
```

2. 找到`[Blogroot]\themes\butterfly\layout\includes\header\nav.pug`文件：
{% folding 点击查看原始文件 %}
``` pug
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
    
  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw
          span=' '+_p('search.title')
    !=partial('includes/header/menu_item', {}, {cache: true})

    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw



```
{% endfolding %}
3. `nav.pug`修改为：
``` pug
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
    
  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search.faa-parent.animated-hover
          i.fas.fa-search.fa-fw.faa-tada
          span=' '+_p('search.title')
    !=partial('includes/header/menu_item', {}, {cache: true})

    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw



```
4. 重启项目查看：
``` bash
hexo cl; hexo s
```
{% endfolding %}

### 换为自己的图标添加动态效果（使用阿里巴巴图标库）

{% folding 点击查看教程 %}
1. 确保`[Blogroot]\_config.butterfly.yml`的`inject`配置项引入了这两个依赖
``` yml
inject:
  head:
     #动画标签anima的依赖
     - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css"  media="defer" onload="this.media='all'">
  bottom:
    # 阿里矢量图标,这串是我的图标库，你的链接会有所不同。
    - <script async src="//at.alicdn.com/t/c/font_3805964_cz3h2lzj9m.js"></script>
```

2. 找到`[Blogroot]\themes\butterfly\layout\includes\header\nav.pug`文件：
{% folding 点击查看原始文件 %}
``` pug
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
    
  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw
          span=' '+_p('search.title')
    !=partial('includes/header/menu_item', {}, {cache: true})

    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw



```
{% endfolding %}
3. `nav.pug`修改为：
``` pug
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
    
  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      #search-button
        a.site-page.social-icon.search.faa-parent.animated-hover
          svg.icon(aria-hidden="true" class='faa-tada')
            use(xlink:href="#icon-icon-sousuo")
          span=' '+_p('search.title')
    !=partial('includes/header/menu_item', {}, {cache: true})

    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw



```
注：其中`faa-tada`为动画名，`icon-icon-sousuo`为我的图标名，你应替换为你的，否则不会显示
4. 重启项目查看：
``` bash
hexo cl; hexo s
```
{% endfolding %}

<!-- endtab -->
{% endtabs %}

{% endfolding %}

## 图标局部调整

自己挑选的图标，可能会因为图标大小不一而出现图标不整齐的情况，下面提供几种解决方案

{% folding 点击查看教程 %}
### 直接找人家的图标套图，直接用图标库里的，这样大小就一样了。因为我想用自己挑选的图标，所以我用了第二种解决办法
![](https://s3.bmp.ovh/imgs/2022/12/14/9cc54e72f38ff1be.jpg)
![](https://s3.bmp.ovh/imgs/2022/12/14/d6c10ba44c9c45b1.jpg)

### 在项目里直接给图标调整大小和位置进行调整
1. 点击图标右上角的编辑
![](https://s3.bmp.ovh/imgs/2022/12/14/c38a8bf9d902b2c1.png)
2. 通过提供的位移，旋转，大小进行调整，然后保存重新生成代码
![](https://s3.bmp.ovh/imgs/2022/12/14/df99ce306e066b16.png)
3. 修改`[Blogroot]\_config.butterfly.yml`的`inject`配置项引入新的代码
``` yml
inject:
  bottom:
    # 阿里矢量图标,这串是我的图标库，改成你新生成的链接。
    - <script async src="//at.alicdn.com/t/c/font_3805964_cz3h2lzj9m.js"></script>
```
4. 重启项目查看并不断调整：
``` bash
hexo cl; hexo s
```

{% endfolding %}

# 动态效果合集

{% folding 点击查看效果 %}

{% note blue 'fas fa-bullhorn' simple %}
转载自[Tag Plugins Plus](https://akilar.top/posts/615e2dec/#%E5%8A%A8%E6%80%81%E6%A0%87%E7%AD%BE%20anima)
更多详情请参看[font-awesome-animation文档](http://l-lin.github.io/font-awesome-animation/)

{% endnote %}

|On DOM load<br>当页面加载时<br>显示动画|On hover<br>当鼠标悬停时<br>显示动画|On parent hover<br>当鼠标悬停<br>在父级元素时<br>显示动画|
|:-----|:-----|:-----|
|<span><i class="fas fa-wrench faa-wrench animated"></i>faa-wrench animated</span>|<span><i class="fas fa-wrench faa-wrench animated-hover"></i>faa-wrench animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-wrench faa-wrench"></i>faa-wrench</span>|
|<span><i class="fas fa-bell faa-ring animated"></i>faa-ring animated</span>|<span><i class="fas fa-bell faa-ring animated-hover"></i>faa-ring animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-bell faa-ring"></i>faa-ring</span>|
|<span><i class="fas fa-envelope faa-horizontal animated"></i>faa-horizontal animated</span>|<span><i class="fas fa-envelope faa-horizontal animated-hover"></i>faa-horizontal animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-envelope faa-horizontal"></i>faa-horizontal</span>|
|<span><i class="fas fa-thumbs-up faa-vertical animated"></i>faa-vertical animated</span>|<span><i class="fas fa-thumbs-up faa-vertical animated-hover"></i>faa-vertical animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-thumbs-up faa-vertical"></i>faa-vertical</span>|
|<span><i class="fas fa-exclamation-triangle faa-flash animated"></i>faa-flash animated</span>|<span><i class="fas fa-exclamation-triangle faa-flash animated-hover"></i>faa-flash animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-exclamation-triangle faa-flash"></i>faa-flash</span>|
|<span><i class="fas fa-thumbs-up faa-bounce animated"></i>faa-bounce animated</span>|<span><i class="fas fa-thumbs-up faa-bounce animated-hover"></i>faa-bounce animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-thumbs-up faa-bounce"></i>faa-bounce</span>|
|<span><i class="fas fa-spinner faa-spin animated"></i>faa-spin animated</span>|<span><i class="fas fa-spinner faa-spin animated-hover"></i>faa-spin animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-spinner faa-spin"></i>faa-spin</span>|
|<span><i class="fas fa-plane faa-tada animated"></i>faa-tada animated</span>|<span><i class="fas fa-plane faa-tada animated-hover"></i>faa-tada animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-plane faa-tada"></i>faa-tada</span>|
|<span><i class="fas fa-heart faa-pulse animated"></i>faa-pulse animated</span>|<span><i class="fas fa-heart faa-pulse animated-hover"></i>faa-pulse animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-heart faa-pulse"></i>faa-pulse</span>|
|<span><i class="fas fa-envelope faa-shake animated"></i>faa-shake animated</span>|<span><i class="fas fa-envelope faa-shake animated-hover"></i>faa-shake animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-envelope faa-shake"></i>faa-shake</span>|
|<span><i class="fas fa-trophy faa-tada animated"></i>faa-tada animated</span>|<span><i class="fas fa-trophy faa-tada animated-hover"></i>faa-tada animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-trophy faa-tada"></i>faa-tada</span>|
|<span><i class="fas fa-space-shuttle faa-passing animated"></i>faa-passing animated</span>|<span><i class="fas fa-space-shuttle faa-passing animated-hover"></i>faa-passing animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-space-shuttle faa-passing"></i>faa-passing</span>|
|<span><i class="fas fa-space-shuttle faa-passing-reverse animated"></i>faa-passing-reverse animated</span>|<span><i class="fas fa-space-shuttle faa-passing-reverse animated-hover"></i>faa-passing-reverse animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-space-shuttle faa-passing-reverse"></i>faa-passing-reverse</span>|
|<span><i class="fas fa-circle faa-burst animated"></i>faa-burst animated</span>|<span><i class="fas fa-circle faa-burst animated-hover"></i>faa-burst animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-circle faa-burst"></i>faa-burst</span>|
|<span><i class="fas fa-star faa-falling animated"></i>faa-falling animated</span>|<span><i class="fas fa-star faa-falling animated-hover"></i>faa-falling animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-star faa-falling"></i>faa-falling</span>|
|<span><i class="fas fa-rocket faa-rising animated"></i>faa-rising animated</span>|<span><i class="fas fa-rocket faa-rising animated-hover"></i>faa-rising animated-hover</span>|<span class="faa-parent animated-hover"><i class="fas fa-rocket faa-rising"></i>faa-rising</span>|
{% endfolding %}
