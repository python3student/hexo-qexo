---
title: 怎么更新hexo和butterfly
abbrlink: 428d
date: 2022-12-11 10:37:37
tags:
  - hexo
  - butterfly
categories: 
- 教程
- butterfly
description: 关于我是怎么更新hexo和butterfly的
updated: 2022-12-12 10:37:37
---
{% note blue 'fas fa-bullhorn' flat %}
看了一下butterfly的最新版，更新到[4.5.1](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/4.5.1)了
而我的还是[4.1.0](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/4.1.0),版本太老不太利于主题魔改，所以更新一下，顺便把npm和hexo也更新了一下
在此做一下记录，以免以后出了bug不好恢复。同时也为以后更新做好参照。
{% endnote %}

## 升级hexo

参照教程http://t.csdn.cn/x46zf (2020年的，有点老了，其中npm域名好像切换了，~~不过我没有影响~~)

在终端输入以下命令
``` bash
# 使用淘宝源的 cnpm 替换 npm
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install -g cnpm                 # 升级 npm
cnpm cache clean -f                 # 清除 npm 缓存

===更新 hexo: 进入 blog 目录，执行如下命令=== 
# 更新 package.json 中的 hexo 及个插件版本
cnpm install -g npm-check           # 检查之前安装的插件，都有哪些是可以升级的 
cnpm install -g npm-upgrade         # 升级系统中的插件
npm-check
npm-upgrade

# 更新 hexo 及所有插件
cnpm update

# 确认 hexo 已经更新
hexo -v
```
淘宝源切换(~~我没有用，也可以正常更新~~)：
``` bash
npm set registry http://registry.npmmirror.com
```
{% folding 查看我输入的 %}
``` bash
PS D:\blog\s> hexo -v
INFO  Validating config
INFO  
  ===================================================================

      #####  #    # ##### ##### ###### #####  ###### #      #   #    
      #    # #    #   #     #   #      #    # #      #       # #     
      #####  #    #   #     #   #####  #    # #####  #        #     
      #    # #    #   #     #   #      #####  #      #        #      
      #    # #    #   #     #   #      #   #  #      #        #    
      #####   ####    #     #   ###### #    # #      ######   #  

                            4.1.0
  ===================================================================
hexo: 6.0.0
hexo-cli: 4.3.0
os: win32 10.0.22000 
node: 16.14.0
v8: 9.4.146.24-node.20
uv: 1.43.0
zlib: 1.2.11
brotli: 1.0.9
ares: 1.18.1
modules: 93
nghttp2: 1.45.1
napi: 8
llhttp: 6.0.4
openssl: 1.1.1m+quic
cldr: 40.0
icu: 70.1
tz: 2021a3
unicode: 14.0
ngtcp2: 0.1.0-DEV
nghttp3: 0.1.0-DEV
PS D:\blog\s> npm install -g cnpm --registry=https://registry.npm.taobao.org
npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs

added 376 packages in 11s

11 packages are looking for funding
  run `npm fund` for details
PS D:\blog\s> cnpm install -g cnpm
Downloading cnpm to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\cnpm_tmp
Copying C:\Users\我的用户名\AppData\Roaming\npm\node_modules\cnpm_tmp\_cnpm@8.4.0@cnpm to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\cnpm
Installing cnpm's dependencies to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\cnpm/node_modules
[1/12] auto-correct@^1.0.0 installed at node_modules\_auto-correct@1.0.0@auto-correct
[2/12] giturl@^1.0.0 installed at node_modules\_giturl@1.0.1@giturl
[3/12] ini@^1.3.4 installed at node_modules\_ini@1.3.8@ini
[4/12] bagpipe@^0.3.5 installed at node_modules\_bagpipe@0.3.5@bagpipe
[5/12] debug@^4.3.4 installed at node_modules\_debug@4.3.4@debug
[6/12] cross-spawn@~0.2.8 installed at node_modules\_cross-spawn@0.2.9@cross-spawn
[7/12] commander@~2.10.0 installed at node_modules\_commander@2.10.0@commander
[8/12] open@^8.2.1 installed at node_modules\_open@8.4.0@open
[9/12] npm-request@^1.0.0 installed at node_modules\_npm-request@1.0.0@npm-request
[10/12] urllib@^3.1.0 installed at node_modules\_urllib@3.7.0@urllib
[11/12] npm@^8.12.1 installed at node_modules\_npm@8.19.3@npm
[npminstall:get] retry GET https://registry.npmmirror.com/@npmcli/arborist/-/arborist-6.1.5.tgz after 100ms, retry left 4, ConnectTimeoutError: Connect Timeout Error, status: -1, headers: {}
[12/12] npminstall@^6.5.0 installed at node_modules\_npminstall@6.6.2@npminstall
deprecate npminstall@6.6.2 › node-gyp@9.3.0 › make-fetch-happen@10.2.1 › cacache@16.1.3 › @npmcli/move-file@^2.0.0 This functionality has been moved to @npmcli/fs
All packages installed (334 packages installed from npm registry, used 12s(network 12s), speed 763KB/s, json 280(1.74MB), tarball 7.14MB, manifests cache hit 0, etag hit 0 / miss 0)
[cnpm@8.4.0] link C:\Users\我的用户名\AppData\Roaming\npm\cnpm@ -> C:\Users\我的用户名\AppData\Roaming\npm\node_modules\cnpm\bin\cnpm
PS D:\blog\s> cnpm cache clean -f
npm WARN using --force Recommended protections disabled.
PS D:\blog\s> cnpm install -g npm-check
Downloading npm-check to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-check_tmp
Copying C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-check_tmp\_npm-check@6.0.1@npm-check to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-check
Installing npm-check's dependencies to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-check/node_modules
[1/27] co@^4.6.0 installed at node_modules\_co@4.6.0@co
[2/27] throat@^6.0.1 installed at node_modules\_throat@6.0.1@throat
[3/27] xtend@^4.0.2 installed at node_modules\_xtend@4.0.2@xtend
[4/27] giturl@^1.0.0 installed at node_modules\_giturl@1.0.1@giturl
[5/27] path-exists@^4.0.0 installed at node_modules\_path-exists@4.0.0@path-exists
[6/27] strip-ansi@^6.0.0 installed at node_modules\_strip-ansi@6.0.1@strip-ansi
[7/27] text-table@^0.2.0 installed at node_modules\_text-table@0.2.0@text-table
[8/27] is-ci@^2.0.0 installed at node_modules\_is-ci@2.0.0@is-ci
[9/27] semver-diff@^3.1.1 installed at node_modules\_semver-diff@3.1.1@semver-diff
[10/27] minimatch@^3.0.2 installed at node_modules\_minimatch@3.1.2@minimatch
[11/27] chalk@^4.1.0 installed at node_modules\_chalk@4.1.2@chalk
[12/27] global-modules@^2.0.0 installed at node_modules\_global-modules@2.0.0@global-modules
[13/27] execa@^5.0.0 installed at node_modules\_execa@5.1.1@execa
[14/27] update-notifier@^5.1.0 installed at node_modules\_update-notifier@5.1.0@update-notifier
[15/27] semver@^7.3.4 installed at node_modules\_semver@7.3.8@semver
[16/27] rc-config-loader@^4.0.0 installed at node_modules\_rc-config-loader@4.1.1@rc-config-loader
[17/27] ora@^5.3.0 installed at node_modules\_ora@5.4.1@ora
[18/27] pkg-dir@^5.0.0 installed at node_modules\_pkg-dir@5.0.0@pkg-dir
[19/27] package-json@^6.5.0 installed at node_modules\_package-json@6.5.0@package-json
[20/27] preferred-pm@^3.0.3 installed at node_modules\_preferred-pm@3.0.3@preferred-pm
[21/27] globby@^11.0.2 installed at node_modules\_globby@11.1.0@globby
[22/27] meow@^9.0.0 installed at node_modules\_meow@9.0.0@meow
[23/27] lodash@^4.17.20 installed at node_modules\_lodash@4.17.21@lodash
[24/27] node-emoji@^1.10.0 installed at node_modules\_node-emoji@1.11.0@node-emoji
[25/27] depcheck@^1.3.1 installed at node_modules\_depcheck@1.4.3@depcheck
[26/27] callsite-record@^4.1.3 installed at node_modules\_callsite-record@4.1.4@callsite-record
[27/27] inquirer@^7.3.3 installed at node_modules\_inquirer@7.3.3@inquirer
deprecate callsite-record@4.1.4 › @types/error-stack-parser@^2.0.0 This is a stub types definition for error-stack-parser (https://github.com/stacktracejs/error-stack-parser). error-stack-parser provides its own type definitions, so you don't need @types/error-stack-parser installed!  
deprecate depcheck@1.4.3 › @vue/compiler-sfc@3.2.45 › magic-string@0.25.9 › sourcemap-codec@^1.4.8 Please use @jridgewell/sourcemap-codec instead
All packages installed (339 packages installed from npm registry, used 7s(network 6s), speed 1.35MB/s, json 309(1.88MB), tarball 6.86MB, manifests cache hit 0, etag hit 0 / miss 0)
[npm-check@6.0.1] link C:\Users\我的用户名\AppData\Roaming\npm\npm-check@ -> C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-check\bin\cli.js   
PS D:\blog\s> cnpm install -g npm-upgrade
Downloading npm-upgrade to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-upgrade_tmp
Copying C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-upgrade_tmp\_npm-upgrade@3.1.0@npm-upgrade to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-upgrade
Installing npm-upgrade's dependencies to C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-upgrade/node_modules
[1/16] detect-indent@6.0.0 installed at node_modules\_detect-indent@6.0.0@detect-indent
[2/16] open@7.4.2 installed at node_modules\_open@7.4.2@open
[3/16] bluebird@3.7.2 installed at node_modules\_bluebird@3.7.2@bluebird
[4/16] chalk@4.1.0 installed at node_modules\_chalk@4.1.0@chalk
[5/16] cli-table@0.3.5 installed at node_modules\_cli-table@0.3.5@cli-table
[6/16] semver@7.3.4 installed at node_modules\_semver@7.3.4@semver
[7/16] yargs@16.2.0 installed at node_modules\_yargs@16.2.0@yargs
[8/16] libnpmconfig@1.2.1 installed at node_modules\_libnpmconfig@1.2.1@libnpmconfig
[9/16] del@6.0.0 installed at node_modules\_del@6.0.0@del
[10/16] shelljs@^0.8.4 installed at node_modules\_shelljs@0.8.5@shelljs
[11/16] got@11.8.1 installed at node_modules\_got@11.8.1@got
[12/16] @babel/runtime@7.13.7 installed at node_modules\_@babel_runtime@7.13.7@@babel\runtime
[13/16] pacote@11.2.7 installed at node_modules\_pacote@11.2.7@pacote
[14/16] lodash@4.17.21 installed at node_modules\_lodash@4.17.21@lodash
[15/16] npm-check-updates@11.1.9 installed at node_modules\_npm-check-updates@11.1.9@npm-check-updates
[16/16] inquirer@7.3.3 installed at node_modules\_inquirer@7.3.3@inquirer
deprecate libnpmconfig@1.2.1 This module is not used anymore. npm config is parsed by npm itself and by @npmcli/config
deprecate pacote@11.2.7 › cacache@15.3.0 › @npmcli/move-file@^1.0.1 This functionality has been moved to @npmcli/fs
deprecate pacote@11.2.7 › @npmcli/run-script@1.8.6 › node-gyp@7.1.2 › request@^2.88.2 request has been deprecated, see https://github.com/request/request/issues/3142
deprecate pacote@11.2.7 › @npmcli/run-script@1.8.6 › node-gyp@7.1.2 › request@2.88.2 › har-validator@~5.1.3 this library is no longer supported
deprecate pacote@11.2.7 › @npmcli/run-script@1.8.6 › node-gyp@7.1.2 › request@2.88.2 › uuid@^3.3.2 Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
All packages installed (379 packages installed from npm registry, used 7s(network 7s), speed 1.15MB/s, json 338(2.2MB), tarball 6MB, manifests cache hit 0, etag hit 0 / miss 0)
[npm-upgrade@3.1.0] link C:\Users\我的用户名\AppData\Roaming\npm\npm-upgrade@ -> C:\Users\我的用户名\AppData\Roaming\npm\node_modules\npm-upgrade\lib\bin\cli.js
PS D:\blog\s> npm-check
>> npm-upgrade

gitalk                              😍  UPDATE!   Your local install is out of date.
                                                 npm install gitalk@1.8.0 --save to go from 1.7.2 to 1.8.0
                                    😕  NOTUSED?  Still using gitalk?
                                                 Depcheck did not find code similar to require('gitalk') or import from 'gitalk'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["gitalk"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall gitalk --save

hexo                                😍  UPDATE!   Your local install is out of date. https://hexo.io/
                                                 npm install hexo@6.3.0 --save to go from 6.0.0 to 6.3.0

hexo-abbrlink                       😕  NOTUSED?  Still using hexo-abbrlink?
                                                 Depcheck did not find code similar to require('hexo-abbrlink') or import from 'hexo-abbrlink'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-abbrlink"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-abbrlink --save

hexo-algolia                        😕  NOTUSED?  Still using hexo-algolia?
                                                 Depcheck did not find code similar to require('hexo-algolia') or import from 'hexo-algolia'.  
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-algolia"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-algolia --save

hexo-algoliasearch                  😕  NOTUSED?  Still using hexo-algoliasearch?
                                                 Depcheck did not find code similar to require('hexo-algoliasearch') or import from 'hexo-algoliasearch'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-algoliasearch"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-algoliasearch --save

hexo-butterfly-clock-anzhiyu        😕  NOTUSED?  Still using hexo-butterfly-clock-anzhiyu?
                                                 Depcheck did not find code similar to require('hexo-butterfly-clock-anzhiyu') or import from 'hexo-butterfly-clock-anzhiyu'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-butterfly-clock-anzhiyu"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-butterfly-clock-anzhiyu --save

hexo-butterfly-envelope             😕  NOTUSED?  Still using hexo-butterfly-envelope?
                                                 Depcheck did not find code similar to require('hexo-butterfly-envelope') or import from 'hexo-butterfly-envelope'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-butterfly-envelope"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-butterfly-envelope --save

hexo-butterfly-footer-beautify      😕  NOTUSED?  Still using hexo-butterfly-footer-beautify?
                                                 Depcheck did not find code similar to require('hexo-butterfly-footer-beautify') or import from 'hexo-butterfly-footer-beautify'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-butterfly-footer-beautify"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-butterfly-footer-beautify --save

hexo-butterfly-hpptalk              😕  NOTUSED?  Still using hexo-butterfly-hpptalk?
                                                 Depcheck did not find code similar to require('hexo-butterfly-hpptalk') or import from 'hexo-butterfly-hpptalk'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-butterfly-hpptalk"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-butterfly-hpptalk --save

hexo-butterfly-tag-plugins-plus     😕  NOTUSED?  Still using hexo-butterfly-tag-plugins-plus?
                                                 Depcheck did not find code similar to require('hexo-butterfly-tag-plugins-plus') or import from 'hexo-butterfly-tag-plugins-plus'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-butterfly-tag-plugins-plus"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-butterfly-tag-plugins-plus --save

hexo-butterfly-wowjs                😕  NOTUSED?  Still using hexo-butterfly-wowjs?
                                                 Depcheck did not find code similar to require('hexo-butterfly-wowjs') or import from 'hexo-butterfly-wowjs'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-butterfly-wowjs"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-butterfly-wowjs --save

hexo-deployer-git                   😕  NOTUSED?  Still using hexo-deployer-git?
                                                 Depcheck did not find code similar to require('hexo-deployer-git') or import from 'hexo-deployer-git'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-deployer-git"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-deployer-git --save

hexo-filter-gitcalendar             😕  NOTUSED?  Still using hexo-filter-gitcalendar?
                                                 Depcheck did not find code similar to require('hexo-filter-gitcalendar') or import from 'hexo-filter-gitcalendar'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-filter-gitcalendar"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-filter-gitcalendar --save

hexo-generator-archive              😎  MAJOR UP  Major update available. https://hexo.io/
                                                 npm install hexo-generator-archive@2.0.0 --save to go from 1.0.0 to 2.0.0
                                    😕  NOTUSED?  Still using hexo-generator-archive?
                                                 Depcheck did not find code similar to require('hexo-generator-archive') or import from 'hexo-generator-archive'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-generator-archive"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-generator-archive --save

hexo-generator-category             😎  MAJOR UP  Major update available. https://hexo.io/
                                                 npm install hexo-generator-category@2.0.0 --save to go from 1.0.0 to 2.0.0
                                    😕  NOTUSED?  Still using hexo-generator-category?
                                                 Depcheck did not find code similar to require('hexo-generator-category') or import from 'hexo-generator-category'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-generator-category"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-generator-category --save

hexo-generator-index                😎  MAJOR UP  Major update available. https://hexo.io/
                                                 npm install hexo-generator-index@3.0.0 --save to go from 2.0.0 to 3.0.0
                                    😕  NOTUSED?  Still using hexo-generator-index?
                                                 Depcheck did not find code similar to require('hexo-generator-index') or import from 'hexo-generator-index'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-generator-index"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-generator-index --save

hexo-generator-search               😕  NOTUSED?  Still using hexo-generator-search?
                                                 Depcheck did not find code similar to require('hexo-generator-search') or import from 'hexo-generator-search'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-generator-search"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-generator-search --save

hexo-generator-tag                  😎  MAJOR UP  Major update available. https://hexo.io/
                                                 npm install hexo-generator-tag@2.0.0 --save to go from 1.0.0 to 2.0.0
                                    😕  NOTUSED?  Still using hexo-generator-tag?
                                                 Depcheck did not find code similar to require('hexo-generator-tag') or import from 'hexo-generator-tag'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-generator-tag"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-generator-tag --save

hexo-helper-live2d                  😕  NOTUSED?  Still using hexo-helper-live2d?
                                                 Depcheck did not find code similar to require('hexo-helper-live2d') or import from 'hexo-helper-live2d'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-helper-live2d"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-helper-live2d --save

hexo-lazyload-image                 😕  NOTUSED?  Still using hexo-lazyload-image?
                                                 Depcheck did not find code similar to require('hexo-lazyload-image') or import from 'hexo-lazyload-image'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-lazyload-image"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-lazyload-image --save

hexo-renderer-ejs                   😕  NOTUSED?  Still using hexo-renderer-ejs?
                                                 Depcheck did not find code similar to require('hexo-renderer-ejs') or import from 'hexo-renderer-ejs'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-renderer-ejs"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-renderer-ejs --save

hexo-renderer-kramed                😕  NOTUSED?  Still using hexo-renderer-kramed?
                                                 Depcheck did not find code similar to require('hexo-renderer-kramed') or import from 'hexo-renderer-kramed'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-renderer-kramed"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-renderer-kramed --save

hexo-renderer-marked                😕  NOTUSED?  Still using hexo-renderer-marked?
                                                 Depcheck did not find code similar to require('hexo-renderer-marked') or import from 'hexo-renderer-marked'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-renderer-marked"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-renderer-marked --save

hexo-renderer-pug                   😕  NOTUSED?  Still using hexo-renderer-pug?
                                                 Depcheck did not find code similar to require('hexo-renderer-pug') or import from 'hexo-renderer-pug'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-renderer-pug"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-renderer-pug --save

hexo-renderer-stylus                😍  UPDATE!   Your local install is out of date. https://github.com/hexojs/hexo-renderer-stylus#readme     
                                                 npm install hexo-renderer-stylus@2.1.0 --save to go from 2.0.1 to 2.1.0
                                    😕  NOTUSED?  Still using hexo-renderer-stylus?
                                                 Depcheck did not find code similar to require('hexo-renderer-stylus') or import from 'hexo-renderer-stylus'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-renderer-stylus"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-renderer-stylus --save

hexo-server                         😕  NOTUSED?  Still using hexo-server?
                                                 Depcheck did not find code similar to require('hexo-server') or import from 'hexo-server'.    
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-server"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-server --save

hexo-submit-urls-to-search-engine   😕  NOTUSED?  Still using hexo-submit-urls-to-search-engine?
                                                 Depcheck did not find code similar to require('hexo-submit-urls-to-search-engine') or import from 'hexo-submit-urls-to-search-engine'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-submit-urls-to-search-engine"]}}        
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-submit-urls-to-search-engine --save

hexo-tag-aplayer                    😕  NOTUSED?  Still using hexo-tag-aplayer?
                                                 Depcheck did not find code similar to require('hexo-tag-aplayer') or import from 'hexo-tag-aplayer'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-tag-aplayer"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-tag-aplayer --save

hexo-theme-landscape                😕  NOTUSED?  Still using hexo-theme-landscape?
                                                 Depcheck did not find code similar to require('hexo-theme-landscape') or import from 'hexo-theme-landscape'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-theme-landscape"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-theme-landscape --save

hexo-wordcount                      😕  NOTUSED?  Still using hexo-wordcount?
                                                 Depcheck did not find code similar to require('hexo-wordcount') or import from 'hexo-wordcount'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["hexo-wordcount"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall hexo-wordcount --save

valine                              😍  UPDATE!   Your local install is out of date. https://github.com/xcss/Valine#readme
                                                 npm install valine@1.5.1 --save to go from 1.4.18 to 1.5.1
                                    😕  NOTUSED?  Still using valine?
                                                 Depcheck did not find code similar to require('valine') or import from 'valine'.
                                                 Check your code before removing as depcheck isn't able to foresee all ways dependencies can be used.
                                                 Use rc file options to remove unused check, but still monitor for outdated version:
                                                     .npmcheckrc {"depcheck": {"ignoreMatches": ["valine"]}}
                                                 Use --skip-unused to skip this check.
                                                 To remove this package: npm uninstall valine --save

Use npm-check -u for interactive update.
Checking for outdated production, optional, development, peer and bundled dependencies for "D:\blog\s\package.json"...
[====================] 31/31 100%

New versions of active modules available:

  gitalk                     ^1.7.2   →   ^1.8.0
  hexo                       ^6.0.0   →   ^6.3.0
  hexo-generator-archive     ^1.0.0   →   ^2.0.0
  hexo-generator-category    ^1.0.0   →   ^2.0.0
  hexo-generator-index       ^2.0.0   →   ^3.0.0
  hexo-generator-tag         ^1.0.0   →   ^2.0.0
  hexo-renderer-stylus       ^2.0.1   →   ^2.1.0
  valine                    ^1.4.18   →   ^1.5.1

? Update "gitalk" in package.json from ^1.7.2 to ^1.8.0? Yes

? Update "hexo" in package.json from ^6.0.0 to ^6.3.0? Yes

? Update "hexo-generator-archive" in package.json from ^1.0.0 to ^2.0.0? Yes

? Update "hexo-generator-category" in package.json from ^1.0.0 to ^2.0.0? Yes

? Update "hexo-generator-index" in package.json from ^2.0.0 to ^3.0.0? Yes

? Update "hexo-generator-tag" in package.json from ^1.0.0 to ^2.0.0? Yes

? Update "hexo-renderer-stylus" in package.json from ^2.0.1 to ^2.1.0? Yes

? Update "valine" in package.json from ^1.4.18 to ^1.5.1? Yes


These packages will be updated:

  gitalk                     ^1.7.2   →   ^1.8.0
  hexo                       ^6.0.0   →   ^6.3.0
  hexo-generator-archive     ^1.0.0   →   ^2.0.0
  hexo-generator-category    ^1.0.0   →   ^2.0.0
  hexo-generator-index       ^2.0.0   →   ^3.0.0
  hexo-generator-tag         ^1.0.0   →   ^2.0.0
  hexo-renderer-stylus       ^2.0.1   →   ^2.1.0
  valine                    ^1.4.18   →   ^1.5.1

? Update package.json? 
```
{% endfolding %}

## 更新butterfly

### 下载
参照[butterfly官方文档](https://butterfly.js.org/posts/21cfbf15/#%E5%AE%89%E8%A3%9D)

备份好魔改部分的文件，然后把`[Blogroot]\themes\butterfly`目录删了
就可以在博客根目录 `[Blogroot]` 下输入
``` bash
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
网络不好的话容易失败报错：
``` bash
PS D:\blog\s> git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
Cloning into 'themes/butterfly'...
fatal: unable to access 'https://github.com/jerryc127/hexo-theme-butterfly.git/': Failed to connect to github.com port 443 after 21047 ms: Timed out
```
多试几次就好了

### 调整
然后参照[butterfly更新日志](https://butterfly.js.org/posts/198a4240/) 和 `[Blogroot]\themes\butterfly\_config.yml`
对主题配置文件 `[Blogroot]\_config.butterfly.yml` 对更新后的部分进行调整
最后再参照备份好的魔改文件，对butterfly下的文件重新再进行修改
最后再重启项目查看是否正常：
``` bash
hexo cl; hexo s
```