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
    var rgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $(this).css("height", rnd + "%");
    $(this).css("background-color", rgb);
  });
}, 300);




$('.navi').mouseover(function() {
  $('.move-box').css("height", "100vh");
});




// $('#test').hover(function() {
//   $(this).css("color", "red");
// }, function(){
//   $(this).css("color", "blue");
// });