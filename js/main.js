$(document).ready(function() {
//Choosing type
	$( "#compound" ).click(function() {
  		$(this).addClass("active");
  		$("#single").removeClass("active");
  		$("#comp_freq").removeClass("disable");
  		$("#complabel").removeClass("disable");
  		$("#comp_freq").prop('disabled', false);
	});

	$( "#single" ).click(function() {
  		$(this).addClass("active");
  		$("#compound").removeClass("active");
  		$("#comp_freq").prop('disabled', true);
  		$("#comp_freq").addClass("disable");
  		$("#complabel").addClass("disable");
	});
$("#calc").click(function(){
//Getting values
var principal = $("#principal").val();
var rate = $("#rate").val()/100; 
var time = $("#time").val();
var freq = $("#freq").val();
var comp = $("#comp").val();
var comp_freq = $("#comp_freq").val();

//Calculate time in years
switch (freq) {
	
	case "days":
		year = time/365;
	break;

	case "weeks":
		year = time/52.1774;
	break;

	case "months":
		year = time/12;
	break;

	case "years":
		year = time;
	break;
}
//Single intrest
if ($("#single" ).hasClass("active")) {
var intrest = principal*rate*year;
var intrest_round = Math.round(intrest * 100) / 100;
var total = +principal+ +intrest;
var total_round = Math.round(total * 100) / 100;
$("#intrest").text("Your intrest will be "+intrest_round+".");
$("#total").text("The total amount will be "+total_round+".");

} else {
//Compound intrest
switch (comp_freq) {
	
	case "annual":
		var compounding = 1;
	break;

	case "semi":
		var compounding = 2;
	break;

	case "quarter":
		var compounding = 4;
	break;

	case "month":
		var compounding = 12;
	break;
}
var sum1 = (1+(rate/compounding));
var exp = year*compounding;
var sum2 = Math.pow(sum1, exp);
var total = sum2*principal;
var total_round = Math.round(total * 100) / 100;
var intrest = total-principal;
var intrest_round = Math.round(intrest * 100) / 100;
$("#intrest").text("Your intrest will be "+intrest_round+".");
$("#total").text("The total amount will be "+total_round+".");
}
}); 


});  