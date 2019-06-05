$(document).ready(function(){
  
let top;
let left;

$('.stars').each(function(){
	$(this).addClass('star'+$(this).index());	
});

for (var i = 0; i < $('.stars').length; i++) {
	top = Math.ceil(Math.random()*250);
	left = Math.ceil(Math.random()*1300);
	$('.star'+i).css('top',top);
	$('.star'+i).css('left',left);
}
let img_idx = 0;
setInterval(function () { 
	 img_idx = Math.ceil(Math.random()*8);
	 console.log(img_idx);
	$('.milos img').attr('src', 'ricardo'+img_idx+'.png');
}, 1000);

});
