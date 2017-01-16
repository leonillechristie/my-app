$(document).ready(function(){
	$('.skillbar').skillBars({
		from: 0,
		to: false,
		speed: 1000,
		interval: 100,
		decimals: 0,
		onUpdate: null,
		onComplete: null,
		classes:{
			skillBarBar: '.skillbar-bar',
			skillBarPercent: '.skill-bar-percent',
		}
	});
});