var lists = new Array(
    <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/uOKzlCSWOjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, //誰よりも努力をしろ
    <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/-D4GAh6SQ6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, //言い訳をやめろ
    <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/0zlDhW1XNew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, //まだやれる、絶対に諦めるな
    <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/O6tPsqC_d7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, //気持ちを切り替えろ
    <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/RtLl_a15rlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, //今を見てろ
    <iframe id="video" width="660" height="415" src="https://www.youtube.com/embed/OI1PdYO4CH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, //人生を変えろ
    )
    
function motivates() {
    

    document.getElementById('content').onclick = function(){
        var selectnum = Math.floor(Math.random() * (lists.length));
        var list= consolo.log(array[selectnum]);
        var url = document.getElementById('video');

        video.setAttribute('src', list);

    }
}