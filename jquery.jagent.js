/* 
	jAgent 1.0.2012.12.05 
	https://github.com/svpino/jagent
*/

function jAgent() {
	this.GECKO = 'gecko';
	this.FIREFOX = 'firefox';
	this.OPERA = 'opera';
	this.KONQUEROR = 'konqueror';
	this.ANDROID = 'android';
	this.BLACKBERRY = 'blackberry';
	this.WEBKIT = 'webkit';
	this.CHROME = 'chrome';
	this.SAFARI = 'safari';
	this.MSIE = 'msie';
	this.APPLEWEBKIT = 'applewebkit';
	this.MOZILLA = 'mozilla';
	this.IRON = 'iron';
	this.DEVICE = 'device_';
	this.MOBILE = 'mobile';
	this.IPHONE = 'iphone';
	this.IPOD = 'ipod';
	this.IPAD = 'ipad';
	this.IOS = 'ios';
	this.J2ME = 'j2me';
	this.KINDLE = 'kindle';
	this.PLAYBOOK = 'playbook';
	this.MAC = 'mac';
	this.WINDOWSNT = 'windowsnt';
	this.WINDOWS = 'windows';
	this.FREEBSD = 'freebsd';
	this.X11 = 'x11';
	this.LINUX = 'linux';
	this.RETINA = 'retina';
	this.PORTRAIT = 'portrait';
	this.LANDSCAPE = 'landscape';	

	this.metadata;
	var self = this;
	
	this.initialize = function(value) {
		self.metadata = value;
	}
	
	this.isMobile = function() {
		return self.is('mobile');
	}
	
	this.isIOS = function() {
		return self.is(self.IOS);
	}
	
	this.isAndroid = function() {
		return self.is(self.ANDROID);
	}
	
	this.isIPad = function() {
		return self.is(self.IPAD);
	}
	
	this.isIPhone = function() {
		return self.is(self.IPHONE);
	}
	
	this.isIPod = function() {
		return self.is(self.IPOD);
	}
	
	this.isKindle = function() {
		return self.is(self.KINDLE);
	}
	
	this.isBlackberry = function() {
		return self.is(self.BLACKBERRY);
	}
	
	this.isPlaybook = function() {
		return self.is(self.PLAYBOOK);
	}
	
	this.isJ2ME = function() {
		return self.is(self.J2ME);
	}
	
	this.isChrome = function() {
		return self.is(self.CHROME);
	}
	
	this.isFirefox = function() {
		return self.is(self.FIREFOX);
	}
	
	this.isSafari = function() {
		return self.is(self.SAFARI);
	}
	
	this.isMSIE = function() {
		return self.is(self.MSIE);
	}
	
	this.isRetina = function() {
		return self.is(self.RETINA);
	}
	
	this.isPortrait = function() {
		return self.is('orientation_' + self.PORTRAIT);
	}
	
	this.isLandscape = function() {
		return self.is('orientation_' + self.LANDSCAPE);
	}
	
	this.is = function(test) {
		return RegExp(test, "i").test(self.metadata);
	}
}

(function($) {  
	$.jagent = new jAgent();
})(jQuery); 

function initializeJAgent() {
	var userAgent = navigator.userAgent.toLowerCase();
	
	is = function(t) { 
		return RegExp(t, "i").test(userAgent);  
	};
	
	version = function(p, n) { 
		n = n.replace(".","_"); 
		var i = n.indexOf('_');  
		var ver = ""; 
		
		while (i > 0) {
			ver += " " + p + n.substring(0, i);
			i = n.indexOf('_', i + 1);
		} 
		ver += " " + p + n; 
		return ver; 
	};
	
	getBrowserInformationForFirefox = function() {
		return $.jagent.GECKO + " " + $.jagent.FIREFOX 
			+ (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(userAgent) 
				? ' ' + $.jagent.FIREFOX + RegExp.$2 + ' ' + $.jagent.FIREFOX + RegExp.$2 + "_" + RegExp.$4 
				: '');
	};
	
	getBrowserInformationForOpera = function() {
		return $.jagent.OPERA + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(userAgent) 
			? ' ' + $.jagent.OPERA + RegExp.$2 + ' ' + $.jagent.OPERA + RegExp.$2 + "_" + RegExp.$4 
			: (/opera(\s|\/)(\d+)\.(\d+)/.test(userAgent) 
				? ' ' + $.jagent.OPERA + RegExp.$2 + " " + $.jagent.OPERA + RegExp.$2 + "_" + RegExp.$3 
				: ''));
	};
	
	getBrowserInformationForChrome = function() {
		return $.jagent.WEBKIT + ' ' + $.jagent.CHROME + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(userAgent)
			? ' ' + $.jagent.CHROME + RegExp.$2 + ((RegExp.$4 > 0) 
				? ' ' + $.jagent.CHROME + RegExp.$2 + "_" + RegExp.$4 
				: '')
			:'');
	};
	
	getBrowserInformationForSafari = function() {
		return ($.jagent.WEBKIT + ' ' + $.jagent.SAFARI + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(userAgent)
			? ' ' + $.jagent.SAFARI + RegExp.$2 + " " + $.jagent.SAFARI + RegExp.$2 + RegExp.$3.replace('.', '_')
			:  (/ Safari\/(\d+)/i.test(userAgent) 
				? ((RegExp.$1=="419" || RegExp.$1=="417" || RegExp.$1=="416" || RegExp.$1=="412" ) 
					? ' '+ $.jagent.SAFARI + '2_0' 
					: RegExp.$1 == "312" 
						? ' ' + $.jagent.SAFARI + '1_3'
						: RegExp.$1=="125" 
							? ' '+ $.jagent.SAFARI + '1_2'
							: RegExp.$1=="85" 
								? ' ' + $.jagent.SAFARI + '1_0'
								: '')
				: '')));
	};
	
	getBrowserInformationForAndroid = function() {
		return $.jagent.ANDROID + (/Version\/(\d+)(\.(\d+))+/i.test(userAgent)
			? " " + $.jagent.ANDROID + RegExp.$1 + " " + $.jagent.ANDROID + RegExp.$1 + RegExp.$2.replace('.', '_')
			: '')
			+ (/Android (.+); (.+) Build/i.test(userAgent)
				? ' ' + $.jagent.DEVICE + ((RegExp.$2).replace(/ /g,"_")).replace(/-/g, "_")
				: '');
	};
	
	getBrowserInformationForBlackberry = function() {
		return $.jagent.BLACKBERRY + (/Version\/(\d+)(\.(\d+)+)/i.test(userAgent)
			? " " + $.jagent.BLACKBERRY + RegExp.$1 + " " + $.jagent.BLACKBERRY + RegExp.$1 + RegExp.$2.replace('.','_')
			: (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(userAgent) 
				? ' ' + $.jagent.BLACKBERRY + RegExp.$2 + (RegExp.$3 ? ' ' + $.jagent.BLACKBERRY + RegExp.$2 + RegExp.$3 : '')
				: ''));
	};
	
	getOperatingSystemInformationForAppleDevices = function() {
		return ((/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(userAgent)  
			? $.jagent.IOS + version($.jagent.IOS, RegExp.$2) 
			: '') + ' ' + (/(ip(ad|od|hone))/gi.test(userAgent) 
				? RegExp.$1 
				: ""));
	};
	
	getOperatingSystemInformationForMac = function() {
		return $.jagent.MAC + (/mac os x ((\d+)[.|_](\d+))/.test(userAgent) 
			? (' ' + $.jagent.MAC + RegExp.$2 + ' ' + $.jagent.MAC + RegExp.$1.replace('.',"_"))
			: '');
	};
	
	getOperatingSystemInformationForWindows = function() {
		return $.jagent.WINDOWS + ( 
			  is($.jagent.WINDOWSNT + ' 6.2') ? ' ' + $.jagent.WINDOWS + '8'
			: is($.jagent.WINDOWSNT + ' 6.1') ? ' ' + $.jagent.WINDOWS + '7'
			: is($.jagent.WINDOWSNT + ' 6.0') ? ' ' + $.jagent.WINDOWS + 'vista'
			: is($.jagent.WINDOWSNT + ' 5.2') || is($.jagent.WINDOWSNT + '5.1') ? ' ' + $.jagent.WINDOWS + 'xp' 
			: is($.jagent.WINDOWSNT + ' 5.0') ? ' ' + $.jagent.WINDOWS + '2000'
			: is($.jagent.WINDOWSNT + ' 4.0') || is('WinNT4.0') ? ' ' + $.jagent.WINDOWS + '_nt'
			: '');
	};
	
	getBrowserInformation = function() {
		return (!(/opera|webtv/i.test(userAgent)) && /msie\s(\d+)/.test(userAgent)) ? ($.jagent.MSIE + ' ' + $.jagent.MSIE + (/trident\/4\.0/.test(userAgent) ? '8' : RegExp.$1))
			: is($.jagent.FIREFOX + '/') ? getBrowserInformationForFirefox()	
			: is($.jagent.GECKO + '/') ? $.jagent.GECKO
			: is($.jagent.OPERA) ? getBrowserInformationForOpera() 
			: is($.jagent.KONQUEROR) ? $.jagent.KONQUEROR
			: is($.jagent.BLACKBERRY) ? getBrowserInformationForBlackberry()
			: is($.jagent.ANDROID) ? getBrowserInformationForAndroid()
			: is($.jagent.CHROME) ? getBrowserInformationForChrome()	
			: is($.jagent.IRON) ? $.jagent.WEBKIT + ' ' + $.jagent.IRON
			: is($.jagent.APPLEWEBKIT + '/') ? getBrowserInformationForSafari()
			: is($.jagent.MOZILLA + '/') ? $.jagent.GECKO 
			: '';
	};
	
	getOperatingSystemInformation = function() {
		return is($.jagent.J2ME) ? $.jagent.J2ME
			: is($.jagent.IPAD + '|' + $.jagent.IPOD + '|' + $.jagent.IPHONE) ? getOperatingSystemInformationForAppleDevices()
			: is($.jagent.PLAYBOOK) ? $.jagent.PLAYBOOK
			: is($.jagent.KINDLE) ? $.jagent.KINDLE
			: is($.jagent.MAC) ? getOperatingSystemInformationForMac()
			: is($.jagent.WINDOWS) ? getOperatingSystemInformationForWindows() 
			: is($.jagent.FREEBSD) ? $.jagent.FREEBSD
			: is($.jagent.X11 + '|' + $.jagent.LINUX) ? $.jagent.LINUX
			: '';
	};
	
	getAdditionalInformation = function() {
		var isMobile = is($.jagent.ANDROID + "|" 
			+ $.jagent.MOBILE + "|" 
			+ $.jagent.J2ME + "|" 
			+ $.jagent.IPHONE + "|" 
			+ $.jagent.IPOD + "|" 
			+ $.jagent.IPAD + "|" 
			+ $.jagent.BLACKBERRY + "|" 
			+ $.jagent.PLAYBOOK + "|" 
			+ $.jagent.KINDLE) 
				? ' ' + $.jagent.MOBILE + ' ' 
				: '';
			
		var isRetina = window.devicePixelRatio === 2 ? ' ' + $.jagent.RETINA + ' ' : '';
		
		return isMobile + isRetina;	
	};
	
	var	html = document.documentElement;
	var browserInformation = [getBrowserInformation(), getOperatingSystemInformation(), getAdditionalInformation()];

	function processOrientationInformation() {
		var orientation;
		
		if (window.orientation === undefined || window.orientation === 'undefined') {
			var width = $(window).width();	
			var height = $(window).height();
			orientation = ((width < height) ? $.jagent.PORTRAIT : $.jagent.LANDSCAPE);
		}
		else {		
	    	switch (window.orientation) {  
	      		case -90:
	      		case 90:
	        		orientation = $.jagent.LANDSCAPE;
	        		break; 
	      		default:
	        		orientation = $.jagent.PORTRAIT;
	        		break; 
	    	}
		}
    	
    	html.className = html.className.replace(/ ?orientation_\w+/g, "");
    	html.className += ' orientation_' + orientation + ' ';
		
		$.jagent.initialize(html.className);
  	}

	window.onorientationchange = processOrientationInformation;
    window.onresize = processOrientationInformation;
	processOrientationInformation();
	
	html.className = (browserInformation.join(' ') + html.className).replace(/^ /, "").replace(/ +/g," ");

	$.jagent.initialize(html.className);

	return html.className;
}

initializeJAgent();