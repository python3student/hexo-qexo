/*
fetch('https://v1.hitokoto.cn')
 .then(response => response.json())
 .then(data => {
   document.getElementById("veditor").setAttribute("placeholder",data.hitokoto+"\t——「"+data.from+'」');
 })
 .catch(console.error)
*/
/*
jinrishici.load(function(result) {
    var jrsc_plac =  result.data.content + "\n「" + result.data.origin.title + "」" + result.data.origin.dynasty + " · " + result.data.origin.author;
    document.getElementById("veditor").setAttribute("placeholder",jrsc_plac);
})
*/
var jrsc_plac = '请输入...\n(请勿发表不当内容)';
document.getElementById("veditor").setAttribute("placeholder",jrsc_plac);