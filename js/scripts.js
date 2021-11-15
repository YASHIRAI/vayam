/*!
* Start Bootstrap - Heroic Features v5.0.4 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


$(document).ready(function() {
 	$("#css3dimagePager li").click(function(){
		var rotateY = ($(this).index() * -90); 
		$("#css3dimageslider ul").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
		$("#css3dimagePager li").removeClass("active");
		$(this).addClass("active");
	});
 	$("#css3dtransparency").click(function() {
		$("#css3dimageslider").toggleClass("transparency");
		$(this).toggleClass("active");
	});
 });