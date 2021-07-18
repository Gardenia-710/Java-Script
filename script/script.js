var key1=["スマホ","ねずみ","痴漢","結婚","シャトルラン","スタジオジブリ","ポケモン","メガネ","ぎょうざ","コンタクトレンズ","セーラー服","冷蔵庫","帽子","男子校","渋谷","パピコ","ハンガー","機動戦士ガンダム","シャワー","ナイフ","タバスコ","地下室","地球","おにぎり","タバコ","野球","賄賂","グミ","新幹線","長野県"];
var key2=["パソコン","ピカチュウ","盗撮","不倫","スペースシャトル","ハリウッド","ドラえもん","虫眼鏡","肉まん","ブラジャー","メイド服","金庫","かつら","女子校","新宿","おっぱい","クローゼット","松岡修造","ライス","自動車免許","醤油","屋根裏部屋","月","お寿司","ドリアン","相撲","援助交際","ゼリー","自転車","東京都"];
var name=[];
//console.log(key1.length);
//console.log(key2.length);
var now=0;
var p_now=1;
var players;
var wolf;
var p_theme;
var sel_keys=Math.floor(Math.random()*(2-1));
var keys=key1.length;
var theme_Num=Math.floor(Math.random()*(keys-1));
var p_flag=false;
var counter;
var time=180;
var w_theme;
var o_theme;

function start(){
  alert(players+"人でプレイを開始します。");
  wolf=wolf(players);
  document.getElementById("start").style.display="none";
  document.getElementById("output1").style.display="block";
  document.getElementById("output2").style.display="block";
  document.getElementById("player_check").style.display="block";
  p_check();
}

function myCheck(){
    var flag = false; // 選択されているか否かを判定するフラグ

   //ラジオボタンの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）
    for(var i=0; i<document.form1.player.length;i++){

        // i番目のラジオボタンがチェックされているかを判定
        if(document.form1.player[i].checked){
            flag = true;
            players=document.form1.player[i].value;
            start();
    }
  }

    // 何も選択されていない場合の処理
    if(!flag){
        alert("プレイ人数を選択してください！");
    }
  }

function wolf(p){
  var w=Math.floor (Math.random()*(p-1)+1);
  return w;
}
function p_check(){
  if(now<players){
  document.getElementById("tel").style.display="none";
  document.getElementById("player_check").style.display="block";
  document.getElementById("output1").innerHTML="<h1>あなたはプレイヤー"+p_now+"ですか？</h1>";
  document.getElementById("output2").style.display="none";
}
else {
  finish();
}
}

function theme_tel(){
  p_theme=theme(now);
  document.getElementById("player_check").style.display="none";
  document.getElementById("tel").style.display="block";
  document.getElementById("output2").style.display="block";
  document.getElementById("output1").innerHTML="<h1>プレイヤー"+p_now+"のお題は</h1>";
  document.getElementById("output2").innerHTML="<h2>"+p_theme+"</h2>";
  now++;
  p_now++;
  console.log("players"+players);
  console.log("now"+now);
}

function theme(np){
  if(sel_keys==1){
    w_theme=key1[theme_Num];
    o_theme=key2[theme_Num];
  }
  else{
    o_theme=key1[theme_Num];
    w_theme=key2[theme_Num];
  }
console.log(o_theme);
console.log(w_theme);
  if (wolf!=np) return o_theme;
  else if (wolf==np) return w_theme;
}

function finish(){
  document.getElementById("output1").innerHTML="<h1>全員のお題の発表が終わりました。</h1>";
  document.getElementById("output2").innerHTML="<h2>"+"議論を開始してください。"+"</h2>";
  document.getElementById("tel").style.display="none";
  document.getElementById("talk").style.display="block";
}

function talk_set(){
  document.getElementById("output1").innerHTML="<h1>残り時間</h1>";
  document.getElementById("output2").style.display="none";
  document.getElementById("talk").style.display="none";
  document.getElementById("timer").style.display="block";
  document.getElementById("skp").style.display="block";
  timer();
}

function timer(){
  counter = setInterval( count, 1000 );
}

var count=function() {
if( time === 0 ) {
sec.innerHTML = "<h2>"+0+"</h2>";
min.innerHTML = "<h2>"+0+"</h2>";
alert("3分経過しました。");
clearInterval( counter );
poll();
} else {
time -= 1;
document.getElementById("sec").innerHTML = time % 60;
document.getElementById("min").innerHTML = Math.floor( time / 60 );
}
}

function skp(){
  time=0;
}

function poll(){
  document.getElementById("timer").style.display="none";
  document.getElementById("skp").style.display="none";
  document.getElementById("output1").style.display="block";
  document.getElementById("output2").style.display="block";
  document.getElementById("output1").innerHTML="<h1>議論時間が終了しました。</h1>";
  document.getElementById("output2").innerHTML="<h2>人狼だと思う人を決めてください。</h2>";
  document.getElementById("ans").style.display="block";
}
function ans(){
  var p_wolf=wolf+1;
  document.getElementById("output1").innerHTML="<h2>多数派："+o_theme+"</h2>";
  document.getElementById("output2").innerHTML="<h2>少数派："+w_theme+"(プレイヤー"+p_wolf+")</h2>";
  document.getElementById("ans").style.display="none";
  document.getElementById("fin").style.display="block";
  }

function fin_n(){
  document.getElementById("output1").innerHTML="<h1>以上で終了です</h1>";
  document.getElementById("output2").style.display="none";
  document.getElementById("ans").style.display="none";
  document.getElementById("fin").style.display="none";
  document.getElementById("nxt").style.display="block";
  document.getElementById("exit").style.display="block";
}
function n(){
  location.reload();
}
function e(){
  window.open('about:blank','_self').close();
}
