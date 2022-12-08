var quotes = [
    "自分ににも他人にも完璧を求めるから苦しくなる",
    "我慢することで幸せにならない。我慢しなくていい。",
    "人と話すことで救われることもあります",
    "苦手な人がいたら過去にとらわれないように初めて出会ったと思うこと",
    "不満が爆発しないようにこまめに発散すること",
    "大丈夫と言い聞かせようとしている時点で大丈夫ではありません。もしも辛いなら、疲れているなら、ゆっくり休みましょう。自分を守れるのは自分だけです。",
    "心と体はつながっています。すぐに性格を変えるのは難しいので、行動を変えること。"
]
function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById("quote").innerHTML = quotes[randomNumber];
}

