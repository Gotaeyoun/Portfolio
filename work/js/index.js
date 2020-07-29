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
var interval = setInterval(function(){
  $(".move-box").each(function() {
    var rnd = Math.random() * 20;
    var hsl = 'hsl(' + 90 + ',' + (Math.floor(Math.random() * 256)) +"%" + ',' + (Math.floor(Math.random() * 256)) +"%" + ')';
    $(this).css("height", rnd + "%");
    $(this).css("background-color", hsl);
  });
}, 300);

/* hover시 네비바 내려오게 하기 */
$('.navi').hover(function() {
  console.log(this);
  clearInterval(interval);
  $(this).find(".move-box").css("height","100vh");
  
}, function(){
  
},5000);


