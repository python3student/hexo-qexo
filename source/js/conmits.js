<!-- 引入SAONotify的依赖 -->
<script src="https://npm.elemecdn.com/akilar-candyassets/image/js/SAO-Notify.js" async></script>
<!-- 获取commits记录并用SAONotify输出 -->
<script type="text/javascript">
  const response = fetch('https://api.github.com/repos/:username/:reponame/commits', {
  headers: {
    Authorization: `token 14000000sfxzd93430000000bfb13a00000babf2`,
  },
}).then(res => res.json().then(json =>{
      var commitjson = json;
      var maxcommit = 4; //获取更新记录条数
      for(var i=0;i<maxcommit;i++){
        var item= commitjson[i];
        var commitmessage = (i+1) + '.' + commitjson[i].commit.message;
        if (i<1){var commitmessagegroup = commitmessage}
        else{var commitmessagegroup = commitmessagegroup +'<br>'+ commitmessage}
      }
      SAONotify("Latest Update",commitmessagegroup);
    })).catch(console.error);
</script>