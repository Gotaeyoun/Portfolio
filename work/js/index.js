/*  배경 grain */
var options = {
  "animate": true,
  "patternWidth": 1000,
  "patternHeight": 100,
  "grainOpacity": 0.05,
  "grainDensity": 1,
  "grainWidth": 2,
  "grainHeight": 1
}
grained("#wrapper", options);



/* 움직이고 색상변경 상자 */

var interval = [];
function onInterval () {
	$(".move-box").each(function(i) {
		clearInterval(interval[i]);
		var $box = $(this);
		interval[i] = setInterval(function(){
			var rnd = Math.random() * 20;
			var hsl = 'hsl(' + 90 + ',' + (Math.floor(Math.random() * 50)) +"%" + ',' + (Math.floor(Math.random() * 80)) +"%" + ')';
			$box.css("height", rnd + "%");
			$box.css("background-color", hsl);
			console.log($box);
		}, 300);
	});
}
onInterval();

/* hover시 네비바 내려오게 하기 */
$('.navi').mouseover(function(e) {
	e.stopPropagation();
 	var n = $(this).index();
	$(".move-box").css("height", 0);
	$(this).find(".move-box").css("height","100vh");
	onInterval();
  clearInterval(interval[n]);
});

$('.navi-wrap').mouseleave(onInterval);



/* line이 비처럼 내려와요! */
$(function() {
			$(".lineAni1").slideDown(3000); 
			$(".lineAni2").slideDown(1000);
			$(".lineAni3").slideDown(2000);
});




/*  타이핑 쳐지는 애니메이션 */
var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;


var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split("");
if(typingBool==false){
    typingBool=true; 
    var tyInt = setInterval(typing,100);
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
       liIndex++; 
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
         clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
           clearInterval(tyInt);
        }
    } 
}  

/*  타이핑 쳐지고 그 이후에 라인 애니메이션 */
function typingLine(){
	$( '.actbar-wrap > .actbar1' ).css( {width:'100%', opacity:'1'}, 2000);
}


/*  스크롤되면 네비바가 옆으로 붙어요 */

var $header = $('header');
$(window).scroll(function(){
	console.log($(this).scrollTop());
  if($(this).scrollTop() > 0){
    $header.find('.navi-wrap').css("margin-left", 0);
  }else{
    $header.find('.navi-wrap').css("margin-left", "40%");
  }
});