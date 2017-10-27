$( document ).ready(function(){
	$("#sortir").hover(function(){
		console.log("salut");
		exitpart();
	});
	$("#clickBtn").click(function(){
		alert("lol, tu as cru que ça marchait?");
	})
	console.log($(window).height());	
	function exitpart(){
		var marginT = Math.floor(Math.random() * $(window).height()/2);  
		var marginL = Math.floor(Math.random() * $(window).width()/1.2);  
			$("#sortir").animate({"margin-left":marginL+"px"},100);
			$("#sortir").animate({"margin-top":marginT+"px"},100);
	}
	var date = Date.now();
	setInterval(function(){$("#plus").html((Date.now()-date)/100); }, 20);
});
