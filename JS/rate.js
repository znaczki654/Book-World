var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');

star1.addEventListener('click', function(){
    this.style.color = "gold";
    $('#star2, #star3, #star4, #star5').css("color", "white");
});
star2.addEventListener('click', function(){
    this.style.color = "gold";
    $('#star3, #star4, #star5').css("color", "white");
    $('#star1').css("color", "gold");
});
star3.addEventListener('click', function(){
    this.style.color = "gold";
    $('#star4, #star5').css("color", "white");
    $('#star1, #star2').css("color", "gold");
});
star4.addEventListener('click', function(){
    this.style.color = "gold";
    $('#star5').css("color", "white");
    $('#star1, #star2, #star3').css("color", "gold");
});
star5.addEventListener('click', function(){
    this.style.color = "gold";
      $('#star1, #star2, #star3, #star4').css("color", "gold");
});

function S1()
{
  allert("hej");
}


