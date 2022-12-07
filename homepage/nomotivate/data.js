var lists = new Array(
    "https://www.youtube.com/embed/uOKzlCSWOjQ", //誰よりも努力をしろ
    "https://www.youtube.com/embed/-D4GAh6SQ6c", //言い訳をやめろ
    "https://www.youtube.com/embed/0zlDhW1XNew", //まだやれる、絶対に諦めるな
    "https://www.youtube.com/embed/O6tPsqC_d7M", //気持ちを切り替えろ
    "https://www.youtube.com/embed/RtLl_a15rlc", //今を見てろ
    "https://www.youtube.com/embed/OI1PdYO4CH8", //人生を変えろ
    )
    
function motivates() {
    

    document.getElementById('content').onclick = function(){
        var selectnum = Math.floor(Math.random() * (lists.length));
        var list= consolo.log(array[selectnum]);
        var url = document.getElementById('video');

        video.setAttribute('src', list);

    }
}