var khattaCount = 4;
function getTweets(pageNumber, fieldNumber){
	var page = pageNumber + 1;
	var fields = fieldNumber + 1;
	console.log(page);
	console.log(fields);
	var url='http://dev.khattacorp.com/docroot/?q=api/khatta.json&page='+page+'&pagesize=4'+'&fields='+fields;
	$.getJSON(url,function(json){
		console.log(json);
		$.each(json,function(i,tweet){
			console.log(tweet);
			//alert(tweet);
			$("#items").append('<li class="veg" style="height:auto"><div class="tweet-wrapper">"#Hello World"<br><em>Veg</em><span class="large">'+tweet.body_value+'</span></div></li><br />');
			$('#items').animate(
					{"top": "-=150px"}, 600,function(){console.log("moved");khattaCount = khattaCount-1;console.log(khattaCount);
					if (khattaCount < 1) {
						khattaCount = 4;
						if (fields == 2) {
							fields = 0;
						}
						getTweets(page,fields);
					}
					}).delay(1500);
		});
	});
}
$(document).ready(function(){
	$("h2").animate({fontSize:"43px",lineHeight:"45px"},{duration:1000});
	getTweets(0,-1);
});