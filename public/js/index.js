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

function onInterval() {
	$(".move-box").each(function (i) {
		clearInterval(interval[i]);
		var $box = $(this);
		interval[i] = setInterval(function () {
			var rnd = Math.random() * 20;
			var hsl = 'hsl(' + 90 + ',' + (Math.floor(Math.random() * 50)) + "%" + ',' + (Math.floor(Math.random() * 80)) + "%" + ')';
			$box.css("height", rnd + "%");
			$box.css("background-color", hsl);
		}, 300);
	});
}

onInterval();

/* hover시 네비바 내려오게 하기 */
$('.navi').mouseover(function (e) {
	e.stopPropagation();
	var n = $(this).index();
	$(".move-box").css("height", 0);
	$(this).find(".move-box").css("height", "100vh");
	onInterval();
	clearInterval(interval[n]);
});

$('.navi-wrap').mouseleave(onInterval);


/* line이 비처럼 내려와요! */
$(function () {
	$(".lineAni1").slideDown(3000);
	$(".lineAni2").slideDown(1000);
	$(".lineAni3").slideDown(2000);
});


/*  타이핑 쳐지는 애니메이션 */
var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;


var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
typingTxt = typingTxt.split("");
if (typingBool == false) {
	typingBool = true;
	var tyInt = setInterval(typing, 100);
}

function typing() {
	$(".typing ul li").removeClass("on");
	$(".typing ul li").eq(liIndex).addClass("on");
	if (typingIdx < typingTxt.length) {
		$(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
		typingIdx++;
	}
	else {
		if (liIndex < liLength - 1) {
			liIndex++;
			typingIdx = 0;
			typingBool = false;
			typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
			clearInterval(tyInt);
			setTimeout(function () {
				tyInt = setInterval(typing, 100);
			}, 1000);
		}
		else if (liIndex == liLength - 1) {
			clearInterval(tyInt);
		}
	}
}

/*  타이핑 쳐지고 그 이후에 라인 애니메이션 */
function typingLine() {
	$('.actbar-wrap > .actbar1').css({
		width: '100%',
		opacity: '1'
	}, 2000);
}


/*  스크롤되면 네비바가 옆으로 붙어요 */ 

var $header = $('header');
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$header.find('.navi-wrap').css("margin-left", 0);
	}
	else {
		$header.find('.navi-wrap').css("margin-left", "40%");
	}
});


// 옆으로 움직이는 키워드
function leftAni() {
	var liWidth = $(".left-slide li").outerWidth();
	$(".left-slide").stop().animate({
		"left": -liWidth + "px"
	}, 6000, "linear", function () {
		$(this).css("left", 0);
		leftAni();
	});
}

leftAni();

function rightAni() {
	var liWidth = $(".right-slide li").outerWidth();

	$(".right-slide").stop().animate({
		"left": liWidth + "px"
	}, 6000, "linear", function () {
		$(this).css("left", 0);
		rightAni();
	});
}

rightAni();


/* 네비게이션 이벤트 */

$(".bt1").click(function () {
	var position = $("#about-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});
$(".bt2").click(function () {
	var position = $("#portflio-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});
$(".bt3").click(function () {
	var position = $("#contect-wrap").offset();
	$("html,body").stop().animate({ 'scrollTop': position.top }, 500);
});


/* 스크롤 이벤트 */
$(window).scroll(onScroll);

function onScroll() {
	var scTop = $(this).scrollTop();
	var offtop = $(".skill-name > .active-bar").offset().top;
	var hei = $(window).innerHeight();
	var sum = scTop + hei;
	
	if ((scTop + hei) > offtop) {
		$('.skill-name > .active-bar').each(function () {
			var tar = $(this).data("value");
			$(this).stop().animate({ width: tar+"%" }, { duration: 3000 });
		});
	}
	if(scTop > 800) $(".bt-top").css("visibility","visible");
	else $(".bt-top").css("visibility","hidden");
}

function onTopClick(){
	$("html,body").stop().animate({"scrollTop":0},800, onScroll);
}
$(".bt-top").click(onTopClick);




/* 마우스 올리면 움직이기 이벤트 */
function onMouseHover(){
	var idx = $(".pf-list > li");
	$('.pf-desc').mouseenter(function(){
		var indexNo = $(this).index();
		$('.desc-title').addClass('hvr-bounce-in');
		$(".pf-list .img-size").css("display", "none");
		$(".pf-list .img-size").eq(indexNo).css("display", "block");
	});
	$('.pf-desc').mouseleave(function(){
		$(".pf-list .img-size").css("display", "none");
	});
	$('.pf-desc').eq(0).trigger("mouseenter");
}
onMouseHover()


/* 마우스 움직이면 그림이 따라 움직이는 이벤트 */

function onMouseAction(){
	$(".pf-desc > .desc-title").mousemove(function(e){
		var offsetx = e.offsetX
		var offsety = e.offsetY
		$(".pf-picture-layout> .pf-list > .img-size").css({
			"top":  offsety+"px",
			"left" : offsetx+"px"
		})
	});
}
onMouseAction()

/* 그림 줄 맞춤 */
function onPictureMove(){
	$('.desc-title').mousemove(function(e){
		var offsetY = e.clientY


		$(".pf-list > .img-size").css({
			"top": (offsetY -	50 )+ "px"
		})
	})
}

onPictureMove();


/* email.js */
emailjs.init('user_hmVtiMSBn0X4lJbSzXzs4');

function onContact(event) {
	event.preventDefault();
	emailjs.sendForm('gmail', 'Portfilio', this);
	alert("연락해주셔서 감사합니다");
	this.reset();
}
$('#contactForm').submit(onContact);