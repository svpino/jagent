$(document).ready(function () {
	$('.user-agent').text(navigator.userAgent);
	$('.metadata').text($.jagent.metadata.replace(/ /g, ', '));
	
	$('.fn1').addClass('' + $.jagent.isMobile());
	$('.fn2').addClass('' + $.jagent.isIOS());
	$('.fn3').addClass('' + $.jagent.isAndroid());
	$('.fn4').addClass('' + $.jagent.isIPad());
	$('.fn5').addClass('' + $.jagent.isIPhone());
	$('.fn6').addClass('' + $.jagent.isIPod());
	$('.fn7').addClass('' + $.jagent.isKindle());
	$('.fn8').addClass('' + $.jagent.isBlackberry());
	$('.fn9').addClass('' + $.jagent.isPlaybook());
	$('.fn10').addClass('' + $.jagent.isJ2ME());
	$('.fn11').addClass('' + $.jagent.isRetina());
	$('.fn12').addClass('' + $.jagent.isPortrait());
	$('.fn13').addClass('' + $.jagent.isLandscape());
	$('.fn14').addClass('' + $.jagent.isChrome());
	$('.fn15').addClass('' + $.jagent.isFirefox());
	$('.fn16').addClass('' + $.jagent.isSafari());
	$('.fn17').addClass('' + $.jagent.isMSIE());
});